import { Choice } from "./Choice.js";
import { ChoiceSet } from "./ChoiceSet.js";
import { OptionCategory, CategoryFocusChangeListener } from "./OptionCategory.js";
import { findParentWithClass, stripHtml } from "../util/treeNavigation.js";
import { nonNull } from "../util/nonNull.js";
import { RankChoiceSet } from "./RankChoiceSet";
import { ChoiceOption, ChoiceFocusChangeListener } from "./ChoiceOption";
import { RankChoice } from "./RankChoice";


/**
 * A multiple choice field of a form, where each option has many ranks
 * RankChoice=Specialization. RankChoiceSet=Monk,Illusionist,Rogue. RankChoice=Monk.
 */
export class RankChoiceOption extends ChoiceOption {
    private inputElement: HTMLInputElement;
    private focusListener: ChoiceFocusChangeListener;

    constructor(name: string, category: OptionCategory, choices: RankChoiceSet) {
        super(name, category, choices)
    }
    setRankElement(uiElement: HTMLDivElement, focusListener: ChoiceFocusChangeListener): void {
        if (!(uiElement.children[0] instanceof HTMLSelectElement)) {
            throw new Error("First child must be HTMLSelectElement");
        }
        if (!(uiElement.children[1] instanceof HTMLInputElement)) {
            throw new Error("Second child must be HTMLInputElement");
        }
        this.inputElement = uiElement.children[1] as HTMLInputElement;
        this.focusListener = focusListener;
        this.setSelectUiElement(uiElement.children[0] as HTMLSelectElement, focusListener);
    }

    select(choice: Choice | null): boolean {
        const option: ChoiceOption = this;
        if (choice == null) {
            this.inputElement.onchange = function () { };
            this.inputElement.onfocus = function () { };
            this.inputElement.value = "";
        } else {
            const rank = choice as RankChoice;
            rank.getRankOption().setUiElement(this.inputElement, this.focusListener);
        }
        return super.select(choice);
    }
}
