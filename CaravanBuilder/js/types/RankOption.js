export class RankOption {
    constructor(newName, ranks) {
        this.name = newName;
        this.ranks = ranks;
        this.listeners = new Set();
        this.selection = null;
        for (let rank of this.ranks) {
            rank.setRankOption(this);
        }
    }
    getName() { return this.name; }
    getSelection() { return this.selection; }
    addOnChangeListener(listener) { this.listeners.add(listener); }
    removeOnChangeListener(listener) { return this.listeners.delete(listener); }
    mayBeSelected(rank) {
        if (this.ranks.indexOf(rank) == null)
            throw rank.getName() + " is not part of " + this.name;
        return true;
    }
    select(rank) {
        if (this.ranks.indexOf(rank) == null)
            throw rank.getName() + " is not part of " + this.name;
        let previous = this.selection;
        previous.onDeselect();
        this.selection = rank;
        this.selection.onSelect();
        for (let callback of this.listeners) {
            callback(this, previous);
        }
    }
}
//# sourceMappingURL=RankOption.js.map