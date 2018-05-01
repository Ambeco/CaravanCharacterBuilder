export class Rank {
    constructor(value, name, description, features) {
        this.name = name || value.toString();
        this.value = value;
        this.description = description;
        this.features = features;
        if (features != null) {
            for (let feature of features) {
                feature.setSheetFeatureSource(this);
            }
        }
    }
    getName() { return this.name; }
    getValue() { return this.value; }
    getDescription() { return this.description; }
    getSheetFeatureSourceName() { return this.rankOption.getName() + ": " + name; }
    setRankOption(rankOption) {
        if (this.rankOption != null && this.rankOption != rankOption)
            throw "cannot modify RankOption for " + rankOption.getName();
        this.rankOption = rankOption;
    }
    getRankOption() {
        return this.rankOption;
    }
    getSheetFeatures() {
        return this.features;
    }
    isSelected() { return this.rankOption.getSelection() === this; }
    onDeselect() { }
    onSelect() { }
}
//# sourceMappingURL=Rank.js.map