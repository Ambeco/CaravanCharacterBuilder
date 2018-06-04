import { Currency } from "./Currency.js";
import { CompleteTransaction } from "./Transaction.js";
import { Wallet } from "./wallet.js";

/**
 * The cost of a Choice or Rank.
 * Cost=5 Exp.  Currency=Exp.
 * When the user selects the choice/rank, a Transaction will track the loss of the Currency, in that Currency's wallet.
 */
export class Cost {
    public readonly amount: number;
    public readonly currency: Currency;

    constructor(amount: number, currency: Currency) {
        this.amount = amount;
        this.currency = currency;
    }
    getAmount(): number { return this.amount; }
    getCurrency(): Currency { return this.currency; }

    toString() { return this.amount + " " + this.currency.name;}
}

/**
 * The prerequirement of a Choice or Rank.
 * Requirement=5 Divine.  Currency=Divine.
 * When the user selects the choice/rank, they do not lose any of that currency
 */
export class Requirement {
    public readonly amount: number;
    public readonly currency: Currency;

    constructor(amount: number, currency: Currency) {
        this.amount = amount;
        this.currency = currency;
    }
    getAmount(): number { return this.amount; }
    getCurrency(): Currency { return this.currency; }

    toString() { return this.amount + " " + this.currency.getName(); }
}