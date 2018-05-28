import { RankOption } from "../types/RankOption.js";
import { Rank, duplicateRankArray } from "../types/Rank.js";
import { SheetFeature } from "../types/SheetFeature.js";
import { OptionCategory } from "../types/OptionCategory.js";

const skillCategory: OptionCategory = new OptionCategory("Skills", 
    "<p>A character’s skills represent various learned capabilities, such as being able to recall the history of a place, determine the value of an object, or fight with one’s fists.</p>"
    + "<p>Craft and Perform are listed separately because they behave a little differently than the standard skills. Both craft and perform cover a large list of skills in one neat package. When you first gain a rank in either, you must choose an applicable craft or perform type to learn. You may buy other craft or perform types for 5 experience. Specifics are in the skill descriptions for both skills.</p>"
    + "<p>Focus: When you reach rank 4 of a skill, you may choose a focus. This denotes a specific aspect of a skill you focus on and excel at. For example, you may focus on swords if your melee reaches 4 or possibly focus on identifying magical items when your insight reaches 4. If you are making a roll with a skill that is focused, and your focus applies to the roll, any 10 you roll counts as two successes. Skill descriptions list a few examples of what to focus on, but you are encouraged to come up with your own.</p>"
    + "<p>When determining a character’s starting skills you are given 24 points to assign to skills as you see fit. Skills cannot normally be raised above 5.</p>");

const attunementRanks: Rank[] = [
    new Rank(1, null, null, null, null),
    new Rank(2, null, null, null, null),
    new Rank(3, null, null, null, null),
    new Rank(4, null, null, null, null),
    new Rank(5, null, null, null, null),
];
export const skillAnimals: RankOption = new RankOption("Animal Handling", skillCategory, duplicateRankArray(attunementRanks),
    "This skill denotes your talent in working with animals. You might make an animal handling roll if you are attempting to calm down an agitated beast or convincing your warhorse that running towards the dragon is a good idea."
    + "< p > <b>Focus Examples: </b> mounts, domestic animals, war beasts, mounted combat, taming</p >");
export const skillAthletics: RankOption = new RankOption("Athletics", skillCategory, duplicateRankArray(attunementRanks),
    "Skill that covers jumping, climbing, swimming, acrobatics, and other physical activities. Some examples of athletic rolls are jumping over a chasm, balancing over a tightrope or swimming."
    + "< p > <b>Focus Examples: </b> marathon running, long jumping, swimming, rock climbing</p >");
export const skillBrawl: RankOption = new RankOption("Brawl", skillCategory, duplicateRankArray(attunementRanks),
    "Skill in fighting using your body or extreme close ranged weaponry.  This covers unarmed attacks, wrestling, and weapons that are basically an extension of your fists, such as brass knuckles or katars."
    + "< p > <b>Focus Examples: </b> bar fighting, wrestling, boxing, martial arts, katars</p >");
export const skillCraft: RankOption = new RankOption("Craft", skillCategory, duplicateRankArray(attunementRanks),
    "When you put points into craft, choose what you are learning to craft. Some examples would be blacksmithing, alchemy, leatherworking or tailoring. You can spend 5 experience to learn a new craft. This can be done as many times as you would like. Once you reach rank 4 of Craft, you don’t pick a focus like normal skills. Instead, you automatically gain the benefit of a focus for all craft rolls.");
export const skillDeception: RankOption = new RankOption("Deception", skillCategory, duplicateRankArray(attunementRanks),
    "Skill that involves all forms of lying. The ability to lie and get away with it, both with your words and your actions.  An example of a deception roll is to convince a village that you are actually a kobold in disguise (assuming you aren’t actually a kobold in disguise)."
    + "< p > <b>Focus Examples: </b> tall tales, misdirection, believable stories</p >");
export const skillDiscipline: RankOption = new RankOption("Discipline", skillCategory, duplicateRankArray(attunementRanks),
    "Innate ability to buckle down when the going gets tough and keep your cool. You might need to make a discipline check to resist a fear effect or to keep from attacking someone you don’t like."
    + "< p > <b>Focus Examples: </b> concentration, resolve, fearless</p >");
export const skillIntimidate: RankOption = new RankOption("Intimidate", skillCategory, duplicateRankArray(attunementRanks),
    "Skill in coercing people to do what you want them to do. You might make an intimidation roll when trying to convince somebody to give you all of their belongings after threatening their life or to subtlety flaunt your muscles while you tell a creature how unfortunate it would be if they had an accident."
    + "< p > <b>Focus Examples: </b> yelling, scowling, torture, daunting presence</p >");
export const skillInsight: RankOption = new RankOption("Insight", skillCategory, duplicateRankArray(attunementRanks),
    "Skill in sensing things as how they truly are. Can be used to detect magic, recognize lies, identify the function of magic items or to determine an objects value."
    + "< p > <b>Focus Examples: </b> Magic sense, detect lies, appraiser</p >");
export const skillInvestigation: RankOption = new RankOption("Investigation", skillCategory, duplicateRankArray(attunementRanks),
    "Ability to thoroughly examine an item, an area, or any other thing you might need to inspect. You might make an investigation roll if trying to find the device that opens a secret door or to find the trigger for a trap."
    + "< p > <b>Focus Examples: </b> small details, following a lead, hidden caches, contraband</p >");
export const skillKnowledge: RankOption = new RankOption("Knowledge", skillCategory, duplicateRankArray(attunementRanks),
    "A collective of a creature’s learned knowledge. This is a broad skill. It covers the sciences, arts, and other basic education topics. It also covers lore and legends. It covers history. It covers the ability to research effectively, study thoroughly and have good bookkeeping skills. You might need to make an knowledge roll when seeing if your character knows the basic history of your kingdom or when attempting to research the weaknesses of an ancient dragon."
    + "< p > <b>Focus Examples: </b> the sciences, myths and legends, research</p >");
