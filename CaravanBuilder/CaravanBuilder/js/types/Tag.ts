

/**
 * An tag for abilities and specializations
 * 
 * Examples: Ice, Psychic, Enthrall, Ranged
 */
export class Tag {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    toString(): string { return "[" + name + "]";}
}