import { Choice } from "./Choice.js";
import { OptionCategory } from "./OptionCategory.js";
import { ChoiceOption, ChoiceFocusChangeListener } from "./ChoiceOption.js";
import { AbilityChoiceSet } from "./AbilityChoiceSet.js";
import { Ability } from "./Ability.js";
import { AbilityChoice } from "./AbilityChoice.js";
import { nonNull } from "../util/nonNull.js";


const abilityCategory: OptionCategory = new OptionCategory("Abilities", "The abilites that your character can perform");
/**
 * A ability choice field of a form.
 * ChoiceOption=Ability#4. ChoiceSet=Taunt,Fireball,Enthrall. Choice=Fireball.
 */
export class AbilityChoiceOption extends ChoiceOption {
    private apUiElement: HTMLInputElement;
    private skillUiElement: HTMLInputElement;
    private difUiElement: HTMLInputElement;
    private rangeUiElement: HTMLInputElement;
    private augmentUiElement: HTMLInputElement;
    private effectUiElement: HTMLInputElement;

    constructor(choices: AbilityChoiceSet) {
        super("Ability", abilityCategory, choices);
    }
    public setUiElement(uiElement: HTMLElement, focusListener: ChoiceFocusChangeListener) {
        if (uiElement instanceof HTMLSelectElement) {
            super.setUiElement(uiElement, focusListener);
            return;
        }
        if (!(uiElement.children[0].children[0] instanceof HTMLSelectElement)) {
            throw new Error("uiElement needs to be a select or an abilityRow")
        }
        super.setUiElement(nonNull(uiElement.children[0].children[0], "abilityRow code doesn't match html") as HTMLSelectElement, focusListener);
        this.apUiElement = nonNull(uiElement.children[1].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
        this.skillUiElement = nonNull(uiElement.children[2].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
        this.difUiElement = nonNull(uiElement.children[3].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
        this.rangeUiElement = nonNull(uiElement.children[4].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
        this.augmentUiElement = nonNull(uiElement.children[5].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
        this.effectUiElement = nonNull(uiElement.children[6].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
    }
    select(choice: Choice): boolean {
        if (!super.select(choice)) return false;
        if (choice != null) {
            const ability: Ability = (choice as AbilityChoice).ability;
            this.apUiElement.value = ability.time != null ? ability.time.amount.toString() : "N/A";
            this.skillUiElement.value = ability.roll != null ? ability.roll.toString() : "N/A";
            this.rangeUiElement.value = ability.target;
            this.augmentUiElement.value = ability.augmentSlots > 0 ? ability.augmentSlots.toString() : "N/A";
            this.effectUiElement.value = ability.effect;
        } else {
            this.apUiElement.value = "";
            this.skillUiElement.value = "";
            this.rangeUiElement.value = "";
            this.augmentUiElement.value = "";
            this.effectUiElement.value = "";
        }
        return true;
    }
}
