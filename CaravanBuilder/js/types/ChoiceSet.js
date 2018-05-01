export class ChoiceSet {
    constructor(choices, unique) {
        this.choices = choices;
        this.unique = unique;
        this.options = new Set();
        for (let choice of choices.values()) {
            choice.setChoiceSet(this);
        }
    }
    size() { return this.choices.size; }
    contains(choice) { return this.choices.has(choice); }
    getOptionName(choice) { return this.getOptionBySelection(choice).getName(); }
    [Symbol.iterator]() {
        return this.choices[Symbol.iterator]();
    }
    addOption(option) { this.options.add(option); }
    mayBeSelected(choice) {
        if (!this.choices.has(choice))
            throw "cannot select choice " + choice + " that isn't in this choiceSet";
        if (!this.unique)
            return true;
        return !this.isSelected(choice);
    }
    isSelected(choice) {
        return this.getOptionBySelection(choice) != null;
    }
    getOptionBySelection(choice) {
        if (!this.choices.has(choice))
            throw "cannot get choice " + choice + " that isn't in this choiceSet";
        for (let option of this.options) {
            if (option.getSelection() === choice)
                return option;
        }
        ;
        return null;
    }
}
//# sourceMappingURL=ChoiceSet.js.map