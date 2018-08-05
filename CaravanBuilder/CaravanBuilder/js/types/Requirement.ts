import { Currency } from "./Currency.js";
import { RankOption } from "./RankOption.js";
import { Rank, RankHost } from "./Rank.js";
import { toCamelCase } from "../util/Camelcase.js";
import { Tag } from "./Tag.js";
import { Ability } from "./Ability";



export interface Requirement {
    toTypeScript(): string;
    clone(): Requirement;
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

    clone(): CurrencyRequirement { return new CurrencyRequirement(this.amount, this.currency); }

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

    clone(): TagRequirement { return new TagRequirement(this.amount, this.tag);  }

    toString() { return this.amount + " ranks of any " + this.tag + " specialization"; }

    toTypeScript(): string {
        return "new TagRequirement(" + this.amount + ", " + toCamelCase("tag " + this.tag.name) + ")";
    }
}

/**
 * The prerequirement of an Ability
 * When the user selects the choice/rank, they do not lose any of that currency
 */
export class AbilityRequirement implements Requirement {
    public readonly ability: Ability;

    constructor(ability: Ability) {
        this.ability = ability;
    }
    getAbility(): Ability { return this.ability; }

    clone(): AbilityRequirement { return new AbilityRequirement(this.ability); }

    toString() { return "Requires the ability " + this.ability; }

    toTypeScript(): string {
        return "new AbilityRequirement(ability" + toCamelCase(this.ability.name) + ")";
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
    getOption(): RankHost { return this.rank.getRankOption(); }
    abstract clone(): RankRequirement;
    abstract toTypeScript(): string;

    toString() { return this.rank.value + " ranks of " + this.rank.getRankOption().name; }
}
export class SkillRequirement extends RankRequirement {
    clone(): SkillRequirement { return new SkillRequirement(this.rank); }
    toTypeScript(): string {
        return "new SkillRequirement(skill" + toCamelCase(this.rank.getRankOption().name) + ".getRankForValue(" + this.rank.value + "))";
    }
}
export class AttributeRequirement extends RankRequirement {
    clone(): AttributeRequirement { return new AttributeRequirement(this.rank); }
    toTypeScript(): string {
        return "new AttributeRequirement(attribute" + toCamelCase(this.rank.getRankOption().name) + ".getRankForValue(" + this.rank.value + "))";
    }
}
export class AttunementRequirement extends RankRequirement {
    clone(): AttunementRequirement { return new AttunementRequirement(this.rank); }
    toTypeScript(): string {
        return "new AttunementRequirement(attunement" + toCamelCase(this.rank.getRankOption().name) + ".getRankForValue(" + this.rank.value + "))";
    }
}
export class SpecializationRequirement extends RankRequirement {
    clone(): SpecializationRequirement { return new SpecializationRequirement(this.rank); }
    toTypeScript(): string {
        return "new SpecializationRequirement(specialization" + toCamelCase(this.rank.getRankOption().name) + ".getRankForValue(" + this.rank.value + "))";
    }
}