import { Rank } from "./Rank.js";
import { OptionCategory } from "./OptionCategory.js";
import { findParentWithClass } from "../util/treeNavigation.js";


export interface RankChangeListener {
    (changed: RankOption, oldIndex: number): void;
}

/**
 * A number choice field of a form.
 * RankOption=Strength. Rank=4.
 */
export class RankOption {
    private readonly name: string;
    private readonly description: string;
    private readonly category: OptionCategory;
    private uiElement: HTMLInputElement;
    private readonly ranks: Rank[];
    private readonly listeners: Set<RankChangeListener>;
    private selectionIndex: number;

    constructor(newName: string, category:OptionCategory, ranks: Rank[], description:string) {
        this.name = newName;
        this.description = description;
        this.category = category;
        this.ranks = ranks;
        this.listeners = new Set<RankChangeListener>();
        this.selectionIndex = 0;
        for (let rank of this.ranks) {
            rank.setRankOption(this);
        }
    }
    public setUiElement(uiElement: HTMLInputElement) {
        this.uiElement = uiElement;
        uiElement.onchange = this.onUIChange;
        let parentblock: HTMLElement = uiElement.parentElement;
        parentblock.title = this.description;
        let categoryBlock: HTMLElement = findParentWithClass(uiElement, "categoryBlock");
        categoryBlock.title = this.category.getDescription();
    }

    getName(): string { return this.name; }
    getDescription(): string { return this.description; }
    getSelectionIndex(): number { return this.selectionIndex; }
    getSelection(): Rank { return this.ranks[this.selectionIndex]; }

    addOnChangeListener(listener: RankChangeListener): void { this.listeners.add(listener); }
    removeOnChangeListener(listener: RankChangeListener): boolean { return this.listeners.delete(listener); }
    onUIChange(event: Event) {
        for (let rank of this.ranks) {
            if (rank.getName() == this.uiElement.value) {
                this.select(rank);
                return;
            }
        }
        this.select(null);
    }

    mayBeSelected(rank: Rank): boolean {
        if (this.ranks.indexOf(rank) == null) throw rank.getName() + " is not part of " + this.name;
        return true;
    }
    select(rank: Rank): void {
        let newIndex: number = this.ranks.indexOf(rank);
        if (newIndex == null) throw rank.getName() + " is not part of " + this.name;
        this.selectIndex(newIndex);
    }
    selectIndex(newIndex: number): void {
        let previousIndex: number = this.selectionIndex;
        if (previousIndex != null) this.ranks[previousIndex].onDeselect();
        this.selectionIndex = newIndex;
        this.ranks[newIndex].onSelect();
        for (let callback of this.listeners) {
            callback(this, previousIndex);
        }
    }
}