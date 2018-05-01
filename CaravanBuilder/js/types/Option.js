export class Option {
    constructor(newName, choices) {
        this.name = newName;
        this.choices = choices;
        this.listeners = new Set();
        this.selection = null;
        choices.addOption(this);
    }
    getName() { return this.name; }
    getSelection() { return this.selection; }
    addOnChangeListener(listener) { this.listeners.add(listener); }
    removeOnChangeListener(listener) { return this.listeners.delete(listener); }
    mayBeSelected(choice) {
        return this.choices.mayBeSelected(choice);
    }
    select(choice) {
        assert(this.choices.contains(choice));
        let previous = this.selection;
        previous.onDeselect();
        this.selection = choice;
        this.selection.onSelect();
        for (let callback of this.listeners) {
            callback(choice, this, previous);
        }
    }
}
//# sourceMappingURL=Option.js.map