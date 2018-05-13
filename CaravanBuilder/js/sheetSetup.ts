import { ChoiceOption } from "./types/ChoiceOption.js";
import { races, raceOption } from "./data/raceData.js";
import { Currency } from "./types/Currency.js";
import { attunementMartial, attunementArcane, attunementDivine, attunementNature, attunementAnimus, attunementSkills, attunementAttributes, coreAttunements } from "./data/attunementData.js";
import { attributeBrawn, attributeDexterity, attributePresence, attributeSubterfuge, attributeSenses, attributeIntellect, attributes } from "./data/attributeData.js";
import { RankOption } from "./types/RankOption.js";
import { skills } from "./data/skillData.js";
import { clarifyError } from "./util/ClarifyError.js";
import { toCamelCase } from "./util/Camelcase.js";


let nameInput: HTMLInputElement = document.getElementById('nameValue') as HTMLInputElement;
let raceInput: HTMLInputElement = document.getElementById('raceValue') as HTMLInputElement;
let raceBlock: HTMLElement = raceInput.parentElement;
let initiativeInput: HTMLInputElement = document.getElementById('initiativeValue') as HTMLInputElement;
let totalSoakInput: HTMLInputElement = document.getElementById('totalSoakValue') as HTMLInputElement;
let armorSoakInput: HTMLInputElement = document.getElementById('armorSoakValue') as HTMLInputElement;
let titanSoakInput: HTMLInputElement = document.getElementById('titanSoakValue') as HTMLInputElement;
let movementSpeedInput: HTMLInputElement = document.getElementById('movementSpeedValue') as HTMLInputElement;
let otherSpeedInput: HTMLInputElement = document.getElementById('otherSpeedValue') as HTMLInputElement;
let atunementAttributesInput: HTMLInputElement = document.getElementById('attributeValue') as HTMLInputElement;
let atunementAttributesBlock: HTMLElement = atunementAttributesInput.parentElement;
let atunementSkillsInput: HTMLInputElement = document.getElementById('skillsValue') as HTMLInputElement;
let atunementSkillsBlock: HTMLElement = atunementSkillsInput.parentElement;
    
let attunementPoints = new Currency("attunementPoints", 6, false);
    
raceOption.setUiElement(raceInput);

for (let attunement of coreAttunements) {
    try {
        let inputName = attunement.getName().toLocaleLowerCase() + 'Value';
        let attunementInput: HTMLInputElement = document.getElementById(inputName) as HTMLInputElement;
        attunement.setUiElement(attunementInput);
    } catch (e) {
        clarifyError(e, "while processing " + attunement.getName());
    }
}
    
attunementAttributes.setUiElement(atunementAttributesInput);
atunementAttributesBlock.title = attunementAttributes.getDescription();

for (let attribute of attributes) {
    try {
        let inputName = attribute.getName().toLocaleLowerCase() + 'Value';
        let attributeInput: HTMLInputElement = document.getElementById(inputName) as HTMLInputElement;
        attribute.setUiElement(attributeInput);
    } catch (e) {
        clarifyError(e, "while processing " + attribute.getName());
    }
}
    
attunementSkills.setUiElement(atunementSkillsInput);
atunementSkillsBlock.title = attunementSkills.getDescription();

for (let skill of skills) {
    try {
        let inputName = toCamelCase(skill.getName()) + 'Value';
        let skillInput: HTMLInputElement = document.getElementById(inputName) as HTMLInputElement;
        skill.setUiElement(skillInput);
    } catch (e) {
        clarifyError(e, "while processing " + skill.getName());
    }
}
