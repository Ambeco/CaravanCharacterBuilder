import { RankOption } from "../types/RankOption.js";
import { Rank } from "../types/Rank.js";
import { SheetFeature } from "../types/SheetFeature.js";
import { OptionCategory } from "../types/OptionCategory.js";
import { cloneArray } from "../util/Clonable";

const attributeCategory: OptionCategory = new OptionCategory("Attribute",
    "<p>A character’s Attributes represent various innate qualities, such as how strong, charming, or mindful that character is.</p>"
    + "<p>When determining a character’s Attributes you are given 10 points to spend as you see fit in any of the attributes. Each Attribute begins with one automatic point. Attributes cannot go above 5 through standard means. For example you could put 3 points in to your brawn and intellect to raise them to 4(3 + 1), and 4 points into senses to raise it to 5.</p>");

const attunementRanks: Rank[] = [
    new Rank(1),
    new Rank(2),
    new Rank(3),
    new Rank(4),
    new Rank(5),
];
export const attributeBrawn: RankOption = new RankOption("Brawn", attributeCategory, cloneArray(attunementRanks), "Brawn is a measure of how strong and hearty a creature is.");
export const attributeDexterity: RankOption = new RankOption("Dexterity", attributeCategory, cloneArray(attunementRanks), "Dexterity is a measure of how agile and deft a creature is.");
export const attributePresence: RankOption = new RankOption("Presence", attributeCategory, cloneArray(attunementRanks), "Presence is a measure of the force of personality and charm a creature has.");
export const attributeSubterfuge: RankOption = new RankOption("Subterfuge", attributeCategory, cloneArray(attunementRanks), "Subterfuge is a measure of how beguiling or deceitful a creature is.");
export const attributeSenses: RankOption = new RankOption("Senses", attributeCategory, cloneArray(attunementRanks), "Senses is a measure of the wits and mindfulness of a creature.");
export const attributeIntellect: RankOption = new RankOption("Intellect", attributeCategory, cloneArray(attunementRanks), "Intellect is a measure of the intuition and reason of a creature.");

export const attributes: RankOption[] = [
    attributeBrawn,
    attributeDexterity,
    attributePresence,
    attributeSubterfuge,
    attributeSenses,
    attributeIntellect,
]

export function attributeByName(name: string): RankOption | undefined {
    for (let attribute of attributes) {
        if (attribute.name == name) {
            return attribute;
        }
    }
    return undefined;
}