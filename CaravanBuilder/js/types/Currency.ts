
/**
 * A category of points that can be earned or spent
 * Cost=5 Xp.  Currency=Xp.
 * Requirement=3 Divine.  Currency=Divine.
 **/
export const namedCurrencies: Map<string, Currency> = new Map<string, Currency>();
export const importantCurrencies: Set<Currency> = new Set<Currency>();
export class Currency {
    public readonly name: string;
    public readonly initialCount: number;
    private readonly justifyToUser: boolean;
    private readonly conversions: Map<Currency, number>; //1.5 means 1 of this is 1.5 of that

    constructor(name: string, initialCount: number, justifyToUser: boolean) {
        this.name = name;
        this.initialCount = initialCount;
        this.justifyToUser = justifyToUser;
        this.conversions = new Map<Currency, number>();
        if (namedCurrencies.get(name.toLowerCase()) != null) throw Error("two currencies with name " + name);
        namedCurrencies.set(name.toLowerCase(), this);
        if (justifyToUser) {
            importantCurrencies.add(this);
        }
    }
    getName(): string { return this.name; }
    getInitialCount(): number { return this.initialCount; }
    getConversions(): Map<Currency, number> { return this.conversions; }
    toString() { return this.name;}

    setConversions(conversions: Map<Currency, number>) {
        for (let currency of conversions.keys()) {
            this.conversions.set(currency, conversions.get(currency));
        }
    }

    static getCurrency(name: string): Currency { return namedCurrencies.get(name.toLowerCase()); }
    static setAlternativeName(alternative: string, formal:string): void { 
        const currency: Currency  = namedCurrencies.get(formal);
        if (currency == null) 
            throw new Error("Could not find currency " + formal); 
        namedCurrencies.set(alternative, currency);
    }
}