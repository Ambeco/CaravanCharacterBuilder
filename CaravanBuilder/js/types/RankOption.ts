import { Rank } from "./Rank.js";
import { OptionCategory, CategoryFocusChangeListener } from "./OptionCategory.js";
import { findParentWithClass, stripHtml } from "../util/treeNavigation.js";
import { nonNull } from "../util/nonNull.js";


export interface RankChangeListener {
    (changed: RankOption, oldIndex: number): void;
}

/**
 * A number choice field of a form.
 * RankOption=Strength. Rank=4.
 */
export class RankOption {
    public readonly name: string;
    public readonly description: string;
    public readonly category: OptionCategory;
    private uiElement: HTMLInputElement;
    private readonly ranks: Rank[];
    private readonly listeners: Set<RankChangeListener>;
    public selectionIndex: number;

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
    public setUiElement(uiElement: HTMLInputElement, focusListener: CategoryFocusChangeListener) {
        const option: RankOption = this;
        const category: OptionCategory = this.category;
        this.uiElement = uiElement;
        uiElement.onchange = function () {
            option.onUIChange();
            focusListener.onCategoryGainFocus(uiElement, category)
        };
        uiElement.onfocus = function () {
            focusListener.onCategoryGainFocus(uiElement, category);
        }
        const parentblock: HTMLElement|null = uiElement.parentElement;
        if (parentblock == null) throw new Error("RankOption" + name + " has no parent UI");
        parentblock.title = this.description;
        const categoryBlock: HTMLElement = nonNull(findParentWithClass(uiElement, "categoryBlock"), "failed to find categoryBlock for RankOption " + name);
        categoryBlock.title = stripHtml(this.category.getDescription());
        categoryBlock.onclick = function () {
            uiElement.focus();
        };
    }

    getName(): string { return this.name; }
    getDescription(): string { return this.description; }
    getSelectionIndex(): number { return this.selectionIndex; }
    getSelection(): Rank { return this.ranks[this.selectionIndex]; }
    getRanks(): Rank[] { return this.ranks; }

    getRankForValue(value: number): Rank {
        for (let rank of this.ranks) {
            if (rank.value == value) {
                return rank;
            }
        }
        throw new Error("cannot find rank " + value + " for option " + this.name);
    }

    addOnChangeListener(listener: RankChangeListener): void { this.listeners.add(listener); }
    removeOnChangeListener(listener: RankChangeListener): boolean { return this.listeners.delete(listener); }
    onUIChange() {
        for (let rank of this.ranks) {
            if (rank.getName() == this.uiElement.value) {
                this.select(rank);
                return;
            }
        }
        this.select(this.ranks[0]);
    }

    mayBeSelected(rank: Rank): boolean {
        if (this.ranks.indexOf(rank) == null) throw rank.getName() + " is not part of " + this.name;
        return true;
    }
    select(rank: Rank): void {
        const newIndex: number = this.ranks.indexOf(rank);
        if (newIndex == null) throw rank.getName() + " is not part of " + this.name;
        this.selectIndex(newIndex);
    }
    selectIndex(newIndex: number): void {
        const previousIndex: number = this.selectionIndex;
        if (previousIndex != null) this.ranks[previousIndex].onDeselect();
        this.selectionIndex = newIndex;
        this.ranks[newIndex].onSelect();
        for (let callback of this.listeners) {
            callback(this, previousIndex);
        }
    }
}