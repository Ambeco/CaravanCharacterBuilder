export class Choice {
    constructor(name, description, features) {
        this.name = name;
        this.description = description;
        this.features = features;
        for (let feature of features) {
            feature.setSheetFeatureSource(this);
        }
    }
    getName() { return this.name; }
    getDescription() { return this.description; }
    getSheetFeatureSourceName() { return this.choiceSet.getOptionName(this) + ": " + name; }
    setChoiceSet(choiceSet) {
        if (this.choiceSet != null && this.choiceSet != choiceSet)
            throw "Cannot modify ChoiceSet";
        this.choiceSet = choiceSet;
    }
    getChoiceSet() {
        return this.choiceSet;
    }
    getSheetFeatures() {
        return this.features;
    }
    isSelected() { return this.choiceSet.isSelected(this); }
    onDeselect() { }
    onSelect() { }
}
//# sourceMappingURL=Choice.js.map