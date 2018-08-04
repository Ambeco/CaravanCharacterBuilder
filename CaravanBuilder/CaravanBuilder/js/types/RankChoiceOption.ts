import { Choice } from "./Choice.js";
import { ChoiceSet } from "./ChoiceSet.js";
import { OptionCategory, CategoryFocusChangeListener } from "./OptionCategory.js";
import { findParentWithClass, stripHtml } from "../util/treeNavigation.js";
import { nonNull } from "../util/nonNull.js";
import { RankChoiceSet } from "./RankChoiceSet";
import { ChoiceOption, ChoiceFocusChangeListener } from "./ChoiceOption";
import { RankChoice } from "./RankChoice";
import { RankFocusChangeListener, RankOption } from "./RankOption";


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
        const option = this;
        const selectElement = uiElement.children[0] as HTMLSelectElement;
        this.inputElement = uiElement.children[1] as HTMLInputElement;
        this.focusListener = focusListener;
        super.setSelectUiElement(selectElement, focusListener);
        this.inputElement.onchange = function () {
            option.onUIChange();
            focusListener.onChoiceGainFocus(selectElement, option, option.selection)
        };
        this.inputElement.onfocus = function () {
            focusListener.onChoiceGainFocus(selectElement, option, option.selection);
        };
    }

    select(choice: Choice | null): boolean {
        const option: ChoiceOption = this;
        if (choice == null) {
            this.inputElement.onchange = function () { };
            this.inputElement.onfocus = function () { };
            this.inputElement.value = "";
        } else if (!(choice instanceof RankChoice)) {
            throw new Error("how did choice " + choice.name + " end up in a RankChoiceOption?");
        } else {
            const selectElement = this.selectElement;
            const focusListener = this.focusListener;
            const listener: RankFocusChangeListener = {
                onRankGainFocus: function(inputElement: HTMLInputElement, rankOption: RankOption): void {
                    focusListener.onChoiceGainFocus(selectElement, option, choice);
                },
                onCategoryGainFocus: function (inputElement: HTMLInputElement, category: OptionCategory): void {
                    focusListener.onCategoryGainFocus(inputElement, category);
                }
            }
            choice.getRankOption().setUiElement(this.inputElement, listener);
        }
        return super.select(choice);
    }
}
