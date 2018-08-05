import { Choice } from "./Choice.js";
import { ChoiceSet, RequiredChoiceEnum } from "./ChoiceSet.js";
import { OptionCategory, CategoryFocusChangeListener } from "./OptionCategory.js";
import { findParentWithClass, stripHtml } from "../util/treeNavigation.js";
import { nonNull } from "../util/nonNull.js";
import { specializationCategory } from "../data/specializationData";


export interface ChoiceFocusChangeListener extends CategoryFocusChangeListener {
    onChoiceGainFocus(selectElement: HTMLSelectElement, option: ChoiceOption, choice: Choice|null): void;
}
export interface ChoiceChangeListener {
    (option: ChoiceOption, oldChoice: Choice|null): void;
}

/**
 * A multiple choice field of a form.
 * ChoiceOption=Race. ChoiceSet=Human,Elf,Dwarf. Choice=Human.
 */
export class ChoiceOption {
    public readonly name: string;
    public readonly category: OptionCategory;
    protected selectElement: HTMLSelectElement;
    private readonly choices: ChoiceSet;
    private readonly listeners: Set<ChoiceChangeListener>;
    public selection: Choice | null;

    constructor(name: string, category: OptionCategory, choices: ChoiceSet) {
        this.name = name;
        this.category = category;
        this.choices = choices;
        this.listeners = new Set<ChoiceChangeListener>();
        this.selection = choices.getDefault();
        choices.addOption(this);
    }
    public setSelectUiElement(selectElement: HTMLSelectElement, focusListener: ChoiceFocusChangeListener): void {
        const option: ChoiceOption = this;
        this.selectElement = selectElement;
        selectElement.onchange = function () {
            option.onUIChange();
            focusListener.onChoiceGainFocus(selectElement, option, option.selection)
        };
        selectElement.onfocus = function () {
            focusListener.onChoiceGainFocus(selectElement, option, option.selection);
        };
        while (selectElement.lastChild) {
            selectElement.removeChild(selectElement.lastChild);
        }
        if (this.choices.required == RequiredChoiceEnum.Optional) {
            const child = document.createElement('option');
            child.value = "";
            child.appendChild(document.createTextNode(""));
            selectElement.appendChild(child);
        }
        for (let choice of this.choices) {
            const child = document.createElement('option');
            child.value = choice.getName();
            child.appendChild(document.createTextNode(choice.getName()));
            selectElement.appendChild(child);
        }
        const optionBlock: HTMLElement = nonNull(findParentWithClass(selectElement, "optionBlock"), "failed to find optionBlock for ChoiceOption " + this.name);
        optionBlock.onclick = function () {
            selectElement.focus();
        };
        const categoryBlock: HTMLElement = nonNull(findParentWithClass(selectElement, "categoryBlock"), "failed to find categoryBlock for ChoiceOption " + this.name);
        categoryBlock.title = stripHtml(this.category.getDescription());
    }
        
    getName(): string { return this.name; }
    getSelection(): Choice | null { return this.selection; }
    getChoiceSet(): ChoiceSet { return this.choices; }
    getCategory(): OptionCategory { return this.category; }
    getSelectUiElement(): HTMLSelectElement { return this.selectElement; }
    toString(): string { return "ChoiceOption " + this.name; }

    addOnChangeListener(listener: ChoiceChangeListener): void { this.listeners.add(listener); }
    removeOnChangeListener(listener: ChoiceChangeListener): boolean { return this.listeners.delete(listener); }
    onUIChange() {
        for (let choice of this.choices) {
            if (choice.getName() == this.selectElement.value) {
                this.select(choice);
                return;
            }
        }
        if (this.selectElement.value.length > 0)
            throw new Error("Unable to find selection " + this.selectElement.value + " for choice option " + this.name);
        this.select(null);
    }

    mayBeSelected(choice: Choice): boolean {
        return this.choices.mayBeSelected(choice);
    }
    select(choice: Choice| null): boolean {
        if (choice != null && !this.choices.contains(choice)) throw Error("cannot select choice " + choice + " that isn't in this choiceSet");
        if (choice == this.selection) { return false; }
        const previous: Choice | null = this.selection;
        if (previous != null) previous.onDeselect();
        this.selection = choice;
        if (this.selection != null) this.selection.onSelect();
        for (let callback of this.listeners) {
            callback(this, previous);
        }
        if (choice == null && this.selectElement.value != "") {
            this.selectElement.value = "";
        } else if (choice != null && choice.getName() != this.selectElement.value) {
            this.selectElement.value = choice.getName();
        }
        return true;
    }
}
