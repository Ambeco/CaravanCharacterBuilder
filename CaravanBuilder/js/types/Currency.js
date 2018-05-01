export let namedCurrencies = new Map();
export let importantCurrencies = new Set();
export class Currency {
    constructor(name, initialCount, justifyToUser) {
        this.name = name;
        this.initialCount = initialCount;
        this.justifyToUser = justifyToUser;
        this.conversions = new Map();
        if (namedCurrencies.get(name) != null)
            throw "two currencies with name " + name;
        namedCurrencies.set(name, this);
        if (justifyToUser) {
            importantCurrencies.add(this);
        }
    }
    getName() { return this.name; }
    getInitialCount() { return this.initialCount; }
    getConversions() { return this.conversions; }
    setConversions(conversions) {
        for (let currency of conversions.keys()) {
            this.conversions.set(currency, conversions.get(currency));
        }
    }
    static getCurrency(name) { return namedCurrencies.get(this.name); }
}
//# sourceMappingURL=Currency.js.map