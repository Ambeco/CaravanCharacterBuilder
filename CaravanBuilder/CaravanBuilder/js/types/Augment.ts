import { Cost } from "./Cost.js";

export interface AugmentSource {
    readonly name: string;
}

export class Augment {
    public readonly name: string;
    public readonly cost: Cost;
    public readonly effect: string;
    private source: AugmentSource;

    constructor(name: string, cost: Cost, effect: string) {
        this.name = name;
        this.cost = cost;
        this.effect = effect;
    }

    public setAugmentSource(source: AugmentSource): void {
        this.source = source;
    }

    public toString(): string {
        return this.name;
    }
    public toTypeScript(): string {
        return "new Augment(\"" + this.name + "\", " + this.cost.toTypeScript() + ", \"" + this.effect + "\")";
    }
}