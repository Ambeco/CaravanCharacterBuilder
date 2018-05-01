import { CurrencyTransaction, CompleteTransaction } from "./Transaction";
export let wallets = new Map();
export class Wallet {
    static getWallet(currency) { return wallets.get(currency); }
    constructor(currency, initialCount) {
        this.currency = currency;
        this.currentCount = currency.getInitialCount();
        this.transactions = new Array();
        this.callbacks = new Set();
        if (wallets.get(currency) != null)
            throw "two wallets with currency " + currency.getName();
        wallets.set(currency, this);
    }
    getName() { return this.currency.getName(); }
    getCurrency() { return this.currency; }
    getCount() { return this.currentCount; }
    addListener(listener) { this.callbacks.add(listener); }
    removeListener(listener) { return this.callbacks.delete(listener); }
    addTransaction(name, delta) {
        if (this.currentCount + delta < 0)
            throw this.currency.getName() + " cannot be negative";
        let transaction = new CurrencyTransaction(this.currency, this.currentCount, delta);
        let complete = new CompleteTransaction(name, new Set([transaction]));
        this.transactions.push(transaction);
        this.currentCount = this.currentCount + delta;
        for (let listener of this.callbacks) {
            listener(this, transaction);
        }
    }
    canApplyTransaction(transaction) {
        if (this.currency != transaction.getCurrency())
            return false;
        if (this.currentCount + transaction.getDelta() < 0)
            return false;
        if (this.currentCount != transaction.getInitialCount())
            return false;
        return true;
    }
    assertCanApplyTransaction(transaction) {
        if (this.currency != transaction.getCurrency())
            throw this.currency.getName() + " for wrong currency";
        if (this.currentCount + transaction.getDelta() < 0)
            throw this.currency.getName() + " cannot be negative";
        if (this.currentCount != transaction.getInitialCount())
            throw this.currency.getName() + " new transaction invalid: " + transaction.getInitialCount() + " vs " + this.currentCount;
    }
    applyTransaction(transaction) {
        this.assertCanApplyTransaction(transaction);
        this.transactions.push(transaction);
        this.currentCount = this.currentCount + transaction.getDelta();
        for (let listener of this.callbacks) {
            listener(this, transaction);
        }
    }
    canPopTransaction(transaction) {
        if (this.transactions.length == 0)
            return false;
        let last = this.transactions[this.transactions.length - 1];
        return transaction === last;
    }
    popTransaction(transaction) {
        if (this.transactions.length == 0)
            throw transaction.getCompleteTransaction().getName() + " transaction not found in queue";
        let last = this.transactions[this.transactions.length - 1];
        if (last != transaction)
            throw "found " + last.getCompleteTransaction().getName() + " instead";
        this.transactions.pop();
    }
}
//# sourceMappingURL=wallet.js.map