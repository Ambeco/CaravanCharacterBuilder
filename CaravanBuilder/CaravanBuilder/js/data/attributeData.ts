import { RankOption } from "../types/RankOption.js";
import { Rank, duplicateRankArray } from "../types/Rank.js";
import { SheetFeature } from "../types/SheetFeature.js";
import { OptionCategory } from "../types/OptionCategory.js";

const attributeCategory: OptionCategory = new OptionCategory("Attribute",
    "<p>A character’s Attributes represent various innate qualities, such as how strong, charming, or mindful that character is.</p>"
    + "<p>When determining a character’s Attributes you are given 10 points to spend as you see fit in any of the attributes. Each Attribute begins with one automatic point. Attributes cannot go above 5 through standard means. For example you could put 3 points in to your brawn and intellect to raise them to 4(3 + 1), and 4 points into senses to raise it to 5.</p>");

const attunementRanks: Rank[] = [
    new Rank(1, null, null, null, null),
    new Rank(2, null, null, null, null),
    new Rank(3, null, null, null, null),
    new Rank(4, null, null, null, null),
    new Rank(5, null, null, null, null),
];
export const attributeBrawn: RankOption = new RankOption("Brawn", attributeCategory, duplicateRankArray(attunementRanks), "Brawn is a measure of how strong and hearty a creature is.");
export const attributeDexterity: RankOption = new RankOption("Dexterity", attributeCategory, duplicateRankArray(attunementRanks), "Dexterity is a measure of how agile and deft a creature is.");
export const attributePresence: RankOption = new RankOption("Presence", attributeCategory, duplicateRankArray(attunementRanks), "Presence is a measure of the force of personality and charm a creature has.");
export const attributeSubterfuge: RankOption = new RankOption("Subterfuge", attributeCategory, duplicateRankArray(attunementRanks), "Subterfuge is a measure of how beguiling or deceitful a creature is.");
export const attributeSenses: RankOption = new RankOption("Senses", attributeCategory, duplicateRankArray(attunementRanks), "Senses is a measure of the wits and mindfulness of a creature.");
export const attributeIntellect: RankOption = new RankOption("Intellect", attributeCategory, duplicateRankArray(attunementRanks), "Intellect is a measure of the intuition and reason of a creature.");

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