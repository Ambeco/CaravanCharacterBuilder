import { SheetFeature } from "./SheetFeature.js";
import { AugmentSource, Augment } from "./Augment.js";
import { toCamelCase } from "../util/Camelcase";


export interface RankHost {
    readonly name: string;
    getSelection(): Rank;
}
/**
 * A single possibility of a number field of a form.
 * RankOption=Strength. Rank=4.
 * TODO: Add costs/requirements
 */
export class Rank implements AugmentSource {
    public readonly name: string;
    public readonly value: number;
    public readonly description: string;
    private readonly features: Set<SheetFeature>
    private readonly augments: Set<Augment>
    private rankOption: RankHost;
    
    constructor(value: number, name: string | null, description: string | null, features: Set<SheetFeature> | null, augments: Set<Augment> | null) {
        this.name = name || ("Rank" + value.toString());
        this.value = value;
        this.description = description || "";
        this.features = features || new Set<SheetFeature>();
        this.augments = augments || new Set<Augment>();
        for (let feature of this.features) {
            feature.setSheetFeatureSource(this);
        }
        for (let augment of this.augments) {
            augment.setAugmentSource(this);
        }
    }
    getName(): string { return this.name; }
    getValue(): number { return this.value; }
    getDescription(): string { return this.description; }
    getSheetFeatureSourceName(): string { return this.rankOption.name + ": " + name; }
    getAugments(): Set<Augment> { return this.augments; }
    clone(): Rank {
        return new Rank(this.value,
            this.name,
            this.description,
            duplicateFeatureSet(this.features),
            duplicateAugmentSet(this.augments));
    }

    setRankOption(rankOption: RankHost): void {
        if (this.rankOption != null && this.rankOption != rankOption) throw Error("cannot modify RankOption for " + rankOption.name);
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

    public toString(): string {
        return this.name;
    }
    public toTypeScript(): string {
        let result = "new Rank(" + this.value + ", \"" + this.name + "\", \"" + this.description + "\", null, ";
        if (this.augments.size == 0) {
            result += "null";
        } else {
            result += toCamelCase("augmentSet " + this.rankOption.name + " " + this.name);
        }
        result += ");";
        return result;
    }
    public augmentsToTypeScript(): string {
        let result: string = "export const " + toCamelCase("augment set " + this.rankOption.name + " " + this.name) + ": Set<Augment> = new Set<Augment>([\n\t";
        for (let augment of this.augments) {
            result += augment.toTypeScript() + ",\n\t";
        }
        result += "],\n";
        return result;
    }
}
function duplicateFeatureSet(features: Set<SheetFeature>): Set<SheetFeature> {
    const result = new Set<SheetFeature>();
    for (let feature of features) {
        result.add(new SheetFeature(feature.name, feature.description));
    }
    return result;
}
function duplicateAugmentSet(augments: Set<Augment>): Set<Augment> {
    const result = new Set<Augment>();
    for (let augment of augments) {
        result.add(new Augment(augment.name, augment.cost, augment.effect));
    }
    return result;
}
export function duplicateRankArray(ranks: Rank[]): Rank[] {
    const result: Rank[] = new Array<Rank>(ranks.length);
    for (let i = 0; i < ranks.length; i++) {
        result[i] = ranks[i].clone();
    }
    return result;
}
