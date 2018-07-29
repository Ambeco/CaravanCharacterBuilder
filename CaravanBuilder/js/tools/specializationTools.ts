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
import { parseRequirements } from "./ParserUtils";
import { OptionCategory } from "../types/OptionCategory";

const editableDiv: HTMLElement = nonNull(document.getElementById('editableDiv'), "cannot find editableDiv") as HTMLElement;
const resultDiv: HTMLElement = nonNull(document.getElementById('resultDiv'), "cannot find editableDiv") as HTMLElement;

let lastSpecializationName: string = "START";

const specializationCategory: OptionCategory = new OptionCategory("Specializations", "Ways to specialize your character and abilities");

editableDiv.oninput = function () {
    const attunements: RankOption[] = new Array<RankOption>();
    //findAttunement(editableDiv, attunements);
    //writeSpecializations(attunements, resultDiv);
    //editableDiv.style.display = "none";
    //resultDiv.style.display = "block";
}

function findAttunement(parent: HTMLElement , results: RankOption[]): void {
    const childCount: number = parent.children.length;
    for (var i = 0; i < childCount; i++) {
        try {
            const child = parent.children.item(i) as HTMLElement; 
            if (child.tagName.toLowerCase() == "br") continue;
            i = findSpecialization(parent, i, results);
        } catch (e) {
            clarifyError(e, "while processing child " + i + " of " + parent.tagName + " after specialization " + lastSpecializationName);
        }
    }
}

function getAtunementName(item: HTMLElement ): string {
    if (item.tagName.toLowerCase() != "p") throw new Error("Expected attunement paragraph instead of " + item.innerText);
    const span = item.children.item(0) as HTMLElement;
    if (span.tagName.toLowerCase() != "span") throw new Error("Expected attunement paragraph " + + item.innerText + " to have a span");
    if (span.style.fontSize != "26pt") throw new Error("Expected attunement span " + + item.innerText + " to have font size 26pt");
    return span.innerText.trim();
}

function findSpecialization(parent: HTMLElement, index: number, results: RankOption[]): number {
    const name = getSpecializationName(parent.children.item(index) as HTMLElement);
    const tag = getSpecializationTag(parent.children.item(index) as HTMLElement);
    const requirement = getRequirement(parent.children.item(index + 1) as HTMLElement);
    index += requirement ? 2 : 1;


}

function getSpecializationName(item: HTMLElement): string {
    if (item.tagName.toLowerCase() != "h2") throw new Error("Expected specialization h2 instead of " + item.innerText);
    const span = item.children.item(0) as HTMLElement;
    if (span.tagName.toLowerCase() != "span") throw new Error("Expected specialization paragraph " + + item.innerText + " to have a span");
    if (span.style.fontSize != "16pt") throw new Error("Expected specialization span " + item.innerText + " to have font size 16pt");
    const name = span.innerText.match(/\s*([^[]+?)\s*(?:\[[^\]]+)\s*)*/);
    if (name == null) throw new Error("Could not parse specialization name " + item.innerText);
    return name[1];
}

function getSpecializationTag(item: HTMLElement): string|null {
    if (item.tagName.toLowerCase() != "h2") throw new Error("Expected specialization h2 instead of " + item.innerText);
    const span = item.children.item(0) as HTMLElement;
    if (span.tagName.toLowerCase() != "span") throw new Error("Expected specialization paragraph " + + item.innerText + " to have a span");
    if (span.style.fontSize != "16pt") throw new Error("Expected specialization span " + item.innerText + " to have font size 16pt");
    if (span.innerText.indexOf("[") == null) return null;
    const tag = span.innerText.match(/\[([^\]]+)]/);
    if (tag == null) throw new Error("Could not parse specialization tag " + item.innerText);
    return tag[1];
}

function getRequirement(item: HTMLElement): Requirement | null {
    const requirements = item.innerText.match(/\((Requires[^\)]+)\)/);
    if (requirements == null) return null;
    return parseRequirements(requirements[1]);
}

function writeSpecialization(specialization: RankOption): string {
    let result: string = "export const " + toCamelCase("specialization " + specialization.name) + ": RankOption = new RankOption(\"" + specialization.name + "\",\n\t";
    /*    result += (ability.requirements ? ability.requirements.toTypeScript() : null) + ",\n\t";
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
            + "\"" + ability.availability + "\");\n";*/
    return result;
}