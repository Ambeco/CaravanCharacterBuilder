import { SheetFeature } from "./SheetFeature.js";


export interface RankHost {
    readonly name: string;
    readonly selection: Rank;
}
/**
 * A single possibility of a number field of a form.
 * RankOption=Strength. Rank=4.
 */
export class Rank {
    public readonly name: string;
    public readonly value: number;
    public readonly description: string;
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
    getSheetFeatureSourceName(): string { return this.rankOption.name + ": " + name; }
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

    isSelected(): boolean { return this.rankOption.selection === this; }
    onDeselect() { }
    onSelect() { }
}
export function duplicateRankArray(ranks: Rank[]): Rank[] {
    const result: Rank[] = new Array<Rank>(ranks.length);
    for (let i = 0; i < ranks.length; i++) {
        result[i] = ranks[i].clone();
    }
    return result;
}
