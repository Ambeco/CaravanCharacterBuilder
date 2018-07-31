import { clarifyError } from "./../util/ClarifyError.js";
import { Ability, Roll } from "./../types/Ability.js";
import { RankOption } from "./../types/RankOption.js";
import { attributes, attributeByName } from "./../data/attributeData.js";
import { psuedoSkills, skillByName } from "./../data/skillData.js";
import { Currency } from "./../types/Currency.js";
import { Cost } from "./../types/Cost.js";
import { toCamelCase } from "./../util/Camelcase.js";
import { Requirement, RankRequirement, SpecializationRequirement, AttunementRequirement, AttributeRequirement, SkillRequirement, TagRequirement } from "../types/Requirement.js";
import { Rank } from "../types/Rank.js";
import { attunmentByName } from "../data/attunementData.js";
import { specializationByName, specializations } from "../data/specializationData.js";
import { tagByName } from "../data/tagData.js";
import { Tag } from "../types/Tag.js";
import { nonNull, nonNullArray } from "../util/nonNull.js";
import { parseRequirements } from "./ParserUtils.js";
import { OptionCategory } from "../types/OptionCategory.js";
import { Augment } from "../types/Augment.js";
import { currencyAp } from "../data/currencyData.js";
import { SheetFeature } from "../types/SheetFeature.js";

const instructions: HTMLElement = nonNull(document.getElementById('instructions'), "cannot find instructions") as HTMLElement;
const editableDiv: HTMLElement = nonNull(document.getElementById('editableDiv'), "cannot find editableDiv") as HTMLElement;
const resultDiv: HTMLElement = nonNull(document.getElementById('resultDiv'), "cannot find editableDiv") as HTMLElement;

const attunementMap: Map<string, RankOption[]> = new Map<string, RankOption[]>([["Uninitialized",new Array<RankOption>()]]);
let currentAttunementName: string = "Uninitialized";
let currentSpecializationName: string | null = null;
let currentSpecializationRequirements: Requirement[] = [];
let currentSpecializationDescription: string | null = null;
let currentRanks: Rank[] = [];
let currentRankName: string | null = null;
let currentRankDescription: string = "";
let currentAugments: Augment[] = [];

let lastSpecializationName: string = "Uninitialized";
let lastRankName: string = "Uninitialized";

function reset(): void {
    attunementMap.clear();
    attunementMap.set("Uninitialized", []);
    currentAttunementName = "Uninitialized";
    currentSpecializationName = null;
    currentSpecializationRequirements = [];
    currentSpecializationDescription = null;
    currentRanks = [];
    currentRankName = null;
    currentRankDescription = "";
    currentAugments = [];
    lastSpecializationName = "Uninitialized";
    lastRankName = "Uninitialized";
}

const specializationCategory: OptionCategory = new OptionCategory("Specializations", "Ways to specialize your character and abilities");

editableDiv.oninput = function () {
    reset();
    next(editableDiv);
    finishSpecialization();
    writeSpecializations(attunementMap, resultDiv);
    editableDiv.style.display = "none";
    instructions.style.display = "none";
    resultDiv.style.display = "block";
}

