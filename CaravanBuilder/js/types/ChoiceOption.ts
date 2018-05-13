import { Choice } from "./Choice.js";
import { ChoiceSet } from "./ChoiceSet.js";
import { OptionCategory, CategoryFocusChangeListener } from "./OptionCategory.js";
import { findParentWithClass, stripHtml } from "../util/treeNavigation.js";


export interface ChoiceFocusChangeListener extends CategoryFocusChangeListener {
    onChoiceGainFocus(uiElement: HTMLInputElement, choice: ChoiceOption): void;
}
export interface ChoiceChangeListener {
    (option: ChoiceOption, oldChoice: Choice): void;
}

/**
 * A multiple choice field of a form.
 * ChoiceOption=Race. ChoiceSet=Human,Elf,Dwarf. Choice=Human.
 */
export class ChoiceOption {
    public readonly name: string;
    public readonly category: OptionCategory;
    private uiElement: HTMLInputElement;
    private readonly choices: ChoiceSet;
    private readonly listeners: Set<ChoiceChangeListener>;
    public selection: Choice;

    constructor(newName: string, category: OptionCategory, choices: ChoiceSet) {
        this.name = newName;
        this.category = category;
        this.choices = choices;
        this.listeners = new Set<ChoiceChangeListener>();
        this.selection = null;
        choices.addOption(this);
    }
    public setUiElement(uiElement: HTMLInputElement, focusListener: ChoiceFocusChangeListener) {
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
        const categoryBlock: HTMLElement = findParentWithClass(uiElement, "categoryBlock");
        categoryBlock.title = stripHtml(this.category.getDescription());
        categoryBlock.onclick = function () {
            uiElement.focus();
        };
    }
        
    getName(): string { return this.name; }
    getSelection(): Choice { return this.selection; }
    getChoiceSet(): ChoiceSet { return this.choices; }
    getCategory(): OptionCategory { return this.category; }
    getUiElement(): HTMLInputElement { return this.uiElement;}

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
    select(choice: Choice): void {
        if (choice != null && !this.choices.contains(choice)) throw Error("cannot select choice " + choice + " that isn't in this choiceSet");
        const previous: Choice = this.selection;
        previous.onDeselect();
        this.selection = choice;
        this.selection.onSelect();
        for (let callback of this.listeners) {
            callback(this, previous);
        }
        if (choice == null && this.uiElement.value != "") {
            this.uiElement.value = "";
        } else if (choice.getName() != this.uiElement.value) {
            this.uiElement.value = choice.getName();
        }
    }
}
