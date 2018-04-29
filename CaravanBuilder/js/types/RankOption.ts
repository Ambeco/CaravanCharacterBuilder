import { Rank } from "./Rank.js";


export interface RankChangeListener {
    (changed: RankOption, oldRank: Rank): void;
}

export class RankOption {
    private readonly name: string;
    private readonly ranks: Array<Rank>;
    private readonly listeners: Set<RankChangeListener>;
    private selection: Rank;

    constructor(newName: string, ranks: Array<Rank>) {
        this.name = newName;
        this.ranks = ranks;
        this.listeners = new Set<RankChangeListener>();
        this.selection = null;
        for (let rank of this.ranks) {
            rank.setRankOption(this);
        }
    }

    getName(): string { return this.name; }
    getSelection(): Rank { return this.selection; }

    addOnChangeListener(listener: RankChangeListener): void { this.listeners.add(listener); }
    removeOnChangeListener(listener: RankChangeListener): boolean { return this.listeners.delete(listener); }

    mayBeSelected(rank: Rank): boolean {
        if (this.ranks.indexOf(rank) == null) throw rank.getName() + " is not part of " + this.name;
        return true;
    }
    select(rank: Rank): void {
        if (this.ranks.indexOf(rank) == null) throw rank.getName() + " is not part of " + this.name;
        let previous: Rank = this.selection;
        previous.onDeselect();
        this.selection = rank;
        this.selection.onSelect();
        for (let callback of this.listeners) {
            callback(this, previous);
        }
    }
}