import { Choice } from "./Choice.js";
import { ChoiceSet } from "./ChoiceSet.js";
import { OptionCategory, CategoryFocusChangeListener } from "./OptionCategory.js";
import { findParentWithClass, stripHtml } from "../util/treeNavigation.js";
import { nonNull } from "../util/nonNull.js";


export interface ChoiceFocusChangeListener extends CategoryFocusChangeListener {
    onChoiceGainFocus(uiElement: HTMLSelectElement, choice: ChoiceOption): void;
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
    private uiElement: HTMLSelectElement;
    private readonly choices: ChoiceSet;
    private readonly listeners: Set<ChoiceChangeListener>;
    public selection: Choice | null;

    constructor(name: string, category: OptionCategory, choices: ChoiceSet) {
        this.name = name;
        this.category = category;
        this.choices = choices;
        this.listeners = new Set<ChoiceChangeListener>();
        this.selection = null;
        choices.addOption(this);
    }
    public setUiElement(uiElement: HTMLSelectElement, focusListener: ChoiceFocusChangeListener) {
        const choice: ChoiceOption = this;
        this.uiElement = uiElement;
        uiElement.onchange = this.onUIChange;
        uiElement.onfocus = function () {
            focusListener.onChoiceGainFocus(uiElement, choice);
        };
        while (uiElement.lastChild) {
            uiElement.removeChild(uiElement.lastChild);
        }
        for (let choice of this.choices) {
            const child = document.createElement('option');
            child.value = choice.getName();
            child.appendChild(document.createTextNode(choice.getName()));
            uiElement.appendChild(child);
        }
        const categoryBlock: HTMLElement = nonNull(findParentWithClass(uiElement, "categoryBlock"), "failed to find categoryBlock for ChoiceOption " + this.name);
        categoryBlock.title = stripHtml(this.category.getDescription());
        categoryBlock.onclick = function () {
            uiElement.focus();
        };
    }
        
    getName(): string { return this.name; }
    getSelection(): Choice | null { return this.selection; }
    getChoiceSet(): ChoiceSet { return this.choices; }
    getCategory(): OptionCategory { return this.category; }
    getUiElement(): HTMLSelectElement { return this.uiElement;}

    addOnChangeListener(listener: ChoiceChangeListener): void { this.listeners.add(listener); }
    removeOnChangeListener(listener: ChoiceChangeListener): boolean { return this.listeners.delete(listener); }
    onUIChange() {
        for (let choice of this.choices) {
            if (choice.getName() == this.uiElement.value) {
                this.select(choice);
                return;
            }
        }
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
        if (choice == null && this.uiElement.value != "") {
            this.uiElement.value = "";
        } else if (choice != null && choice.getName() != this.uiElement.value) {
            this.uiElement.value = choice.getName();
        }
        return true;
    }
}
