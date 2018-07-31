import { Currency } from "./Currency.js";


/**
 * A spending or gaining of a currency
 * Transaction=5 Exp.  Currency=Exp.
 * Every CurrencyTransaction is contained in a CompleteTransaction.
 */
export class CurrencyTransaction {
    private completeTransaction: CompleteTransaction;
    public readonly currency: Currency;
    public readonly initialCount: number;
    public readonly delta: number;

    constructor(currency: Currency, initialCount: number, delta: number) {
        this.currency = currency;
        this.initialCount = initialCount;
        this.delta = delta;
    }
    getCurrency(): Currency { return this.currency; }
    getInitialCount(): number { return this.initialCount; }
    getDelta(): number { return this.delta; }
    getCompleteTransaction(): CompleteTransaction { return this.completeTransaction; }

    setCompleteTransaction(completeTransaction: CompleteTransaction) {
        this.completeTransaction = completeTransaction;
    }
}

/**
 * A spending or gaining of many currencies.
 * CompleteTransaction = {CurrencyTransaction{-3 Xp}, currencyTransaction{1 Strength}}
 */
export class CompleteTransaction {
    public readonly name: string;
    private readonly transactions: Set<CurrencyTransaction>;

    constructor(name: string, transactions: Set<CurrencyTransaction>) {
        this.name = name;
        this.transactions = transactions;
        for (let transaction of transactions) {
            transaction.setCompleteTransaction(this);
        }
    }
    getName(): string { return name; }
    [Symbol.iterator]() {
        return this.transactions[Symbol.iterator]();
    }
}