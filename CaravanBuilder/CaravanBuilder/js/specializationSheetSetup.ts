import { focusListener } from "./floatingDescriptionHelper.js";
import { nonNull } from "./util/nonNull.js";
import { specializations, specializationCategory } from "./data/specializationData";
import { RankChoiceOption } from "./types/RankChoiceOption";
import { RankChoice } from "./types/RankChoice";
import { RankChoiceSet } from "./types/RankChoiceSet";
import { UniqueChoiceEnum, RequiredChoiceEnum } from "./types/ChoiceSet";


const specializationBlock: HTMLTableElement = nonNull(document.getElementById('specializationBlock'), "cannot find specializationBlock") as HTMLTableElement;

const specializationRankChoices: RankChoice[] = new Array<RankChoice>(specializations.length);
for (let i = 0; i < specializations.length; i++) {
    specializationRankChoices[i] = new RankChoice(specializations[i]);
}
const specializationChoiceSet: RankChoiceSet = new RankChoiceSet(new Set<RankChoice>(specializationRankChoices), UniqueChoiceEnum.IsUnique, RequiredChoiceEnum.Optional);
const specializationChoiceOptions: RankChoiceOption[] = new Array<RankChoiceOption>(specializationBlock.children.length - 1);
for (let i = 0; i < specializationBlock.children.length; i++) {
    if (i == 0) continue;
    specializationChoiceOptions[i - 1] = new RankChoiceOption("Specialization", specializationCategory, specializationChoiceSet);
    const uiElement = nonNull(specializationBlock.children[i], "child " + i + " cant be null");
    if (!(uiElement instanceof HTMLDivElement)) throw new Error("child of specializationBlock must be HTMLDivElement");
    specializationChoiceOptions[i - 1].setRankElement(uiElement as HTMLDivElement, focusListener);
}
