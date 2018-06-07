import { CompleteTransaction, CurrencyTransaction } from "./Transaction.js";
import { Cost } from "./Cost.js";
import { Currency } from "./Currency.js";
import { Wallet } from "./wallet.js";
import { nonNull, nonNaN } from "../util/nonNull.js";

/**
 * A "manager" for CompleteTransactions that work accross Wallets. 
 * Given a cost, this will create a CompleteTransaction that looks like it should work at this point in time.
 */
export class Accounts {
    private transactions : Array<CompleteTransaction>

    constructor() {
        this.transactions = new Array<CompleteTransaction>();
    }

    getWallet(currency: Currency) { return Wallet.getWallet(currency); }

    getTransactionForCost(name: string, cost: Cost): CompleteTransaction {
        const transactions: Map<Currency, CurrencyTransaction> = new Map<Currency, CurrencyTransaction>();
        const remains = this.getTransactionImpl(cost.getCurrency(), cost.getAmount(), 1, transactions);
        if (remains > 0) throw Error("cannot afford " + name + " short by " + remains + " " + cost.getCurrency().getName());
        return new CompleteTransaction(name, new Set<CurrencyTransaction>(transactions.values()));
    }
    canAfford(cost: Cost): boolean {
        const transactions: Map<Currency, CurrencyTransaction> = new Map<Currency, CurrencyTransaction>();
        return this.getTransactionImpl(cost.getCurrency(), cost.getAmount(), 1, transactions) == 0;
    }
    private getTransactionImpl(currency: Currency, amount: number, multiplier: number, transactions: Map<Currency, CurrencyTransaction>): number {
        const wallet: Wallet = Wallet.getWallet(currency);
        if (wallet.getCount() >= amount) {
            transactions.set(currency, new CurrencyTransaction(currency, wallet.getCount(), -amount));
            return 0;
        }
        const useAmount = Math.floor(wallet.getCount() / multiplier) * multiplier;
        transactions.set(currency, new CurrencyTransaction(currency, wallet.getCount(), -useAmount));
        let remains = amount - wallet.getCount();
        for (let otherCurrency of currency.getConversions().keys()) {
            if (transactions.has(otherCurrency)) continue;
            const conversionRatio = nonNaN(currency.getConversions().get(otherCurrency), "cannot get conversion from " + currency.name + " to " + otherCurrency.name);
            const otherAmount = remains * conversionRatio;
            const otherRemains = this.getTransactionImpl(otherCurrency, otherAmount, multiplier*conversionRatio, transactions);
            remains = otherRemains / conversionRatio;
            if (remains == 0) return remains;
        }
        return remains;
    }
    canApplyTransaction(newTransactions: CompleteTransaction): boolean {
        for (let transaction of newTransactions) {
            if (!Wallet.getWallet(transaction.getCurrency()).canApplyTransaction(transaction)) {
                return false;
            }
        }
        return true;
    }
    applyTransaction(newTransactions: CompleteTransaction) {
        for (let transaction of newTransactions) {
            Wallet.getWallet(transaction.getCurrency()).assertCanApplyTransaction(transaction);
        }
        for (let transaction of newTransactions) {
            Wallet.getWallet(transaction.getCurrency()).applyTransaction(transaction);
        }
        this.transactions.push(newTransactions);
    }
    canPopTransaction(newTransactions: CompleteTransaction): boolean {
        for (let transaction of newTransactions) {
            if (!Wallet.getWallet(transaction.getCurrency()).canPopTransaction(transaction)) {
                return false;
            }
        }
        return true;
    }
    popTransaction(newTransactions: CompleteTransaction) {
        const last: CompleteTransaction = this.transactions[this.transactions.length - 1];
        if (last != newTransactions) throw Error("found " + last.getName() + " instead");
        for (let transaction of newTransactions) {
            Wallet.getWallet(transaction.getCurrency()).popTransaction(transaction);
        }
        this.transactions.pop();
    }
}