export const skillLeadership: RankOption = new RankOption("Leadership", skillCategory, duplicateRankArray(attunementRanks),
    "Skill in leading others. The more ranks you have, the more likely people are going to listen to what you have to say and follow your commands. You might need to make a leadership roll to direct troops in battle or to convince a warlord you are worthy to give him commands."
    + "< p > <b>Focus Examples: </b> battlefield command, bringing out the best in others, ritual leader</p >");
export const skillMedicine: RankOption = new RankOption("Medicine", skillCategory, duplicateRankArray(attunementRanks),
    "Knowledge of medicine and basic first aid. You might have to make a medicine roll if attempting to stabilize a creature or to determine what disease a creature is currently afflicted with."
    + "< p > <b>Focus Examples: </b> medicinal herbs, field trauma, surgery, holistic techniques</p >");
export const skillMelee: RankOption = new RankOption("Melee", skillCategory, duplicateRankArray(attunementRanks),
    "Ability to use melee weapons. This covers swords, axes, hammers, spears, and any other melee weapon that doesn't use brawl. It also covers general knowledge of said weapons or how to clean and care for them."
    + "< p > <b>Focus Examples: </b> swords, defensive maneuvers, axes</p >");
export const skillPerception: RankOption = new RankOption("Perception", skillCategory, duplicateRankArray(attunementRanks),
    "Skill in finding or noticing physical things around you.  Whereas Investigation may be used to thoroughly search an area, Perception is your skill at picking up key details with a cursory glance. Likewise, where insight is used to identify magical effects, such as seeing through an illusion, perception covers the physical side of the world."
    + "< p > <b>Focus Examples: </b> peripheral movement, patterns, immediate threats</p >");
export const skillPerform: RankOption = new RankOption("Perform", skillCategory, duplicateRankArray(attunementRanks),
    "When you put points into perform, choose your performance area. Some examples would be dancing, singing, or playing a specific instrument. You can spend 5 experience to learn a new performance. This can be done as many times as you would like. Once you reach rank 4 of Perform,  you don’t pick a focus like normal skills. Instead, you automatically gain the benefit of a focus for all perform rolls.");
export const skillPersuasion: RankOption = new RankOption("Persuasion", skillCategory, duplicateRankArray(attunementRanks),
    "Ability to manipulate a conversation or speech in your favor, to encourage others to agree with your ideas and philosophies, and to convince others to do something they may not be inclined to do normally."
    + "< p > <b>Focus Examples: </b> crowd manipulation, haggling, motivational speaker</p >");
export const skillRanged: RankOption = new RankOption("Ranged", skillCategory, duplicateRankArray(attunementRanks),
    "Skill in using ranged weapons. This covers slings, bows, crossbows, guns, and thrown weapons."
    + "< p > <b>Focus Examples: </b> bows, firearms, throwing weapons, artillery</p >");
export const skillSkulduggery: RankOption = new RankOption("Skulduggery", skillCategory, duplicateRankArray(attunementRanks),
    "Ability to fence stolen goods, pick locks, cheat at games of chance, use sleight of hand, trick others through your actions and in general most mischievous or illegal actions."
    + "< p > <b>Focus Examples: </b> pickpocketing, lockpicking, fencing</p >");
export const skillSpellcasting: RankOption = new RankOption("Spellcasting", skillCategory, duplicateRankArray(attunementRanks),
    "Skill in casting spells. Spellcasting is used whenever a fireball is slung or when a creature teleports away. Generally speaking spells are tied to the Arcane, Divine and Nature spheres. This skill also covers spell theory and general magic knowledge."
    + "< p > <b>Focus Examples: </b> Fire spells, arcane spells, damage spells</p >");
export const skillStealth: RankOption = new RankOption("Stealth", skillCategory, duplicateRankArray(attunementRanks),
    "Ability to move about unseen, unheard, and unnoticed. Stealth can also be used to obscure your actions from others or to disguise yourself."
    + "< p > <b>Focus Examples: </b> silence, camouflage, blending in</p >");
export const skillSurvival: RankOption = new RankOption("Survival", skillCategory, duplicateRankArray(attunementRanks),
    "Ability to live off the land.  Small game hunting and trapping, identifying edible plants, locating sources of fresh and clean water, and tracking the trails left by other creatures in the wild."
    + "< p > <b>Focus Examples: </b> tracking, hunting, finding water</p >");
export const skillTechnology: RankOption = new RankOption("Technology", skillCategory, duplicateRankArray(attunementRanks),
    "Knowledge of gears, guns, gadgets, and gizmos."
    + "< p > <b>Focus Examples: </b> simple machines, mechanical repair, firearms</p >");

export const skills: RankOption[] = [
    skillAnimals,
    skillAthletics,
    skillBrawl,
    skillCraft,
    skillDeception,
    skillDiscipline,
    skillIntimidate,
    skillInsight,
    skillInvestigation,
    skillKnowledge,
    skillLeadership,
    skillMedicine,
    skillMelee,
    skillPerception,
    skillPerform,
    skillPersuasion,
    skillRanged,
    skillSkulduggery,
    skillSpellcasting,
    skillStealth,
    skillSurvival,
    skillTechnology,
]

export const skillWeapon: RankOption = new RankOption("Weapon", skillCategory, duplicateRankArray(attunementRanks), "The skill for the weapon in use.")

export const psuedoSkills: RankOption[] = skills.slice(0).concat(skillWeapon);