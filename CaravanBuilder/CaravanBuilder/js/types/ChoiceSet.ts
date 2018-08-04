import { Choice } from "./Choice.js";


export interface ChoiceSetHost {
    readonly name: string;
    readonly selection: Choice | null;
}
export enum UniqueChoiceEnum {
    NotUnique,
    IsUnique,
}
export enum RequiredChoiceEnum {
    Optional,
    Required,
}
/**
 * The set of possibiliities for a multiple choice field of a form.
 * ChoiceOption=Race. ChoiceSet=Human,Elf,Dwarf. Choice=Human.
 */
export class ChoiceSet {
    private readonly choices: Set<Choice>;
    public readonly unique: UniqueChoiceEnum;
    public readonly required: RequiredChoiceEnum;
    private readonly options: Set<ChoiceSetHost>;

    constructor(choices: Set<Choice>, unique: UniqueChoiceEnum, required: RequiredChoiceEnum) {
        this.choices = choices;
        this.unique = unique;
        this.required = required;
        this.options = new Set<ChoiceSetHost>();
        for (let choice of choices.values()) {
            choice.setChoiceSet(this);
        }
    }
    size(): number { return this.choices.size; }
    contains(choice: Choice): boolean { return this.choices.has(choice); }
    getOptionName(choice: Choice): string | undefined {
        const host = this.getOptionBySelection(choice);
        return host ? host.name : undefined;
    }
    [Symbol.iterator]() {
        return this.choices[Symbol.iterator]();
    }

    addOption(option : ChoiceSetHost) { this.options.add(option); }

    mayBeSelected(choice: Choice): boolean {
        if (!this.choices.has(choice)) throw Error("cannot select choice " + choice + " that isn't in this choiceSet");
        if (!this.unique)
            return true;
        return !this.isSelected(choice);
    }
    isSelected(choice: Choice): boolean {
        return this.getOptionBySelection(choice) != null;
    }
    private getOptionBySelection(choice: Choice): ChoiceSetHost | undefined {
        if (!this.choices.has(choice)) throw Error("cannot get choice " + choice + " that isn't in this choiceSet");
        for (let option of this.options) {
            if (option.selection === choice)
                return option;
        };
        return undefined;
    }
}
