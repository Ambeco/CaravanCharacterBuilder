import { CompleteTransaction, CurrencyTransaction } from "./Transaction";
import { Wallet } from "./wallet";
export class Accounts {
    constructor() {
        this.transactions = new Array();
    }
    getWallet(currency) { return Wallet.getWallet(currency); }
    getTransactionForCost(name, cost) {
        let transactions = new Map();
        let remains = this.getTransactionImpl(cost.getCurrency(), cost.getAmount(), 1, transactions);
        if (remains > 0)
            throw "cannot afford " + name + " short by " + remains + " " + cost.getCurrency().getName();
        return new CompleteTransaction(name, new Set(transactions.values()));
    }
    canAfford(cost) {
        let transactions = new Map();
        return this.getTransactionImpl(cost.getCurrency(), cost.getAmount(), 1, transactions) == 0;
    }
    getTransactionImpl(currency, amount, multiplier, transactions) {
        let wallet = Wallet.getWallet(currency);
        if (wallet.getCount() >= amount) {
            transactions.set(currency, new CurrencyTransaction(currency, wallet.getCount(), -amount));
            return 0;
        }
        let useAmount = Math.floor(wallet.getCount() / multiplier) * multiplier;
        transactions.set(currency, new CurrencyTransaction(currency, wallet.getCount(), -useAmount));
        let remains = amount - wallet.getCount();
        for (let otherCurrency of currency.getConversions().keys()) {
            if (transactions.has(otherCurrency))
                continue;
            let conversionRatio = currency.getConversions().get(otherCurrency);
            let otherAmount = remains * conversionRatio;
            let otherRemains = this.getTransactionImpl(otherCurrency, otherAmount, multiplier * conversionRatio, transactions);
            remains = otherRemains / conversionRatio;
            if (remains == 0)
                return remains;
        }
        return remains;
    }
    canApplyTransaction(newTransactions) {
        for (let transaction of newTransactions) {
            if (!Wallet.getWallet(transaction.getCurrency()).canApplyTransaction(transaction)) {
                return false;
            }
        }
        return true;
    }
    applyTransaction(newTransactions) {
        for (let transaction of newTransactions) {
            Wallet.getWallet(transaction.getCurrency()).assertCanApplyTransaction(transaction);
        }
        for (let transaction of newTransactions) {
            Wallet.getWallet(transaction.getCurrency()).applyTransaction(transaction);
        }
        this.transactions.push(newTransactions);
    }
    canPopTransaction(newTransactions) {
        for (let transaction of newTransactions) {
            if (!Wallet.getWallet(transaction.getCurrency()).canPopTransaction(transaction)) {
                return false;
            }
        }
        return true;
    }
    popTransaction(newTransactions) {
        let last = this.transactions[this.transactions.length - 1];
        if (last != newTransactions)
            throw "found " + last.getName() + " instead";
        for (let transaction of newTransactions) {
            Wallet.getWallet(transaction.getCurrency()).popTransaction(transaction);
        }
        this.transactions.pop();
    }
}
//# sourceMappingURL=Accounts.js.map