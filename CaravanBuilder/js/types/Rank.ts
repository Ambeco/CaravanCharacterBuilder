import { SheetFeature } from "./SheetFeature.js";


export interface RankHost {
    getName(): string;
    getSelection(): Rank;
}
/**
 * A single possibility of a number field of a form.
 * RankOption=Strength. Rank=4.
 */
export class Rank {
    private readonly name: string;
    private readonly value: number;
    private readonly description: string;
    private readonly features: Set<SheetFeature>
    private rankOption: RankHost;
    
    constructor(value: number, name: string, description: string, features: Set<SheetFeature>) {
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
    getName(): string { return this.name; }
    getValue(): number { return this.value; }
    getDescription(): string { return this.description; }
    getSheetFeatureSourceName(): string { return this.rankOption.getName() + ": " + name;}

    setRankOption(rankOption: RankHost): void {
        if (this.rankOption != null && this.rankOption != rankOption) throw "cannot modify RankOption for " + rankOption.getName();
        this.rankOption = rankOption;
    }
    getRankOption(): RankHost {
        return this.rankOption;
    }
    getSheetFeatures(): Set<SheetFeature> {
        return this.features;
    }

    isSelected(): boolean { return this.rankOption.getSelection() === this; }
    onDeselect() { }
    onSelect() { }
}