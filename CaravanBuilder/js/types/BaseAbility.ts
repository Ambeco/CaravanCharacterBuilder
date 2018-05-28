import { Cost, Requirement } from "./Cost.js";
import { RankOption } from "./RankOption.js";
import { SheetFeature } from "./SheetFeature.js";
import { AugmentHost } from "./Augment";


export class Roll {
    public readonly attribute: RankOption;
    public readonly skill: RankOption;

    constructor(attribute: RankOption, skill: RankOption) {
        this.attribute = attribute;
        this.skill = skill;
    }
}

export class BaseAbility implements AugmentHost {
    public readonly name: string;
    public readonly requirements: Requirement;
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
        time: Cost,
        tags: string[],
        roll: Roll,
        difficulty: number,
        augmentSlots: number,
        target: string,
        effect: string,
        availability: string) {
        this.name = name;
        this.time = time;
        this.tags = tags;
        this.roll = roll;
        this.difficulty = difficulty;
        this.augmentSlots = augmentSlots;
        this.target = target;
        this.effect = effect;
        this.availability = availability;
    }
}