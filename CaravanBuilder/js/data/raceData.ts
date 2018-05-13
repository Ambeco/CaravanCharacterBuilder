import { SheetFeature } from "../types/SheetFeature.js";
import { Choice } from "../types/Choice.js";
import { ChoiceSet } from "../types/ChoiceSet.js";
import { ChoiceOption } from "../types/ChoiceOption.js";
import { OptionCategory } from "../types/OptionCategory.js";

const raceCategory: OptionCategory = new OptionCategory("Race", "Select the race of your character");

const raceHuman = new Choice("Human",
    "Humans are the driving force of the world. They are an adaptable race, able to thrive in a wide range of conditions, and you would be hard pressed to go anywhere in the world and not encounter humans.",
    new Set<SheetFeature>([
        new SheetFeature("Human Perseverance", "You gain +1 maximum resolve")
    ])
);
const raceElf = new Choice("Elf",
    "Elves are intelligent and perceptive creatures. They tend to be taller than humans and have large, pointed ears. They are exceptionally swift.",
    new Set<SheetFeature>([
        new SheetFeature("Elven Swiftness", "You can perform one move action for 1 less AP on each of your turns.")
    ])
);
const raceDwarf = new Choice("Dwarf",
    "Dwarves are short and stout. Partially because of their center of gravity being much lower and partially because they are generally stubborn as all hell, dwarves have a hard time being moved.",
    new Set<SheetFeature>([
        new SheetFeature("Dwarven Stubbornness", "Cannot be forcefully moved and movement speed can’t be reduced (this does not make you immune to being restrained) This includes the movement penalty from going over the weight limit. You lose this benefit if you have 6 or more over your carry limit.")
    ])
);
const raceOrc = new Choice("Orc",
    "Orcs are ferocious creatures. Typically taller and larger than humans, they tend to be pretty intimidating. Orcs have green or grey skin color. They are very strong, but tend to be less intelligent than the other races.",
    new Set<SheetFeature>([
        new SheetFeature("Orcish Resilience", "You gain +2 hit points")
    ])
);
const raceGolem = new Choice("Golem",
    "Golems are rather large creatures seemingly made of stone. These creatures were accidentally created when a large arcane ritual went wrong. Golems are a pretty rare sight in the world and, because of their recent existence, they lack the understanding of etiquette that others possess. Regardless, they are immensely strong and surprisingly dexterous.",
    new Set<SheetFeature>([
        new SheetFeature("Unbreakable", "+1 titan soak")
    ])
);
const raceGnome = new Choice("Gnome",
    "Gnomes are very small creatures. They look like short humans. Gnomes, however, are incredibly smart, but their small size makes them lack in strength. They also have a natural resistance to magic.",
    new Set<SheetFeature>([
        new SheetFeature("Magic Resistance", "Once per rest, you may decide to ignore the effects of a single [Spell] ability that targets you.")
    ])
);
const raceErrati = new Choice("Errati",
    "An uncommon race that resembles large stickbugs. Most errati are subservient to a hivemind social structure, however many of the race are granted autonomy as part of their role in serving the queen and the hive. Some use this freedom to leave the hive forever, but most maintain ties in some regards.",
    new Set<SheetFeature>([
        new SheetFeature("Extra Arms", "You have two extra arms that can assist you with tasks. Though unable to properly wield weapons in combat, these arms can be used to assist in changing weapons, drawing and drinking potions, and other simple tasks. Once per round on your turn, you may draw, stow, or use any combination of two items for no AP cost.")
    ])
);
const raceFlora = new Choice("Flora",
    "Flora resemble lithe saplings twisted into a humanoid form. Though they have many plant-like qualities, they are more closely related to gnomes than to plants. This includes a basic animal anatomy under their bark-like and leafy exterior.",
    new Set<SheetFeature>([
        new SheetFeature("Naturalist", "Once per day, for 2 AP, you can harvest leaves and herbs from yourself to make a single potion for free. It can be drank right away for no AP cost or stored for up to 24 hours, afterwards it expires and loses all bonuses. It costs 1 AP to drink the potion if you choose to store it for later. You may choose from 3 potions listed here:<ul><li><b>Healing Potion</b>:You regain 10 health, does not countas a heal.<li><b>Potency Potion</b>: You gain +2 potency on all of your abbilities for two turns.<li><b>Haste Potion</b>:  You may perform one move action each turn for no AP cost for two turns.")
    ])
);
const raceImmortal = new Choice("Immortal",
    "Not a true race, any individual may become immortal. Whether through an accident of fate, divine heritage, or a pact with demonic forces, an immortal is someone blessed (or cursed) to live forever.<b/>An immortal can be killed.A spear through the heart or having their head removed will still result in death.However their body does not age and will naturally live forever.<b/>An immortal looks just like their base race, but gain none of the racial benefits associated with their base race.Instead, they gain the following trait:",
    new Set<SheetFeature>([
        new SheetFeature("Time is on your side", "You do not age, and will naturally live forever. In addition, the number of times you can be healed between full rests is increased by one.")
    ])
);
const raceShaitan = new Choice("Shaitan",
    "The shaitan are descendents of demons.  Though human in appearance normally, they can draw on their demonic bloodline to take on horrific and powerful forms.",
    new Set<SheetFeature>([
        new SheetFeature("Demonic Adaptation", "You can draw on your demonic blood to gain tremendous power or influence for a short time. This transformation requires no AP and can be done any time. The transformation lasts for an hour. Your base attributes remain the same, however you may temporarily raise one attribute of your choice by two ranks (this can go above 5) at the cost of lowering one attribute of your choice by one rank. If the attribute you choose to lower would drop below 1, you must choose a different attribute instead.<b/>These changes manifest in horrific and terrifying ways.  If you were to increase Brawn, for example, you may become a massive brute with horns and spikes.  If you were to increase Presence, your eyes may glow a demonic red and your toothy grin may beguile those around you.  When using this ability, briefly describe to the table how your transformation manifests. You may only transform in this way once per rest.")
    ])
);
const raceLarva = new Choice("Larva",
    "Larva have no society of their own. Instead, they mingle among the other races, blending in with their shapeshift ability. They reproduce by budding, which is a process that takes several days and a lot of calories.  But at the end a young child who appears to be 6 or 7 is “born”",
    new Set<SheetFeature>([
        new SheetFeature("Shapeshift", "For 5 AP you can change your appearance to look like any other humanoid race. If you have studied someone for at least a minute, you can choose to look exactly like them, otherwise you take on a generic appearance for the race you choose.")
    ])
);
const kithDescription = "Kith are an off breed of humans that somehow evolved to have some traits of animals. It is still a mystery how Kith can represent any number of different beasts but still can reproduce.<b/>Choose the animal you are based on.Although humanoid, you will have traits of the chosen animal, such as ears, tails, fur, etc.The full extent of what animal traits you have is completely up to you.";
const raceKithBrawn = new Choice("Kith (Brawn)",
    kithDescription,
    new Set<SheetFeature>([
        new SheetFeature("Brawn", "You gain +1 health multiplier.")
    ])
);
const raceKithDeterity = new Choice("Kith (Deterity)",
    kithDescription,
    new Set<SheetFeature>([
        new SheetFeature("Deterity", "You can move up to 2 squares for no AP cost on your turn.")
    ])
);
const raceKithPresence = new Choice("Kith (Presence)",
    kithDescription,
    new Set<SheetFeature>([
        new SheetFeature("Presence", "Gain +1 die on all social based interactions.")
    ])
);
const raceKithSubterfuge = new Choice("Kith (Subterfuge)",
    kithDescription,
    new Set<SheetFeature>([
        new SheetFeature("Subterfuge", "Gain +1 die on all stealth, skulduggery, and deception rolls.")
    ])
);
const raceKithSenses = new Choice("Kith (Senses)",
    kithDescription,
    new Set<SheetFeature>([
        new SheetFeature("Senses", "The difficulty of perception rolls are reduced by 1 for you.")
    ])
);
const raceKithIntellect = new Choice("Kith (Intellect)",
    kithDescription,
    new Set<SheetFeature>([
        new SheetFeature("Intellect", "You can use Intellect instead of the standard attribute for all [Basic] rolls.")
    ])
);
export const races: ChoiceSet = new ChoiceSet(
    new Set<Choice>([
        raceHuman,
        raceElf,
        raceDwarf,
        raceOrc,
        raceGolem,
        raceGnome,
        raceErrati,
        raceFlora,
        raceImmortal,
        raceShaitan,
        raceLarva,
        raceKithBrawn,
        raceKithDeterity,
        raceKithPresence,
        raceKithSubterfuge,
        raceKithSenses,
        raceKithIntellect,
    ]),
    true);
export const raceOption = new ChoiceOption("race", raceCategory, races);