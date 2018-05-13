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
    getSheetFeatureSourceName(): string { return this.rankOption.getName() + ": " + name; }
    clone(): Rank {
        return new Rank(this.value, this.name, this.description, this.features);
    }

    setRankOption(rankOption: RankHost): void {
        if (this.rankOption != null && this.rankOption != rankOption) throw Error("cannot modify RankOption for " + rankOption.getName());
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
export function duplicateRankArray(ranks: Rank[]): Rank[] {
    let result: Rank[] = new Array<Rank>(ranks.length);
    for (let i = 0; i < ranks.length; i++) {
        result[i] = ranks[i].clone();
    }
    return result;
}
