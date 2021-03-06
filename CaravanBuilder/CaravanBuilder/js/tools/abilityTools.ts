﻿import { clarifyError } from "./../util/ClarifyError.js";
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
import { parseRequirements } from "parserUtils.js";

const editableDiv: HTMLElement = nonNull(document.getElementById('editableDiv'), "cannot find editableDiv") as HTMLElement;
const resultDiv: HTMLElement = nonNull(document.getElementById('resultDiv'), "cannot find editableDiv") as HTMLElement;

let lastAbilityName: string = "START";

editableDiv.oninput = function () {
    const abilities: Ability[] = new Array<Ability>();
    findAbilities(editableDiv, abilities);
    writeAbilities(abilities, resultDiv);
    editableDiv.style.display = "none";
    resultDiv.style.display = "block";
}

function findAbilities(parent: Element, results: Ability[]): void {
    const childCount: number = parent.children.length;
    for (var i = 0; i < childCount; i++) {
        try {
            const child = parent.children.item(i);
            if (child.tagName.toLowerCase() == "table") {
                if (child.children[1].tagName.toLowerCase() != "tbody") throw new Error("found " + child.children[1].tagName + " looking for table body");
                if (child.children[1].children[0].tagName.toLowerCase() != "tr") throw new Error("found " + child.children[1].tagName + " looking for table row");
                if (child.children[1].children[0].children[0].tagName.toLowerCase() != "td") throw new Error("found " + child.children[1].tagName + " looking for table data");
                const tableData = child.children[1].children[0].children[0];
                if (tableData.textContent != null && tableData.textContent.toLowerCase() == "exp") {
                    const name: string | null = findAbilityName(parent, i);
                    if (name == null) {
                        throw new Error("unable to find title");
                    }
                    try {
                        const requirements: string|null = findRequirements(parent, i);
                        const ability: Ability = parseAbility(name, requirements, child);
                        results.push(ability);
                    } finally {
                        lastAbilityName = name;
                    }
                }
            } else {
                findAbilities(child, results);
            }
        } catch (e) {
            clarifyError(e, "while processing child " + i + " of " + parent.tagName + " after ability " + lastAbilityName);
        }
    }
}

function findAbilityName(parent: Element, beforeIndex: number): string|null {
    while (beforeIndex == 0) {
        const firstParent = parent;
        if (parent.parentElement == null) {
            return null;
        }
        parent = parent.parentElement;
        beforeIndex = 0;
        while (parent.children[beforeIndex] != firstParent)
            ++beforeIndex;
    }
    for (var i = beforeIndex - 1; i >= 0; i--) {
        try {
            const child: Element = parent.children.item(i);
            if (child.tagName.toLowerCase() == "table") {
                return null;
            }
            if (child.textContent != null && child.textContent.length > 0 && !child.textContent.startsWith("Requires")) {
                return child.textContent;
            }
            const maybeResult = findAbilityName(child, child.children.length);
            if (maybeResult != null) {
                return maybeResult;
            }
        } catch (e) {
            clarifyError(e, "while processing child " + i + " of " + parent.tagName);
        }
    }
    return null;
}

function findRequirements(parent: Element, beforeIndex: number): string|null {
    while (beforeIndex == 0 && parent.parentElement != null) {
        const firstParent = parent;
        parent = parent.parentElement;
        beforeIndex = 0;
        while (parent.children[beforeIndex] != firstParent)
            ++beforeIndex;
    }
    for (var i = beforeIndex - 1; i >= 0; i--) {
        try {
            const child: Element = parent.children.item(i);
            if (child.tagName.toLowerCase() == "table") {
                return null;
            }
            if (child.textContent != null && child.textContent.length > 0) {
                if (child.textContent.startsWith("Requires")) {
                    return child.textContent;
                }
                return "";
            }
            const maybeResult = findAbilityName(child, child.children.length);
            if (maybeResult != null) {
                return maybeResult;
            }
        } catch (e) {
            clarifyError(e, "while processing child " + i + " of " + parent.tagName);
        }
    }
    return null;
}

