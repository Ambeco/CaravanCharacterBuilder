
export interface CurrencyListener {
    (changedCurency: Currency, transaction: Transaction): void;
}
export class Transaction {
    private readonly name: string;
    private readonly initialCount: number;
    private readonly delta: number;

    constructor(name: string, initialCount: number, delta: number) {
        this.name = name;
        this.initialCount = initialCount;
        this.delta = delta;
    }
    getName(): string { return this.name; }
    getInitialCount(): number { return this.initialCount; }
    getDelta(): number { return this.delta; }
}

export let currencies: Map <string, Currency> = new Map<string, Currency>();
export class Currency {
    private readonly name: string;
    private readonly initialCount: number;
    private currentCount: number;
    private transactions: Array<Transaction>;
    private readonly callbacks: Set<CurrencyListener>;

    constructor(name: string, initialCount: number) {
        this.name = name;
        this.initialCount = initialCount;
        this.currentCount = initialCount;
        this.transactions = new Array<Transaction>();
        this.callbacks = new Set<CurrencyListener>();
        if (currencies.get(name) != null) throw "two currencies with name " + name;
        currencies.set(name, this);
    }
    getName(): string { return this.name; }
    getCount(): number { return this.currentCount; }

    addListener(listener: CurrencyListener) { this.callbacks.add(listener); }
    removeListener(listener: CurrencyListener): boolean { return this.callbacks.delete(listener); }

    addTransaction(name: string, delta: number) {
        if (this.currentCount + delta <0) throw this.name + " cannot be negative";
        let transaction: Transaction = new Transaction(name, this.currentCount, delta);
        this.transactions.push(transaction);
        this.currentCount = this.currentCount + delta;
        for (let listener of this.callbacks) {
            listener(this, transaction);
        }
    }

    popTransaction(transaction: Transaction) {
        if (this.transactions.length == 0) throw transaction.getName + " transaction not found in queue";
        let last: Transaction = this.transactions[this.transactions.length - 1];
        if (last != transaction) throw "found " + last.getName() + " instead";
        this.transactions.pop();
    }
}