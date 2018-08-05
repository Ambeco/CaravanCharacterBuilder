import { RankOption } from "../types/RankOption.js";
import { Rank } from "../types/Rank.js";
import { SheetFeature } from "../types/SheetFeature.js";
import { OptionCategory } from "../types/OptionCategory.js";
import { cloneArray } from "../util/Clonable";

const attunementCategory: OptionCategory = new OptionCategory("Attunement",
    "<p>All heroes are attuned in different ways. Certain spheres of power come naturally to you, whereas others might not.</p>"
    + "<p>This is represented in game by how much experience it costs to raise your specializations. Specializations are where you get new abilities and bonuses, like being able to cast fire spells or heal.</p>"
    + "<p>All specializations fall under one of five spheres of power. These spheres are martial, arcane, divine, nature and animus.</p>"
    + "<p>All specializations cost experience to raise based on what sphere they are under. The standard cost for all specializations is 8x your current rating. (For example, if your current rank in a specialization was 2, it would cost you 16 experience to raise it to 3[2x8 = 16]) Your attunement lowers the cost to raise specializations from specific spheres. You have a 6 point pool to manipulate the cost of spheres. These points can also be used to influence the experience cost of attributes and skills, described later in this section. Each point lowers the cost of a specific sphere by 1x. A sphere’s cost cannot be less than 3x and requires 2 points to be reduced from 4x to 3x.For example, you could put 3 points into the divine and arcane spheres so that specializations only cost 5x your current rating, rather than 8x.Specializations from the other three spheres would still cost 8x for you.</p>"
    + "<p>Additionally, you can manipulate how much experience it costs to raise attributes and skills. Normally attributes require 4x your current rating and skills require 2x your current rating, but you can spend 2 attunement points to lower the experience cost by 1x for either your attributes or skills. You can also, instead, gain 2 attunement points by raising the experience cost by 1x for either your attributes or skills. The attunement for attributes and skills can only be raised or lowered once, but both can be affected in this way.</p>"
    + "<p>Listed below is a short list of templates you can choose for faster character creation. The templates are named to give a rough idea of a concept that could fit the mold. It in no way forces your character to follow the path of that name.</p>"
    + "<ul><li>Warrior(Martial 3x, all else 8x)</li>"
    + "<li>Druid(Nature 3x, all else 8x) </li>"
    + "<li>Mage(Arcane 3x, all else 8x) </li>"
    + "<li>Priest(Divine 3x, all else 8x) </li>"
    + "<li>Psychic(Animus 3x, all else 8x) </li>"
    + "<li>Paladin(Divine / Martial 5x, all else 8x) </li>"
    + "<li>Ranger(Nature / Martial 5x, all else 8x) </li>"
    + "<li>Eldritch Knight(Arcane / Martial 5x, all else 8x) </li>"
    + "<li>Witch(Arcane / Nature 5x, all else 8x) </li>"
    + "<li>Mystic Theurge(Arcane / Divine 5x, all else 8x) </li>"
    + "<li>Shaman(Nature / Divine 5x, all else 8x) </li>"
    + "<li>Skald(Animus / Martial 5x, all else 8x) </li>"
    + "<li>Controller(Animus / Arcane 5x, all else 8x) </li>"
    + "<li>Favored Soul(Animus / Divine 5x, all else 8x) </li>"
    + "<li>Primal(Animus / Nature 5x, all else 8x) </li></ul>");

const attunementRanks: Rank[] = [
    new Rank(8, null, null, null, null),
    new Rank(7, null, null, null, null),
    new Rank(6, null, null, null, null),
    new Rank(5, null, null, null, null),
    new Rank(4, null, null, null, null),
    new Rank(3, null, null, null, null),
];
export const attunementMartial: RankOption = new RankOption("Martial", attunementCategory, cloneArray(attunementRanks), "Martial covers non - magical, physical ability. It could be something simple, such as expertise with the bow or sword or something a little more devious, such as thievery and assassination.");
export const attunementArcane: RankOption = new RankOption("Arcane", attunementCategory, cloneArray(attunementRanks), "Arcane is a form of magic that requires study and practice.Whereas divine magic is granted through deities and nature magic is learned from the creatures and plant life around you, arcane magic is learned through rigorous study and experimentation. Arcane mages use their knowledge of the way the world’s constants work and then twist those to suit their needs. This allows arcane magic to cover almost any aspect.");
export const attunementDivine: RankOption = new RankOption("Divine", attunementCategory, cloneArray(attunementRanks), "Divine is the sphere connected to deities. You don't need to worship a specific deity, but your power comes from them. Divine magic has a lot of healing and buffing, but also has plenty of offense.");
export const attunementNature: RankOption = new RankOption("Nature", attunementCategory, cloneArray(attunementRanks), "Nature is all about gaining strength through the natural world around you. Learning how predators dominate an ecosystem and gaining their abilities. Discovering how certain plants survive in various climates and mirroring those talents. Nature magic allows you to shape the natural world to your liking.");
export const attunementAnimus: RankOption = new RankOption("Animus", attunementCategory, cloneArray(attunementRanks), "Animus is all about influencing others around you. Generally there are two main way to influence people. Charm, persuasion, seduction and other such stuff have been tools for people to get what they want since people could speak. Others prefer to influence using simply their mind, through various methods of psionic ability. Psionic ability being the way to manipulate people and the world using nothing but your mind.");
export const attunementAttributes: RankOption = new RankOption("Attributes", attunementCategory, [
    new Rank(4, null, null, null, null),
    new Rank(3, null, null, null, null),
],
"Normally attributes require 4x your current rating, but you can spend 2 attunement points to lower the experience cost by 1x for either your attributes or skills. You can also, instead, gain 2 attunement points by raising the experience cost by 1x for your attributes. The attunement for attributes can only be raised or lowered once.");
export const attunementSkills: RankOption = new RankOption("Skills", attunementCategory, [
    new Rank(2, null, null, null, null),
    new Rank(1, null, null, null, null),
],
    "Normally attributes require 2x your current rating, but you can spend 2 attunement points to lower the experience cost by 1x for either your attributes or skills. You can also, instead, gain 2 attunement points by raising the experience cost by 1x for your skills. The attunement for skills can only be raised or lowered once.");

export const coreAttunements: RankOption[] = [
    attunementMartial,
    attunementArcane,
    attunementDivine,
    attunementNature,
    attunementAnimus,
]

export function attunmentByName(name: string): RankOption | undefined {
    for (let attunement of coreAttunements) {
        if (attunement.name == name) {
            return attunement;
        }
    }
    return undefined;
}