import { Choice } from "./Choice.js";
import { ChoiceSet } from "./ChoiceSet.js";


export interface ChoiceChangeListener {
    (option: ChoiceOption, oldChoice: Choice): void;
}

/**
 * A multiple choice field of a form.
 * ChoiceOption=Race. ChoiceSet=Human,Elf,Dwarf. Choice=Human.
 */
export class ChoiceOption {
    private readonly name: string;
    private readonly uiElement: HTMLInputElement;
    private readonly choices: ChoiceSet;
    private readonly listeners: Set<ChoiceChangeListener>;
    private selection: Choice;

    constructor(newName: string, uiElement: HTMLInputElement, choices: ChoiceSet) {
        this.name = newName;
        this.uiElement = uiElement;
        this.choices = choices;
        this.listeners = new Set<ChoiceChangeListener>();
        this.selection = null;
        choices.addOption(this);
        this.setupUi();
    }
    private setupUi() {
        this.uiElement.onchange = this.onUIChange;
        let listName: string = this.uiElement.getAttribute("list");
        if (listName == null) throw "cannot find list attribute for ui element " + this.uiElement;
        let dataListElement: HTMLElement = document.getElementById(listName);
        if (listName == null) throw "cannot find list " + listName + " for ui element " + this.uiElement;
        while (dataListElement.lastChild) {
            dataListElement.removeChild(dataListElement.lastChild);
        }
        for (let choice of this.choices) {
            let child = document.createElement('option');
            child.value = choice.getName();
            dataListElement.appendChild(child);
        }
    }
        
    getName(): string { return this.name; }
    getSelection(): Choice { return this.selection; }

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
        if (choice != null && !this.choices.contains(choice)) throw "cannot select choice " + choice + " that isn't in this choiceSet";
        let previous: Choice = this.selection;
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
