import { SheetFeature } from "./SheetFeature.js";
import { Choice } from "./Choice.js";
import { BaseAbility } from "./BaseAbility.js";

/**
 * An ability option in the page
 */
export class AbilityChoice extends Choice {
    public readonly ability: BaseAbility;

    constructor(ability: BaseAbility) {
        const description = ability.getAbilityDescriptionHTML();
        super(ability.name, description, new Set<SheetFeature>([new SheetFeature(ability.name, description)]));
        this.ability = ability;
    }
}