function next(parent: HTMLElement): void {
    const childCount: number = parent.childNodes.length;
    for (var i = 0; i < childCount; i++) {
        try {
            const child = parent.childNodes.item(i);
            if (child instanceof Text) {
                processText(nonNull(child.textContent, "text is null").trim(), window.getComputedStyle(parent));
            } else if (child instanceof HTMLElement) {
                const childElement = child as HTMLElement;
                if (childElement.tagName.toLowerCase() == "br") {
                    continue;
                } else if (["p", "span", "h2"].indexOf(childElement.tagName.toLowerCase()) >= 0) {
                    processText(nonNull(child.textContent, "text is null").trim(), window.getComputedStyle(child));
                } else if (["b", "div", "hr"].indexOf(childElement.tagName.toLowerCase()) >= 0) {
                    next(child as HTMLElement);
                } else if (childElement.tagName.toLocaleLowerCase() == "table") {
                    if (currentRankName == null)
                        throw new Error("cannot process table without a rank");
                    const table = child as HTMLTableElement;
                    const isAugment = looksLikeAugments(table);
                    if (isAugment[0])
                        parseAugments(table);
                    else {
                        console.log("table doesnt look like augment, passed as description of " + currentRankName);
                        currentRankDescription += " " + table.outerHTML;
                    }
                } else {
                    throw new Error("unknown element type " + childElement.tagName);
                }
            } 
        } catch (e) {
            let errMsg = "while processing child " + i + " of " + parent.tagName;
            if (currentRankName != null) {
                errMsg += " which is Rank " + currentRankName + " of Specialization " + currentSpecializationName;
            } else if (currentSpecializationName) {
                errMsg += " which is inside Specialization " + currentSpecializationName + " after Rank " + lastRankName;
            } else {
                errMsg += " which is after Specialization " + lastSpecializationName;
            }
            clarifyError(e, errMsg);
        }
    }
}

function processText(text: string, style: CSSStyleDeclaration): void {
    if (text.length == 0) {
        if (currentRankDescription == null) throw new Error("skipping because empty: " + text);
        return;
    }
    try {
        const fontSize = style.getPropertyValue('font-size');
        if (text.match(/^:([^:]{3,25}):$/)) {
            processAttunement(text);
        } else if (fontSize == "24px" || fontSize == "21.33px") {
            processSpecializationName(text);
        } else if (text.match(/^\s*\d:\s[^-]+\s-\s/)) {
            processNewRank(text);
        } else if (text.match(/^\((Requires[^\)]+)\)$/)) {
            const requirement = parseRequirements(text);
            if (requirement != null) {
                currentSpecializationRequirements.push(requirement);
            }
        } else if (style.getPropertyValue('text-align') == "center") {
            return; // Augments title. skip
        } else {
            if (currentRankDescription == null) throw new Error("cannot process details '" + text + "' without a rank");
            currentRankDescription += " " + text;
        }
    } catch (e) {
        clarifyError(e, "while processing " + text);
    }
}

function processAttunement(text: string): void {
    finishSpecialization();
    currentAttunementName = nonNull(text.match(/^:([^:]{3,25}):$/), "could not parse name from " + text)[1].trim();
    attunementMap.set(currentAttunementName, [])
    console.log("starting attunement " + currentAttunementName);
}

