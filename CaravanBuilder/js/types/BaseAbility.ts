import { Cost, Requirement } from "./Cost.js";
import { RankOption } from "./RankOption.js";
import { SheetFeature } from "./SheetFeature.js";
import { AugmentSource } from "./Augment.js";


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
}

export class BaseAbility implements AugmentSource {
    public readonly name: string;
    public readonly requirements: Requirement;
    public readonly cost: Cost;
    public readonly time: Cost;
    public readonly tags: string[];
    public readonly roll: Roll;
    public readonly difficulty: number;
    public readonly augmentSlots: number;
    public readonly target: string;
    public readonly effect: string;
    public readonly availability: string;

    constructor(
        name: string,
        requirements: Requirement,
        cost: Cost,
        time: Cost,
        tags: string[],
        roll: Roll,
        difficulty: number,
        augmentSlots: number,
        target: string,
        effect: string,
        availability: string) {
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

    public getAbilityDescription(): string {
        let description: string = "<h3>" + this.name + "</h>";
        if (this.requirements != null) {
            description += "<br/><i>Requires at least " + this.requirements.amount + " total ranks in any combinations of " + this.requirements.currency.name + "</i>";
        }
        description += "<table><tr><td>EXP</td><td>Time</td><td>Tags</td><td>Roll</td><td>Difficulty</td><td>Augment Slots</td><tr>";
        description += "<td>" + this.cost + "</td>";
        description += "<td>" + this.time + "</td>";
        description += "<td>" + BaseAbility.toTagString(this.tags) + "</td>";
        description += "<td>" + this.roll + "</td>";
        description += "<td>" + this.difficulty + "</td>";
        description += "<td>" + this.augmentSlots + "</td></tr>";
        description += "<tr><td colspan=\"2\">Targeting</td><td colspan=\"4\">" + this.target + "</td></tr>";
        description += "<tr><td colspan=\"2\">Effect</td><td colspan=\"4\">" + this.effect + "</td></tr>";
        description += "<tr><td colspan=\"2\">Availability</td><td colspan=\"4\">" + this.availability + "</td></tr></table>";
        return description;
    }

    private static toTagString(tags: string[]): string {
        if (tags.length == 0) { return ""; }
        let result: string = "";
        for (let tag of tags) {
            result += "[" + tag + "], ";
        }
        return result.substr(0, result.length - 2);
    }
}