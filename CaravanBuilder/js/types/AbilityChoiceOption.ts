import { Choice } from "./Choice.js";
import { OptionCategory } from "./OptionCategory.js";
import { ChoiceOption, ChoiceFocusChangeListener } from "./ChoiceOption.js";
import { AbilityChoiceSet } from "./AbilityChoiceSet.js";
import { BaseAbility } from "./BaseAbility.js";
import { AbilityChoice } from "./AbilityChoice.js";


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
        }
        if (!(uiElement.children[0].children[0] instanceof HTMLSelectElement)) {
            throw new Error("uiElement needs to be a select or an abilityRow")
        }
        super.setUiElement(uiElement.children[0].children[0] as HTMLSelectElement, focusListener);
        this.apUiElement = uiElement.children[1].children[0] as HTMLInputElement;
        this.skillUiElement = uiElement.children[2].children[0] as HTMLInputElement;
        this.difUiElement = uiElement.children[3].children[0] as HTMLInputElement;
        this.rangeUiElement = uiElement.children[4].children[0] as HTMLInputElement;
        this.augmentUiElement = uiElement.children[5].children[0] as HTMLInputElement;
        this.effectUiElement = uiElement.children[6].children[0] as HTMLInputElement;
    }
    select(choice: Choice): boolean {
        if (!super.select(choice)) return;
        if (choice != null) {
            const ability: BaseAbility = (choice as AbilityChoice).ability;
            this.apUiElement.value = ability.time.amount.toString();
            this.skillUiElement.value = ability.roll.toString();
            this.rangeUiElement.value = ability.target;
            this.augmentUiElement.value = ability.augmentSlots.toString();
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
