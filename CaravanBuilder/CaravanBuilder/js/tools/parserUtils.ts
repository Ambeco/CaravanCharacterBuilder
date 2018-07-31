import { Requirement, TagRequirement, SkillRequirement, AttributeRequirement, AttunementRequirement, SpecializationRequirement, AbilityRequirement } from "../types/Requirement";
import { tagByName } from "../data/tagData.js";
import { RankOption } from "../types/RankOption.js";
import { skillByName } from "../data/skillData.js";
import { specializationByName } from "../data/specializationData.js";
import { attunmentByName } from "../data/attunementData.js";
import { attributeByName } from "../data/attributeData.js";
import { clarifyError } from "../util/ClarifyError.js";
import { Tag } from "../types/Tag.js";
import { abilityByName } from "../data/abilityData";
import { Ability } from "../types/Ability";



export function parseRequirements(requirements: string | null): Requirement | null {
    try {
        if (requirements == null || requirements.length == 0) {
            return null;
        }
        console.log(requirements);
        let regex = /Requires (?:at least |a total of )?(\d+) ranks?(?: in| of) (.+?)(?: to purchase)?/;
        let requirementMatches: RegExpMatchArray | null = requirements.match(regex);
        if (requirementMatches != null && requirementMatches.length > 1) {
            return createRequirement(requirementMatches[2], parseInt(requirementMatches[1]) || 0);
        }
        regex = /Requires (?:at least |a total of )?(\d+)(?: total)? ranks?(?: in| of)(?: any)?(?: combination of)?(?: the)? \[([^\]]+)\] specializations?/;
        requirementMatches = requirements.match(regex);
        if (requirementMatches != null && requirementMatches.length > 1) {
            return createRequirement(requirementMatches[2], parseInt(requirementMatches[1]) || 0);
        }
        regex = /Requires (?:at least |a total of )?(\d+)(?: total)? ranks?(?: in| of)(?: any)?(?: combination of)?(?: the)? ([^\[]+?) specializations?/;
        requirementMatches = requirements.match(regex);
        if (requirementMatches != null && requirementMatches.length > 1) {
            return createRequirement(requirementMatches[2], parseInt(requirementMatches[1]) || 0);
        }
        regex = /Requires the ability,? (.+)/;
        requirementMatches = requirements.match(regex);
        if (requirementMatches != null && requirementMatches.length > 1) {
            return createRequirement(requirementMatches[1], 1);
        }
        regex = /Requires you to know (.+?) before you can purchase/;
        requirementMatches = requirements.match(regex);
        if (requirementMatches != null && requirementMatches.length > 1) {
            return createRequirement(requirementMatches[1], 1);
        }
        throw new Error("Unable to parse " + requirements);
    } catch (e) {
        return clarifyError(e, "while parsing requirement " + requirements);
    }
}

function createRequirement(name: string, count: number): Requirement | null {
    const tag: Tag | undefined = tagByName(name);
    if (tag != undefined) {
        return new TagRequirement(count, tag);
    }
    const skill: RankOption | undefined = skillByName(name);
    if (skill != undefined) {
        return new SkillRequirement(skill.getRankForValue(count));
    }
    const attribute: RankOption | undefined = attributeByName(name);
    if (attribute != undefined) {
        return new AttributeRequirement(attribute.getRankForValue(count));
    }
    const attunement: RankOption | undefined = attunmentByName(name);
    if (attunement != undefined) {
        return new AttunementRequirement(attunement.getRankForValue(count));
    }
    const ability: Ability | undefined = abilityByName(name);
    if (ability != undefined) {
        return new AbilityRequirement(ability);
    }
    const specialization: RankOption | undefined = specializationByName(name);
    if (specialization != undefined) {
        return new SpecializationRequirement(specialization.getRankForValue(count));
    }
    return null;
}