function processSpecializationName(text: string): void {
    finishSpecialization();
    const match = nonNull(text.match(/([^\[]+)(\[.+)?/), "could not parse name from " + text);
    currentSpecializationName = match[1].trim();
    currentSpecializationDescription = (match[2] || "").trim();
    console.log("starting specialization " + currentSpecializationName);
}

function processNewRank(text: string): void {
    finishRank();
    if (currentSpecializationName == null) throw new Error("cannot process rank '" + text + "' without a specialization");
    const matcher = nonNull(text.match(/^\s*\d:\s([^-]+)\s-\s(.*)/), "could not parse rank");
    currentRankName = matcher[1];
    currentRankDescription = matcher[2];
    console.log("starting rank " + currentRankName);
}

function finishRank() {
    if (currentRankName != null) {
        lastRankName = currentRankName;
        currentRanks.push(new Rank(currentRanks.length + 1, currentRankName, currentRankDescription, null, new Set<Augment>(currentAugments)));
        currentAugments = [];
        currentRankDescription = "";
        currentRankName = null;
    }
}

function finishSpecialization() {
    finishRank();
    if (currentSpecializationName != null) {
        lastSpecializationName = currentSpecializationName;
        lastRankName = "Uninitialized";
        const specialization = new RankOption(currentSpecializationName, specializationCategory, currentRanks, currentSpecializationDescription || currentSpecializationName);
        nonNull(attunementMap.get(currentAttunementName), "cant find atunement " + currentAttunementName).push(specialization);
        specializations.push(specialization);
        currentRanks = [];
        currentSpecializationName = null;
        currentSpecializationDescription = null;
    }
}

function looksLikeAugments(table: HTMLTableElement): [boolean, string] {
    try {
        if (table.tagName.toLocaleLowerCase() != "table") return [false, "expected table element"];
        if (table.children[0].tagName.toLocaleLowerCase() != "colgroup") return [false, "expected colgroup element"];
        if (table.children[1].tagName.toLocaleLowerCase() != "tbody") return [false, "expected tbody element"];
        if (table.children[1].children[0].tagName.toLocaleLowerCase() != "tr") return [false, "expected tr element"];
        let row = table.children[1].children[0] as HTMLTableRowElement;
        if (row.children[0].textContent != "Augment Cost") return [false, "expected 'Augment Cost', got '" + row.children[0].textContent + "' instead"];
        if (row.children[1].textContent != "Name") return [false, "expected 'Name', got '" + row.children[0].textContent + "' instead"];
        if (row.children[2].textContent != "Effect") return [false, "expected 'Effect', got '" + row.children[0].textContent + "' instead"];
    } catch (e) {
        clarifyError(e, "while processing augment table of rank " + currentRankName);
    }
    return [true, ""];
}

function parseAugments(table: HTMLTableElement): void {
    if (currentRankName == null) throw new Error("cannot process augment without a rank");
    for (let i = 1; i < table.children[1].children.length; i++) {
        let name: string|null = null;
        try {
            let row = table.children[1].children[i] as HTMLTableRowElement;
            name = nonNull(row.children[1].textContent, "name is null");
            const cost = new Cost(Number.parseInt(nonNull(row.children[0].textContent, "cost is null")), currencyAp);
            const description = nonNull(row.children[2].textContent, "description is null");
            currentAugments.push(new Augment(name, cost, description));
        } catch (e) {
            if (name == null)
                clarifyError(e, "while processing augment " + (currentAugments.length + 1) + " of rank " + currentRankName);
            else
                clarifyError(e, "while processing augment " + name + " of rank " + currentRankName);
        }
    }
}

function writeSpecializations(attunementMap: Map<string, RankOption[]>, output: HTMLElement) {
    let body: string = "";
    for (let attunement of attunementMap) {
        for (let specialization of attunement[1]) {
            try {
                body += writeSpecialization(specialization);
            } catch (e) {
                clarifyError(e, "while writing specialization " + specialization.name);
            }
        }
    }
    body += "export const specializations: RankOption[] = [\n";
    for (let attunement of attunementMap) {
        for (let specialization of attunement[1]) {
            body += "\t" + toCamelCase("specialization " + specialization.name) + ",\n";
        }
    }
    body += "];"
    output.innerHTML = "<pre>" + escapeHTML(body) + "</pre>";
}

function writeSpecialization(specialization: RankOption): string {
    let result: string = "";
    for (let rank of specialization.getRanks()) {
        if (rank.getAugments().size > 0) {
            result += rank.augmentsToTypeScript();
        }
    }
    result += "export const " + toCamelCase("specialization " + specialization.name) + ": RankOption = new RankOption(\"" + specialization.name + "\", specializationCategory,\n\t";
    result += "[\n\t";
    for (let rank of specialization.getRanks()) {
        result += "\t" + rank.toTypeScript() + ",\n\t"
    }
    result += "],\n\t";
    result += "\"" + specialization.getDescription() + "\");\n\n";
    return result;
}

const replacements: Map<string,string> = new Map<string,string>([["<", "&lt;"], [">", "&gt;"], ["&", "&amp;"], ["\"", "&quot;"]]);
function escapeHTML(text: string): string {
    return text.replace(/[<>&"]/g, function (character) {
        return replacements.get(character) || character;
    });
}