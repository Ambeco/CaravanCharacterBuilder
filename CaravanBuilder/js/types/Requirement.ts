import { Currency } from "./Currency.js";
import { RankOption } from "./RankOption.js";
import { Rank } from "./Rank.js";
import { toCamelCase } from "../util/Camelcase.js";
import { Tag } from "./Tag.js";



export interface Requirement {
    toTypeScript(): string;
    // ? :(
}

/**
 * The prerequirement of a Choice or Rank.
 * Requirement=5 Divine.  Currency=Divine.
 * When the user selects the choice/rank, they do not lose any of that currency
 */
export class CurrencyRequirement implements Requirement {
    public readonly amount: number;
    public readonly currency: Currency;

    constructor(amount: number, currency: Currency) {
        this.amount = amount;
        this.currency = currency;
    }
    getAmount(): number { return this.amount; }
    getCurrency(): Currency { return this.currency; }

    toString() { return this.amount + " " + this.currency.getName(); }

    toTypeScript(): string {
        return "new CurrencyRequirement(\'" + this.amount + ",Currency.getCurrency(\"" + this.currency + "\"))";
    }
}


/**
 * The prerequirement of a Choice or Rank.
 * Requirement=5 Divine.  Currency=Divine.
 * When the user selects the choice/rank, they do not lose any of that currency
 */
export class TagRequirement implements Requirement {
    public readonly amount: number;
    public readonly tag: Tag;

    constructor(amount: number, tag: Tag) {
        this.amount = amount;
        this.tag = tag;
    }
    getAmount(): number { return this.amount; }
    getTag(): Tag { return this.tag; }

    toString() { return this.amount + " ranks of any " + this.tag + " specialization"; }

    toTypeScript(): string {
        return "new TagRequirement(\'" + this.amount + ",getTagByName(\"" + this.tag.name + "\"))";
    }
}

/**
 * The prerequirement of a Choice or Rank.
 * Requirement=5 Divine.  Currency=Divine.
 * When the user selects the choice/rank, they do not lose any of that currency
 */
export abstract class RankRequirement implements Requirement {
    public readonly rank: Rank;

    constructor(rank: Rank) {
        this.rank = rank;
    }
    geRank(): Rank { return this.rank; }
    getOption(): RankOption { return this.rank.getRankOption() as RankOption; }
    abstract toTypeScript(): string;

    toString() { return this.rank.value + " ranks of " + this.rank.getRankOption().name; }
}
export class SkillRequirement extends RankRequirement {
    toTypeScript(): string {
        return "new SkillRequirement(skill" + toCamelCase(this.rank.getRankOption().name) + ".getRankForValue(" + this.rank.value + "))";
    }
}
export class AttributeRequirement extends RankRequirement {
    toTypeScript(): string {
        return "new AttributeRequirement(skill" + toCamelCase(this.rank.getRankOption().name) + ".getRankForValue(" + this.rank.value + "))";
    }
}
export class AttunementRequirement extends RankRequirement {
    toTypeScript(): string {
        return "new AttunementRequirement(skill" + toCamelCase(this.rank.getRankOption().name) + ".getRankForValue(" + this.rank.value + "))";
    }
}
export class SpecializationRequirement extends RankRequirement {
    toTypeScript(): string {
        return "new SpecializationRequirement(skill" + toCamelCase(this.rank.getRankOption().name) + ".getRankForValue(" + this.rank.value + "))";
    }
}