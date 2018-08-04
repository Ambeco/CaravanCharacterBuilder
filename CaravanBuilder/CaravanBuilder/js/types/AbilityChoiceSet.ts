import { Choice } from "./Choice.js";
import { ChoiceSet, UniqueChoiceEnum, RequiredChoiceEnum } from "./ChoiceSet.js";
import { AbilityChoice } from "./AbilityChoice.js";

/**
 * The set of selectable abilities in the dropdown
 */
export class AbilityChoiceSet extends ChoiceSet {
    constructor(choices: Set<AbilityChoice>, unique: boolean) {
        super(choices, UniqueChoiceEnum.IsUnique, RequiredChoiceEnum.Optional);
    }
}
