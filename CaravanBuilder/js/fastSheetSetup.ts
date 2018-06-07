import { ChoiceOption } from "./types/ChoiceOption.js";
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
import { nonNull } from "./util/nonNull";


const nameInput: HTMLInputElement = nonNull(document.getElementById('nameValue'), "cannot find nameValue") as HTMLInputElement;
const raceInput: HTMLSelectElement = nonNull(document.getElementById('raceValue'), "cannot find raceValue") as HTMLSelectElement;
const raceBlock: HTMLElement = nonNull(raceInput.parentElement, "cannot find raceInput.parent") as HTMLElement;
const initiativeInput: HTMLInputElement = nonNull(document.getElementById('initiativeValue'), "cannot find initiativeValue") as HTMLInputElement;
const totalSoakInput: HTMLInputElement = nonNull(document.getElementById('totalSoakValue'), "cannot find totalSoakValue") as HTMLInputElement;
const armorSoakInput: HTMLInputElement = nonNull(document.getElementById('armorSoakValue'), "cannot find armorSoakValue") as HTMLInputElement;
const titanSoakInput: HTMLInputElement = nonNull(document.getElementById('titanSoakValue'), "cannot find titanSoakValue") as HTMLInputElement;
const movementSpeedInput: HTMLInputElement = nonNull(document.getElementById('movementSpeedValue'), "cannot find movementSpeedValue") as HTMLInputElement;
const otherSpeedInput: HTMLInputElement = nonNull(document.getElementById('otherSpeedValue'), "cannot find otherSpeedValue") as HTMLInputElement;
const attunementAttributesInput: HTMLInputElement = nonNull(document.getElementById('attributeValue'), "cannot find attributeValue") as HTMLInputElement;
const attunementAttributesBlock: HTMLElement = nonNull(attunementAttributesInput.parentElement, "cannot find attunementAttributesInput.parentElement") as HTMLElement;
const attunementSkillsInput: HTMLInputElement = nonNull(document.getElementById('skillsValue'), "cannot find skillsValue") as HTMLInputElement;
const attunementSkillsBlock: HTMLElement = nonNull(attunementSkillsInput.parentElement, "cannot find attunementSkillsInput.parentElement") as HTMLElement;
    
const attunementPoints = new Currency("attunementPoints", 6, false);
const currencyExp = new Currency("exp", 0, false);
Currency.setAlternativeName("xp", "exp");
const currencyAp = new Currency("ap", 0, false);
    
raceOption.setUiElement(raceInput, focusListener);
raceInput.focus();

for (let attunement of coreAttunements) {
    try {
        const inputName = attunement.getName().toLocaleLowerCase() + 'Value';
        const attunementInput: HTMLInputElement = nonNul(document.getElementById(inputName), "cannot find " + inputName) as HTMLInputElement;
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