function parseAbility(name: string, requirements: string|null, table: Element): Ability {
    try {
        console.log("creating " + name);
        const expCell: Element = table.children[1].children[1].children[0];
        const timeCell: Element = table.children[1].children[1].children[1];
        const tagsCell: Element = table.children[1].children[1].children[2];
        const rollCell: Element = table.children[1].children[1].children[3];
        const difficultyCell: Element = table.children[1].children[1].children[4];
        const augmentCell: Element = table.children[1].children[1].children[5];
        const targettingCell: Element = table.children[1].children[2].children[1];
        const effectCell: Element = table.children[1].children[3].children[1];
        const availabilityCell: Element = table.children[1].children[4].children[1];
        const requirements_ = parseRequirements(requirements);
        const cost = parseCost(expCell);
        const time = parseTime(timeCell);
        const tags = parseTags(tagsCell);
        const roll = parseRoll(rollCell);
        const difficulty = parseInt(difficultyCell.textContent || "0") || 0;
        const augment = parseInt(augmentCell.textContent || "0") || 0;
        const target = targettingCell.textContent || "";
        const effect = effectCell.textContent || "";
        const availability = availabilityCell.textContent || "";
        const result = new Ability(name, requirements_, cost, time, tags, roll, difficulty, augment, target, effect, availability);
        return result;
    } catch (e) {
        return clarifyError(e, "while parsing ability " + name);
    }
}

function parseCost(expCell: Element): Cost {
    try {
        const amount = parseInt(expCell.textContent || "0") || 0;
        const xp = Currency.getCurrency("xp");
        return new Cost(amount, xp);
    } catch (e) {
        return clarifyError(e, "while parsing cost " + expCell.textContent);
    }
}

function parseTime(timeCell: Element): Cost {
    try {
        const amount = parseInt(timeCell.textContent || "0") || 0;
        const xp = Currency.getCurrency("AP");
        return new Cost(amount, xp);
    } catch (e) {
        return clarifyError(e, "while parsing time " + timeCell.textContent);
    }
}

function parseTags(tagsCell: Element): Tag[] {
    try {
        if (tagsCell.textContent == null || tagsCell.textContent.length == 0) {
            return [];
        }
        const tagMatches: RegExpMatchArray | null = tagsCell.textContent.match(/(?:\s*\[([^\]]+)\],?)+/);
        if (tagMatches == null) throw new Error("Unable to parse tags " + tagsCell.textContent);
        const strings: string[] = tagMatches.slice(1, tagMatches.length - 1);
        const tags: Tag[] = nonNullArray(strings.map(tagByName), "failed to find tags " + tagsCell.textContent);
        return tags;
    } catch (e) {
        return clarifyError(e, "while parsing tags " + tagsCell.textContent);
    }
}

function parseRoll(rollCell: Element): Roll|null {
    try {
        if (rollCell.textContent == null || rollCell.textContent.length == 0 || rollCell.textContent.toLowerCase() == "n/a") {
            return null;
        }
        const rollMatches: RegExpMatchArray | null = rollCell.textContent.match(/\s*([^ +]+)\s*\+\s*([^ +]+)\s*/);
        if (rollMatches == null) throw new Error("Unable to parse roll " + rollCell.textContent);
        const attribute: RankOption = nonNull(attributeByName(rollMatches[1]), "cannot find attribute " + rollMatches[1]);
        const skill: RankOption = nonNull(skillByName(rollMatches[2]), "cannot find attribute " + rollMatches[2]);
        return new Roll(attribute, skill);
    } catch (e) {
        return clarifyError(e, "while parsing roll " + rollCell.textContent);
    }
}

function writeAbilities(abilities: Ability[], output: HTMLElement): void {
    let body: string = "<pre>";
    for (let ability of abilities) {
        try {
            body += writeAbility(ability);
        } catch (e) {
            clarifyError(e, "while writing ability " + ability.name);
        }
    }
    body += "export const abilities: Ability[] = [\n";
    for (let ability of abilities) {
        body += "\t" + toCamelCase("ability " + ability.name) + ",\n";
    }
    body += "];</pre>";
    output.innerHTML += body;
}

function writeAbility(ability: Ability): string {
    let result: string = "export const " + toCamelCase("ability " + ability.name) + ": Ability = new Ability(\"" + ability.name + "\",\n\t";
    result += (ability.requirements ? ability.requirements.toTypeScript() : null) + ",\n\t";
    result += (ability.cost ? ability.cost.toTypeScript() : null) + ",\n\t";
    result += (ability.time ? ability.time.toTypeScript() : null) + ",\n\t";
    result += "[";
    for (let tag in ability.tags) {
        result += "\"" + tag + "\", ";
    }
    result += "],\n\t";
    result += (ability.roll ? ability.roll.toTypeScript() : null) + ",\n\t";
    result += ability.difficulty + ",\n\t"
        + ability.augmentSlots + ",\n\t"
        + "\"" + ability.target + "\",\n\t"
        + "\"" + ability.effect + "\",\n\t"
        + "\"" + ability.availability + "\");\n";
    return result;
}