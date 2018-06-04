import { AbilityChoiceOption } from "./types/AbilityChoiceOption.js";
import { AbilityChoice } from "./types/AbilityChoice.js";
import { AbilityChoiceSet } from "./types/AbilityChoiceSet.js";
import { abilities } from "./data/abilityData.js";


const abilitiesBlock: HTMLTableElement = document.getElementById('abilitiesBlock') as HTMLTableElement;

const abilityChoices: AbilityChoice[] = new Array<AbilityChoice>(abilities.length);
for (let i = 0; i < abilities.length; i++) {
    abilityChoices[i] = new AbilityChoice(abilities[i]);
}
const abilityChoiceSet: AbilityChoiceSet = new AbilityChoiceSet(new Set<AbilityChoice>(abilityChoices), true);
const abilityChoiceOptions: AbilityChoiceOption[] = new Array<AbilityChoiceOption>(abilitiesBlock.children.length - 1);
for (let i = 0; i < abilitiesBlock.children.length; i++) {
    if (i == 0) continue;
    abilityChoiceOptions[i - 1] = new AbilityChoiceOption(abilityChoiceSet);
}
