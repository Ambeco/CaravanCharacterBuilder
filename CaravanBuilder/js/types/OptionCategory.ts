

export interface CategoryFocusChangeListener {
    onCategoryGainFocus(uiElement: HTMLElement, category: OptionCategory): void;
}
/**
 * A category for a set of Options
 * OptionCategory=Attunements. RankOption=Martial, RankOption=Arcane.
 */
export class OptionCategory {
    public readonly name: string;
    public readonly description: string;
    private uiElement: HTMLElement;

    constructor(newName: string, description: string) {
        this.name = newName;
        this.description = description;
    }

    public setUiElement(uiElement: HTMLInputElement) {
        this.uiElement = uiElement;
    }

    getName(): string { return this.name; }
    getDescription(): string { return this.description; }
    getUiElement(): HTMLElement { return this.uiElement; }
}