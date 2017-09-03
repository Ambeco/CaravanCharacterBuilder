namespace Caravan {

    interface ChoiceSource { }
    enum ChoiceIdBrand { }
    export type ChoiceId = number & ChoiceIdBrand;
    enum OptionSetIdBrand { }
    export type OptionSetId = number & OptionSetIdBrand;
    enum OptionIdBrand { }
    export type OptionId = number & OptionIdBrand;

    interface Ii11n {
        getChoiceName(id: ChoiceId): string;
        getOption(id: OptionId): string;
    };
    let i11n: Ii11n;

    function spliceValue<T>(array: T[], value: T): T[] {
        let idx = array.indexOf(value);
        if (idx >= 0) {
            return array.splice(idx, 1);
        }
        return array;
    }

    interface ChoiceSelectionListener {
        (newOption: Option, choice: Choice, oldOption: Option): boolean;
    }

    class Choice {
        private listeners: Set<ChoiceSelectionListener>;
        private selection: Option;

        constructor(private id: ChoiceId, private source: ChoiceSource, private options: OptionSet) {
            assert(i11n.getChoiceName(id) != null);
            this.listeners = new Set<ChoiceSelectionListener>();
            this.selection = null;
            for (let i = 0; i < options.size(); i++) {
                options.addChoice(this);
            }
        }

        getId(): ChoiceId { return this.id; }
        getName(): string { return i11n.getChoiceName(this.id); }
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

    class OptionSet {
        choices: Set<Choice>;

        constructor(private id:OptionSetId, private options: Set<Option>, private unique: boolean) {
        }
        getId(): OptionSetId { return this.id; }
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

    class Option {
        private optionSet: OptionSet;

        constructor(private id: OptionId) {
            assert(i11n.getOption(id) != null);
        }
        getId(): OptionId { return this.id; }
        getName(): string { return i11n.getOption(this.id); }
        getDescription(): String { return i11n.getOption(this.id); }
        setOptionSet(optionSet: OptionSet): void {
            assert(this.optionSet == null || this.optionSet == optionSet);
            this.optionSet = optionSet;
        }
        isSelected(): boolean { return this.optionSet.isSelected(this); }
        onDeselect() { }
        onSelect() { }
    }
}