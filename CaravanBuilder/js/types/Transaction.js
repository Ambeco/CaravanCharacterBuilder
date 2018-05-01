export class CurrencyTransaction {
    constructor(currency, initialCount, delta) {
        this.currency = currency;
        this.initialCount = initialCount;
        this.delta = delta;
    }
    getCurrency() { return this.currency; }
    getInitialCount() { return this.initialCount; }
    getDelta() { return this.delta; }
    getCompleteTransaction() { return this.completeTransaction; }
    setCompleteTransaction(completeTransaction) {
        this.completeTransaction = completeTransaction;
    }
}
export class CompleteTransaction {
    constructor(name, transactions) {
        this.name = name;
        this.transactions = transactions;
        for (let transaction of transactions) {
            transaction.setCompleteTransaction(this);
        }
    }
    getName() { return name; }
    [Symbol.iterator]() {
        return this.transactions[Symbol.iterator]();
    }
}
//# sourceMappingURL=Transaction.js.map