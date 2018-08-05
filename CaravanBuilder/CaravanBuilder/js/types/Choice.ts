import { SheetFeature } from "./SheetFeature.js";


export interface ChoiceHost {
    getOptionName(choice : Choice): string | undefined;
    isSelected(choice: Choice): boolean;
}
/**
 * A single possibility of a multiple choice field of a form.
 * ChoiceOption=Race. ChoiceSet=Human,Elf,Dwarf. Choice=Human.
 */
export class Choice {
    public readonly name: string;
    public readonly description: string;
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
    getSheetFeatureSourceName(): string { return this.choiceSet.getOptionName(this) + ": " + name; }
    toString(): string { return "Choice " + this.name; }

    setChoiceSet(choiceSet: ChoiceHost): void {
        if (this.choiceSet != null && this.choiceSet != choiceSet) throw Error("Cannot modify ChoiceSet");
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