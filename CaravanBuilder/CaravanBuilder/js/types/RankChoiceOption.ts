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
    private uiSlider: HTMLInputElement | null;
    private focusListener: ChoiceFocusChangeListener | null;

    constructor(name: string, category: OptionCategory, choices: RankChoiceSet) {
        super(name, category, choices)
    }
    toString(): string { return "RankChoiceOption " + this.name; }
    getUiSlider(): HTMLInputElement { if (this.uiSlider == null) throw new Error("uiSlider is null"); return this.uiSlider; }

    setRankElement(uiElement: HTMLDivElement, focusListener: ChoiceFocusChangeListener): void {
        if (!(uiElement.children[0] instanceof HTMLSelectElement)) {
            throw new Error("First child must be HTMLSelectElement");
        }
        if (!(uiElement.children[1] instanceof HTMLInputElement)) {
            throw new Error("Second child must be HTMLInputElement");
        }
        const option = this;
        const selectElement = uiElement.children[0] as HTMLSelectElement;
        this.uiSlider = uiElement.children[1] as HTMLInputElement;
        this.focusListener = focusListener;
        super.setSelectUiElement(selectElement, focusListener);
        this.uiSlider.onchange = function () {
            option.onUIChange();
            focusListener.onChoiceGainFocus(selectElement, option, option.selection)
        };
        this.uiSlider.onfocus = function () {
            focusListener.onChoiceGainFocus(selectElement, option, option.selection);
        };
    }

    select(choice: Choice | null): boolean {
        const option: ChoiceOption = this;
        if (this.uiSlider == null) throw new Error("uiSlider is null");
        if (this.focusListener == null) throw new Error("focusListener is null");
        if (choice == null) {
            this.uiSlider.onchange = function () { };
            this.uiSlider.onfocus = function () { };
            this.uiSlider.value = "";
        } else if (!(choice instanceof RankChoice)) {
            throw new Error("how did choice " + choice.name + " end up in a RankChoiceOption?");
        } else {
            const selectElement = this.selectElement;
            const focusListener = this.focusListener;
            const listener: RankFocusChangeListener = {
                onRankGainFocus: function(uiSlider: HTMLInputElement, rankOption: RankOption): void {
                    focusListener.onChoiceGainFocus(selectElement, option, choice);
                },
                onCategoryGainFocus: function (uiSlider: HTMLInputElement, category: OptionCategory): void {
                    focusListener.onCategoryGainFocus(uiSlider, category);
                }
            }
            choice.getRankOption().setUiElement(this.uiSlider, listener);
        }
        return super.select(choice);
    }
}
