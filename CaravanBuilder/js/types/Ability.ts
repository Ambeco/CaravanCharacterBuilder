import { Cost } from "./Cost.js";
import { RankOption } from "./RankOption.js";
import { SheetFeature } from "./SheetFeature.js";
import { AugmentSource } from "./Augment.js";
import { Requirement } from "./Requirement.js";
import { Tag } from "./Tag.js";
import { toCamelCase } from "../util/Camelcase.js";


export class Roll {
    public readonly attribute: RankOption;
    public readonly skill: RankOption;

    constructor(attribute: RankOption, skill: RankOption) {
        this.attribute = attribute;
        this.skill = skill;
    }
    public toString(): string {
        return this.attribute.name + " + " + this.skill.name;
    }
    public toTypeScript(): string {
        return "new Roll(" + toCamelCase("attribute " + this.attribute.name) + ", " + toCamelCase("skill " + this.skill.name) + ")";
    }
}

export class Ability implements AugmentSource {
    public readonly name: string;
    public readonly requirements: Requirement | null;
    public readonly cost: Cost | null;
    public readonly time: Cost | null;
    public readonly tags: Tag[];
    public readonly roll: Roll | null;
    public readonly difficulty: number;
    public readonly augmentSlots: number;
    public readonly target: string;
    public readonly effect: string;
    public readonly availability: string;

    constructor(
        name: string,
        requirements: Requirement | null,
        cost: Cost | null,
        time: Cost | null,
        tags: Tag[],
        roll: Roll | null,
        difficulty: number,
        augmentSlots: number,
        target: string,
        effect: string,
        availability: string) {
        if (Number.isNaN(difficulty)) throw new Error("difficulty of " + name + " cannot be NaN");
        if (Number.isNaN(augmentSlots)) throw new Error("augmentSlots of " + name + " cannot be NaN");
        this.name = name;
        this.cost = cost;
        this.time = time;
        this.tags = tags;
        this.roll = roll;
        this.difficulty = difficulty;
        this.augmentSlots = augmentSlots;
        this.target = target;
        this.effect = effect;
        this.availability = availability;
    }

    public getAbilityDescriptionHTML(): string {
        let description: string = "<h3>" + this.name + "</h>";
        if (this.requirements != null) {
            description += "<br/><i>Requires at least " + this.requirements + "</i>";
        }
        description += "<table><tr><td>EXP</td><td>Time</td><td>Tags</td><td>Roll</td><td>Difficulty</td><td>Augment Slots</td><tr>";
        description += "<td>" + (this.cost ? this.cost.toString() : "") + "</td>";
        description += "<td>" + (this.time ? this.time.toString() : "") + "</td>";
        description += "<td>" + this.tags.join() + "</td>";
        description += "<td>" + (this.roll ? this.roll.toString() : "") + "</td>";
        description += "<td>" + this.difficulty + "</td>";
        description += "<td>" + this.augmentSlots + "</td></tr>";
        description += "<tr><td colspan=\"2\">Targeting</td><td colspan=\"4\">" + this.target + "</td></tr>";
        description += "<tr><td colspan=\"2\">Effect</td><td colspan=\"4\">" + this.effect + "</td></tr>";
        description += "<tr><td colspan=\"2\">Availability</td><td colspan=\"4\">" + this.availability + "</td></tr></table>";
        return description;
    }
}