import { SheetFeature } from "./SheetFeature.js";
import { Choice } from "./Choice.js";
import { BaseAbility } from "./BaseAbility.js";

/**
 * An ability option in the page
 */
export class Tag {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    toString(): string { return "[" + name + "]";}
}