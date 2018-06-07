﻿import { ChoiceOption } from "./types/ChoiceOption.js";
import { races, raceOption } from "./data/raceData.js";
import { Currency } from "./types/Currency.js";
import { attunementMartial, attunementArcane, attunementDivine, attunementNature, attunementAnimus, attunementSkills, attunementAttributes, coreAttunements } from "./data/attunementData.js";
import { attributeBrawn, attributeDexterity, attributePresence, attributeSubterfuge, attributeSenses, attributeIntellect, attributes } from "./data/attributeData.js";
import { RankOption } from "./types/RankOption.js";
import { skills } from "./data/skillData.js";
import { clarifyError } from "./util/ClarifyError.js";
import { toCamelCase } from "./util/Camelcase.js";
import { focusListener } from "./floatingDescriptionHelper.js";
import { stripHtml } from "./util/treeNavigation.js";


const nameInput: HTMLInputElement = document.getElementById('nameValue') as HTMLInputElement;
const raceInput: HTMLSelectElement = document.getElementById('raceValue') as HTMLSelectElement;
const raceBlock: HTMLElement = raceInput.parentElement as HTMLElement;
const initiativeInput: HTMLInputElement = document.getElementById('initiativeValue') as HTMLInputElement;
const totalSoakInput: HTMLInputElement = document.getElementById('totalSoakValue') as HTMLInputElement;
const armorSoakInput: HTMLInputElement = document.getElementById('armorSoakValue') as HTMLInputElement;
const titanSoakInput: HTMLInputElement = document.getElementById('titanSoakValue') as HTMLInputElement;
const movementSpeedInput: HTMLInputElement = document.getElementById('movementSpeedValue') as HTMLInputElement;
const otherSpeedInput: HTMLInputElement = document.getElementById('otherSpeedValue') as HTMLInputElement;
const attunementAttributesInput: HTMLInputElement = document.getElementById('attributeValue') as HTMLInputElement;
const attunementAttributesBlock: HTMLElement = attunementAttributesInput.parentElement as HTMLElement;
const attunementSkillsInput: HTMLInputElement = document.getElementById('skillsValue') as HTMLInputElement;
const attunementSkillsBlock: HTMLElement = attunementSkillsInput.parentElement as HTMLElement;
    
const attunementPoints = new Currency("attunementPoints", 6, false);
const currencyExp = new Currency("exp", 0, false);
Currency.setAlternativeName("xp", "exp");
const currencyAp = new Currency("ap", 0, false);
    
raceOption.setUiElement(raceInput, focusListener);
raceInput.focus();

for (let attunement of coreAttunements) {
    try {
        const inputName = attunement.getName().toLocaleLowerCase() + 'Value';
        const attunementInput: HTMLInputElement = document.getElementById(inputName) as HTMLInputElement;
        if (attunementInput == null) throw new Error("Could not find view " + inputName);
        attunement.setUiElement(attunementInput, focusListener);
    } catch (e) {
        clarifyError(e, "while processing " + attunement.getName());
    }
}
    
attunementAttributes.setUiElement(attunementAttributesInput, focusListener);
attunementAttributesBlock.title = stripHtml(attunementAttributes.getDescription());

for (let attribute of attributes) {
    try {
        const inputName = attribute.getName().toLocaleLowerCase() + 'Value';
        const attributeInput: HTMLInputElement = document.getElementById(inputName) as HTMLInputElement;
        if (attributeInput == null) throw new Error("Could not find view " + inputName);
        attribute.setUiElement(attributeInput, focusListener);
    } catch (e) {
        clarifyError(e, "while processing " + attribute.getName());
    }
}
    
attunementSkills.setUiElement(attunementSkillsInput, focusListener);
attunementSkillsBlock.title = stripHtml(attunementSkills.getDescription());

for (let skill of skills) {
    try {
        const inputName = toCamelCase(skill.getName()) + 'Value';
        const skillInput: HTMLInputElement = document.getElementById(inputName) as HTMLInputElement;
        if (skillInput == null) throw new Error("Could not find view " + inputName);
        skill.setUiElement(skillInput, focusListener);
    } catch (e) {
        clarifyError(e, "while processing " + skill.getName());
    }
}

export const fastSetupComplete: boolean = true;