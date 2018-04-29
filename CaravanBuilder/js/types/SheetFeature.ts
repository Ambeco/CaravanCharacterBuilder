
export interface SheetFeatureSource {
    getSheetFeatureSourceName(): string;
}
export class SheetFeature {
    private readonly name: string;
    private readonly description: string;
    private source: SheetFeatureSource;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.source = null;
    }
    setSheetFeatureSource(source: SheetFeatureSource) {
        this.source = source;
    }

    getName(): string { return this.name; }
    getDescription(): string { return this.description; }
    getSourceName(): string { return this.source.getSheetFeatureSourceName(); }
}