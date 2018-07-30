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
import { specializationByName } from "../data/specializationData.js";
import { tagByName } from "../data/tagData.js";
import { Tag } from "../types/Tag.js";
import { nonNull, nonNullArray } from "../util/nonNull.js";
import { parseRequirements } from "./ParserUtils.js";
import { OptionCategory } from "../types/OptionCategory.js";
import { Augment } from "../types/Augment.js";
import { currencyAp } from "../data/currencyData.js";
import { SheetFeature } from "../types/SheetFeature.js";

const editableDiv: HTMLElement = nonNull(document.getElementById('editableDiv'), "cannot find editableDiv") as HTMLElement;
const resultDiv: HTMLElement = nonNull(document.getElementById('resultDiv'), "cannot find editableDiv") as HTMLElement;

const attunementMap: Map<string, RankOption[]> = new Map<string, RankOption[]>();
let currentAttunementName: string = "Uninitialized";
let currentSpecializationName: string | null = null;
let currentSpecializationRequirements: Requirement | null = null;
let currentSpecializationDescription: string | null = null;
let currentRanks: Rank[] = [];
let currentRankName: string | null = null;
let currentRankDescription: string = "";
let currentAugments: Augment[] = [];

const specializationCategory: OptionCategory = new OptionCategory("Specializations", "Ways to specialize your character and abilities");

const defaultOnError = window.onerror;
window.onerror = function (msg, url, lineNo, columnNo, error) {
    if (window.navigator.userAgent.indexOf("Edge") > -1) {
        console.error(error != null ? error.stack : msg);
    } else if (defaultOnError != null) {
        defaultOnError(msg, url, lineNo, columnNo, error);
    }
}

editableDiv.oninput = function () {
    console.log(editableDiv.innerHTML);
    next(editableDiv);
    finishSpecialization();
    writeSpecializations(attunementMap, resultDiv);
    editableDiv.style.display = "none";
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
                console.log(childElement.tagName);
                if (childElement.tagName.toLowerCase() == "br") {
                    console.log("skipping br");
                    continue;
                } else if (["p", "span", "h2", "div", "b", "i"].indexOf(childElement.tagName.toLowerCase()) >= 0) {
                    next(child as HTMLElement);
                } else if (childElement.tagName.toLocaleLowerCase() == "table") {
                    parseAugments(child as HTMLTableElement);
                } else {
                    throw new Error("unknown element type " + childElement.tagName);
                }
            } 
        } catch (e) {
            const errMsg = "while processing child " + i + " of " + parent.tagName
                + " after attunement " + currentAttunementName
                + " after specialization " + (currentSpecializationName || "null")
                + " after rank " + (currentRankName || "null");
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
        if (fontSize == "26pt" || fontSize == "34.66px") {
            processAttunement(text);
        } else if (fontSize == "16pt" || fontSize == "21.33px") {
            processSpecializationName(text);
        } else if (text.match(/\s*\d:\s[^-]+\s-\s/)) {
            processNewRank(text);
        } else if (text.match(/\((Requires[^\)]+)\)/)) {
            currentSpecializationRequirements = parseRequirements(text);
        } else if (style.getPropertyValue('text-align') == "center") {
            console.log("skipping augment title " + text);
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
    currentAttunementName = nonNull(text.match(/:([^:]+):/), "could not parse name from " + text)[1].trim();
    attunementMap.set(currentAttunementName, [])
    console.log("starting attunement " + currentAttunementName);
}

function processSpecializationName(text: string): void {
    finishSpecialization();
    const match = nonNull(text.match(/([^\[]+)(.+)/), "could not parse name from " + text);
    currentSpecializationName = match[1].trim();
    currentSpecializationDescription = match[2].trim();
    console.log("starting specialization " + currentSpecializationName);
}

function processNewRank(text: string): void {
    finishRank();
    if (currentSpecializationName == null) throw new Error("cannot process rank '" + text + "' without a specialization");
    const matcher = nonNull(text.match(/\s*\d:\s([^-]+)\s-\s(.*)/), "could not parse rank");
    currentRankName = matcher[1];
    currentRankDescription = matcher[2];
    console.log("starting rank " + currentRankName);
}

function finishRank() {
    if (currentRankName != null) {
        console.log("ending rank " + currentRankName);
        currentRanks.push(new Rank(currentRanks.length + 1, currentRankName, currentRankDescription, null, new Set<Augment>(currentAugments)));
        currentAugments = [];
        currentRankDescription = "";
        currentRankName = null;
    }
}

function finishSpecialization() {
    finishRank();
    if (currentSpecializationName != null) {
        console.log("ending specialization " + currentSpecializationName);
        const specialization = new RankOption(currentSpecializationName, specializationCategory, currentRanks, currentSpecializationDescription || currentSpecializationName);
        nonNull(attunementMap.get(currentAttunementName), "cant find atunement " + currentAttunementName).push(specialization);
        currentRanks = [];
        currentSpecializationName = null;
        currentSpecializationDescription = null;
    }
}

function parseAugments(table: HTMLTableElement): void {
    try {
        if (currentRankName == null) throw new Error("cannot process augment without a rank");
        if (table.tagName.toLocaleLowerCase() != "table") throw new Error("expected table element");
        if (table.children[0].tagName.toLocaleLowerCase() != "colgroup") throw new Error("expected colgroup element");
        if (table.children[1].tagName.toLocaleLowerCase() != "tbody") throw new Error("expected tbody element");
        if (table.children[1].children[0].tagName.toLocaleLowerCase() != "tr") throw new Error("expected tr element");
        let row = table.children[1].children[0] as HTMLTableRowElement;
        if (row.children[0].textContent != "Augment Cost") throw new Error("expected 'Augment Cost', got '" + row.children[0].textContent + "' instead");
        if (row.children[1].textContent != "Name") throw new Error("expected 'Name', got '" + row.children[0].textContent + "' instead");
        if (row.children[2].textContent != "Effect") throw new Error("expected 'Effect', got '" + row.children[0].textContent + "' instead");
    } catch (e) {
        clarifyError(e, "while processing augment table of rank " + currentRankName);
    }
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
    let body: string = "<pre>";
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
    body += "];</pre>";
    output.innerHTML += body;
}

function writeSpecialization(specialization: RankOption): string {
    let result: string = "";
    for (let rank of specialization.getRanks()) {
        if (rank.getAugments().size > 0) {
            result += rank.augmentsToTypeScript();
        }
    }
    result += "export const " + toCamelCase("specialization " + specialization.name) + ": RankOption = new RankOption(\"" + specialization.name + "\", specializationCategory\n\t";
    result += "[\n\t";
    for (let rank of specialization.getRanks()) {
        result += "\t" + rank.toTypeScript() + "\n]\t"
    }
    result += "],\n\t";
    result += "\"" + specialization.getDescription() + "\");\n\n";
    return result;
}