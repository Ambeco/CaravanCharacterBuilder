﻿import { clarifyError } from "./util/ClarifyError.js";
import { BaseAbility, Roll } from "./types/BaseAbility.js";
import { RankOption } from "./types/RankOption.js";
import { attributes } from "./data/attributeData.js";
import { skills } from "./data/skillData.js";
import { Currency } from "./types/Currency.js";
import { Cost, Requirement } from "./types/Cost.js";

const editableDiv: HTMLElement = document.getElementById('editableDiv');

editableDiv.oninput = function () {
    console.log(editableDiv.innerHTML);
    console.log("start");
    findAbilities(editableDiv, 0);
    console.log("end");
}

function findAbilities(parent: Element, depth:number): void {
    
    const childCount: number = parent.children.length;
    for (var i = 0; i < childCount; i++) {
        try {
            const child = parent.children.item(i);
            if (child.tagName.toLowerCase() == "table") {
                if (child.children[1].tagName.toLowerCase() != "tbody") throw new Error("found " + child.children[1].tagName + " looking for table body");
                if (child.children[1].children[0].tagName.toLowerCase() != "tr") throw new Error("found " + child.children[1].tagName + " looking for table row");
                if (child.children[1].children[0].children[0].tagName.toLowerCase() != "td") throw new Error("found " + child.children[1].tagName + " looking for table data");
                if (child.children[1].children[0].children[0].textContent.toLowerCase() == "exp") {
                    const name: string = findAbilityName(parent, i);
                    if (name == null) {
                        throw new Error("unable to find title");
                    }
                    const requirements: string = findRequirements(parent, i);
                    const ability: BaseAbility = parseAbility(name, requirements, child);
                }
            } else {
                findAbilities(child, depth + 1);
            }
        } catch (e) {
            clarifyError(e, "while processing child " + i + " of " + parent.tagName);
        }
    }
}

function findAbilityName(parent: Element, beforeIndex: number): string {
    while (beforeIndex == 0) {
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
            if (child.textContent.length > 0 && !child.textContent.startsWith("Requires")) {
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

function findRequirements(parent: Element, beforeIndex: number): string {
    while (beforeIndex == 0) {
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
            if (child.textContent.length > 0) {
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

function parseAbility(name: string, requirements: string, table: Element): BaseAbility {
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
        const cost = parseCost(timeCell);
        const tags = parseTags(tagsCell);
        const roll = parseRoll(rollCell);
        const difficulty = parseInt(difficultyCell.textContent);
        const augment = parseInt(augmentCell.textContent);
        const target = targettingCell.textContent;
        const effect = effectCell.textContent;
        const availability = availabilityCell.textContent;
        const result = new BaseAbility(name, requirements_, cost, tags, roll, difficulty, augment, target, effect, availability);
        return result;
    } catch (e) {
        clarifyError(e, "while parsing ability " + name);
    }
}

function parseCost(timeCell: Element): Cost {
    try {
        const amount = parseInt(timeCell.textContent);
        const xp = Currency.getCurrency("xp");
        return new Cost(amount, xp);
    } catch (e) {
        clarifyError(e, "while parsing cost " + timeCell.textContent);
    }
}

function parseTags(tagsCell: Element): string[] {
    try {
        if (tagsCell.textContent.length == 0) {
            return new Array<string>();
        }
        const tagMatches: RegExpMatchArray = tagsCell.textContent.match(/(?:\s*\[([^\]]+)\],?)+/);
        const tags: string[] = tagMatches.slice(1, tagMatches.length - 1);
        return tags;
    } catch (e) {
        clarifyError(e, "while parsing tags " + tagsCell.textContent);
    }
}

function parseRoll(rollCell: Element): Roll {
    try {
        if (rollCell.textContent.length == 0 || rollCell.textContent.toLowerCase() == "n/a") {
            return null;
        }
        const rollMatches: RegExpMatchArray = rollCell.textContent.match(/\s*([^ +]+)\s*\+\s*([^ +]+)\s*/);
        const attribute: RankOption = attributeByName(rollMatches[1]);
        const skill: RankOption = skillByName(rollMatches[2]);
        return new Roll(attribute, skill);
    } catch (e) {
        clarifyError(e, "while parsing roll " + rollCell.textContent);
    }
}

function attributeByName(name: string): RankOption {
    for (let option of attributes) {
        if (option.getName() == name) {
            return option;
        }
    }
    throw new Error("cannot find attribute " + name);
}

function skillByName(name: string): RankOption {
    for (let option of skills) {
        if (option.getName() == name) {
            return option;
        }
    }
    throw new Error("cannot find skill " + name);
}

function parseRequirements(requirements: string): Requirement {
    try {
        if (requirements == null || requirements.length == 0) {
            return null;
        }
        console.log(requirements);
        let regex = /Requires (?:at least |a total of )?(\d+) ranks in ([^ ]+) (?:to purchase)?/;
        let requirementMatches: RegExpMatchArray = requirements.match(regex);
        if (requirementMatches.length > 1) {
            return createRequirement(requirementMatches);
        }
        regex = /Requires (?:at least |a total of )?(\d+)(?: total)? ranks?(?: in| of)(?: any)?(?: combination of)?(?: the)? \[([^\]]+)\] specializations?/;
        requirementMatches = requirements.match(regex);
        if (requirementMatches.length > 1) {
            return createRequirement(requirementMatches);
        }
        regex = /Requires (?:at least |a total of )?(\d+)(?: total)? ranks?(?: in| of)(?: any)?(?: combination of)?(?: the)? ([^\[]+?) specializations?/;
        requirementMatches = requirements.match(regex);
        if (requirementMatches.length > 1) {
            return createRequirement(requirementMatches);
        }
        regex = /Requires you to know (.+?) before you can purchase/;
        requirementMatches = requirements.match(regex);
        if (requirementMatches.length > 1) {
            return createRequirement(requirementMatches);
        }
        throw new Error("Unable to parse " + requirements);
    } catch (e) {
        clarifyError(e, "while parsing requirement " + requirements);
    }
}

function createRequirement(requirementMatches: RegExpMatchArray): Requirement {
    const currency = Currency.getCurrency(requirementMatches[2]);
    return new Requirement(parseInt(requirementMatches[1]), currency);
}