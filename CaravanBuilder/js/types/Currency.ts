
/**
 * A category of points that can be earned or spent
 * Cost=5 Xp.  Currency=Xp.
 * Requirement=3 Divine.  Currency=Divine.
 **/
export let namedCurrencies: Map<string, Currency> = new Map<string, Currency>();
export let importantCurrencies: Set<Currency> = new Set<Currency>();
export class Currency {
    private readonly name: string;
    private readonly initialCount: number;
    private readonly justifyToUser: boolean;
    private readonly conversions: Map<Currency, number>; //1.5 means 1 of this is 1.5 of that

    constructor(name: string, initialCount: number, justifyToUser: boolean) {
        this.name = name;
        this.initialCount = initialCount;
        this.justifyToUser = justifyToUser;
        this.conversions = new Map<Currency, number>();
        if (namedCurrencies.get(name) != null) throw Error("two currencies with name " + name);
        namedCurrencies.set(name, this);
        if (justifyToUser) {
            importantCurrencies.add(this);
        }
    }
    getName(): string { return this.name; }
    getInitialCount(): number { return this.initialCount; }
    getConversions(): Map<Currency, number> { return this.conversions; }

    setConversions(conversions: Map<Currency, number>) {
        for (let currency of conversions.keys()) {
            this.conversions.set(currency, conversions.get(currency));
        }
    }

    static getCurrency(name: String): Currency { return namedCurrencies.get(this.name); }
}