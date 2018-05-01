export class SheetFeature {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.source = null;
    }
    setSheetFeatureSource(source) {
        this.source = source;
    }
    getName() { return this.name; }
    getDescription() { return this.description; }
    getSourceName() { return this.source.getSheetFeatureSourceName(); }
}
//# sourceMappingURL=SheetFeature.js.map