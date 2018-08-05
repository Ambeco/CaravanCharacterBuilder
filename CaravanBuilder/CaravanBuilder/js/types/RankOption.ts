import { Rank } from "./Rank.js";
import { OptionCategory, CategoryFocusChangeListener } from "./OptionCategory.js";
import { findParentWithClass, stripHtml } from "../util/treeNavigation.js";
import { nonNull } from "../util/nonNull.js";


export interface RankFocusChangeListener extends CategoryFocusChangeListener {
    onRankGainFocus(selectElement: HTMLInputElement, option: RankOption): void;
}
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
    protected uiSlider: HTMLInputElement | null;
    protected readonly ranks: Rank[];
    protected readonly listeners: Set<RankChangeListener>;
    public selectionIndex: number;

    constructor(newName: string, category:OptionCategory, ranks: Rank[], description:string) {
        this.name = newName;
        this.description = description;
        this.category = category;
        this.uiSlider = null;
        this.ranks = ranks;
        this.listeners = new Set<RankChangeListener>();
        this.selectionIndex = 0;
        for (let rank of this.ranks) {
            rank.setRankOption(this);
        }
    }
    public setUiElement(uiSlider: HTMLInputElement, focusListener: RankFocusChangeListener) {
        const option: RankOption = this;
        const category: OptionCategory = this.category;
        this.uiSlider = uiSlider;
        uiSlider.onchange = function () {
            option.onUIChange();
            focusListener.onRankGainFocus(uiSlider, option)
        };
        uiSlider.onfocus = function () {
            focusListener.onRankGainFocus(uiSlider, option);
        }
        const parentblock: HTMLElement | null = uiSlider.parentElement;
        if (parentblock == null) throw new Error("RankOption" + name + " has no parent UI");
        parentblock.title = this.description;
        const optionBlock: HTMLElement = nonNull(findParentWithClass(uiSlider, "optionBlock"), "failed to find optionBlock for RankOption " + this.name);
        optionBlock.onclick = function () {
            uiSlider.focus();
        };
        const categoryBlock: HTMLElement = nonNull(findParentWithClass(uiSlider, "categoryBlock"), "failed to find categoryBlock for RankOption " + name);
        categoryBlock.title = stripHtml(this.category.getDescription());
    }

    getName(): string { return this.name; }
    getDescription(): string { return this.description; }
    getCategory(): OptionCategory { return this.category; }
    getSelectionIndex(): number { return this.selectionIndex; }
    getSelection(): Rank { return this.ranks[this.selectionIndex]; }
    getRanks(): Rank[] { return this.ranks; }
    getUISlider(): HTMLInputElement { if (this.uiSlider == null) throw new Error("uiSlider is null"); return this.uiSlider; }
    toString(): string { return "RankOption " + this.name; }

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
        if (this.uiSlider == null) throw new Error("uiSlider is null");
        for (let rank of this.ranks) {
            if (rank.getName() == this.uiSlider.value) {
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