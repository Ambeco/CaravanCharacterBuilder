import { Choice } from "./Choice.js";
import { ChoiceSet } from "./ChoiceSet";
import { RankChoice } from "./RankChoice";


/**
 * The set of possibiliities for a multiple choice field of a form,  where each option has many ranks
 * RankChoice=Specialization. RankChoiceSet=Monk,Illusionist,Rogue. RankChoice=Monk.
 */
export class RankChoiceSet extends ChoiceSet {
    constructor(choices: Set<RankChoice>, unique: boolean) {
        super(choices, unique);
    }
}
