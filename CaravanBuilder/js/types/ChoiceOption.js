export class ChoiceOption {
    constructor(newName, uiElement, choices) {
        this.name = newName;
        this.uiElement = uiElement;
        this.choices = choices;
        this.listeners = new Set();
        this.selection = null;
        choices.addOption(this);
        this.setupUi();
    }
    setupUi() {
        this.uiElement.onchange = this.onUIChange;
        let listName = this.uiElement.getAttribute("list");
        if (listName == null)
            throw "cannot find list attribute for ui element " + this.uiElement;
        let dataListElement = document.getElementById(listName);
        if (listName == null)
            throw "cannot find list " + listName + " for ui element " + this.uiElement;
        while (dataListElement.lastChild) {
            dataListElement.removeChild(dataListElement.lastChild);
        }
        for (let choice of this.choices) {
            let child = document.createElement('option');
            child.value = choice.getName();
            dataListElement.appendChild(child);
        }
    }
    getName() { return this.name; }
    getSelection() { return this.selection; }
    addOnChangeListener(listener) { this.listeners.add(listener); }
    removeOnChangeListener(listener) { return this.listeners.delete(listener); }
    onUIChange() {
        for (let choice of this.choices) {
            if (choice.getName() == this.uiElement.value) {
                this.select(choice);
                return;
            }
        }
        this.select(null);
    }
    mayBeSelected(choice) {
        return this.choices.mayBeSelected(choice);
    }
    select(choice) {
        if (choice != null && !this.choices.contains(choice))
            throw "cannot select choice " + choice + " that isn't in this choiceSet";
        let previous = this.selection;
        previous.onDeselect();
        this.selection = choice;
        this.selection.onSelect();
        for (let callback of this.listeners) {
            callback(this, previous);
        }
        if (choice == null && this.uiElement.value != "") {
            this.uiElement.value = "";
        }
        else if (choice.getName() != this.uiElement.value) {
            this.uiElement.value = choice.getName();
        }
    }
}
//# sourceMappingURL=ChoiceOption.js.map