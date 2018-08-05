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
    private apUiElement: HTMLInputElement | null;
    private skillUiElement: HTMLInputElement | null;
    private difUiElement: HTMLInputElement | null;
    private rangeUiElement: HTMLInputElement | null;
    private augmentUiElement: HTMLInputElement | null;
    private effectUiElement: HTMLInputElement | null;

    constructor(choices: AbilityChoiceSet) {
        super("Ability", abilityCategory, choices);
    }
    toString(): string { return "AbilityChoiceOption " + this.name; }
    public setAbilityElement(uiElement: HTMLTableRowElement, focusListener: ChoiceFocusChangeListener) {
        super.setSelectUiElement(nonNull(uiElement.children[0].children[0], "abilityRow code doesn't match html") as HTMLSelectElement, focusListener);
        this.apUiElement = nonNull(uiElement.children[1].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
        this.skillUiElement = nonNull(uiElement.children[2].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
        this.difUiElement = nonNull(uiElement.children[3].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
        this.rangeUiElement = nonNull(uiElement.children[4].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
        this.augmentUiElement = nonNull(uiElement.children[5].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
        this.effectUiElement = nonNull(uiElement.children[6].children[0], "abilityRow code doesn't match html") as HTMLInputElement;
    }
    select(choice: Choice): boolean {
        if (!super.select(choice)) return false;
        if (this.apUiElement == null) throw new Error("apUiElement is null");
        if (this.skillUiElement == null) throw new Error("skillUiElement is null");
        if (this.rangeUiElement == null) throw new Error("rangeUiElement is null");
        if (this.augmentUiElement == null) throw new Error("augmentUiElement is null");
        if (this.effectUiElement == null) throw new Error("effectUiElement is null");
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
