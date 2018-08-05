import { SheetFeature } from "./SheetFeature.js";
import { Choice } from "./Choice";
import { RankOption } from "./RankOption";


/**
 * A single possibility of a multiple choice field of a form, where the option has many ranks
 * RankChoice=Specialization. RankChoiceSet=Monk,Illusionist,Rogue. RankChoice=Monk.
 */
export class RankChoice extends Choice {
    private readonly rankOption: RankOption;

    constructor(rankOption: RankOption) {
        super(rankOption.name, rankOption.description, new Set<SheetFeature>());
        this.rankOption = rankOption;
    }
    getRankOption(): RankOption { return this.rankOption; }
    toString(): string { return "RankChoice " + this.name; }
}