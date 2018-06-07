import { nonNull } from "../util/nonNull.js";


export interface SheetFeatureSource {
    getSheetFeatureSourceName(): string;
}
/**
 * A feature that displays on the character sheet that may or may not affect any other part of the sheet.
 */
export class SheetFeature {
    public readonly name: string;
    public readonly description: string;
    public source: SheetFeatureSource|null;

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
    getSourceName(): string { return nonNull(this.source, "Feature " + name + " has no source").getSheetFeatureSourceName(); }
}