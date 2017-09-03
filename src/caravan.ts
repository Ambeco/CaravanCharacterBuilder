namespace Caravan {

    export interface ChoiceSource { }
    
    export interface ChoiceSelectionListener {
        (newOption: Option, choice: Choice, oldOption: Option): boolean;
    }

    export class Choice {
        private listeners: Set<ChoiceSelectionListener>;
        private selection: Option;

        constructor(private strings: ChoiceStrings, private source: ChoiceSource, private options: OptionSet) {
            this.listeners = new Set<ChoiceSelectionListener>();
            this.selection = null;
            for (let i = 0; i < options.size(); i++) {
                options.addChoice(this);
            }
        }
        
        getName(): string { return this.strings.getName(); }
        getSelection(): Option { return this.selection; }

        addOnChangeListener(listener: ChoiceSelectionListener): void { this.listeners.add(listener); }
        removeOnChangeListener(listener: ChoiceSelectionListener): boolean { return this.listeners.delete(listener); }

        isValidSelection(option: Option): boolean {
            return this.options.isValidSelection(option);
        }
        select(option: Option) : void {
            assert(this.options.has(option));
            let previous: Option = this.selection;
            previous.onDeselect();
            this.selection = option;
            this.selection.onSelect();
            this.listeners.forEach(
                function(callback: ChoiceSelectionListener, value2: ChoiceSelectionListener, set: Set<ChoiceSelectionListener>):void {
                    callback(option, this, previous);
                }
            );
        }
    }

    export class OptionSet {
        choices: Set<Choice>;

        constructor(private options: Set<Option>, private unique: boolean) { }
        size(): number { return this.options.size; }
        has(option: Option): boolean { return this.options.has(option); }

        addChoice(choice: Choice): void {
            this.choices.add(choice);
        }

        isValidSelection(option: Option): boolean {
            assert(this.options.has(option));
            if (!this.unique)
                return true;
            return !this.isSelected(option);
        }
        isSelected(option: Option): boolean {
            assert(this.options.has(option));
            let result: boolean = false;
            this.choices.forEach(
                function (choice: Choice, value2: Choice, set: Set<Choice>): void {
                    if (choice.getSelection() === option)
                        result = true;
                }
            );
            return result;
        }
    }

    export class Option {
        private optionSet: OptionSet;

        constructor(private strings: OptionStrings) { }
        getName(): string { return this.strings.getName(); }
        getDescription(): String { return this.strings.getDescription(); }

        setOptionSet(optionSet: OptionSet): void {
            assert(this.optionSet == null || this.optionSet == optionSet);
            this.optionSet = optionSet;
        }

        isSelected(): boolean { return this.optionSet.isSelected(this); }
        onDeselect() { }
        onSelect() { }
    }
}