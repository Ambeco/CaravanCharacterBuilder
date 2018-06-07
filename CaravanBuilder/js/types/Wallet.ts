import { Currency } from "./Currency.js";
import { CurrencyTransaction, CompleteTransaction } from "./Transaction.js";
import { nonNull } from "../util/nonNull.js";

export interface CurrencyListener {
    (changedCurency: Wallet, transaction: CurrencyTransaction): void;
}
/**
 * Holds the current amount of a currency, and the transaction history for how we got this amount.
 * Examples: a Wallet for Xp, a Wallet for Freebie Points, one for 'specialization ranks in fire', etc.
 * An "Account" holds the Wallets.
 */
export const wallets: Map<Currency, Wallet> = new Map<Currency, Wallet>();
export class Wallet {
    public readonly currency: Currency;
    private currentCount: number;
    private transactions: Array<CurrencyTransaction>;
    private readonly callbacks: Set<CurrencyListener>;

    static getWallet(currency: Currency): Wallet { return nonNull(wallets.get(currency), "cannot get Wallet for currency " + currency.name); }

    constructor(currency: Currency, initialCount: number) {
        this.currency = currency;
        this.currentCount = currency.getInitialCount();
        this.transactions = new Array<CurrencyTransaction>();
        this.callbacks = new Set<CurrencyListener>();
        if (wallets.get(currency) != null) throw Error("two wallets with currency " + currency.getName());
        wallets.set(currency, this);
    }

    getName(): string { return this.currency.getName(); }
    getCurrency(): Currency { return this.currency; }
    getCount(): number { return this.currentCount; }

    addListener(listener: CurrencyListener) { this.callbacks.add(listener); }
    removeListener(listener: CurrencyListener): boolean { return this.callbacks.delete(listener); }

    addTransaction(name: string, delta: number) {
        if (this.currentCount + delta < 0) throw this.currency.getName() + " cannot be negative";
        const transaction: CurrencyTransaction = new CurrencyTransaction(this.currency, this.currentCount, delta);
        const complete: CompleteTransaction = new CompleteTransaction(name, new Set<CurrencyTransaction>([transaction]));
        this.transactions.push(transaction);
        this.currentCount = this.currentCount + delta;
        for (let listener of this.callbacks) {
            listener(this, transaction);
        }
    }
    canApplyTransaction(transaction: CurrencyTransaction) :boolean {
        if (this.currency != transaction.getCurrency()) return false;
        if (this.currentCount + transaction.getDelta() < 0) return false;
        if (this.currentCount != transaction.getInitialCount()) return false;
        return true;
    }
    assertCanApplyTransaction(transaction: CurrencyTransaction) {
        if (this.currency != transaction.getCurrency()) throw this.currency.getName() + " for wrong currency";
        if (this.currentCount + transaction.getDelta() < 0) throw this.currency.getName() + " cannot be negative";
        if (this.currentCount != transaction.getInitialCount()) throw this.currency.getName() + " new transaction invalid: " + transaction.getInitialCount() + " vs " + this.currentCount;
    }
    applyTransaction(transaction: CurrencyTransaction) {
        this.assertCanApplyTransaction(transaction);
        this.transactions.push(transaction);
        this.currentCount = this.currentCount + transaction.getDelta();
        for (let listener of this.callbacks) {
            listener(this, transaction);
        }
    }
    canPopTransaction(transaction: CurrencyTransaction): boolean {
        if (this.transactions.length == 0) return false;
        let last: CurrencyTransaction = this.transactions[this.transactions.length - 1];
        return transaction === last;
    }
    popTransaction(transaction: CurrencyTransaction) {
        if (this.transactions.length == 0) throw transaction.getCompleteTransaction().getName() + " transaction not found in queue";
        let last: CurrencyTransaction = this.transactions[this.transactions.length - 1];
        if (last != transaction) throw Error("found " + last.getCompleteTransaction().getName() + " instead");
        this.transactions.pop();
    }
}