﻿import { SheetFeature } from "./SheetFeature.js";


export interface ChoiceHost {
    getOptionName(choice : Choice): string;
    isSelected(choice: Choice): boolean;
}
export class Choice {
    private readonly name: string;
    private readonly description: string;
    private readonly features: Set<SheetFeature>
    private choiceSet: ChoiceHost;

    constructor(name: string, description: string, features: Set<SheetFeature>) {
        this.name = name;
        this.description = description;
        this.features = features;
        for (let feature of features) {
            feature.setSheetFeatureSource(this);
        }
    }
    getName(): string { return this.name; }
    getDescription(): string { return this.description; }
    getSheetFeatureSourceName(): string { return this.choiceSet.getOptionName(this) + ": " + name;}

    setChoiceSet(choiceSet: ChoiceHost): void {
        if (this.choiceSet != null && this.choiceSet != choiceSet) throw "Cannot modify ChoiceSet";
        this.choiceSet = choiceSet;
    }
    getChoiceSet(): ChoiceHost {
        return this.choiceSet;
    }
    getSheetFeatures(): Set<SheetFeature> {
        return this.features;
    }

    isSelected(): boolean { return this.choiceSet.isSelected(this); }
    onDeselect() { }
    onSelect() { }
}