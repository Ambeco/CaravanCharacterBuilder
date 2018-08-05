import { Rank } from "../types/Rank.js";
import { OptionCategory } from "../types/OptionCategory.js";
import { RankOption } from "../types/RankOption.js";
import { Augment } from "../types/Augment.js";
import { Cost } from "../types/Cost.js";
import { Currency } from "../types/Currency.js";
import { currencyAp } from "./CurrencyData.js";
import { TagRequirement } from "../types/Requirement";
import { tagTank, tagSkulker, tagArcane, tagNature } from "./tagData";


export const specializationCategory: OptionCategory = new OptionCategory("Specializations",
    "<p>Ways to specialize your character and abilities</p>");

//TODO: Add tags
const augmentSetDefenderShieldMastery: Set<Augment> = new Set<Augment>([
    new Augment("Cower", new Cost(1, currencyAp), "Targets affected by your Taunt deal 3 less damage with all of their attacks. This augment can be applied multiple times."),
    new Augment("Punishment", new Cost(1, currencyAp), "If any target affected by your Taunt attacks one of your allies, you may immediately perform a [Basic] ability for no AP cost."),
    new Augment("Presence", new Cost(1, currencyAp), "The duration of Taunt is doubled. This augment can be applied multiple times."),
    new Augment("All Alone", new Cost(1, currencyAp), "Targets affected by your Taunt cannot benefit from any bonuses gained from having nearby allies and cannot help make a target be flanked."),
]);
const augmentSetDefenderTrueDefender: Set<Augment> = new Set<Augment>([
    new Augment("Quickened Interception", new Cost(1, currencyAp), "Intercept costs no AP"),
    new Augment("Deadly Interception", new Cost(1, currencyAp), "Directly after using Intercept, you may perform a [Basic] ability for 2 less AP cost. The target of the ability must be the target of Intercept. The [Basic] ability and Intercept are considered to be one action."),
]);
export const specializationDefender: RankOption = new RankOption("Defender", specializationCategory,
    [
        new Rank(1, "Shield Mastery", "Shields you wear gain +1 damage and the Concussive property. Shields also lose the unwieldy property. In addition, you gain a list of augments that you can apply to the ability, Taunt.", augmentSetDefenderShieldMastery),
        new Rank(2, "Dauntless", "You gain an extra 2 AP each turn that can only be spent on [Out-of-Turn] actions. In addition, you gain +2 titan soak. Soak from armor you wear is doubled."),
        new Rank(3, "True Defender", "Taunt’s range is increased by 30’ and can affect a number of additional creatures equal to your ranks in intimidate. In addition, you gain a list of augments you can apply to the ability, Intercept.", augmentSetDefenderTrueDefender),
    ],
    "[Tank]");

export const specializationSentinel: RankOption = new RankOption("Sentinel", specializationCategory,
    [
        new Rank(1, "Aware", "When you are on watch you automatically succeed on all perception rolls. Your initiative score is increased by 2."),
        new Rank(2, "Astute", "The difficulty of Parry and Dodge is reduced by 1 for you. You may perform any basic sensory action (such as looking for an invisible creature) for no AP once on each of your turns."),
        new Rank(3, "Sixth Sense", "You gain a blindsense out to 10’ (You know the presence of all creatures out to 10’, even if they are hidden or invisible.) You ignore any penalties gained from creatures being hidden from you, being obscured or being invisible."),
    ],
    "[Tank]");

const augmentSetTitanUltimateWarrior: Set<Augment> = new Set<Augment>([
    new Augment("Confidence", new Cost(1, currencyAp), "You gain an additional 20 temporary hit points. This augment can be applied multiple times."),
    new Augment("Poise", new Cost(1, currencyAp), "You gain +5 AP immediately"),
    new Augment("Composure", new Cost(1, currencyAp), "You regain 1 resolve."),
]);
const augmentSetTitanUltimateTitan: Set<Augment> = new Set<Augment>([
    new Augment("Engerized", new Cost(1, currencyAp), "Your maximum AP is increased by 5, not 3."),
    new Augment("Long-lasting", new Cost(1, currencyAp), "The difficulty is reduced by 2 and you gain two automatic successes on the roll."),
    new Augment("Commander", new Cost(1, currencyAp), "Your companions gain the same benefits for the duration."),
]);
export const specializationTitan: RankOption = new RankOption("Titan", specializationCategory,
    [
        new Rank(1, "Ultimate Parry", "You no longer need to roll for the ability, Parry. Instead, you automatically succeed and reduce the attack to 0 successes. In addition, you may perform two additional [Out-of-Turn] actions each round."),
        new Rank(2, "Ultimate Warrior", "You gain +1 titan soak, +1 health multiplier, +1 HP, +1 heal per day and +1 maximum resolve. In addition, you gain a few augments for the ability, Second Wind.", augmentSetTitanUltimateWarrior),
        new Rank(3, "Ultimate Titan", "Your unconscious health is tripled. (After all other modifiers). You can spend resolve to heal yourself when unconscious. The healing puts you at 1 health. This does not count as a heal. You gain a few augments for the ability, Avatar of Death.", augmentSetTitanUltimateTitan),
    ],
    "[Tank]",
    [new TagRequirement(6, tagTank),]);

export const specializationBladedancer: RankOption = new RankOption("Bladedancer", specializationCategory,
    [
        new Rank(1, "Graceful", "Your actions no longer can provoke [Out-of-Turn] actions. In addition, your movement speed is increased by 2"),
        new Rank(2, "Heightened Reactions", "You gain +2 AP per round that you may only spend on [Out-of-Turn] abilities. In addition, you can make one additional [Out-of-Turn] action each round."),
        new Rank(3, "Dancer", "All [Stance] abilities cost 1 less AP for you. In addition, anytime you use a [Stance] ability, you gain 5 temporary health. These hit points cannot stack with themselves."),
    ],
    "");

const augmentSetTacticianBasicManeuvers: Set<Augment> = new Set<Augment>([
    new Augment("Pin", new Cost(1, currencyAp), "If the attack deals damage, the target is restrained until the end of your next turn."),
    new Augment("Trip", new Cost(1, currencyAp), "If the attack deals damage, the target is knocked prone."),
    new Augment("Dance", new Cost(1, currencyAp), "If the attack deals damage, you may move the target 5’ in any direction. This augment can be applied multiple times."),
]);
const augmentSetTacticianComplexManeuvers: Set<Augment> = new Set<Augment>([
    new Augment("Provoke", new Cost(1, currencyAp), "If the attack deals damage, the target suffers two automatic failures on all attacks against creatures other than you until the end of your next turn."),
    new Augment("Dirty Fighting", new Cost(1, currencyAp), "If the attack deals damage, the target is blinded until the end of your next turn."),
    new Augment("Occupy", new Cost(1, currencyAp), "If the attack deals damage, the target cannot perform [Out-of-Turn] actions until the end of your next turn."),
]);
const augmentSetTacticianMasterManeuvers: Set<Augment> = new Set<Augment>([
    new Augment("Cleave", new Cost(1, currencyAp), "The ability also affects another creature within 5’ of the target."),
    new Augment("Bash", new Cost(1, currencyAp), "If the attack deals damage, the target is stunned until the end of your next turn."),
    new Augment("Nerve Pinch", new Cost(1, currencyAp), "If the attack deals damage, the target is paralyzed until the end of your next turn. This augment can only be applied once per encounter."),
]);
export const specializationTactician: RankOption = new RankOption("Tactician", specializationCategory,
    [
        new Rank(1, "Basic Maneuvers", "You learn a few new augments that can be applied to any [Weapon] abilities you perform.", augmentSetTacticianBasicManeuvers),
        new Rank(2, "Complex Maneuvers", "You learn a few new augments that can be applied to any [Weapon] abilities you perform.", augmentSetTacticianComplexManeuvers),
        new Rank(3, "Master Maneuvers", "You learn a few new augments that can be applied to any [Weapon] abilities you perform.", augmentSetTacticianMasterManeuvers),
    ],
    "");

const augmentSetTempestDualWielder: Set<Augment> = new Set<Augment>([
    new Augment("Dual Strike", new Cost(1, currencyAp), "After resolving the effects of the ability, you may choose to deal the damage of your other held weapon to any creature within range. This damage is dealt as if you were to make a standard weapon attack with that weapon, but gain no bonus damage from successes on the roll. This cannot be parried or dodged. This augment can be applied multiple times, each time applying the damage as one attack (unless targeting different creatures)"),
]);
export const specializationTempest: RankOption = new RankOption("Tempest", specializationCategory,
    [
        new Rank(1, "Quick Draw", "You may draw up to two weapons on your turn for no AP cost. In addition, if you are wielding two ranged weapons, you can now parry as if you were wielding a melee weapon."),
        new Rank(2, "Dual Parry", "While wielding two weapons, the AP cost to parry is reduced by 2 (minimum of 1)"),
        new Rank(3, "Dual Wielder", "You deal 3 extra damage with all of your attacks while you are wielding two weapons. In addition, you gain a new augment that can be applied to any [Weapon] ability.", augmentSetTempestDualWielder),
    ],
    "");

const augmentSetBerserkerFury: Set<Augment> = new Set<Augment>([
    new Augment("Tough", new Cost(1, currencyAp), "You gain +5 titan soak for the duration. This augment can be applied multiple times."),
    new Augment("Angry", new Cost(1, currencyAp), "You deal +5 damage on all attacks for the duration. This augment can be applied multiple times."),
    new Augment("Tireless", new Cost(1, currencyAp), "You ignore the effects of exhaustion for the duration"),
    new Augment("Awake", new Cost(1, currencyAp), "If you reach 0 health while raging, you do not go unconscious. Instead your health stays at 0 until the duration ends. Once the rage ability wears off, you immediately go unconscious if still at 0 health."),
    new Augment("Fast", new Cost(1, currencyAp), "You may perform one move action for no AP cost on your turns for the duration."),
    new Augment("Resist", new Cost(2, currencyAp), "You are immune to all adverse effects for the duration"),
    new Augment("Frenzy", new Cost(3, currencyAp), "You fly into a bloodthirsty frenzy. You gain the benefits of all the augments above for the duration, but you see red and attack everything in sight. For the duration, you attack whatever creature is closest to you. If two or more creatures are tied for closest, choose the creature at random. If there are no creatures nearby to attack, you instead will attempt to destroy anything you can, such as breaking down doors, smashing holes through walls or shattering glass. When the rage effect wears off, you immediately fall unconscious for one hour."),
]);
export const specializationBerserker: RankOption = new RankOption("Berserker", specializationCategory,
    [
        new Rank(1, "Fury", "You learn an assortment of augments that can be used on Rage.", augmentSetBerserkerFury),
        new Rank(2, "Tireless Warrior", "You may ignore the penalty of one application of exhaustion. In addition, you gain +2 HP."),
        new Rank(3, "Unending Wrath", "Rage no longer costs any AP and adds your full Brawn to your damage. In addition, whenever you would gain exhaustion because of Rage, you gain one less application."),
    ],
    "");

export const specializationMarauder: RankOption = new RankOption("Marauder", specializationCategory,
    [
        new Rank(1, "Titan Grip", "You can now wield two-handed weapons in one hand. (Does not apply to bows) The AP cost of all two-handed melee weapons is decreased by 2 (minimum of 1)"),
        new Rank(2, "Endless Rage", "Rage can be activated at any time, including out of turn. You no longer need to roll to activate Rage. The duration of Rage now lasts until the end of the encounter. Whenever you would gain exhaustion because of Rage, you gain one less application."),
        new Rank(3, "Godlike Strength", "Whenever an attack you make would add your brawn to increase the damage, you add your brawn two more times. In addition, you gain +2 titan soak."),
    ],
    "");

const augmentSetPoisonerPickYourPoison: Set<Augment> = new Set<Augment>([
    new Augment("Highly Concentrated Poison", new Cost(1, currencyAp), "Attack deals +3 poison damage. This augment can be applied multiple times."),
    new Augment("Debilitating Poison", new Cost(1, currencyAp), "Attacks that deal damage stun the target until the end of their next turn. Creatures with at least two ranks in any combination of [Poison] specializations are immune to this effect."),
    new Augment("Despair’s Bite", new Cost(1, currencyAp), "Attacks that deal damage cause the target to become afraid of everything until the end of their next turn. Creatures with at least two ranks in any combination of [Poison] specializations are immune to this effect."),
    new Augment("Reaper’s Touch", new Cost(1, currencyAp), "Attacks that deal damage cause the target to become paralyzed until the end of their next turn. Creatures with at least two ranks in any combination of [Poison] specializations are immune to this effect. This augment can only be applied once per encounter."),
]);
export const specializationPoisoner: RankOption = new RankOption("Poisoner", specializationCategory,
    [
        new Rank(1, "Quick Applications", "It costs you 1 less AP to apply oils and poisons (such as the ability, Envenomed Weapons) to your weapons."),
        new Rank(2, "Pick Your Poison", "You learn a number of augments, listed below, that you can apply to any [Poison] ability.", augmentSetPoisonerPickYourPoison),
        new Rank(3, "Poison Master", "Your [Poison] abilities deal 3 extra damage. When making oil brews, the price to make them is reduced by half and you gain double the normal amount of applications. In addition, whenever you apply oils or poisons to your weapons, it automatically applies to any other weapon you are wielding. This only counts as one application."),
    ],
    "[Poison]");

export const specializationAdventurer: RankOption = new RankOption("Adventurer", specializationCategory,
    [
        new Rank(1, "Gear Up", "The AP cost to drink potions, poultices and elixirs is reduced by 1. Your carrying capacity is increased by 3. Once per day when you find gold through adventuring, you find an extra 250 that nobody else notices."),
        new Rank(2, "Basic Training", "Your [Basic] abilities gain +1 potency. You gain +1 to movement speed. You gain +1 to initiative. You gain +1 soak. You gain +1 HP."),
        new Rank(3, "Experienced", "Anytime you purchase the first rank of anything, it costs 1 less experience. In addition, all abilities you know gain the [Basic] label"),
    ],
    "");

const augmentSetAssassinWeakPoint: Set<Augment> = new Set<Augment>([
    new Augment("Weak Point", new Cost(1, currencyAp), "This can be used on any single-target ability that deals damage. If the target is engaged with an enemy within 5’ or if you have any amount of automatic successes on the roll, add half of your intellect to the damage. If both conditions apply, add all of your intellect."),
]);
export const specializationAssassin: RankOption = new RankOption("Assassin", specializationCategory,
    [
        new Rank(1, "Sneak Attack", "If you attack a creature while hidden from them, the attack deals +3 damage."),
        new Rank(2, "Weak Point", "You gain an augment that can be applied to any single-target ability that deals damage.", augmentSetAssassinWeakPoint),
        new Rank(3, "Killer", "Once per round, after dropping a creature to 0 health, you may perform a [Basic] ability for no AP. Weak Point no longer costs an augment slot."),
    ],
    "[Skulker]");

const augmentSetShadowStalker: Set<Augment> = new Set<Augment>([
    new Augment("Prepared", new Cost(1, currencyAp), "Your next ability against the target on this turn gains +1 augment slot."),
    new Augment("Smoke Screen", new Cost(1, currencyAp), "All creatures within 5’ of you before and after you teleport become staggered until the end of your next turn."),
    new Augment("Versatile", new Cost(1, currencyAp), "You no longer need a target to teleport next to, instead you can teleport to any square within range. The AP cost is increased by 1."),
]);
export const specializationShadow: RankOption = new RankOption("Shadow", specializationCategory,
    [
        new Rank(1, "Hidden", "Attacking a creature while hidden from them grants you +2 automatic successes instead of just one."),
        new Rank(2, "Stalker", "The range of the ability, Ambush, is increased by 30’. In addition, you gain a few augments that can only be applied to the ability, Ambush.", augmentSetShadowStalker),
        new Rank(3, "Knife in the Dark", "Making an attack no longer automatically reveals you if you are hidden. The difficulty of all stealth rolls are reduced by 1."),
    ],
    "[Skulker]");

const augmentSetNightbladeStalker: Set<Augment> = new Set<Augment>([
    new Augment("Fast Blade", new Cost(1, currencyAp), "The AP cost is 0"),
    new Augment("Deadly", new Cost(1, currencyAp), "The potency is increased by 5. This augment can be applied multiple times."),
    new Augment("Death Surge", new Cost(2, currencyAp), "If the target dies, you gain 3 AP immediately. This augment can be applied multiple times."),
    new Augment("Fulfilling", new Cost(2, currencyAp), "If the target dies, you regain 1 resolve."),
    new Augment("Taste of Blood", new Cost(5, currencyAp), "If the target dies, you may use Assassinate again this encounter."),
]);
export const specializationNightblade: RankOption = new RankOption("Nightblade", specializationCategory,
    [
        new Rank(1, "Rogue", "The difficulty of all deception, investigation, skulduggery and stealth rolls are reduced by 1. You always benefit from a focus for each of those skills if they are at least at rank 4. If you spend at least an hour around a town, you can make 1000g. You must wait a week for the heat to die down before you can do this again. (Particularly big cities can be hit up 3 times per week.)"),
        new Rank(2, "Stalker", "You are always considered hidden and obscured from all creatures, even if they can “see” you. You also gain an assortment of augments that can be applied to the ability, Assassinate.", augmentSetNightbladeStalker),
        new Rank(3, "Deadly", "All of your abilities deal 5 more damage. Quarry no longer costs any AP to maintain. In addition, you may have up to three targets as your Quarry. Marked for Death is now usable once per encounter, rather than per rest. Takedown now costs 2 less AP and also causes the target to become paralyzed until the end of the target’s next turn."),
    ],
    "[Skulker]",
    [new TagRequirement(6, tagSkulker),]);

export const specializationGladiator: RankOption = new RankOption("Gladiator", specializationCategory,
    [
        new Rank(1, "Fight Through the Pain", "While you are currently suffering any amount of exhaustion, you gain +2 dice to all rolls."),
        new Rank(2, "I Like These Odds", "When you are flanked, you deal 2 extra damage with all attacks and may perform a [Basic] ability for no AP cost each round."),
        new Rank(3, "Signature Move", "Choose one [Basic] ability you know. You gain a separate version of that ability that becomes your signature move. It is the same as the original ability, but can only be used once per encounter, has +10 potency, +3 augment slots, +2 difficulty (maximum of 9) and costs 2 more AP (maximum of 7). Directly after using it, you gain either 10 or 20 temporary health, depending on if you failed the roll or if you succeeded the roll, respectively. You must appropriately name this ability and when using it shout out either the name or a witty one-liner."),
    ],
    "");

const augmentSetMyrmidonDeflect: Set<Augment> = new Set<Augment>([
    new Augment("Counter", new Cost(1, currencyAp), "If you succeed on the Parry roll and reduce the successes to zero, you may immediately perform a [Basic] ability for no AP cost against the attacker."),
    new Augment("Disarm", new Cost(1, currencyAp), "If you succeed on the Parry roll and reduce the successes to zero, the target drops whatever weapon was used to attack you. Only works when attack by a melee or brawl weapon."),
    new Augment("Reflect", new Cost(1, currencyAp), "If you succeed on the Parry roll and reduce the successes to zero, you may reflect the attack on to a creature of your choice within 30’ of you. The attack deals damage as if you didn’t reduce the successes with Parry. Only works when attacked by ranged attack. (This augment does not allow you to use Parry against ranged attacks.)"),
]);
const augmentSetMyrmidonMasterOfTheBlade: Set<Augment> = new Set<Augment>([
    new Augment("Feint", new Cost(1, currencyAp), "Your ability cannot be dodged or parried and the difficulty of the roll is reduced by 1. (minimum of 2) This augment can be applied multiple times."),
    new Augment("Disarming Strike", new Cost(1, currencyAp), "If you deal damage with the attack, you can force the target to drop one item of your choice that they are holding."),
]);
export const specializationMyrmidon: RankOption = new RankOption("Myrmidon", specializationCategory,
    [
        new Rank(1, "Defensive", "The defensive quality on weapons is increased by 1 for you. In addition, shortswords you wield gain the defensive quality."),
        new Rank(2, "Deflect", "Parry gains +1 augment slot. In addition, you gain a few augments that can only be applied to Parry.", augmentSetMyrmidonDeflect),
        new Rank(3, "Master of the Blade", "You can never be disarmed. You deal 3 extra damage with all attacks using weapons with the defensive trait. You gain two augments that can be applied to any ability you use with a weapon that has the defensive trait.", augmentSetMyrmidonMasterOfTheBlade),
    ],
    "");

const augmentSetWhisperSkewer: Set<Augment> = new Set<Augment>([
    new Augment("Remise", new Cost(1, currencyAp), "Your next [Weapon] ability this turn costs no AP."),
    new Augment("Feint", new Cost(1, currencyAp), "Your ability cannot be dodged or parried and the difficulty of the roll is reduced by 1. This augment can be applied multiple times."),
]);
export const specializationWhisper: RankOption = new RankOption("Whisper", specializationCategory,
    [
        new Rank(1, "Keep them at bay", "Rapiers you wield gain the defensive trait. The range of weapons with the thrown trait is increased by 30’"),
        new Rank(2, "Skewer", "Attacks against creatures with 0 soak (determined after factoring in abilities and attacks that bypass soak) deal 5 extra damage. You gain two augments that can be applied to any ability you use with a weapon that has the penetrating trait.", augmentSetWhisperSkewer),
        new Rank(3, "Puncture", "Attacks you do that have the penetrating quality now pierce titan soak. Creatures cannot benefit from the penetrating trait against you."),
    ],
    "");

const augmentSetReaverRend: Set<Augment> = new Set<Augment>([
    new Augment("Bleed", new Cost(1, currencyAp), "The target begins to bleed. At the start of the target’s turn, they take unsoakable damage equal to the base AP cost of the ability used. This is considered a bleed effect. This effect stacks with additional applications. This augment can be applied multiple times."),
    new Augment("Devastate", new Cost(1, currencyAp), "The attack deals triple damage. You may only activate this augment once per encounter."),
    new Augment("Hamstring", new Cost(1, currencyAp), "The target’s movement speed is reduced by 2 per augment slot used. This augment can be applied multiple times."),
]);
export const specializationReaver: RankOption = new RankOption("Reaver", specializationCategory,
    [
        new Rank(1, "Raid", "Once per day, when going through the pockets of a corpse, you find 250g that only you notice. You can ask for small favors or for non-expensive items from townsfolk. Most standard townsfolk will fear retribution and follow your commands “willingly”."),
        new Rank(2, "Rend", "You gain a few new augments that can be applied to any [Melee] abilities.", augmentSetReaverRend),
        new Rank(3, "Pillage", "You may perform one move action on each of your turns for no AP cost. All  abilities performed through an axe (hand axe, battle axe or greataxe) gain +1 augment slot and +2 potency."),
    ],
    "");

const augmentSetDreadnoughtPowerfulSwings: Set<Augment> = new Set<Augment>([
    new Augment("Crush", new Cost(1, currencyAp), "The target takes extra damage equal to twice the soak value of the target’s armor. This augment can be applied multiple times."),
    new Augment("Powerful Swings", new Cost(1, currencyAp), "This attack cannot be parried and gains +2 potency."),
    new Augment("Forceful Swings", new Cost(1, currencyAp), "The target is knocked prone"),
]);
export const specializationDreadnought: RankOption = new RankOption("Dreadnought", specializationCategory,
    [
        new Rank(1, "Smash", "The difficulty decrease due to a target within 5’ being prone is increased to 2."),
        new Rank(2, "Powerful Swings", "You gain a few new augments that can be applied to any ability used with a weapon with the concussive trait.", augmentSetDreadnoughtPowerfulSwings),
        new Rank(3, "Curb Stomp", "[Weapon] Abilities used against prone creatures gain +1 augment slot and +3 potency. You cannot be knocked prone."),
    ],
    "");

const augmentSetDragoonKeepAtArm_sReach: Set<Augment> = new Set<Augment>([
    new Augment("Run Through", new Cost(1, currencyAp), "A creature within 5’ of the target takes half the damage the ability dealt. This augment can be applied multiple times."),
    new Augment("Pin", new Cost(1, currencyAp), "The target is restrained until the end of your next turn."),
    new Augment("Long Arm", new Cost(1, currencyAp), "The ability cannot be dodged and gains +2 potency. This augment can be applied multiple times."),
]);
export const specializationDragoon: RankOption = new RankOption("Dragoon", specializationCategory,
    [
        new Rank(1, "Graceful", "Armor you wear is considered to have 2 less weight"),
        new Rank(2, "Keep at Arm’s Reach", "You gain a few new augments that can be applied to any ability performed using weapons with the reach trait.", augmentSetDragoonKeepAtArm_sReach),
        new Rank(3, "Pierce the Veil", "Spears or halberds you wield now have the Penetrating quality. All abilities performed using a weapon with the reach trait gains +1 augment slot."),
    ],
    "");

const augmentSetWeaponMasterArmory: Set<Augment> = new Set<Augment>([
    new Augment("Powerful Attacks", new Cost(1, currencyAp), "+3 potency. This augment can be applied multiple times."),
]);
const augmentSetWeaponMasterPracticeMakesPerfect: Set<Augment> = new Set<Augment>([
    new Augment("Precise Strikes", new Cost(1, currencyAp), "If you get 5 or more successes on the roll, the attack ignores all soak, including titan soak, cannot be parried or dodged and deals +3 damage."),
]);
const augmentSetWeaponMasterPerfectCounter: Set<Augment> = new Set<Augment>([
    new Augment("Sunder Arms", new Cost(2, currencyAp), "You destroy one of the target’s wielded weapons. This augment can be applied multiple times."),
]);
export const specializationWeaponMaster: RankOption = new RankOption("Weapon Master", specializationCategory,
    [
        new Rank(1, "Armory", "Up to five weapons you carry have no weight for you. In addition, you can store or bring out weapons for no AP cost. You gain an augment that can be applied to any [Weapon] ability you perform.", augmentSetWeaponMasterArmory),
        new Rank(2, "Practice Makes Perfect", "You gain the benefit of Focus for all Brawl, Melee and Ranged rolls if you have at least 4 ranks in those skills. You gain an augment that can be applied to any [Weapon] ability you perform.", augmentSetWeaponMasterPracticeMakesPerfect),
        new Rank(3, "Perfect Counter", "While wielding a specific weapon, you are immune to damage from that type of weapon (as in, wielding a rapier makes you immune to rapiers) In addition, all of your [Weapon] abilities gain +1 augment slot. You gain an augment that can be applied to any [Weapon] ability you perform.", augmentSetWeaponMasterPerfectCounter),
    ],
    "");

export const specializationTinkerer: RankOption = new RankOption("Tinkerer", specializationCategory,
    [
        new Rank(1, "Gadgeteer", "Once per day, you can grab any rank 1 machine out of your belt. It functions just as if you made it with one success. In addition, weapons you wield with any modifications deal +3 damage."),
        new Rank(2, "Grenades", "Any weapon that you can make through artificing that is modeled after the club can be fashioned into a grenade instead. (Such as the Stun Baton or the Flash Baton) It costs half the price as normal and doesn’t require a craft roll. It takes only 10 minutes to make. When you go to use it, choose a point within 30’ and make a [Basic] ranged ability. (This is considered a throwing weapon) On a failure, the grenade doesn’t go off, but can be recovered later. On a botch, it explodes in your hand. On a success, creatures within 10ft of the point suffer the effects as normal, as if you performed a melee attack with the weapon it is based on. Creatures 15’ away take half damage and do not suffer any secondary effects."),
        new Rank(3, "Master Tinkerer", "You can make one grenade each day for no gold cost. This grenade is especially volatile and must be used within 24 hours or it becomes inert. In addition, it takes half the time and gold cost to craft anything through artificing. Reduce the number of successes you need for artifice crafting by 1 (min 1). Finally, you may make a rank 1 weapon modification for no gold cost once per day."),
    ],
    "[Artificing]");

export const specializationEngineer: RankOption = new RankOption("Engineer", specializationCategory,
    [
        new Rank(1, "Practiced Engineer", "The AP cost to set simple traps is reduced by 2. The difficulty of all technology and craft (trapmaking) rolls are reduced by 1"),
        new Rank(2, "Light Step", "You can no longer unintentionally set off traps, even if you are unaware of them."),
        new Rank(3, "Master Engineer", "When creating traps, you may combine the effects of any simple hamper trap you know with the “Basic Kill Trap” to create a trap that deals damage and hampers the target in one package. In addition, you create yourself a device that allows you to launch and set your simple traps up to 30’ away."),
    ],
    "[Trapmaking]");

export const specializationDemolitionist: RankOption = new RankOption("Demolitionist", specializationCategory,
    [
        new Rank(1, "Shaped Charges", "[Bomb] New Action, 7 AP, roll intellect + technology, difficulty 8. You place and detonate an explosive built to blow holes in walls and doors. The bomb only explodes in the direction of the surface you place it on, so it is safe to detonate while next to it. Any creature directly on the other side of the surface, assuming the explosive penetrates the surface, takes 10 fire damage. The number of successes on the roll determines what materiel and how thick you can penetrate. 1 success-a couple inches of weak material, like wood, enough for a thin door, 2 successes-a foot wide surface of weak material or a couple inches of moderate material, such as concrete or rock, 3 successes-a foot wide surface of weak or moderate material, 4 successes-5ft wide of weak or moderate, and a couple inches of extremely thick material (such as iron), 5+ successes-5ft wide of weak or moderate and a foot of extremely thick material. You can use this ability a number of times equal to your ranks in Demolitionist."),
        new Rank(2, "Incendiary Grenade", "[Bomb, Fire] New Action, 3 AP, choose a point within 60ft, roll dexterity + technology, difficulty 6, 8 fire damage. This attack deals damage to all creatures within 5ft of the point. Creatures 10ft away take half of the damage from this attack. If you fail this roll, the grenade goes off 30ft away in a random direction. If you botch this roll, the grenade explodes in your hand. You can use this ability a number of times equal to your ranks in Demolitionist. 3: Flashbang  [Bomb] New Action, 3 AP, choose a point within 60ft, roll dexterity + technology, difficulty 6. All creatures within 5ft are stunned for a number of turns equal to successes on the roll. Creatures 10ft away are stunned for half the number of turns. If you fail this roll, the grenade goes off 30ft away in a random direction. If you botch this roll, the grenade explodes in your hand. You can use this ability a number of times equal to your ranks in Demolitionist."),
        new Rank(3, "Spare Charges", "You can use all abilities with the bomb keyword additional times per day equal to your ranks in technology."),
        new Rank(4, "Bomb Master", "All abilities you use with the bomb keyword have their difficulty reduced by 1. Additionally, any creature under the effects of a bomb you use suffers the staggered condition. All bombs you use that deal damage gain the Concussive property."),
    ],
    "");

const augmentSetArcheryTakeAim: Set<Augment> = new Set<Augment>([
    new Augment("Don’t Breathe", new Cost(1, currencyAp), "Size Up costs no AP"),
]);
const augmentSetArcheryRanger: Set<Augment> = new Set<Augment>([
    new Augment("Elemental Arrows", new Cost(1, currencyAp), "You may change the damage type of the ability to any damage type from a specialization tagged with one. You must have at least one rank in whatever specialization you are basing the damage off."),
    new Augment("Marksman", new Cost(1, currencyAp), "If the target is sized up by you, you may add your senses to the damage. This augment can be applied multiple times."),
]);
export const specializationArchery: RankOption = new RankOption("Archery", specializationCategory,
    [
        new Rank(1, "Take Aim", "Increase the range of all [Weapon] abilities that have a range by 30’. In addition, you gain an augment that can only be used on the ability, Size Up.", augmentSetArcheryTakeAim),
        new Rank(2, "Ranger", "You gain two augments that can only be applied to [Ranged] + [Weapon] abilities.", augmentSetArcheryRanger),
        new Rank(3, "Muscle Memory ", "You no longer need to spend any AP to load an arrow into a bow. In addition, Size Up gains +1 augment slot."),
    ],
    "[Ranged]");

const augmentSetCrossbowExpertGoodAim: Set<Augment> = new Set<Augment>([
    new Augment("Aim", new Cost(1, currencyAp), "You gain +1 automatic success on any ability used against the sized up creature. This augment can be applied multiple times."),
    new Augment("Poisoned Tips", new Cost(1, currencyAp), "The ability now deals poison damage and staggers the target. It also gains the [Poison] tag."),
    new Augment("Pinning Shot", new Cost(1, currencyAp), "If the target is sized up by you, the target is restrained until the end of their next turn. The target takes 5 unsoakable piercing damage if they spend resolve to remove the restrain effect."),
]);
export const specializationCrossbowExpert: RankOption = new RankOption("Crossbow Expert", specializationCategory,
    [
        new Rank(1, "Good Aim", "You suffer no penalties for using a ranged weapon while an enemy is within 5’ of you. In addition, you gain an augment that can only be used on the ability, Size Up. 2: You gain two augments that can only be applied to [Ranged] + [Weapon] abilities.", augmentSetCrossbowExpertGoodAim),
        new Rank(2, "Loading", "Weapons, except for Bows, you wield cost 1 less AP to load. (This can cause loading to cost no AP). The ability, Rapid Fire, can now be used once per encounter instead of once per day."),
    ],
    "[Ranged]");

const augmentSetGunslingerGoodMaintenance: Set<Augment> = new Set<Augment>([
    new Augment("Sniper", new Cost(1, currencyAp), "You ignore all penalties for firing at long range against the creature you size up."),
]);
const augmentSetGunslingerGunslinger: Set<Augment> = new Set<Augment>([
    new Augment("Pierce", new Cost(1, currencyAp), "Can only be applied to single shot weapons. The ability deals its effects to another creature within 5’ of the target. This augment can be applied multiple times, each time you must choose a different creature within range."),
    new Augment("Eagle Eye", new Cost(1, currencyAp), "Can only be applied to 3 shot clip weapons.The attack ignores all soak, including titan soak and deals +2 damage. This augment can be applied multiple times."),
    new Augment("Unload", new Cost(1, currencyAp), "Can only be applied to 6 shot clip weapons.Directly after the ability resolves, a creature of your choice takes damage equal to the damage of any one weapon wielded. The target must be in range of the weapon used. The damage is soaked seperately. Successes on the initial roll add to the damage of this augment. This augment uses and requires ammo as normal. This augment can be applied multiple times, each time applying the damage as one attack (unless targeting different creatures)"),
]);
export const specializationGunslinger: RankOption = new RankOption("Gunslinger", specializationCategory,
    [
        new Rank(1, "Good Maintenance", "The malfunction trait on weapons you wield no longer triggers. In addition, you gain an augment that can only be used on the ability, Size Up.", augmentSetGunslingerGoodMaintenance),
        new Rank(2, "Gunslinger", "You gain a few new augments that can only be applied to [Ranged] + [Weapon] abilities.", augmentSetGunslingerGunslinger),
        new Rank(3, "Hit Man", "You expertise with gunplay has reached masterful levels. This bonus affects different guns in different ways based on the three traits: single shot, 3 shot clip and 6 shot clip. Single Shot - Requires 2 Less AP to load all of your single shot weapons. They also gain the concussive trait. 3 Shot Clip - When you use the size up action while wielding any 3 shot clip weapon, your next attack gains +1 automatic success. In addition, if you have at least one automatic success on any attack you do with this weapon, you may add your senses to your damage. 6 Shot Clip - Anytime you load a 6 shot clip weapon, you may also load another 6 shot clip weapon in your hand for no AP cost. All of your 6 Shot Clip weapons gain the Penetrating trait."),
    ],
    "[Ranged]");

export const specializationHunter: RankOption = new RankOption("Hunter", specializationCategory,
    [
        new Rank(1, "Survivalist", "Reduce the difficulty to track by 1. You may ignore the first 5 weight of animal parts (hide, meat, etc)"),
        new Rank(2, "Stand Your Ground", "You can no longer be knocked prone or forcefully moved. Dwarves may buy this rank for half the normal cost."),
        new Rank(3, "Companionship", "Your companions deal +2 damage with all of their attacks, gain +1 to their health multiplier and gain +1 command limit."),
    ],
    "");

export const specializationCavalier: RankOption = new RankOption("Cavalier", specializationCategory,
    [
        new Rank(1, "Born to the Saddle", "The penalties you suffer while riding a mount are reduced by 2 for you. If you normally do not suffer any penalties while mounted, you instead deal +2 damage on all attacks while mounted."),
        new Rank(2, "Mounted Combat", "You no longer suffer a difficulty increase when using a short weapon to attack while mounted. In addition, when mounted, the difficulty to use all other weapons is decreased by 1. You deal +2 damage with all attacks while mounted."),
        new Rank(3, "Inspiring Leader", "Whenever you spend a point of resolve, all allies within 60’ gain 10 temporary health and gain +1 AP on their next turn."),
    ],
    "[Inspire]");

const augmentSetMartialArtistLethalHands: Set<Augment> = new Set<Augment>([
    new Augment("Disarming Strike", new Cost(1, currencyAp), "After dealing damage, you force the target to drop a single held item. This augment can be applied multiple times."),
    new Augment("Tripping Attack", new Cost(1, currencyAp), "After dealing damage, you force the target to fall prone."),
    new Augment("Stunning Blow", new Cost(2, currencyAp), "After dealing damage, you stun the target until the end of their next turn."),
]);
export const specializationMartialArtist: RankOption = new RankOption("Martial Artist", specializationCategory,
    [
        new Rank(1, "Lethal Hands", "Unarmed attacks lose the nonlethal property. Weapons with the Full-body trait deal +2 damage.2: Maneuvers- You gain new augments that can be applied to any [Brawl] + [Weapon] ability.", augmentSetMartialArtistLethalHands),
        new Rank(2, "Conditioning", "The difficulty of Dodging is reduced by 1. Unarmed attacks gain the Simple and Concussive trait. All [Brawl] + [Weapon] abilities you perform gain +1 augment slot."),
    ],
    "");

const augmentSetMonkUnnaturalReflexes: Set<Augment> = new Set<Augment>([
    new Augment("Disarm", new Cost(1, currencyAp), "If you successfully dodge and cause the attack to fail, you may grab and store or wield the weapon used for the attack (or the ammo used if it was a ranged attack)"),
    new Augment("Redirect", new Cost(1, currencyAp), "If you successfully dodge and cause the attack to fail, you may redirect the attack to another target within the attack’s range. The attack deals its effects with the successes gained before you used Dodge"),
]);
export const specializationMonk: RankOption = new RankOption("Monk", specializationCategory,
    [
        new Rank(1, "Unnatural Reflexes", "Dodge gains +1 augment slot. In addition, you gain two new augments that can only be used on Dodge. 3: Ki-Infused Fists - You gain +2 AP each turn that can only be used on [Out-of-Turn] actions. All force damage you deal is increased by 3. In addition, you may choose to deal force damage with any [Brawl] ability you use, instead of it’s normal damage type. If you choose to do this, it gains the [Force] and [Ki] tags.", augmentSetMonkUnnaturalReflexes),
    ],
    "[Ki]");

const augmentSetBlazingWrathBurn: Set<Augment> = new Set<Augment>([
    new Augment("Burn", new Cost(1, currencyAp), "All creatures damaged ignite and begin to burn. At the start of any creature’s turn that is on fire from this effect take’s additional damage equal to half the damage that the spell did originally. Creatures with at least 2 ranks in any combination of [Fire] specializations are immune to this effect. This augment can be applied multiple times."),
]);
export const specializationBlazingWrath: RankOption = new RankOption("Blazing Wrath", specializationCategory,
    [
        new Rank(1, "Firestarter", "You can start minor fires at will. You do not need fuel, but without fuel it will quickly go out. This fire can't be used in combat but can catch things on fire. If the fire spreads it can cause damage at the GM’s discretion. In addition, you may use Intellect instead of Presence when casting a [Fire] + [Spell] ability."),
        new Rank(2, "Burn", "You take 3 less damage from all sources when it is your turn. In addition, you learn an augment that can be used on any [Fire] + [Spell] ability you cast.", augmentSetBlazingWrathBurn),
        new Rank(3, "Fire Savant", "Whenever you activate the Burn augment, you may choose to have another creature within 5’ also suffer the same effects. This cannot be done to creatures that are already on fire. In addition, you deal an extra 5 damage from all sources when it is not your turn."),
    ],
    "[Fire, Elemental]");

const augmentSetMysticTorrentDeluge: Set<Augment> = new Set<Augment>([
    new Augment("Deluge", new Cost(1, currencyAp), "All creatures damaged have -1 success on their next roll, additional applications of this effect increase the number of rolls with -1 success. Creatures with at least 2 ranks in any combination of [Water] specializations are immune to this effect. This augment can be applied multiple times."),
    new Augment("Downpour", new Cost(1, currencyAp), "All creatures affected gain +1 automatic success on their next roll. Additional applications increase the number of rolls affected. This augment can be applied multiple times and additional augment slots used increases the number of automatic successes."),
]);
export const specializationMysticTorrent: RankOption = new RankOption("Mystic Torrent", specializationCategory,
    [
        new Rank(1, "Understanding the Current", "You gain a swim speed equal to your movement speed. If you already had a swim speed, gain +2 to your swim speed. In addition, you may use Intellect instead of Senses when casting a [Water] + [Spell] ability."),
        new Rank(2, "Deluge", "You can now breathe underwater. In addition, you learn two augments that can be used on any [Water] + [Spell] ability you cast.", augmentSetMysticTorrentDeluge),
        new Rank(3, "Amphibious", "The number of successes applied by Deluge and Downpour is increased to 2. Additionally, your [Water] abilities have their difficulty reduced by 1 and their potency increased by 3."),
    ],
    "[Water, Elemental]");

const augmentSetEruptingEarthTopple: Set<Augment> = new Set<Augment>([
    new Augment("Topple", new Cost(1, currencyAp), "All creatures damaged are knocked backwards 5’ and/or knocked prone. Creatures with at least 2 ranks in any combination of [Earth] specializations are immune to this effect. This augment can be applied multiple times, each slot increasing the knock backwards effect by 5’ per slot."),
]);
export const specializationEruptingEarth: RankOption = new RankOption("Erupting Earth", specializationCategory,
    [
        new Rank(1, "Earth Sight", "You can, at will, see through earth or stone as long as it is no wider than 5ft. This effect can be turned on and off at will.  In addition, you may use Intellect instead of Brawn when casting a [Earth] + [Spell] ability."),
        new Rank(2, "Topple", "Your [Earth] + [Spell] abilities gain +3 potency. In addition, you learn an augment that can be used on any [Earth] + [Spell] ability you cast.", augmentSetEruptingEarthTopple),
        new Rank(3, "Titan of Stone", "You gain +1 titan soak, +1 HP and +1 die to all brawn rolls. You cannot be moved against your will. Finally, all abilities you perform ignore the difficulty increase from the prone condition."),
    ],
    "[Earth, Elemental]");

const augmentSetHowlingZephyrAdvantage: Set<Augment> = new Set<Augment>([
    new Augment("Opportunity", new Cost(1, currencyAp), "This spell has +5 potency against targets suffering at least -1 success on all of their rolls. This augment can be applied multiple times."),
    new Augment("Vacuum", new Cost(1, currencyAp), "All creatures damaged are staggered for 1 turn. Creatures with at least 2 ranks in any combination of [Air] specializations are immune to this effect. This augment can be applied multiple times."),
]);
export const specializationHowlingZephyr: RankOption = new RankOption("Howling Zephyr", specializationCategory,
    [
        new Rank(1, "Unending Air", "You can never run out of breath, even if underwater or in a place where oxygen couldn't be, such as space. You lose this benefit if you are unconscious.  In addition, you may use Intellect instead of Subterfuge when casting a [Air] + [Spell] ability."),
        new Rank(2, "Advantage", "Your movement speed is increased by 2. In addition, you learn two augments that can be used on any [Air] + [Spell] ability you cast. 3: Lord of the Sky- You can now fly. You gain a fly speed equal to your movement speed. If you had a fly speed before, you gain +2 to it. Additionally, enemies within 30’ of you are considered to have one less brawn for purposes of their breath (Minimum of 1). Finally, your [Air] abilities have +3 potency.", augmentSetHowlingZephyrAdvantage),
    ],
    "[Air, Elemental]");

export const specialization__ndAirSpec: RankOption = new RankOption("2nd Air Spec", specializationCategory,
    [
    ],
    "[Air, Elemental]");

const augmentSetStaticChargeVulnerability: Set<Augment> = new Set<Augment>([
    new Augment("Vulnerability", new Cost(1, currencyAp), "All creatures damaged take +2 damage from all sources until the start of your next turn. Creatures with at least 2 ranks in any combination of [Lightning] specializations are immune to this effect. This augment can be applied multiple times."),
]);
export const specializationStaticCharge: RankOption = new RankOption("Static Charge", specializationCategory,
    [
        new Rank(1, "Static Charge", "Whenever a lightning spell is cast within 30’ of you, you gain +1 stacking temporary hit points. These hit points last until the end of the encounter. In addition, you may use Intellect instead of Dexterity when casting a [Lightning] + [Spell] ability."),
        new Rank(2, "Vulnerability", "Your [Lightning] abilities gain +3 potency. In addition, you learn an augment that can be used on any [Lightning] + [Spell] ability you cast.", augmentSetStaticChargeVulnerability),
        new Rank(3, "System Shock", "Whenever you deal lightning damage to a creature, unless they have at least 2 ranks in lightning specializations, they cannot take out-of-turn actions until the start of their next turn. Additionally, if a creature within 120’ is subject to an at least one instance of your Vulnerability secondary effect, you can spend 1 AP to maintain the Vulnerability secondary effect on that target."),
    ],
    "[Lightning, Elemental]");

const augmentSetFrozenDelugeFreeze: Set<Augment> = new Set<Augment>([
    new Augment("Freeze", new Cost(1, currencyAp), "All creatures damaged have their movement speed reduced by 2 until the end of their next turn. If their movement speed is reduced down to 0, they freeze solid and become incapacitated until the end of their next turn.  Creatures with at least 2 ranks in any combination of [Ice] specializations are immune to this effect. This augment can be applied multiple times."),
]);
export const specializationFrozenDeluge: RankOption = new RankOption("Frozen Deluge", specializationCategory,
    [
        new Rank(1, "Icy Step", "Any time your feet would touch water, you may choose to freeze the water where you step. The water thaws in mere moments after you lift your feet back up. This allows you to walk across water unimpeded."),
        new Rank(2, "Freeze", "Your [Ice] abilities gain +3 potency. In addition, you learn an augment that can be used on any [Ice] + [Spell] ability you cast.", augmentSetFrozenDelugeFreeze),
        new Rank(3, "Master of Frost", "Your Icy Step bonus is improved to work on any liquids. This will even work on exceptionally hot liquids, such as lava, but you cannot stop moving while on these liquids. Any time you reduce the movement speed of a target, their movement speed is reduced by 1 more. Your [Ice] abilities gain +3 potency."),
    ],
    "[Ice, Elemental]");

const augmentSetCryomancerIceMagician: Set<Augment> = new Set<Augment>([
    new Augment("Frozen Legs", new Cost(1, currencyAp), "The target becomes restrained until the end of your next turn. Creatures with at least 2 ranks in any combination of [Ice] specializations are immune to this effect."),
    new Augment("Locked Up", new Cost(1, currencyAp), "The target cannot perform [Out-of-Turn] actions until the end of your next turn. Creatures with at least 2 ranks in any combination of [Ice] specializations are immune to this effect."),
    new Augment("Chill of Death", new Cost(2, currencyAp), "The target becomes doomed until the end of your next turn. Creatures with at least 2 ranks in any combination of [Ice] specializations are immune to this effect."),
]);
export const specializationCryomancer: RankOption = new RankOption("Cryomancer", specializationCategory,
    [
        new Rank(1, "Snowstorm", "You can choose for all rain within 1 mile of you to turn to snow. You can withstand extremely cold environments."),
        new Rank(2, "Ice Magician", "You learn a few new augments that can be applied to any [Ice] + [Spell] abilities you cast.", augmentSetCryomancerIceMagician),
        new Rank(3, "Cryomancy", "Your [Ice] abilities gain +1 augment slot and the difficulty is reduced by 1. You gain +1 soak."),
    ],
    "[Ice, Elemental]");

const augmentSetOozingAcidDissolve: Set<Augment> = new Set<Augment>([
    new Augment("Dissolve Armor", new Cost(1, currencyAp), "All creatures damaged have their soak reduced by 1. Titan soak is unaffected. Creatures with at least 2 ranks in any combination of [Acid] specializations are immune to this effect. This augment can be applied multiple times."),
    new Augment("Dissolve Flesh", new Cost(1, currencyAp), "Against creatures with 0 soak, (not including titan soak), the ability gains +5 potency. This augment can be applied multiple times."),
    new Augment("Dissolve Gear", new Cost(2, currencyAp), "If the attack deals damage, you cause one piece of equipment the target is wielding or openly carrying to eat away and be destroyed."),
]);
export const specializationOozingAcid: RankOption = new RankOption("Oozing Acid", specializationCategory,
    [
        new Rank(1, "Destroy", "You can put your hands on a surface and melt it. You melt through 3’ of material per minute. Certain materials cannot be melted in this way, as determined by the GM."),
        new Rank(2, "Dissolve", "You learn a few new augments that can be used on any [Acid] abilities you perform.", augmentSetOozingAcidDissolve),
        new Rank(3, "Corrosive Soul", "Your passive ability to melt materials changes from 3’ per minute to 3’ per second. All [Acid] abilities you perform gain +2 augment slots."),
    ],
    "[Acid]");

const augmentSetWizardMalleableSpells: Set<Augment> = new Set<Augment>([
    new Augment("Potent Spells", new Cost(1, currencyAp), "+3 Potency. This augment can be applied multiple times."),
    new Augment("Long Range Spells", new Cost(1, currencyAp), "+30’ range. This augment can be applied multiple times."),
    new Augment("Accurate Spells", new Cost(1, currencyAp), "+1 automatic success on the roll. This augment can be applied multiple times."),
    new Augment("Forceful Spells", new Cost(1, currencyAp), "Move the target(s) up to 10ft as you see fit. This augment can be applied multiple times."),
    new Augment("Wide Spells", new Cost(2, currencyAp), "Increase the number of targets by 1. This augment can be applied multiple times."),
    new Augment("Hastened Spells", new Cost(2, currencyAp), "-1 AP to cast (minimum of 1) "),
]);
export const specializationWizard: RankOption = new RankOption("Wizard", specializationCategory,
    [
        new Rank(1, "Knowledgeable", "If you have at least 4 ranks in the Knowledge skill, all rolls using this skill gain the benefit as if your focus applied."),
        new Rank(2, "Malleable Spells", "You learn a number of augments you can apply to [Force] + [Spell] abilities.", augmentSetWizardMalleableSpells),
        new Rank(3, "Spellweaving", "All of your augments gained through Malleable Spells can be applied to any [Spell] ability. In addition, your [Force] + [Spell] abilities gain +1 augment slot."),
    ],
    "[Force]");

export const specializationArchmage: RankOption = new RankOption("Archmage", specializationCategory,
    [
        new Rank(1, "Students", "As an archmage, students flock to learn from you. You gain three retainers per the Retainers background. These retainers are all apprentice mages. They have 1 rank in Ritual Casting and 1 rank in any arcane specialization of your choice. They will never help you in combat. They can be instructed to do menial tasks or chores, but are likely to be bad at them. If treated badly, these apprentices can choose to leave. You may replace one of the apprentices with a new one as you see fit, but doing this too much may burn bridges and prevent you from getting new apprentices in the future."),
        new Rank(2, "Studious", "The cost to purchase [Spell] abilities is reduced by half for you."),
        new Rank(3, "Spellcrafter", "You may use any [Spell] based augments on any [Spell] ability, regardless of the other requirements. In addition, all of your [Spell] abilities gain +1 augment slot."),
    ],
    "[Force]");

const augmentSetIllusionistImprovedIllusions: Set<Augment> = new Set<Augment>([
    new Augment("Large Illusions", new Cost(1, currencyAp), "The maximum volume increases by 15’ cubed. This augment can be applied multiple times."),
    new Augment("Additional Senses", new Cost(1, currencyAp), "You can affect an additional sense of your choice. This augment can be applied multiple times."),
    new Augment("Animation", new Cost(1, currencyAp), "The illusion can move"),
    new Augment("Touch", new Cost(1, currencyAp), "The illusion now has physical substance. Its maximum density is that of wood."),
]);
export const specializationIllusionist: RankOption = new RankOption("Illusionist", specializationCategory,
    [
        new Rank(1, "Improved Illusions", "The Illusion ability gains +1 augment slot per rank of any [Illusion] specialization you have. In addition, you gain new augments that can only be applied to the ability, Illusion.", augmentSetIllusionistImprovedIllusions),
        new Rank(2, "Prolonged Illusions", "All [Illusion] abilities you cast have their duration doubled. The difficulty to disbelieve any of your [Illusion] abilities is increased by 1. The Disguise ability can also change the sound of the target’s voice."),
        new Rank(3, "Master Illusionist", "Your illusions from the ability, Illusion, now can become real. At any point after creating an illusion, before it goes away, you can spend 1 resolve to give it permanence. You no longer need to maintain the illusion to keep it around. In addition, the AP cost of Illusion is reduced by 3 (minimum of 1) and the first one you choose to maintain costs no AP to maintain."),
    ],
    "[Illusion]");

const augmentSetTricksterUnseen: Set<Augment> = new Set<Augment>([
    new Augment("Cantrip", new Cost(1, currencyAp), "This usage doesn’t count against the number of times you can perform it per encounter. "),
    new Augment("Hastened Casting", new Cost(1, currencyAp), "The AP cost is reduced to 0 and can be performed at any time. It gains the [Out-of-Turn] tag."),
    new Augment("Mass Invisibility", new Cost(1, currencyAp), "The ability loses the targeting of ‘Self.’ Instead, you can now target up to 5 creatures within 60’. The AP cost to maintain Supreme Invisibility increases by 1 for each target over 1 (maximum of 7)"),
]);
export const specializationTrickster: RankOption = new RankOption("Trickster", specializationCategory,
    [
        new Rank(1, "Reach", "You have learned how to manipulate things from far away, interacting with it as if you were adjacent. You may interact with objects up to 30’ away. This could include picking a pocket, unlocking a door, or grabbing a light object. You cannot carry or move objects heavier than 5 pounds."),
        new Rank(2, "Unseen", "You gain a few augments that can be applied to Invisibility and Supreme Invisibility.", augmentSetTricksterUnseen),
        new Rank(3, "Magical Ambush", "If you are hidden from a creature and attempt to cast a [Spell] ability against them, the difficulty is reduced by 2. In addition, Invisibility and Supreme Invisibility gain +1 augment slot. Supreme Invisibility costs 1 less AP to maintain."),
    ],
    "[Illusion]");

export const specializationSpellblade: RankOption = new RankOption("Spellblade", specializationCategory,
    [
        new Rank(1, "Weapon Sight", "You know the presence of all weapons within 30’. You also know the type and function (such as ‘Type; longsword, Function; cutting). This only applies to objects that were designed to function as weapons."),
        new Rank(2, "Augmented Attacks", "Your [Weapon] tagged abilities can now deal force damage instead of their regular damage type. If you have at least 2 total ranks of any combination of specializations that are tagged with a damage type, you may do that damage type instead. When dealing that damage, the ability used also gains that damage’s tag."),
        new Rank(3, "Spellweaver", "You gain 1 extra AP each turn that can only be spent on maintaining abilities. In addition, any augment you know that are for abilities with the [Spell] tag can be used on any [Weapon] tagged ability, regardless of the other tags."),
    ],
    "");

export const specializationBloodMagician: RankOption = new RankOption("Blood Magician", specializationCategory,
    [
        new Rank(1, "Blood Magic", "You unlock the secrets to blood magic. Anytime you cast a [Spell] tagged ability, you may spend hit points equal to the AP cost (before modifications) to cast it for no AP. You may only activate Blood Magic once on your turn."),
        new Rank(2, "Hastened Blood", "You may cast a [Spell] ability using Blood Magic out-of-turn once per round. All abilities used in this way gain the [Out-of-Turn] tag. In addition, all of your blood magic costs 1 less health."),
        new Rank(3, "Potent Blood", "Once per encounter when dealing damage with a [Spell] ability, you may choose to heal for an amount equal to the damage dealt. In addition, you may use Blood Magic using any of your companion’s health instead of your own."),
    ],
    "");

export const specializationLifedrinker: RankOption = new RankOption("Lifedrinker", specializationCategory,
    [
        new Rank(1, "Bloodletting", "You can choose when using a [Weapon] tagged ability to have a creature within 30’ to be inflicted with the same amount of damage as the original target (determined before soak). You may use Blood Magic for [Weapon] tagged abilities. Every time you do, any creatures of your choice within 30’ are affected by the augments you use. In addition, you gain access to the Bloodfiend ability."),
        new Rank(2, "Lifestealer", "Any effect you do that heals you based off of damage that you deal gives you double the normal amount of health. In addition, the first sentence of Potent Blood no longer has a limited amount of uses, other than your available heals per full rest, and can be used with [Weapon] tagged abilities as well."),
        new Rank(3, "Soul Siphon", "Any time a creature drops to 0 health within 60’ of you, you may gain 3 health (this doesn’t count as a heal) and may use Blood Magic immediately. This does not count against your normal Blood Magic limit of once per round. The ability you use gains +5 potency. Each time Soul Siphon activates in a single turn (after the first time), the potency bonus increases by 5."),
    ],
    "");

export const specializationSage: RankOption = new RankOption("Sage", specializationCategory,
    [
        new Rank(1, "Renaissance Man", "You get +1 die to all rolls."),
        new Rank(2, "Stable Mind", "You are immune to the confusion condition. You gain +1 maximum resolve."),
        new Rank(3, "Anything can be learned", "An attunement sphere of your choice drops by 2. (For example, if your divine attunement is 8x, it would now be 6x) This can be applied to the Universal attunement sphere. You cannot choose a sphere if it would go below 3x."),
    ],
    "");

export const specializationAlchemist: RankOption = new RankOption("Alchemist", specializationCategory,
    [
        new Rank(1, "Adept Alchemist", "The difficulty of creating brews is reduced by 1"),
        new Rank(2, "Better Brews", "All salves you create have their duration doubled. In addition, whenever you through a splash potion, you can choose what creatures in the area of effect it affects or not."),
        new Rank(3, "Bountiful Brews", "You may have two elixirs active at once. In addition, you can use each kind of poultice twice per day."),
        new Rank(4, "Philosopher’s Stone", "You have discovered the secret to the Philosopher’s Stone. Once per day, you may at any time gain the effects of any brew you have made. This can be done on any turn, including as a response to taking damage, but before applying your soak. (change to :can transform any material into another material)"),
    ],
    "[Brewing]");

export const specializationSpellMastery: RankOption = new RankOption("Spell Mastery", specializationCategory,
    [
        new Rank(1, "Spell Sight", "When anybody that you can see casts a [Spell] ability within 120’ of you, you automatically know the specifics of the spell, including what sphere it is from, and the description of the spell."),
        new Rank(2, "Spell Sculptor", "Any time you cast a [Spell] ability that affects targets in an area of effect, you may select targets inside that area of effect to ignore the effects of your spell."),
        new Rank(3, "Spell Master", "You can maintain one [Spell] ability at a time for no AP cost. Additionally, you may cast 3 [Spell] abilities per day for no AP cost. You can only use this effect once per turn."),
    ],
    "",
    [new TagRequirement(5, tagArcane),]);

const augmentSetNecromancerTransfer: Set<Augment> = new Set<Augment>([
    new Augment("Transfer Essence", new Cost(1, currencyAp), "You or one of your companions are healed equal to the total damage done before soak is applied. This augment can be applied multiple times, multiplying the amount of healing by the amount of augment slots used."),
]);
const augmentSetNecromancerMenagerie: Set<Augment> = new Set<Augment>([
    new Augment("Corpse Explosion", new Cost(1, currencyAp), "At the end of your turn, your companion explodes in a shower of blood and guts. All creatures within 10’ take 20 unsoakable necrotic damage. If the companion is dead before the end of your turn, it does not explode."),
    new Augment("Skilled", new Cost(1, currencyAp), "You may distribute 5 skill points as you see fit to the companion. This augment can be applied multiple times."),
    new Augment("Talented", new Cost(1, currencyAp), "You may distribute 3 attributes points as you see fit to the companion. This augment can be applied multiple times."),
    new Augment("Energetic", new Cost(1, currencyAp), "Your companion gains +1 maximum AP. This augment can be applied multiple times."),
    new Augment("Potent", new Cost(2, currencyAp), "Your companion gains +2 HP, +1 health multiplier, +3 potency on all abilities, 1 attribute point and 3 skill points to distribute as you see fit. This augment can be applied multiple times."),
]);
export const specializationNecromancer: RankOption = new RankOption("Necromancer", specializationCategory,
    [
        new Rank(1, "Transfer", "You gain a new augment that can be applied to any [Necrotic] + [Spell] ability. 2 Unholy Life - Once per encounter, at any time, you can siphon the life out of one of your companions, killing it instantly and turning it to ash. Doing so causes you to regain health equal to the health of the companion. All of your companions gain +1 health multiplier.", augmentSetNecromancerTransfer),
        new Rank(2, "Menagerie", "Your ‘Raise’ abilities gain +1 augment slot. In addition, you gain a multitude of augments that can be applied to any [Companion] ability.", augmentSetNecromancerMenagerie),
    ],
    "[Necrotic]");

export const specializationLich: RankOption = new RankOption("Lich", specializationCategory,
    [
        new Rank(1, "Phylactery", "[Ritual, Necromancy] You have finally unlocked the secrets to lichdom. You may transfer your soul into an object. This ritual requires 1 week (16 hours each day) to cast and 10,000g of various materials. The object must be present the entire time. After the ritual, the object becomes possessed with your soul, and turns into your phylactery. While the object is around and in good shape, you no longer age and can no longer die. Instead, if you would die for any reason, roll a brawn + discipline, difficulty 8 roll.  Regardless of the result, your current body dies. A new body begins to regrow out from the phylactery. This process takes time based on the result of the roll. 1-2 successes - 1 month, 3-4 successes - 1 week, 5+ successes  - 1 day. Afterwards, your body is fully formed and ready to go, as if nothing changed. If you failed this roll, it takes a year to reform and you come back as a skeleton. This has no effect on your abilities, just your appearance. If you botch the roll, act as if you failed. Additionally, after reforming, reduce all of your attributes by 1. (Can't go below 1.) The phylactery is destroyed in the process. If this process ever happens to you, you are considered undead after becoming alive again. You may only have one phylactery at a time."),
        new Rank(2, "Lore Master", "Reduce the difficulty of all insight and knowledge rolls by 2"),
        new Rank(3, "Wither", "[Spell] New Action, 5 AP choose one creature within 60ft, roll intellect + arcana, difficulty 7. Your knowledge of immortality allows you to figure out how to rapidly age creatures. Creatures age 25 years per success. Creatures takes necrotic damage equal to the amount of years they age. This damage can be reduced with the target’s total soak. Creatures can die outright if they get too old, in which case their body turns to dust. Becoming old but not dying might give penalties as decided by the GM. Creatures that don't age are immune to this spell."),
        new Rank(4, "Defend the Phylactery", "Your phylactery becomes immune to scrying. Additionally, when you die and begin to reform your body, you can choose to reform anywhere on the same plane as the phylactery that you have been before."),
        new Rank(5, "Eternity to Learn", "You may add dice to all rolls you make equal to your intellect."),
    ],
    "");

const augmentSetDiabolistFelMagic: Set<Augment> = new Set<Augment>([
    new Augment("Fel Infused Spells", new Cost(0, currencyAp), "The ability gains the [Fire] tag and deals Felfire damage. (Felfire is a very rare damage type that very few creatures can resist. Creatures that are vulnerable to fire damage are also vulnerable to Felfire in the same way.)"),
]);
const augmentSetDiabolistDemonLord: Set<Augment> = new Set<Augment>([
    new Augment("Broken Promise", new Cost(1, currencyAp), "The increased AP and potency buff wears off as soon as the enthrall wears off."),
    new Augment("Soul Reaping", new Cost(1, currencyAp), "If the target dies while still affected by the AP and potency buff, you regain 20 health. This augment can be applied multiple times."),
    new Augment("Vulnerable", new Cost(1, currencyAp), "The target takes 10 extra damage from all sources while enthralled. This augment can be applied multiple times."),
]);
export const specializationDiabolist: RankOption = new RankOption("Diabolist", specializationCategory,
    [
        new Rank(1, "Transfusion", "Once per round, you may take any amount of health from any of your companions and add it to your own. This does not count as a heal."),
        new Rank(2, "Fel Magic", "Your demon companions deal 3 extra damage with all of their attacks. In addition, you learn a new augment that can be applied to any [Spell] ability.", augmentSetDiabolistFelMagic),
        new Rank(3, "Demon Lord", "You gain +1 soak. Your companions gain +1 maximum AP. In addition, you gain a few augments that can only apply to the ability, Deal.", augmentSetDiabolistDemonLord),
    ],
    "[Demonology]");

export const specializationSpellbinder: RankOption = new RankOption("Spellbinder", specializationCategory,
    [
        new Rank(1, "Spellbind", "You unlock the ability to bind your spells into equipment. You follow the rules for enchanting as per the crafting section, but can choose to imbue an item with any spell you know that has an AP cost. The enchant level is considered to be the rank in which you learned the spell. For example, if you learned a spell at rank 2 of a specialization, it would be considered a level 2 enchant. Once enchanted, the wearer of the item can activate the item for the same AP cost of the spell. The wearer casts the spell as if they knew it themselves, the only exception being the dicepool and any various bonuses are determined from the enchanter, set in stone once the enchant is cast. For example if the enchanter rolls 7 dice when they cast the spell, the wearer would roll 7 dice instead of what they would normally. If the enchanter has a damage bonus to that type of spell, that damage is added in and the wearer’s respective bonuses are not added in. It otherwise follows the rules as written for the spell, such as AP cost, number of uses, range, effects, etc. Offensive spells and heal spells are considered (W) enchants. All other spells are considered (G) enchants. Staves, Wands and Scepters are objects specifically tailored to receive and channel spellbound enchants. Staves use the weapon stats as listed in the weapon list. Wands use the Club weapon traits, but deal 1 less damage and lose the concussive trait. Scepters cannot be used to attack. When Staves are spellbound, you may choose two applicable spells instead of one. In addition, both of those spells are cast at -1 difficulty. When wands are spellbound, the spell they have get +3 potency. When scepters are spellbound, the spell they have costs 1 less AP. Scepters can only have (G) enchants. In addition, you gain a new action. [Spell, Ritual, Enchantment] You can spend an hour and create an enchantment. This follows the standard rules for enchanting, but costs no money, requires no rolling and only takes an hour. You may perform a number of enchantments in this way equal to your ranks in Spellbinder x2. These special free enchants last until you choose to remove it."),
        new Rank(2, "Apprentice Enchanter", "Whenever rolling to enchant something, you may make four rolls instead of three."),
        new Rank(3, "Utility", "Whenever you perform an enchantment with a (G) label, you may add another (G) labeled enchant as part of the enchantment. For example you could make boots that give you +2 movement speed and prevent damage from falling."),
        new Rank(4, "Contingency", "Anytime you are creating a spellbound enchant, you may invoke a contingency tied to the enchant. A contingency is a way for the spell to be automatically cast when a specific event happens. This specific event can be anything you choose, such as “when I reach 0 health” or “as soon as I enter combat.” When that event occurs, the contingency triggers, casting the spell immediately. When this happens, the wearer of the enchantment casts the spell as they see fit. Contingency can only be used on spells that have a limited amount of uses per day or per encounter. Having a contingency does not prevent you from casting the spell like normal through the enchant."),
        new Rank(5, "Master Enchanter", "The gold cost of your enchants are reduced by 250g per level of the enchant. Your enchants take 2 less hours per level of the enchant. In addition, you may perform three additional free enchants. (This affects your free enchants from Spellbinder and Infuser separately)"),
    ],
    "[Enchanting]");

export const specializationRitualCaster: RankOption = new RankOption("Ritual Caster", specializationCategory,
    [
        new Rank(1, "Circle of Power", "[Spell, Ritual] You can now draw on a place of power to create nearly any magical effect. First, tell the GM what you’re trying to achieve.  Ritual effects are always possible, but figuring out how to do it is not.  After an hour of research, roll Intellect + knowledge, difficulty 8.  With a success you know exactly what conditions must be met to get the desired effect.  The GM may impose any number of the following conditions, generally between 2-4: ConditionsIt’s going to take days/weeks/months First you must ___ You’ll need help from ___It will require a lot of moneyThe best you can do is a lesser version, unreliable and limitedYou and your allies will risk danger from ___You’ll have to disenchant ___ to do itYou can form a group to help you with the ritual. Each member must have at least 1 rank of the Ritual Caster specialization. Drawing on the latent power of your group, the ritual becomes easier, as indicated below.:2-5 participants: remove one condition6-25 participants: remove two conditions25-50 participants: remove three conditions51-99 participants:  remove four conditions100+ participants: remove five conditions You may recruit people to help you with your ritual. First make a presence + leadership roll, difficulty 6. Each success grants you a participant, as long as you are willing to pay 50g each for their time."),
        new Rank(2, "Speedy Ritualist", "If your GM requires additional time, the options for any ritual you lead are now hours/days/weeks instead of days/weeks/months. In addition, abilities with the ritual tag you do (other than Circle of Power) have their time reduced by half. The difficulty is reduced by 2 for you to research a ritual's conditions."),
        new Rank(3, "Ritual Master", "If your GM requires an item to be disenchanted on a ritual you lead, you can instead choose to not disenchant the item for no penalty.  However the required item must still be present for the ritual. In addition, if you lead a group ritual, the ritual specialization is no longer required for the other participants. Now when you recruit, the difficulty is 4 and participants only cost 5g to recruit. Example 1:After destroying an orphanage, Corbin lost connection to his deity.  Corbin researches a ritual that should help him atone for his actions.  Rolling 4 dice at difficulty 8, Corbin barely manages a success.  The GM feels that this should be a complicated ritual, so imposes the following conditions:1) First Corbin must make a pilgrimage to the deity's main temple.2) Atonement will require a lot of money, at least 1,000 pounds of gold donated to the temple.3) Atonement will take three weeks of constant prayer at the temple.4) Finally Corbin must sacrifice an object of power that he owns, smashing it on the altar after his prayers are complete.Corbin does the ritual alone, so cannot remove any of these conditions.Example 2:Corbin and his party plan to assault the homeland of some giants that have been ransacking the nearby towns.  To equalize the battlefield, Corbin researches a ritual that will temporarily increase their size to match that of the giants.  He's gotten more powerful, and now has 6 dice to roll at difficulty 6.  He succeeds easily, and the GM imposes the following conditions:1) First you must get the blood of a native giant to use in the ritual.2) You and your allies will risk danger from the giants.  They will notice such a ritual being performed, and mobilize to interfere.3) It's going to take 8 hours per person (down from several days, because Corbin now has Speedy Ritualist).Corbin recruits 5 others to help him with this ritual.  With 6 total participants, the Intellect + Leadership check has a difficulty of 6.  Corbin fails this check, so must use all three imposed conditions.Example 3:Corbin decides he wants to ascend to godhood.  He succeeds on his research roll, and the GM imposes the following conditions:1) First you must have 30 points in Arcane specializations, with at least 5 specializations at rank 3.2) First you must have 30 points in Divine specializations, with at least 5 specializations at rank 3.3) First you must kill a deity using an object blessed or empowered by them.4) You'll need help from another deity.5) You and your allies will risk danger from the other deities.6) You'll have to disenchant an item linked to a deity.Corbin has 300 followers assisting.  He chooses to remove condition 1, 2 3, 4 and 5, but must still complete the 6th condition for the ritual to succeed."),
    ],
    "");

const augmentSetCrusaderBlindingStrike: Set<Augment> = new Set<Augment>([
    new Augment("Blinding Strike", new Cost(1, currencyAp), "Creatures damaged are blinded until the end of their next turn."),
]);
export const specializationCrusader: RankOption = new RankOption("Crusader", specializationCategory,
    [
        new Rank(1, "Sense Evil", "You innately know if creatures are evil. You must know of their presence before this knowledge comes to you. This is considered a mind reading effect. You deal +2 damage on all attacks when within 60’ of an evil creature."),
        new Rank(2, "Blinding Strike", "Your [Weapon] abilities can no longer be parried. In addition, you gain a new augment you can apply to any [Weapon] ability.", augmentSetCrusaderBlindingStrike),
        new Rank(3, "True Crusader", "After you reduce a creature to 0 health, you may perform a [Basic] ability for no AP cost. This can only happen once per round. In addition, all of your soak is converted to Titan Soak."),
    ],
    "");

const augmentSetExemplarRestoreTheFaithful: Set<Augment> = new Set<Augment>([
    new Augment("Cauterize ", new Cost(1, currencyAp), "Damage dealt to the target instead heals them for the same amount. The ability gains the [Heal] and [Spell] tags."),
]);
export const specializationExemplar: RankOption = new RankOption("Exemplar", specializationCategory,
    [
        new Rank(1, "Holy Light", "All healing you receive is increased by 3."),
        new Rank(2, "Restore the Faithful", "All of your abilities deal +3 damage. In addition, you gain an augment that can be applied to any ability.", augmentSetExemplarRestoreTheFaithful),
        new Rank(3, "Radiant Champion", "When you use Cauterize, if there are multiple creatures being affected, you can choose which creatures are healed and which take damage as normal. In addition, anytime a creature regains health because of you, you may have them also gain 10 temporary health, which lasts until the end of the encounter."),
    ],
    "[Heal]");

export const specializationRevenant: RankOption = new RankOption("Revenant", specializationCategory,
    [
        new Rank(1, " Incorporeal", "You can now go partially incorporeal at will, like a ghost. While you are incorporeal, you may move through the space occupied by a creature, as long as you don’t end your turn occupying the same space as another creature. You gain +1 soak against all attacks that target you."),
        new Rank(2, "Corrupted Touch", "Any time you deal damage to a creature, their maximum health is reduced by the amount of damage they take. This doesn’t work on creatures who aren’t truly alive, such as undead or constructs. In addition, once per encounter you may heal for the same amount of damage you deal on any attack. (Determined after soak.) You can decide after making the attack roll."),
        new Rank(3, "Spectre", "While you are incorporeal, you may travel through solid surfaces at the cost of 2 speed per square of movement, but may never end your turn inside a solid surface. You gain +1 soak against all attacks that target you. You gain a fly speed equal to your movement speed. If you had a fly speed before, it is instead increased by 2."),
    ],
    "");

export const specializationMissionary: RankOption = new RankOption("Missionary", specializationCategory,
    [
        new Rank(1, "Missionary Training", "All healing you do is increased by 3. You add +1 die to all knowledge, leadership, medicine and survival rolls"),
        new Rank(2, "Spread the Faith", "Your movement speed is increased by 3. The difficulty of all persuasion and intimidate checks is reduced by 1 for you."),
        new Rank(3, "Faithful", "You are immune to being enthralled and confused. You gain +1 maximum resolve."),
    ],
    "");

const augmentSetPurifierPurifyingFlames: Set<Augment> = new Set<Augment>([
    new Augment("Blinding Purity", new Cost(1, currencyAp), "If the attack deals damage, the target is blinded until the end of your next turn. Creatures with at least 2 ranks in any combination of [Fire] specializations are immune to this secondary effect."),
    new Augment("Cleansing Purity", new Cost(1, currencyAp), "If the attack deals damage, the target loses 1 soak. Creatures with at least 2 ranks in any combination of [Fire] specializations are immune to this secondary effect. This augment can be applied multiple times."),
    new Augment("Holy Purity", new Cost(1, currencyAp), "If the attack deals damage, the target cannot be healed until the end of your next turn. Creatures with at least 2 ranks in any combination of [Fire] specializations are immune to this secondary effect."),
]);
export const specializationPurifier: RankOption = new RankOption("Purifier", specializationCategory,
    [
        new Rank(1, "Firewalker", "You may walk through most standard fires without being hurt. This does not give you immunity or resistance to fire damage."),
        new Rank(2, "Purifying Flames", "You learn a few new augments that can be applied to all [Fire] + [Spell] abilities you cast.", augmentSetPurifierPurifyingFlames),
        new Rank(3, "Divine Cleansing", "Your [Fire] abilities gain +1 augment slot and +3 potency. You gain +1 HP."),
    ],
    "[Fire, Elemental]");

const augmentSetStormcallerInsulated: Set<Augment> = new Set<Augment>([
    new Augment("Grounded", new Cost(1, currencyAp), "Creatures damage are knocked prone."),
]);
export const specializationStormcaller: RankOption = new RankOption("Stormcaller", specializationCategory,
    [
        new Rank(1, "Lightning Caller", "Anytime a [Lightning] ability is used within 120’ of you, you can choose to absorb the effects entirely. This only works on single target effects. In addition, you may use Presence instead of Dexterity for any [Lightning] + [Spell] ability."),
        new Rank(2, "Insulated", "You gain +5 titan soak vs lightning damage. In addition, you gain an augment that can only be applied to [Lightning] + [Spell] abilities.", augmentSetStormcallerInsulated),
        new Rank(3, "Stormborn", "Anytime a [Lightning] ability affects you, you gain +2 AP on your next turn and +3 potency on your next [Lighting] ability. In addition, anytime you would receive lightning damage, you can instead heal for the same amount. This causes you to not gain the AP and potency bonus."),
    ],
    "[Lightning, Elemental]");

const augmentSetInquisitorSeekingInTheDark: Set<Augment> = new Set<Augment>([
    new Augment("Grasping", new Cost(1, currencyAp), "All creatures damaged by the spell become restrained until the end of their next turn. If the restrained condition is ended early, regardless of method, the creature takes 3 unsoakable Shadow damage. Creatures with at least 2 ranks of any combination of [Shadow] specializations are immune to this effect. This augment can be applied multiple times."),
]);
export const specializationInquisitor: RankOption = new RankOption("Inquisitor", specializationCategory,
    [
        new Rank(1, "Finding what is Hidden", "You now ignore the obscured condition on enemies. In addition, you may use Presence instead of Subterfuge when casting a [Shadow] + [Spell] ability."),
        new Rank(2, "Seeking in the Dark", "You are aware of the location of any creature 30’. If you could not otherwise see the creature, you are considered blind in relation to it. In addition, you gain an augment that can be applied to any [Shadow] + [Spell] ability you cast.", augmentSetInquisitorSeekingInTheDark),
        new Rank(3, "Interrogator", "After you inflict the restrained condition on a creature, you can choose to end the restrained condition on the creature. If you do so, the creature then becomes paralyzed until it has been hit a number of times equal to the number of turns the restrained condition would have lasted. Additionally, abilities targeting creatures within 30’ of you do not suffer penalties due to blindness."),
    ],
    "[Shadow]");

const augmentSetInvokerVersatile: Set<Augment> = new Set<Augment>([
    new Augment("Spread", new Cost(1, currencyAp), "Double the available targets. This augment can be applied multiple times."),
    new Augment("Distant", new Cost(1, currencyAp), "Double the range. This augment can be applied multiple times."),
    new Augment("Time", new Cost(1, currencyAp), "Double the duration. This augment can be applied multiple times."),
    new Augment("Potency", new Cost(1, currencyAp), "+1 potency. This augment can be applied multiple times."),
]);
export const specializationInvoker: RankOption = new RankOption("Invoker", specializationCategory,
    [
        new Rank(1, "Versatile", "You may purchase any [Buff] tagged ability, regardless of any prerequisites. 2: You gain a few augments that can be applied to any [Buff] ability.", augmentSetInvokerVersatile),
        new Rank(2, "Concentration", "You gain +3 AP each round that can only be spent on maintaining [Buff] abilities. In addition, creatures cannot dispel or otherwise remove any [Buff] abilities you perform."),
    ],
    "");

export const specializationSeer: RankOption = new RankOption("Seer", specializationCategory,
    [
    ],
    "");

export const specializationAcolyte: RankOption = new RankOption("Acolyte", specializationCategory,
    [
        new Rank(1, "Divine Plea", "Once per full rest you may call upon the deities for divine help. Any time you attempt a task, you may declare your earnest plea before the party, and if the GM decides it is heartfelt, you automatically succeed the roll. The result will generally be miraculous in nature, if at all possible."),
        new Rank(2, "Resolve of the Faithful", "You may now spend your resolve to remove 1 stack of exhaustion. Any time you spend resolve to reroll a roll, that roll gains +1 automatic success. You may spend your resolve to force a single target attack targeting you only to miss."),
        new Rank(3, "Favored", "Your attributes and skills can be raised to 6. At the end of each session, you gain +1 experience."),
    ],
    "");

export const specializationClairvoyant: RankOption = new RankOption("Clairvoyant", specializationCategory,
    [
    ],
    "");

export const specializationOracle: RankOption = new RankOption("Oracle", specializationCategory,
    [
        new Rank(1, "Aware", "When you spend AP to improve your initiative at the start of combat, every AP you spend increases your initiative by 3. You always decide last when to spend AP to adjust your initiative. You gain +2 to your initiative."),
        new Rank(2, "Predication", "You deal 3 extra damage with all of your attacks against creatures who have lower initiative then you. In addition, the AP cost of Parry and Dodge is reduced by 1 against their attacks. You gain +1 AP each round that can only be used for [Out-of-Turn] abilities."),
        new Rank(3, "Oracle of the Ages", "Add +3 to your initiative checks. If you have the highest initiative in a fight, then all enemies are stunned and doomed on the first round of combat."),
    ],
    "");

export const specializationProphet: RankOption = new RankOption("Prophet", specializationCategory,
    [
        new Rank(1, "Tarot Reader", "Once per day you may foresee someone’s future with a tarot card without expending the tarot card. In addition, you can change one effect on any tarot cards you make without increasing the difficulty"),
        new Rank(2, "Prophecy Savant", "The difficulty of all prophecy crafting is reduced by 2 for you"),
        new Rank(3, "Charm Reserves", " Prophecy Master - All prophecy crafting you do requires half the gold and time. In addition, the difficulty of all prophecy crafting you do is reduced by 1. In addition, charms you wear can trigger twice per encounter."),
    ],
    "[Prophecy]");

export const specializationInfuser: RankOption = new RankOption("Infuser", specializationCategory,
    [
        new Rank(1, "Infusion", "You unlock the ability to infuse enchantments directly into people’s skin. You follow the rules for enchanting as per the crafting section, but can choose to enchant various body parts instead of equipment. The available body parts are: head, chest, arms, hands, legs and feet. Chest enchants must be (A) labeled enchants and hand enchants must be (W) labeled enchants. The other body parts must be (G) labeled enchants. Each body part can only have one infusion. When infusing, you decide what form it takes upon people’s skin. Some infusers weave divine symbols and some infusers create ornate tattoos. It can take whatever form you like, as long as it makes sense. The creature must be a willing participant and must be present for the entire time. Any creature with an infusion can spend an hour and remove any infusion upon its body. In addition, you can spend an hour and create an enchantment. This follows the standard rules for enchanting, but costs no money, requires no rolling and only takes an hour. You may perform a number of enchantments in this way equal to your ranks in Infuser x3. These special free enchants last until you choose to remove it. At the bottom of the specialization is a list of special enchants you learn with this specialization. They are divided by level, indicating what rank of Infuser you need before you can use the enchant."),
        new Rank(2, "Acolyte Enchanter", "Reduce the difficulty to enchant gear by 1. In addition, whenever you perform a level 1 enchant, you may add another level 1 enchant as part of the enchantment."),
        new Rank(3, "Master Enchanter", "The gold cost of your enchants are reduced by 250g per level of the enchant. Your enchants take 2 less hours per level of the enchant. In addition, you may perform three additional free enchants. (This affects your free enchants from Spellbinder and Infuser separately) <table style=\"border:none;border-collapse:collapse\"><colgroup><col width=\"98\"><col width=\"53\"><col width=\"429\"></colgroup><tbody><tr style=\"height:22pt\"><td colspan=\"3\" style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Available Enchantments</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">W or A or G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Level</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Description</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">W</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">1</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">All of your basic attacks made with this weapon or when infused in this way gain the ability to move the target up to 10ft if you deal damage</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">W</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">1</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wielding this weapon or when infused in this way, all healing you do is increased by 2</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">A</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">1</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this armor or when infused in this way, creatures cannot size you up</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">A</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">1</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this armor or when infused in this way, you cannot be forcibly moved, unless you want to.</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">1</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this gear or when infused in this way, you gain +2 to initiative</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">1</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this gear or when infused in this way, allows you to see in the dark, even in magical darkness.</span></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">This generally goes into the head or a pair of goggles</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">1</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this gear or when infused in this way, you may stick to surfaces at will. This allows you to do things like walk up walls and on the ceiling.</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">W</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">All of your basic attacks made with this weapon or while you are infused in this way are made at -1 difficulty</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">W</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wielding this weapon or when infused in this way, you can parry attacks as if you were wielding a melee weapon. In addition, you may parry any type of single-target attack.</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">A</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this armor or when infused in this way, you ignore any dice pool penalties from being injured</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">A</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this armor or when infused in this way, you are immune to poisons and diseases. In addition, you have +3 titan soak vs poison damage</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">A</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this armor or when infused in this way, one of your companions gains +2 maximum AP</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this gear or when infused in this way, the difficulty of perception and insight checks are reduced by 1.</span></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">This generally goes into the head or a pair of goggles</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this gear or when infused in this way, you may perform one move action for no AP once per round</span></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">This generally goes on feet or boots</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this gear or when infused in this way, you have +1 health modifier</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">W</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wielding this weapon or when infused in this way, your healing spells cost 1 less AP. (min 1) Staves and Wands with this enchant may still be spellbound as if it wasn’t enchanted.</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">W</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Your basic attacks with this weapon or when you are infused in this way can deal the same effects to a creature directly behind it, in comparison to you.</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">W</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Your basic attacks with this weapon or when you are infused in this way cannot be parried or dodged.</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">A</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this armor or when infused in this way, you may become immune to damage at any time until the end of your next turn. You may only do this once per day.</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">A</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this armor or when infused in this way, all of your companions have +2 maximum AP</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">A</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this armor or when infused in this way, all of your soak is converted to titan soak</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this gear or when infused in this way, you gain a flying speed equal to your movement speed</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this gear or when infused in this way, you cannot be blinded.</span></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">This generally goes into the head or a pair of goggles</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this gear or when infused in this way, you may, once per encounter, use a point of resolve to remove an adverse effect without spending any resolve</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">G</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">While wearing this gear or when infused in this way, whenever you command any of your companions, 1 of your AP gives 2 to your companion.</span></p></td></tr></tbody></table>"),
    ],
    "[Enchanting]");

export const specializationFate: RankOption = new RankOption("Fate", specializationCategory,
    [
        new Rank(1, "Twisting Fate", "You now can twist fate to do your bidding. You gain four available twists. Anytime a creature makes a roll within 30’, you can choose to have that creature reroll the roll once. Each time you do this, you spend one of your available twists. You regain one twist each standard rest and regain all twists after a full rest."),
        new Rank(2, "Not My Fate", "If an attack would bring you down to 0 health exactly, you may spend a twist and instead of taking damage, you heal for the same amount. This doesn't count towards the number of times you can be healed each day. In addition, you gain 2 more available twists."),
        new Rank(3, "Fate Favors You", "Whenever you spend a twist and reroll, if the new roll has more 10s than 1s rolled, you regain the twist you just spent. In addition, you gain 2 more available twists. Your twists can now affect creatures out to 120’."),
    ],
    "");

const augmentSetDeathDestroyer: Set<Augment> = new Set<Augment>([
    new Augment("Drain Life", new Cost(1, currencyAp), "You are healed equal to the amount of damage dealt times the number of augment slots used. This augment can be applied multiple times"),
    new Augment("Fear of Death", new Cost(1, currencyAp), "The targets are afraid of you until the end of your next turn."),
    new Augment("Decay", new Cost(1, currencyAp), "Creatures affected age 5 years per augment slot used. Creatures that do not die of old age are unaffected. Undead creatures instead take 5 extra damage from the attack. This augment can be applied multiple times."),
]);
export const specializationDeath: RankOption = new RankOption("Death", specializationCategory,
    [
        new Rank(1, "Sense Death", "You know the location of all undead within 60’ of you. While within the presence of any undead within 60’, your abilities gain +2 potency."),
        new Rank(2, "Destroyer", "You gain a few new augments that can be applied to any [Necrotic] + [Spell] abilities you know.", augmentSetDeathDestroyer),
        new Rank(3, "Death is Inevitable ", "Your [Necrotic] abilities gain +3 potency and +1 augment slot. You are immune to fear and gain +1 HP."),
    ],
    "[Necrotic]");

const augmentSetDemonHunterFelTraining: Set<Augment> = new Set<Augment>([
    new Augment("Fel Infused Weapons", new Cost(0, currencyAp), "The ability gains the [Fire] and [Spell] tags and deals Felfire damage. (Felfire is a very rare damage type that very few creatures can resist. Creatures that are vulnerable to fire damage are also vulnerable to Felfire in the same way.)"),
]);
const augmentSetDemonHunterFightFelfireWithFelfire: Set<Augment> = new Set<Augment>([
    new Augment("Hidden Form", new Cost(1, currencyAp), "Demon Form does not change your appearance."),
    new Augment("Powerful Form", new Cost(1, currencyAp), "All of your attributes are increased by 3, not just one. Your demon appearance can appear as you wish."),
    new Augment("Tough Form", new Cost(1, currencyAp), "While in Demon Form, you gain +3 soak and +2 health multiplier. (The extra health is gained immediately) "),
    new Augment("Enduring Form", new Cost(1, currencyAp), "Demon Form lasts until you choose to release it."),
]);
export const specializationDemonHunter: RankOption = new RankOption("Demon Hunter", specializationCategory,
    [
        new Rank(1, "Demon Sight", "You can sense the presence and type of all fiendish creatures within 60’. You deal +2 damage to all fiendish creatures."),
        new Rank(2, "Fel Training", "You gain +1 health multiplier. In addition, you learn a new augment that can be applied to any [Weapon] ability.", augmentSetDemonHunterFelTraining),
        new Rank(3, "Fight Felfire with Felfire", "Demon Form gains +1 augment slot. In addition, you gain a few augments that can be applied to the ability, Demon Form.", augmentSetDemonHunterFightFelfireWithFelfire),
    ],
    "[Demonology]");

const augmentSetProtectionAuraOfProtection: Set<Augment> = new Set<Augment>([
    new Augment("Protection", new Cost(2, currencyAp), "You can choose to take the damage and effects of any attack done on a creature inside your aura. This is decided before soak is applied."),
    new Augment("Healing", new Cost(1, currencyAp), "All creatures in the aura receive 2 more health from all forms of healing. This augment can be applied multiple times."),
    new Augment("Extension", new Cost(1, currencyAp), "The range of your Aura increases by 30’. This augment can be applied multiple times."),
]);
const augmentSetProtectionDefendTheWeak: Set<Augment> = new Set<Augment>([
    new Augment("Revenge", new Cost(1, currencyAp), "If a creature affected by your Taunt deals damage to any of your allies, they immediately take 3 unsoakable radiant damage. This damage increases by 2 if the ally is affected by your Aura. The creature must be within 120’. This augment can be applied multiple times, multiplying the damage dealt by the amount of augment slots used."),
    new Augment("Vengeance", new Cost(1, currencyAp), "Creatures affected by your Taunt take 2 more damage from all sources. This augment can be applied multiple times."),
]);
export const specializationProtection: RankOption = new RankOption("Protection", specializationCategory,
    [
        new Rank(1, "Aura of Protection", "You gain a few augments that can only be used on the Aura ability.", augmentSetProtectionAuraOfProtection),
        new Rank(2, "My Body is my Temple", "All healing you recieve is increased by 5. You can be healed 2 more times per full rest than usual. Your health multiplier is increased by 1."),
        new Rank(3, "Defend the Weak", "Your Aura ability gains +1 augment slot. In addition, you gain some augments for the Taunt ability.", augmentSetProtectionDefendTheWeak),
    ],
    "[Tank]");

const augmentSetRetributionAuraOfRetribution: Set<Augment> = new Set<Augment>([
    new Augment("Retribution", new Cost(1, currencyAp), "All those affected by your Aura deal 2 extra damage with all of their attacks. This augment can be applied multiple times."),
    new Augment("Haste", new Cost(1, currencyAp), "All those affected by your Aura gain +2 to their movement speed. This augment can be applied multiple times."),
    new Augment("Hunter", new Cost(2, currencyAp), "If any ally affected by your Aura takes damage from an enemy, you may choose to appear within 5’ of that enemy in an instant. The enemy must be within 120’."),
]);
const augmentSetRetributionVengeanceOfTheGods: Set<Augment> = new Set<Augment>([
    new Augment("Smite", new Cost(1, currencyAp), "The damage is changed to deal radiant. In addition, this ability deals 5 extra damage to any undead or fiendish creature. This augment can be applied multiple times."),
]);
export const specializationRetribution: RankOption = new RankOption("Retribution", specializationCategory,
    [
        new Rank(1, "Aura of Retribution", "You gain a few augments that can only be used on the Aura ability.", augmentSetRetributionAuraOfRetribution),
        new Rank(2, "Hunt the Wicked", "The difficulty of all insight and investigation rolls is reduced by 1 for you. In addition, you deal an extra 3 damage with all [Weapon] abilities."),
        new Rank(3, "Vengeance of the Gods", "Your Aura ability gains +1 augment slot. In addition, you gain a new augment that can be used on any [Weapon] ability.", augmentSetRetributionVengeanceOfTheGods),
    ],
    "");

const augmentSetChampionAuraOfTheChampion: Set<Augment> = new Set<Augment>([
    new Augment("Divine Champions", new Cost(3, currencyAp), "All those affected by your Aura can perform a [Basic] ability each round for no AP cost. "),
    new Augment("Divine Grace", new Cost(2, currencyAp), "All those affected by your Aura gain +3 AP each round that can only be spent on [Out-of-Turn] abilities. "),
    new Augment("Divine Speed", new Cost(1, currencyAp), "All those affected by your Aura may perform any move action for no AP cost once per round."),
]);
export const specializationChampion: RankOption = new RankOption("Champion", specializationCategory,
    [
        new Rank(1, "Aura of the Champion", "Your Aura ability gains a few new augments.", augmentSetChampionAuraOfTheChampion),
        new Rank(2, "Aura Master", "Your Aura ability gains +2 augment slots. In addition, once per encounter you may change the augments currently affecting Aura at-will. All creatures that are affected by your Aura while determining initiative gain +2 to their initiative."),
        new Rank(3, "True Champion", "Any time you deal damage, you can choose to deal radiant damage instead of the normal damage type. In addition, anytime you deal radiant damage, you deal 5 extra damage. All of your attacks that deal radiant damage ignore all soak, including titan soak."),
    ],
    "");

const augmentSetOrderOfTheTemplarSpellReflect: Set<Augment> = new Set<Augment>([
    new Augment("Anti-magic Strike", new Cost(1, currencyAp), "All targets damaged cannot cast [Spell] abilities until the end of their next turn."),
]);
export const specializationOrderOfTheTemplar: RankOption = new RankOption("Order of the Templar", specializationCategory,
    [
        new Rank(1, "Spell Block", "You may now use Parry against any single target [Spell] ability."),
        new Rank(2, "Break Concentration", "Anytime you deal damage to a creature, all [Buff] abilities are removed and if the target is maintaining any abilities, they immediately end."),
        new Rank(3, "Spell Reflect", "Anytime you successfully Parry a [Spell] ability and cause the ability to fail, you may choose to have the ability be reflected back to the caster. The caster suffers the effects of the ability with the number of successes they got before you used Parry. In addition, you gain an augment that can be applied to any ability.", augmentSetOrderOfTheTemplarSpellReflect),
    ],
    "");

const augmentSetCompassion_sTouchAdeptHealer: Set<Augment> = new Set<Augment>([
    new Augment("Range", new Cost(1, currencyAp), "+30’ range. This augment can be applied multiple times."),
    new Augment("Targets", new Cost(1, currencyAp), "+1 target. This augment can be applied multiple times."),
    new Augment("Potency", new Cost(1, currencyAp), "+3 potency. This augment can be applied multiple times."),
    new Augment("Restore", new Cost(1, currencyAp), "You may remove one adverse effect currently affecting the target. This augment can be applied multiple times."),
]);
export const specializationCompassion_sTouch: RankOption = new RankOption("Compassion's Touch", specializationCategory,
    [
        new Rank(1, "Status", "You know the total health of all friendly creatures within 30’. You also know if they are affected by any adverse effects (such as charmed, poisoned, etc.) If you gain Status again, the range increases to 60’ and affects all creatures."),
        new Rank(2, "Adept Healer", "You gain a few new augments that can only be applied to [Heal]  abilities.", augmentSetCompassion_sTouchAdeptHealer),
        new Rank(3, "Doctor", "The difficulty of all [Heal] abilities you do is reduced by 1. Any time you restore health, you restore 5 more. In addition, any time you remove an adverse condition, the target becomes immune to that adverse effect for 3 rounds."),
    ],
    "[Heal]");

const augmentSetAscensionDivineGift: Set<Augment> = new Set<Augment>([
    new Augment("Holy Light", new Cost(1, currencyAp), "If a friendly creature would take damage, it is instead healed for the same amount. This ability gains the [Heal] tag."),
]);
export const specializationAscension: RankOption = new RankOption("Ascension", specializationCategory,
    [
        new Rank(1, "Angelic Wings", "You manifest majestic wings that give you a fly speed of 12. If you already had a fly speed, you may add 4 to that speed instead of being at 12. The difficulty of all intimidate rolls are reduced by 1 for you against evil creatures. The difficulty of all persuasion and leadership rolls are reduced by 1 for you against all other creatures."),
        new Rank(2, "Divine Gift", "All healing you do is increased by 5 and all radiant damage you do is increased by 5. In addition, you gain an augment that can only be applied to [Radiant] + [Spell] abilities.", augmentSetAscensionDivineGift),
        new Rank(3, "Drawing out the Light", "Whenever you heal a creature, that creature on their next turn gains +2 AP and gains +5 potency on all of their abilities. Whenever you deal radiant damage to a creature, that creature on their next turn starts with 2 less AP and deals 5 less damage with all attacks."),
    ],
    "[Radiant, Heal]");

const augmentSetAngelicCallCallOfLight: Set<Augment> = new Set<Augment>([
    new Augment("Smite", new Cost(1, currencyAp), "This ability deals 5 extra damage to any undead or fiendish creature. This augment can be applied multiple times."),
    new Augment("Judgement", new Cost(1, currencyAp), "This ability cannot be dodged or parried and the difficulty cannot be increased. "),
    new Augment("Ray of Light", new Cost(1, currencyAp), "The range is doubled. This augment can be applied multiple times."),
]);
export const specializationAngelicCall: RankOption = new RankOption("Angelic Call", specializationCategory,
    [
        new Rank(1, "Divine Sense", "You know the presence and type of any divine creature within 30’ of you at all times."),
        new Rank(2, "Call of Light", "You gain a few augments that can only be applied to [Radiant] + [Spell] abilities.", augmentSetAngelicCallCallOfLight),
        new Rank(3, "Searing Light", "Any time you deal radiant damage with a spell to a creature, that creature’s soak is reduced by 1. The soak comes back after a long rest. Your [Radiant] abilities gain +3 potency and +1 augment slot."),
    ],
    "[Radiant]");

const augmentSetLuna_sServantCloakedInDarkness: Set<Augment> = new Set<Augment>([
    new Augment("Darkness", new Cost(1, currencyAp), "All creatures damaged by the spell become blinded by a magical darkness until the end of their next turn. Creatures with at least 2 ranks of any combination of [Shadow] specializations are immune to this effect. This augment can be applied multiple times."),
]);
export const specializationLuna_sServant: RankOption = new RankOption("Luna’s Servant", specializationCategory,
    [
        new Rank(1, "Nocturnal", "You gain the ability to see perfectly in darkness. This bypasses all forms of darkness, even magical darkness. In addition, you may use Senses instead of Subterfuge when casting a [Shadow] + [Spell] ability."),
        new Rank(2, "Cloaked in Darkness", "When you are obscured, you gain +1 soak. In addition, you gain an augment that can be applied to any [Shadow] + [Spell] ability you cast.", augmentSetLuna_sServantCloakedInDarkness),
        new Rank(3, "Enveloping Cloud", "When you are obscured, all of your abilities gain potency equal to your ranks in Subterfuge. In addition, your [Cloud] spells cost 2 less AP to maintain."),
    ],
    "[Shadow]");

const augmentSetSol_sServantFlash: Set<Augment> = new Set<Augment>([
    new Augment("Flash", new Cost(1, currencyAp), "All creatures damaged become blinded until the end of their next turn. If the target was already blind from a temporary effect, then increase the duration by 1 round.  Creatures with at least 2 ranks in any combination of [Radiant] specializations are immune to this secondary effect. This augment can be applied multiple times."),
]);
export const specializationSol_sServant: RankOption = new RankOption("Sol’s Servant", specializationCategory,
    [
        new Rank(1, "Display the Sun’s Radiance", "You gain the ability to emanate bright light outward. This light shines twice as far and bright as a torch and can be turned on or off at will.  In addition, you may use Senses instead of Presence when casting a [Radiant] + [Spell] ability."),
        new Rank(2, "Flash", "You are immune to the blind condition from abilities or effects that temporarily blind you. In addition, you learn an augment that can be used on any [Radiant] + [Spell] ability you cast.", augmentSetSol_sServantFlash),
        new Rank(3, "Brilliance", "Any creature blinded by a spell you cast also suffers -2 successes on all actions while blinded. Any creature within 5’ of you that damages you take 5 unsoakable radiant damage and is blinded until the start of their next turn."),
    ],
    "[Radiant]");

export const specializationElementalist: RankOption = new RankOption("Elementalist", specializationCategory,
    [
        new Rank(1, "Force of Nature", "For every 4 ranks you have in [Elemental] specializations, you gain +1 potency for all of your [Elemental] abilities. In addition, you may use any [Fire], [Water], [Ice], [Lightning], [Earth], [Air] specific augments on any [Elemental] ability, regardless of the other tags. (For example using a [Fire] augment with a [Lightning] ability.)"),
        new Rank(2, "Elemental Resistance", "Your training in the elements grants you some protection against them.  For every 4 ranks you have in [Elemental] specializations, you gain +1 stacking Titan Soak against all elements."),
        new Rank(3, "Elemental Attunement", "For every [Elemental] specialization you have 3 ranks in, you gain a bonus that is different depending on the element. [Fire] - +1 HP [Ice] - +1 resolve [Water] - +3 to all healing you do and receive [Earth] - +1 soak [Air] - +2 movement speed [Lightning] - +2 Initiative [Elemental] - Choose one of the above bonuses to gain"),
    ],
    "[Elemental]");

export const specializationElementalMastery: RankOption = new RankOption("Elemental Mastery", specializationCategory,
    [
        new Rank(1, "Piercing Elements", "Your abilities with the [Elemental] tag ignore Soak, including Titan Soak. In addition, you also bypass any immunity a creature may have to [Elemental] abilities."),
        new Rank(2, "Infused with the Elements", "The AP cost of all [Elemental] abilities you use is reduced. The reduction is based off the base AP cost. Abilities with a base AP of 2-4 are reduced by 1 AP (minimum of 1). Abilities with a base AP of 5-7 are reduced by 2 AP (minimum of 1)"),
        new Rank(3, "Advanced Adaptation", "Your spells with the [Elemental] tag gain +2 augment slots."),
    ],
    "[Elemental]");

const augmentSetDiscipleOfRadi_vImpact: Set<Augment> = new Set<Augment>([
    new Augment("Impact", new Cost(1, currencyAp), "All creatures damaged become staggered until the end of their next turn. Creatures with at least 2 ranks in any combination of [Fire] specializations are immune to this secondary effect. This augment can be applied multiple times."),
]);
export const specializationDiscipleOfRadi_v: RankOption = new RankOption("Disciple of Radi’v", specializationCategory,
    [
        new Rank(1, "Fire in your Belly", "You can now withstand extremely hot environments. In addition, you may use Senses instead of Presence when casting a [Fire] + [Spell] ability."),
        new Rank(2, "Impact", "Creatures within 5’ that target you with an attack become staggered until the end of their next turn. This applies after the attack. In addition, you learn an augment that can be used on any [Fire] + [Spell] ability you cast.", augmentSetDiscipleOfRadi_vImpact),
        new Rank(3, "One With Flame", "Reduce the difficulty of all [Fire] + [Spell] abilities by 1. Additionally, any time you deal fire damage, that damage is increased by 3. Creatures staggered by effects you produce must spend 1 more resolve to remove any effect other than stagger."),
    ],
    "[Fire, Elemental]");

const augmentSetDiscipleOfSpygWaterCloak: Set<Augment> = new Set<Augment>([
    new Augment("Slog", new Cost(1, currencyAp), "All creatures damaged are bogged down with water and lose 1 AP on their next turn. Creatures with at least 2 ranks in any combination of [Water] specializations do not suffer the AP reduction. This augment can be applied multiple times."),
    new Augment("Rejuvenating Water", new Cost(2, currencyAp), "All creatures affected by this ability gain +2 AP on their next turn. This augment can be applied multiple times."),
]);
export const specializationDiscipleOfSpyg: RankOption = new RankOption("Disciple of Spyg", specializationCategory,
    [
        new Rank(1, "Understanding the Current", "You gain a swim speed equal to your movement speed. If you already had a swim speed, gain +2 to your swim speed."),
        new Rank(2, "Water Cloak", "You can now breathe underwater. In addition, you learn two augments that can only be used on [Water] + [Spell] abilities that you cast.", augmentSetDiscipleOfSpygWaterCloak),
        new Rank(3, "One with Water", "While submerged in water, you gain +1 soak, +5 potency on all abilities and all abilities are made at -1 difficulty."),
    ],
    "[Water, Elemental]");

const augmentSetHydrologistLifeblood: Set<Augment> = new Set<Augment>([
    new Augment("Erode", new Cost(1, currencyAp), "All creatures damaged have their soak reduced by 1. Titan soak is unaffected. Creatures with at least 2 ranks in any combination of [Water] specializations are immune to this effect. This augment can be applied multiple times."),
    new Augment("Mighty", new Cost(1, currencyAp), "+3 potency. This augment can be applied multiple times."),
    new Augment("Trinity State", new Cost(1, currencyAp), "If this ability is being augmented by a [Fire] augment and an [Ice] augment, the potency is increased by 10. This augment can be applied multiple times."),
]);
export const specializationHydrologist: RankOption = new RankOption("Hydrologist", specializationCategory,
    [
        new Rank(1, "Different States", "You have a deep understanding of water and its natural forms. Although most of your studies are based on water in its liquid state, you have also learned the basics of water in vapor and solid form. You may apply [Fire] or [Ice] based augments to any [Water] abilities you know."),
        new Rank(2, "Lifeblood", "Water is known as the lifeblood of the world. Without it, no life could live. Your study of water’s many properties unlocks many secrets. You gain a few augments that can be applied to any [Water] + [Spell] ability.", augmentSetHydrologistLifeblood),
        new Rank(3, "Flexibility of Water", "Your [Water] abilities gain +1 augment slot. Your [Water] abilities gain the [Fire] and [Ice] tags. Every ability you perform that deals water damage also deals fire and cold damage . (The damage type is automatically decided between the three to whichever is best against the target)"),
    ],
    "[Water, Elemental]");

const augmentSetDiscipleOfAleuelShiftingWinds: Set<Augment> = new Set<Augment>([
    new Augment("Unbalance", new Cost(1, currencyAp), "All creatures damaged by the spell are knocked prone. Creatures with at least 2 ranks of any combination of [Air] specializations are immune to this effect."),
    new Augment("Shift", new Cost(1, currencyAp), "All creatures damaged by the spell are able to be moved up to 10’. Creatures with at least 2 ranks of any combination of [Air] specializations are immune to this effect. This augment can be applied multiple times."),
]);
export const specializationDiscipleOfAleuel: RankOption = new RankOption("Disciple of Aleuel", specializationCategory,
    [
        new Rank(1, "Light as a Feather", "You no longer take fall damage and gain +2 successes on any jump related check. In addition, you may use Senses instead of Subterfuge when casting a [Air] + [Spell] ability."),
        new Rank(2, "Shifting Winds", "You gain +1 success on all Dodge or Parry rolls. In addition, you learn two augments that can be used on any [Air] + [Spell] ability.", augmentSetDiscipleOfAleuelShiftingWinds),
        new Rank(3, "Air Dancer", "You can now fly. Your fly speed is the same as your movement speed. If you could fly before, you gain +2 to your fly speed. All forced movement you do is by increased by 10’, and if they impact another creature or a solid object, they take 5 unsoakable bludgeoning damage. Additionally, if you cause a target to be knocked prone, it costs them 2 extra AP to stand up."),
    ],
    "[Air, Elemental]");

const augmentSetDiscipleOfFanhaeOvercharge: Set<Augment> = new Set<Augment>([
    new Augment("Overcharge", new Cost(1, currencyAp), "Spell gains +8 potency, all damaged creatures gains +3 AP on their next turn. This augment can be applied multiple times."),
]);
export const specializationDiscipleOfFanhae: RankOption = new RankOption("Disciple of Fanhae", specializationCategory,
    [
        new Rank(1, "Lightning Reflexes", "You may perform an additional [Out-of-Turn] action each round. In addition, you may use Senses instead of Dexterity when casting a [Lightning] + [Spell] ability."),
        new Rank(2, "Overcharge", "The difficulty to dodge is reduced by 1. In addition, you learn an augment that can be used on any [Lightning] + [Spell] ability you cast.", augmentSetDiscipleOfFanhaeOvercharge),
        new Rank(3, "Lightning Soul", "When a creature gains AP from Overcharge, you also gain +1 AP that can only be used for [Out-of-Turn] abilities. (They must survive the attack to gain the bonus). All of your [Lightning] abilities gain +1 augment slot. Finally, all of your [Lightning] abilities have +3 potency."),
    ],
    "[Lightning, Elemental]");

const augmentSetDiscipleOfTilikSnowbound: Set<Augment> = new Set<Augment>([
    new Augment("Shards", new Cost(1, currencyAp), "Spell has +5 potency if damaged creature’s soak is ignored. This augment can be applied multiple times."),
]);
export const specializationDiscipleOfTilik: RankOption = new RankOption("Disciple of Tilik", specializationCategory,
    [
        new Rank(1, "Frozen Soul", "You can now withstand extremely cold environments. In addition, you may use Senses instead of Intellect when casting a [Ice] + [Spell] ability."),
        new Rank(2, "Snowbound", "You ignore all movement penalties from ice or snow. In addition, you learn an augment that can be used on any [Ice] + [Spell] ability you cast.", augmentSetDiscipleOfTilikSnowbound),
        new Rank(3, "Frozen Through", "All of your [Ice] abilities that deal damage gain penetrating. In addition, if you start your turn while on ice or snow, your movement speed is increased by 2 for that turn and your first move action costs 0 AP."),
    ],
    "[Ice, Elemental]");

const augmentSetDiscipleOfDawieWeathered: Set<Augment> = new Set<Augment>([
    new Augment("Head Crack", new Cost(1, currencyAp), "All creatures damaged become stunned until the end of their next turn. Creatures with at least 2 ranks in any combination of [Earth] specializations do not suffer the stunned effect."),
]);
export const specializationDiscipleOfDawie: RankOption = new RankOption("Disciple of Dawie", specializationCategory,
    [
        new Rank(1, "From the Soil", "You can now walk through stone, dirt, metal, and other materials of the earth. Once you enter the material, you cannot change directions, moving only forward or backwards, until you exit the material. 1 square of movement takes 2 movement while in the earth.  In addition, you may use Senses instead of Brawn when casting a [Earth] + [Spell] ability."),
        new Rank(2, "Weathered", "You gain +1 soak. In addition, you learn an augment that can be used on any [Earth] + [Spell] ability you cast.", augmentSetDiscipleOfDawieWeathered),
        new Rank(3, "Stone Forged", "You are now immune to the stunned effect, regardless of source. Moving through the earth now can be done with no movement penalty. You gain +1 health multiplier."),
    ],
    "[Earth, Elemental]");

const augmentSetNaturalistGrasp: Set<Augment> = new Set<Augment>([
    new Augment("Grasp", new Cost(1, currencyAp), "The target is restrained until the end of their next turn."),
]);
export const specializationNaturalist: RankOption = new RankOption("Naturalist", specializationCategory,
    [
        new Rank(1, "Plant Passage", "You become to immune to movement penalties from nature based things, such as thick vegetation or an icy floor. In addition, if you start your turn while on an area of plantlife, your movement speed is increased by 2 for that turn. In addition, you may use Senses instead of Brawn when casting a [Earth] + [Spell] ability."),
        new Rank(2, "Grasp", "You can speak with all plantlife. In addition, the difficulty of all social rolls with plantlife are reduced by 1. Finally, you gain an augment that can be applied to all [Earth] + [Spell] abilities you cast.", augmentSetNaturalistGrasp),
        new Rank(3, "Thorn’s Embrace", "Creatures restrained from an effect you or one of your companions produce are also considered to be staggered. You and all of your companions deal 3 damage against targets that are restrained. You are immune to being restrained."),
    ],
    "[Earth, Elemental]");

export const specializationNature_sChosen: RankOption = new RankOption("Nature’s Chosen", specializationCategory,
    [
        new Rank(1, "Timeless Body", "You no longer age, and are immune to any effects that magically age you. In addition, you are immune to poisons, diseases and curses. You also gain access to the Plant Beast ability."),
        new Rank(2, "Commander", "The command limit for each of your companions is increased by 3. In addition, you may give out up to 3 AP to your companions on each of your turns without any AP cost to you. All of your companions gain +2 soak and +5 potency on all of their abilities."),
        new Rank(3, "Nature’s Protector", "While standing in an area of nature (plants, dirt, sand, etc), you gain +3 titan soak, +1 maximum AP, +3 potency on all abilities, your [Earth] abilities cost 1 less AP (minimum of 1) and you may spend 1 resolve each round without actually losing any resolve."),
    ],
    "",
    [new TagRequirement(10, tagNature),]);

const augmentSetBeastmasterLink: Set<Augment> = new Set<Augment>([
    new Augment("Camouflage", new Cost(1, currencyAp), "Your beast no longer needs to be obscured to hide. In addition, your beast may attempt to hide once per turn for no AP cost. "),
    new Augment("Tremorsense", new Cost(1, currencyAp), "Your beast no longer needs to rely on sight to see. Your beast can sense the presence of all creatures within 30’ of it. "),
    new Augment("Hard to Hit", new Cost(1, currencyAp), "Decrease the difficulty to dodge by 1. In addition, your beast may perform the Dodge ability once per round for no AP cost. "),
    new Augment("Opposable Thumbs", new Cost(1, currencyAp), "Your beast gains manual dexterity. "),
    new Augment("Regenerating Cells", new Cost(1, currencyAp), "All healing your beast receives is increased by 5. This augment can be applied multiple times."),
    new Augment("Bruiser", new Cost(1, currencyAp), "All of your beast’s [Brawl] attacks deal +2 damage. This augment can be applied multiple times."),
    new Augment("Spit", new Cost(1, currencyAp), "Your beast gains the ability, Poison Spit or the ability, Acid Spit. (Depending on the type of beast)."),
    new Augment("Harry", new Cost(1, currencyAp), "Your beast gains a new ability, called Harry. If within 5’ of a creature, it can harry it for 3 AP. Until the start of your next turn, the target suffers one automatic failure on all rolls. While harrying an opponent, your beast automatically follows the target."),
    new Augment("Provoke", new Cost(1, currencyAp), "Your beast gains a new ability, called Provoke.3 AP, roll brawn + intimidate, difficulty 6. Choose a creature within 60’. For a number of turns equal to successes on the roll, the target can only attack your beast. "),
]);
const augmentSetBeastmasterPredator: Set<Augment> = new Set<Augment>([
    new Augment("Chameleon Skin", new Cost(1, currencyAp), "When your beast performs the Hide action, it goes invisible. Your beast automatically succeeds on the roll. "),
    new Augment("Big Presence", new Cost(1, currencyAp), "If your beast uses the Provoke ability, you can choose to affect all creatures of your choice within range. "),
    new Augment("Hardy", new Cost(1, currencyAp), "Your beast gains +2 titan soak. This augment can be applied multiple times."),
    new Augment("Massive Claws", new Cost(1, currencyAp), "Your beast’s claw attack deals +2 damage and gains reach."),
    new Augment("Massive Teeth", new Cost(1, currencyAp), "Your beast’s fang attack deals +2 damage and now ignores Titan soak. "),
    new Augment("Poisonous", new Cost(1, currencyAp), "All damage your beast deals is now poison damage. Any time your beast deals poison damage, the target is staggered until the end of their next turn. (Cannot take this and Acidic or Elemental)"),
    new Augment("Acidic", new Cost(1, currencyAp), "All damage your beast deals is now acid damage. Any time your beast deals acid damage, the target loses 1 soak. (Cannot take this and Poisonous or Elemental)"),
    new Augment("Pounce", new Cost(1, currencyAp), "Your beast gains a new ability, called Pounce.For 5 AP, your creature performs a move action to move up to its speed and then can make a basic brawl attack. If it moves at least 2 squares, the attack deals 3 extra damage and will knock the target prone if it deals damage."),
    new Augment("Elemental", new Cost(1, currencyAp), "Any time your beast deals damage, it now deals a specific damage type chosen when this augment is selected. The damage type can be any of the six elements (Fire, Ice, Water, Earth, Air, Lightning) (Cannot take this and Acidic or Poisonous)"),
    new Augment("Improved Harry", new Cost(1, currencyAp), "While your beast is harrying a creature, per the ability, Harry, it is cannot be targeted with attacks."),
]);
const augmentSetBeastmasterBond: Set<Augment> = new Set<Augment>([
    new Augment("Strength", new Cost(1, currencyAp), "Gain +2 to brawn. This can go above 5. This augment can be applied multiple times."),
    new Augment("Agile", new Cost(1, currencyAp), "Gain +2 to dexterity. This can go above 5. This augment can be applied multiple times."),
    new Augment("Alert", new Cost(1, currencyAp), "Gain +2 to senses. This can go above 5. This augment can be applied multiple times."),
    new Augment("Surprise Attack", new Cost(1, currencyAp), "If your beast attacks a creature that is unaware of its location, the attack deals +5 damage. "),
    new Augment("Ranged Combatant", new Cost(1, currencyAp), "Your beast’s ranged attacks have their range increased by 60’ and deal +3 damage."),
    new Augment("Well", new Cost(1, currencyAp), "Your beast gains +2 to its health modifier."),
    new Augment("Scary", new Cost(1, currencyAp), "Any creature under the effects of the Provoke ability that your beast performs also suffers the Afraid condition. "),
    new Augment("Energetic", new Cost(1, currencyAp), "Your beast’s maximum AP is increased by 2."),
    new Augment("Vicious", new Cost(1, currencyAp), "Your beast’s attacks cost 1 less AP (minimum of 1)"),
    new Augment("Withstand", new Cost(1, currencyAp), "At the end of your turn, your beast can choose to Withstand. If it does so, your beast gains +5 titan soak until the start of your turn, but is unable to to perform any actions. "),
    new Augment("Ravager", new Cost(1, currencyAp), "Your beast may perform a [Basic] Brawl attack for no AP cost each round."),
    new Augment("Toxic", new Cost(1, currencyAp), "Your beast’s attacks that deal poison or acid damage prevent the target from spending resolve on anything other than removing this effect until the end of their next turn. Additional applications increase the resolve cost to remove this effect."),
    new Augment("Master Harry", new Cost(1, currencyAp), "If your beast is harrying a creature, per the ability, Harry, and the creature fails or botches any roll, your beast can make a basic attack against the creature immediately for no AP cost. In addition, harry now only costs 1 AP."),
]);
export const specializationBeastmaster: RankOption = new RankOption("Beastmaster", specializationCategory,
    [
        new Rank(1, "Link", "You share a mental connection with all of your companions. You can speak with them telepathically, assuming they are within 1 mile of you. In addition, all of your companions gained from the ability, Animal Companion, gain 1 point in an attribute of your choice and you may allocate 3 extra ranks in skills of your choice. Animal Companion gains +1 augment slot. You may apply a new augment immediately for each of your companions. Finally, you gain new augments you can only apply to Animal Companion.", augmentSetBeastmasterLink),
        new Rank(2, "Predator", "All of your companions deal 3 extra damage on all of their attacks. All of your companions gain +2 soak. In addition, all of your companions from the ability, Animal Companion, gain 1 point in an attribute of your choice and you may allocate 3 ranks in skills of your choice. Animal Companion gains +1 augment slot. You may apply a new augment immediately for each of your companions. Finally, you gain new augments you can only apply to Animal Companion.", augmentSetBeastmasterPredator),
        new Rank(3, "Bond", "Any time you cast a beneficial spell on yourself, the same effect applies to all of your companions. One companion of your choice has their maximum AP increased by 4. You may choose a different companion to gain this bonus after taking a rest. In addition, all of your companions from the ability, Animal Companion, gain 1 point in an attribute of your choice and you may allocate 3 ranks in skills of your choice. Animal Companion gains +1 augment slot. You may apply a new augment immediately for each of your companions. Finally, you gain new augments you can only apply to Animal Companion.", augmentSetBeastmasterBond),
    ],
    "");

const augmentSetShapeshifterAnimalForm: Set<Augment> = new Set<Augment>([
    new Augment("Camouflage", new Cost(1, currencyAp), "You no longer need to be obscured to hide. In addition, you may attempt to hide once per turn for no AP cost. "),
    new Augment("Flying", new Cost(1, currencyAp), "Gain flying speed equal to movement speed. (if you already had a fly speed, increase movement by +2)."),
    new Augment("Voice", new Cost(1, currencyAp), "Gain the ability to speak."),
    new Augment("Tremorsense", new Cost(1, currencyAp), "You no longer need to rely on sight to see. You can sense the presence of all creatures within 30’ of you."),
    new Augment("Hard to Hit", new Cost(1, currencyAp), "Decrease the difficulty to dodge by 1. In addition, you may perform the Dodge ability once per round for no AP cost."),
    new Augment("Opposable Thumbs", new Cost(1, currencyAp), "Gain manual dexterity."),
    new Augment("Regenerating Cells", new Cost(1, currencyAp), "All healing you recieve is increased by 5. This augment can be applied multiple times."),
    new Augment("Bruiser", new Cost(1, currencyAp), "All of your [Brawl] attacks deal +2 damage. This augment can be applied multiple times."),
    new Augment("Venomous", new Cost(1, currencyAp), "When performing any [Basic] ability, you can choose to change the damage type to poison or acid (depending on the beast)."),
    new Augment("Fast Forming", new Cost(1, currencyAp), "The AP cost of Shapeshifting is reduced by 1. This augment can be applied multiple times."),
]);
const augmentSetShapeshifterToughHide: Set<Augment> = new Set<Augment>([
    new Augment("Chameleon Skin", new Cost(1, currencyAp), "When you perform the Hide action, you go invisible. You automatically succeed on the roll."),
    new Augment("Big Presence", new Cost(1, currencyAp), "If you use the Taunt ability, you can choose to affect all creatures of your choice and the range is increased by 30’."),
    new Augment("Hardy", new Cost(1, currencyAp), "You gain +2 titan soak. This augment can be applied multiple times."),
    new Augment("Massive Claws", new Cost(1, currencyAp), "Your Retractable Claw ability deals +2 damage and gains reach."),
    new Augment("Massive Teeth", new Cost(1, currencyAp), "Your Retractable Fangs ability deals +2 damage and now ignores Titan soak."),
    new Augment("Terrible Poisons", new Cost(1, currencyAp), "Any [Poison] ability you use staggers the target until the end of their next turn if the attack dealt damage."),
    new Augment("Vicious Acids", new Cost(1, currencyAp), "Any [Acid] ability you use causes the target to lose 1 soak if the attack dealt damage."),
]);
const augmentSetShapeshifterPerfectForm: Set<Augment> = new Set<Augment>([
    new Augment("Strength", new Cost(1, currencyAp), "Gain +2 to your brawn. This can go above 5."),
    new Augment("Agile", new Cost(1, currencyAp), "Gain +2 to your dexterity. This can go above 5. "),
    new Augment("Alert", new Cost(1, currencyAp), "Gain +2 to your senses. This can go above 5."),
    new Augment("Surprise Attack", new Cost(1, currencyAp), "If you attack a creature that is unaware of your location, the attack deals +5 damage."),
    new Augment("Ranged Combatant", new Cost(1, currencyAp), "Your ranged attacks have their range increased by 60’ and deal +3 damage."),
    new Augment("Scary", new Cost(1, currencyAp), "Any creature under the effects of the Taunt ability that you performed also suffers the Afraid condition."),
    new Augment("Energetic", new Cost(1, currencyAp), "Your maximum AP is increased by 1."),
    new Augment("Withstand", new Cost(1, currencyAp), "At the end of your turn, you can choose to Withstand. If you do so, you gain +5 titan soak until the start of your turn, but are unable to to perform any actions."),
    new Augment("Ravager", new Cost(1, currencyAp), "You may perform a [Basic] Brawl attack for no AP cost each round."),
    new Augment("Toxic", new Cost(1, currencyAp), "Your attacks that deal poison or acid damage prevent the target from spending resolve on anything other than removing this effect until the end of their next turn. Additional applications increase the resolve cost to remove this effect."),
]);
export const specializationShapeshifter: RankOption = new RankOption("Shapeshifter", specializationCategory,
    [
        new Rank(1, "Animal Form", "Your Shapeshift ability gains +1 augment slot. In addition, you may use the augments listed below whenever casting Shapeshift.", augmentSetShapeshifterAnimalForm),
        new Rank(2, "Tough Hide", "Your Shapeshift ability gains +1 augment slot. In addition, you gain +1 health modifier. You may use the augments listed below whenever casting Shapeshift.", augmentSetShapeshifterToughHide),
        new Rank(3, "Perfect Form", "Your Shapeshift ability gains +1 augment slot. You no longer need to assume the form of an animal. When you shapeshift, you can choose to gain the benefits of the traits you select without turning fully into an animal. If you do so, you no longer lose your manual dexterity or the ability to speak. You can also hide specific traits. It costs 1 AP to hide traits, in which they retract back into your body. You lose the benefits of the trait until you spend 1 AP to bring it back out. The AP cost to extend and retract your claws/fangs is reduced by 1.You may use the augments listed below whenever casting Shapeshift.", augmentSetShapeshifterPerfectForm),
    ],
    "[Tank]");

const augmentSetDefilerWither: Set<Augment> = new Set<Augment>([
    new Augment("Wither", new Cost(1, currencyAp), "All creatures damaged cannot be healed until the end of your next turn. Creatures with at least 2 ranks in any combination of [Necrotic] specializations are immune to this secondary effect."),
]);
export const specializationDefiler: RankOption = new RankOption("Defiler", specializationCategory,
    [
        new Rank(1, "Corrupted Body", "Your maximum health can never be reduced. In addition, you may use Senses instead of Subterfuge when casting a [Necrotic] + [Spell] ability."),
        new Rank(2, "Wither", "You may choose to wither any plant you touch. In addition, you learn an augment that can be used on any [Necrotic] + [Spell] ability you cast.", augmentSetDefilerWither),
        new Rank(3, "Corruptor's Touch", "Any time you deal necrotic damage, the target’s maximum health is reduced by the same amount. (When healed, the creature can only be healed up to the new maximum.) A creature’s maximum health is restored to normal after a long rest or if cured by an effect that can remove curses. Additionally, when you kill a target with necrotic damage, you gain hit points equal to your total ranks in any [Necrotic] specializations. This does not count as a heal."),
    ],
    "[Necrotic]");

const augmentSetMephiteToxic: Set<Augment> = new Set<Augment>([
    new Augment("Toxic", new Cost(1, currencyAp), "All creatures damaged are staggered until the end of their next turn. Creatures with at least 2 ranks in any combination of [Poison] specializations are immune to this secondary effect."),
]);
export const specializationMephite: RankOption = new RankOption("Mephite", specializationCategory,
    [
        new Rank(1, "Poison Sight", "You automatically know, out to 30ft, when a creature is venomous or poisonous, a creature is currently poisoned, if a plant is poisonous or any food is poisoned. In addition, you may use Senses instead of Subterfuge when casting a [Poison] + [Spell] ability."),
        new Rank(2, "Toxic", "You are immune to all adverse effects from [Poison] abilities. In addition, you learn an augment that can be used on any [Poison] + [Spell] ability you cast.", augmentSetMephiteToxic),
        new Rank(3, "Snakeblood", "When you stagger a target, the stagger condition lasts 1 more turn and the penalty to successes is increased by 1. If you cause a creature to have the staggered condition for at least the next 5 turns, the staggered condition ends and the target is paralyzed until the end of its next turn. In addition, creatures must spend 1 more point of resolve to remove any adverse effect you cause."),
    ],
    "[Poison]");

export const specializationWanderer: RankOption = new RankOption("Wanderer", specializationCategory,
    [
        new Rank(1, "Well Traveled", "While traveling outside of a town or city, you cannot be ambushed or surprised. You gain +2 to movement speed. You ignore movement penalties."),
        new Rank(2, "Well Versed", "You can read and understand any language. You can communicate with beasts and plant-like creatures. It costs 1 less experience to raise your skills."),
        new Rank(3, "Well Rested", "Regardless of your sleeping conditions, you always benefit from a full rest when resting. In addition, after you gain the benefits of a full rest, all of your attributes are considered to be 1 higher for 4 hours. (They can go over 5)"),
    ],
    "");

const augmentSetRavagerSavage: Set<Augment> = new Set<Augment>([
    new Augment("Bleed", new Cost(1, currencyAp), "The target begins to bleed. At the start of the target’s turn, they take unsoakable damage equal to the base AP cost of the ability used. This is a bleed effect. This effect stacks with additional applications. This augment can be applied multiple times."),
    new Augment("Devastate", new Cost(1, currencyAp), "This ability deals triple damage. You may only activate this augment once per encounter."),
]);
export const specializationRavager: RankOption = new RankOption("Ravager", specializationCategory,
    [
        new Rank(1, "Predator’s Instinct", "Predator beasts, (such as big cats, raptors or wolves), instinctively know you are king of the jungle. They will in general avoid attacking you. If for any reason you do fight, those beasts will either only attack you or never attack you unless there is no other option. You decide each animal’s decision."),
        new Rank(2, "Savage", "You are immune to bleed effects. You gain two new augments that can be applied to any [Brawl] abilities you use.", augmentSetRavagerSavage),
        new Rank(3, "Beast’s Fury", "Your [Brawl] abilities gain +1 augment slot and +3 potency. Your bleed effects deliver their effects immediately."),
    ],
    "");

export const specializationCarnage: RankOption = new RankOption("Carnage", specializationCategory,
    [
        new Rank(1, "Bloodlust", "Any time a creature within 30’ of you is bleeding, your lust for blood comes to the surface. You deal 3 extra damage and gain an automatic success on all attacks."),
        new Rank(2, "Shred", "Your Bleed augment now also reduces a target’s soak by 1 per application and while the bleed is active, the target receives half healing from all sources. In addition, the effects of Bleed are doubled against a target with no soak."),
        new Rank(3, "Death Incarnate", "Once per round when you take damage you may perform a [Basic] ability for no AP cost immediately. In addition, you gain +2 HP."),
    ],
    "");

export const specializationTrapper: RankOption = new RankOption("Trapper", specializationCategory,
    [
        new Rank(1, "Magical Trapsmith", "You unlock the ability to imbue magic into your traps. When making a kill trap, you can change the damage type to be any damage type that you have at least 3  ranks of a specialization in. In addition, you gain access to new effects for your hamper traps. Each rank of Trapper you gain unlocks a new type of trap. <table style=\"border:none;border-collapse:collapse\"><colgroup><col width=\"101\"><col width=\"71\"><col width=\"79\"><col width=\"294\"><col width=\"79\"></colgroup><tbody><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><br><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Name</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Kill </span></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">or</span></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Hamper</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Simple or</span></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Complex</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><br><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Effects</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Trapper</span></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Rank </span></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Required</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Fear</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Hamper</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Simple</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Makes the target afraid of you for a number of turns equal to successes</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">1</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Confusion</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Hamper</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Simple</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Confuses the target for a number of turns equal to successes</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Stun</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Hamper</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Simple</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Stuns the target for a number of turns equal to half your successes</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Charm</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Hamper</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Simple</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Charms the target for a number of turns equal to your successes</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">4</span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Incapacitate</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Hamper</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Simple</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Incapacitates the target for a number of turns equal to half your successes</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;text-align: center;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">5</span></p></td></tr></tbody></table>"),
        new Rank(2, "Trapper", "You gain +2 dice to all rolls involving traps"),
        new Rank(3, "Camouflage", "The difficulty to find your traps is increased by 2"),
        new Rank(4, "Bait", "Non-sentient creatures that require standard food (aka edible for humans) that are within 60ft of any trap you assemble must make a senses + discipline, difficulty 9 roll. On a failure, the creature goes toward the trap and will trigger it as quickly as possible. This roll is only done up to twice; when first entering the radius and then again the first time its health ever drops below half and is in the radius. Creatures below half health make this roll with -2 successes."),
        new Rank(5, "Master Hunter", "The time required to create complex traps is reduced by half. In addition, creatures current health has no effect on the duration of your hamper traps."),
    ],
    "[Trapmaking]");

export const specializationBotanist: RankOption = new RankOption("Botanist", specializationCategory,
    [
        new Rank(1, "Herbalist", "The difficulty to identify, scavenge, or otherwise interact with natural herbs, flowers and plants is decreased by 1"),
        new Rank(2, "Potent Brews", "All potions you brew have their duration doubled, and all splash potions you brew extend a further 5’ in each direction. Additionally, all oils you brew have double the amount of applications available"),
        new Rank(3, "Master Botanist", "Whenever you make a brew, you create a second identical brew for no additional cost. Additionally, you get +2 dice to all rolls made to brew."),
    ],
    "[Brewing]");

const augmentSetRejuvenationNature_sGift: Set<Augment> = new Set<Augment>([
    new Augment("Renew", new Cost(1, currencyAp), "This spell can now be maintained for a number of turns up to the number of augment slots used on this augment. When maintained, the target regains the effects of the ability at the start of your turn. If this effect causes healing, it does not count as a separate heal. Other augments applied do no reapply. It costs 1 AP to maintain a spell with this augment. This augment can be applied multiple times."),
]);
export const specializationRejuvenation: RankOption = new RankOption("Rejuvenation", specializationCategory,
    [
        new Rank(1, "Status", "You know the total health of all friendly creatures within 30’. You also know if they are affected by any adverse effects (such as charmed, poisoned, etc.) If you gain Status again, the range increases to 60’ and affects all creatures. In addition, you may use Senses instead of Presence when casting a [Heal] + [Spell] ability."),
        new Rank(2, "Nature’s Gift", "You are immune to poison and disease. In addition, you learn an augment that can be used on any [Heal] ability you cast.", augmentSetRejuvenationNature_sGift),
        new Rank(3, "Tend the Garden", "When you perform a [Heal] ability, you may target an additional creature. Additionally, your [Heal] abilities gain +1 augment slot. Finally, you do not need to spend AP the first time you maintain the Renew augment."),
    ],
    "[Heal]");

export const specializationAll_seeingEye: RankOption = new RankOption("All-Seeing Eye", specializationCategory,
    [
        new Rank(1, "Telepathy", "You can generate a mental link with a number of willing creatures equal to 5 plus your ranks in insight. While you have this mental link, you and the creature can communicate back and forth using just your thoughts. There is no limit on distance as long as you are on the same plane of existence."),
        new Rank(2, "Truesight", "Nothing can hide from you. Within 60’ you can see invisible creatures as if they were visible, and illusions appear translucent. If you already have Truesight, the range is increased to be unlimited."),
        new Rank(3, "Mentalist", "Your telepathy works even on different planes now. In addition, you can allow group communication between the different creatures you are linked with and yourself. Finally, the difficulty of all perception and insight rolls are reduced by 1."),
    ],
    "");

export const specializationPrivateEye: RankOption = new RankOption("Private Eye", specializationCategory,
    [
        new Rank(1, "Human Lie Detector", "You always know when someone is lying."),
        new Rank(2, "Investigator", "The difficulty of all investigation checks are reduced by 2"),
        new Rank(3, "See the Scene", "[Ritual] If you spend 1 hour investigating a specific area, you may instantly view the last 24 hours in this location (such a room or small section outdoors). This info is presented as if you were there while it is happening. (You don’t need to ‘watch’ all 24 hours, you know of all things that happened during the time period."),
    ],
    "");

export const specializationThirdEye: RankOption = new RankOption("Third Eye", specializationCategory,
    [
        new Rank(1, "Omniscient", "You can see through the eyes of all creatures you are linked with at all times, as well as through your own. In addition, you may perform any action that doesn’t require a physical body to do, (such as mental powers or casting a spell), as if it originated from a creature that is linked to you. (For example, you could cast any [Spell] ability as if you were one of your linked creatures, but you could not attack with a weapon or move) You have a blindsense out to 30’. This allows you to always know the presence of all creatures in range. See the Scene now only takes a minute of investigating, rather than an hour."),
        new Rank(2, "Auspex", "You can talk to any creature within 30’ telepathically. You choose whether the creature can respond to you mentally or not. You may read the thoughts of any creature within 30’. Surface thoughts require no effort, but digging deep to get specific information may require an intellect + insight roll, difficulty 7. You can read the aura of any creature within 30’. This allows you to learn their mood."),
        new Rank(3, "Enlightened", "You gain +5 to initiative. When determining initiative order, if subtracting 10 from your initiative leaves you with a positive integer, you may also act on that initiative. Repeat this process until subtracting 10 no longer leaves you with a positive integer. Regardless of your total initiative, you may not take more than 3 turns in a single round. Spending AP to increase your initiative reduces your total AP for every turn you take on the first round."),
    ],
    "");

const augmentSetSoulShaperLifeWeaver: Set<Augment> = new Set<Augment>([
    new Augment("Potency", new Cost(1, currencyAp), "+3 potency. This augment can be applied multiple times."),
    new Augment("Reenergizing", new Cost(1, currencyAp), "The targets lose one stack of exhaustion. This augment can only be applied once per rest."),
    new Augment("Clear", new Cost(1, currencyAp), "The targets are cured of a curse effect. This augment can only be applied once per rest."),
    new Augment("Reinvigorating", new Cost(1, currencyAp), "The targets regain one resolve. This augment can only be applied once per rest."),
    new Augment("Gentle Touch", new Cost(1, currencyAp), "This does not count against the number of available heals a creature has. This augment can only be applied once per encounter."),
]);
export const specializationSoulShaper: RankOption = new RankOption("Soul Shaper", specializationCategory,
    [
        new Rank(1, "Mind Healing", "When you perform [Heal] abilities, you may roll using Intellect + Discipline instead of the normal pairing. If you choose to do so, the ability loses the [Spell] tag. You can sense when creatures near you are struggling with an issue."),
        new Rank(2, "Life Weaver", "You gain a few new augments that can only be applied to [Heal]  abilities.", augmentSetSoulShaperLifeWeaver),
        new Rank(3, "Vital Flow", "All creatures affected by your [Heal] abilities gain +1 AP for a number of turns equal to successes on the roll. In addition, anytime you remove exhaustion from a creature, remove a curse effect from a creature or cause a creature to regain resolve, the same effect applies to you."),
    ],
    "[Heal]");

const augmentSetPsychicMentalRecharge: Set<Augment> = new Set<Augment>([
    new Augment("Fear", new Cost(1, currencyAp), "All creatures damaged are afraid of you until the end of their next turn. Creatures with at least 2 ranks of any combination of [Psychic] specializations are immune to this effect."),
    new Augment("Brain Freeze", new Cost(1, currencyAp), "All creatures damaged are restrained until the end of their next turn. Creatures with at least 2 ranks of any combination of [Psychic] specializations are immune to this effect."),
    new Augment("Numb", new Cost(1, currencyAp), "All creatures damaged cannot perform [Out-of-Turn] abilities until the end of their next turn. Creatures with at least 2 ranks of any combination of [Psychic] specializations are immune to this effect."),
]);
export const specializationPsychic: RankOption = new RankOption("Psychic", specializationCategory,
    [
        new Rank(1, "Mental Recharge", "Whenever you spend a point of resolve, you regain 5 health. This does not count as a heal. 2: Know-it-all - You learn a number of augments that can be applied to any [Psychic] abilities you use.", augmentSetPsychicMentalRecharge),
        new Rank(2, "Psion", "All of your [Psychic] abilities gain +1 augment slot and deal 3 extra damage. You gain +1 maximum resolve."),
    ],
    "[Psychic]");

const augmentSetOutsiderAddle: Set<Augment> = new Set<Augment>([
    new Augment("Addle", new Cost(1, currencyAp), "All creatures damaged are confused until the end of their next turn. Creatures with at least 2 ranks of any combination of [Psychic] specializations are immune to this effect."),
]);
export const specializationOutsider: RankOption = new RankOption("Outsider", specializationCategory,
    [
        new Rank(1, "Vampiric Recharge", "Once per encounter, if you bring a creature to 0 health dealing psychic damage, you may regain 1 resolve."),
        new Rank(2, "Addle", "You are immune to the confused condition. In addition, you gain an augment that you can apply to any [Psychic] abilities you cast.", augmentSetOutsiderAddle),
        new Rank(3, "Master of Madness", "Whenever a creature within 120’ of you rolls a d10 for confusion, subtract 2 from the result. If the result would be 0 or less, you can choose what effect happens. In addition, creatures that are confused from an effect you caused take 5 unsoakable psychic damage at the start of their turn.The difficulty of all of your abilities with the [Psychic] tag are decreased by 1."),
    ],
    "[Psychic]");

const augmentSetMindOverMatterPsychicCreations: Set<Augment> = new Set<Augment>([
    new Augment("Mind Shield", new Cost(1, currencyAp), "If you get at least one success on the Parry roll, you are immune to any adverse effects."),
    new Augment("Energy Absorb", new Cost(1, currencyAp), "If you successfully reduce the attack to 0 successes, you heal for the amount of damage the attack would have done before you used Parry."),
    new Augment("Backlash", new Cost(1, currencyAp), "If you successfully reduce the attack to 0 successes, the attacker suffers psychic damage equal to the amount of damage the attack would have done before you used Parry."),
]);
const augmentSetMindOverMatterBoundBlade: Set<Augment> = new Set<Augment>([
    new Augment("Adaptive", new Cost(1, currencyAp), "Your bound weapons gain the concussive, penetrating, thrown, simple, reach or defensive trait before the ability is used. This augment can be applied multiple times, each time applying a different trait."),
]);
export const specializationMindOverMatter: RankOption = new RankOption("Mind Over Matter", specializationCategory,
    [
        new Rank(1, "Psychic Creations", "The Psi Tools and Psi Blades abilities now cost no AP. 2: Psi Shield -You can quickly form a mental barrier to block incoming attacks. You can now use Parry on any type of attack. Parry gains +1 augment slot. In addition, you gain a few augments that can be applied to the ability, Parry.", augmentSetMindOverMatterPsychicCreations),
        new Rank(2, "Bound Blade", "You may create a set of permanent weapons from the ability, Psi Blades. To do so, you must create a set of weapons as normal and perform a short ritual to bind the weapons to you. In that moment, the true name of the weapons are revealed to you and you must state their name to summon them. Your bound weapons can still be summoned and dissipated at will. Your bound weapons can be enchanted. Any ability used through them gains +1 augment slot and deals +3 damage. In addition, you gain a new augment that can be applied to any [Weapon] ability used with your bound weapon.", augmentSetMindOverMatterBoundBlade),
    ],
    "[Psychic]");

export const specializationSavant: RankOption = new RankOption("Savant", specializationCategory,
    [
        new Rank(1, "Inexplicable Skill", "The lowest your dice pool can be is 3, no matter the circumstances."),
        new Rank(2, "Innate Abilities", "Abilities cost 1 less experience for you to purchase. Your attributes cost 1 less experience for you to upgrade."),
        new Rank(3, "Natural Talent", "Your three worse attunement spheres have their attunement reduced by 1. For example, if your martial attunement is “8x”, it would now be “7x.”"),
    ],
    "");

const augmentSetKiSageMysticMage: Set<Augment> = new Set<Augment>([
    new Augment("Unerring", new Cost(1, currencyAp), "This ability cannot be parried or dodged."),
    new Augment("Ki Block", new Cost(1, currencyAp), "If the ability deals damage, the targets cannot be healed until the end of their next turn."),
    new Augment("Drain", new Cost(2, currencyAp), "If the ability deals damage, the targets lose one point of resolve. Creatures can only be affected by this augment once per day."),
]);
const augmentSetKiSageCloseYourEyes: Set<Augment> = new Set<Augment>([
    new Augment("Focused", new Cost(1, currencyAp), "All targets gain +2 maximum AP for the duration."),
]);
export const specializationKiSage: RankOption = new RankOption("Ki Sage", specializationCategory,
    [
        new Rank(1, "Connected Soul", "You can understand all written and spoken languages. If you have 3 ranks in animal handling, you can understand and speak to animals."),
        new Rank(2, "Mystic Mage", "Your [Ki] + [Force] abilities can use augments as if they had the [Spell] tag. In addition, your [Ki] + [Force] abilities gain the tag of any damage type you have at least 2 total ranks in any combination of specializations tagged with that damage type. You also gain a few new augments that can be applied to any [Ki] + [Force] abilities.", augmentSetKiSageMysticMage),
        new Rank(3, "Close Your Eyes", "All of your [Ki] + [Force] abilities gain +1 augment slot. You gain a new augment that can only be applied to Meditate and Centered.", augmentSetKiSageCloseYourEyes),
    ],
    "[Ki]");

const augmentSetAdeptSecretSeals: Set<Augment> = new Set<Augment>([
    new Augment("Seal of Strength", new Cost(2, currencyAp), "You may add your senses to the damage of all your attacks."),
    new Augment("Seal of Synergy", new Cost(2, currencyAp), "Once per round on your turn you may perform a [Ki] + [Force] ability for no AP cost after performing a [Brawl] + [Weapon] ability and vice versa (still only once per turn, regardless of which comes first.)"),
    new Augment("The Final Seal", new Cost(4, currencyAp), "You unlock all of the seals in your body. Apply every other augment you know for this ability. After the ability ends, you gain 3 stacks of exhaustion."),
]);
const augmentSetAdeptJustBreathe: Set<Augment> = new Set<Augment>([
    new Augment("Death", new Cost(1, currencyAp), "All target’s attacks bypass all soak, including Titan soak. In addition, all target’s abilities gain +3 potency. This augment can only be applied once."),
]);
export const specializationAdept: RankOption = new RankOption("Adept", specializationCategory,
    [
        new Rank(1, "Lethal Hands", "Unarmed attacks lose the nonlethal property. Weapons with the Full-body trait deal +2 damage."),
        new Rank(2, "Secret Seals", "Unlock the Seals gains +1 augment slot for you. In addition, you gain a few new augments that can only be applied to Unlock the Seals.", augmentSetAdeptSecretSeals),
        new Rank(3, "Just Breathe", "Meditate and Centered cost 2 less AP to use. You gain a new augment that can only be applied to Meditate and Centered.", augmentSetAdeptJustBreathe),
    ],
    "[Ki]");

const augmentSetMentalFortressBacklash: Set<Augment> = new Set<Augment>([
    new Augment("Willpower", new Cost(1, currencyAp), "All targets are immune to adverse effects for the duration."),
]);
export const specializationMentalFortress: RankOption = new RankOption("Mental Fortress", specializationCategory,
    [
        new Rank(1, "Iron Will", "The first time each day when you spend resolve to end an adverse effect currently affecting you, it doesn't cost you any resolve."),
        new Rank(2, "Backlash", "Any time you spend resolve to remove an adverse effect, that adverse effect is put on a creature of your choice within 60’. This effect also happens if a creature tries to affect you with an adverse effect when you are immune to them. 3: Empty Your Mind -. Whenever you use Meditate or Centered, you gain 5 temporary hit points that last for the duration of the ability. You gain a new augment that can only be applied to Meditate and Centered.", augmentSetMentalFortressBacklash),
    ],
    "[Ki]");

const augmentSetTranquilTranquility: Set<Augment> = new Set<Augment>([
    new Augment("Grace", new Cost(1, currencyAp), "The difficulty of Dodging and Parrying is reduced by two for all targets and the AP cost is reduced by 1 (Minimum of 1)."),
    new Augment("Tranquil", new Cost(1, currencyAp), "All targets ignore the penalties of exhaustion and add three dice to all rolls. "),
]);
export const specializationTranquil: RankOption = new RankOption("Tranquil", specializationCategory,
    [
        new Rank(1, "Tranquility", "Meditate and Centered gain +1 augment slot. You gain a couple new augments that can only be applied to Meditate and Centered.", augmentSetTranquilTranquility),
        new Rank(2, "Center Yourself", "All of your [Ki] abilities have +5 potency. When you use Unlock the Seals, you may choose to also affect all creatures of your choice within 30’. Creatures cannot be forced to activate the Final Seal."),
        new Rank(3, "Peace", "You gain +2 to your movement speed. You gain a teleport speed that is equal to your movement speed. You gain +2 AP each round that can only be used on [Out-of-Turn] abilities. You gain +1 health multiplier."),
    ],
    "[Ki]");

export const specializationShade: RankOption = new RankOption("Shade", specializationCategory,
    [
        new Rank(1, "Obfuscation", "You no longer need to be obscured in any way to attempt to hide. Instead, you cloud the minds of those around you. Their mind begins to trick itself to prove that you aren’t there. You can still be heard, smelt and ran into. This doesn’t work if a creature is currently looking at you."),
        new Rank(2, "Shade Strike", "You can hide for no AP cost. After using any ability with the [Skulker] tag your next attack gains penetrating and +2 potency."),
        new Rank(3, "Master of the Pale", "Once per turn, you can attempt to hide even if creatures know where you are. You essentially wipe their mind of memory of your location. Once the memory is gone, you disappear from their vision. They don’t forget about you, they just can’t see you, so they can still look for you. All of your abilities gain the [Skulker] tag."),
    ],
    "[Skulker]");

export const specializationSoulbinder: RankOption = new RankOption("Soulbinder", specializationCategory,
    [
        new Rank(1, "Animated Parts", "You have learned the basics of Soulbinding, the art of imbuing soul energy into objects. Crafting machines through artificing costs half the gold and half the time."),
        new Rank(2, "Adept Soulbinder", "The difficulty of artificing is reduced by 1 for you. In addition, you have a reserve of soul energy on hand every day you can use to reduce the cost of the materials when artificing. Each day you can spend up to 200g without actually spending any gold. This increases to 500g at rank 5."),
        new Rank(3, "Psychedelic Batons", "You learn how to implement new effects into batons you make. They all do 8 psychic damage. Rank 1 ‘Fearful Baton’ creatures that take damage from this weapon are afraid of you until the end of your next turn. Rank 3 ‘Confusing Baton’ creatures that take damage from this weapon are confused until the end of your next turn. Rank 5 ‘Chaos Baton’ creatures that take damage from this weapon are affected in different ways, depending on the number of successes on the roll. Regardless of the effect, it lasts until the end of your next turn. 1 success - the creature goes invisible, 2 successes - the creature is charmed, 3 successes - the creature is deafened and blinded, 4 successes - the creature is stunned and knocked prone, 5+ successes - the creature is incapacitated"),
        new Rank(4, "Mechanical Pal", "You learn the secret to creating near sentience in a mechanical golem. With a flash of inspiration, you may spend an hour to create your very own mechanical companion and imbue it with soul energy. When doing this, choose one of three templates to make: Guardian Bot, Executioner Droid or Support-a-tron. Once created, it becomes your companion. These robots are generally humanoid shaped, but don’t have to be. It has your ranks in all knowledge skills, and 18 points to spend in talents and abilities of your choice It’s attributes are set using an array of 5, 4, 3, 3, 2, 1 or 5, 5, 3, 3, 1, 1 You decide which attribute gets what rank. You may spend your own experience to improve the Mechanical Pal’s attributes or skills at the standard experience rate. You must also spend 25g per point of experience. You may make these mechanical pals for commercial use, but if they are not being designed to be your companion, you must make them with standard artificing rolls. Treat them as a rank 5 machine. <table style=\"border:none;border-collapse:collapse\"><colgroup><col width=\"125\"><col width=\"133\"><col width=\"117\"><col width=\"125\"><col width=\"125\"></colgroup><tbody><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Available AP</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Command Limit</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Speed</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Soak</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Health </span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">3</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">6</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">5</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">5 x HP</span></p></td></tr></tbody></table> Construct - All constructs are immune to poisons, diseases, bleed effects and necrotic damage. In addition, they don't need to breathe, sleep, or eat Intelligence - Mechanical Pals can perform standard actions and wield most gear, unless the design doesn’t allow for it. Immunity - Once per encounter, the Guardian Bot may convert all of it’s soak into titan soak at any time. This lasts until the end of its next turn. Module - The pal has a number of modules that it can choose from, but may only have one active at a time. At the beginning of each encounter, choose what module your mechanical pal will have for the entire encounter. There are six modules to choose from, based off the six attributes. Each module can give three bonuses, based off the creature’s ranks in the attribute. Brawn: 1+ ranks - +1 damage per ranks of brawn on all attacks 3+ ranks - +1 health multiplier 5+ ranks - Can suffer the effects of any harmful attack directed towards a creature within 5ft Dexterity: 1+ ranks - +1 die on all dexterity rolls per ranks of dexterity 3+ ranks - Can make one move action for no AP cost each turn 5+ ranks - Can dodge once per round for no AP cost Presence: 1+ ranks - Taunt affects more targets equal to ranks in presence and the range is increased by 30ft 3+ ranks - Gain two automatic successes on all rolls 5+ ranks - Command limit is converted to maximum AP Subterfuge: 1+ ranks - ‘Immunity’ can be used a number of times more equal to ranks in subterfuge 3+ ranks - Taunt lasts forever and the difficulty is reduced by 2 5+ ranks - Creatures affected by Taunt suffer 1 automatic failure on all rolls. Senses: 1+ ranks - The difficulty of perception and insight rolls is reduced by ranks in senses 3+ ranks - Sizing up requires no AP 5+ ranks - Can parry once per round for no AP cost. Can parry all single target attacks Intellect: 1+ ranks - Take half damage from one damage type per ranks of intellect 3+ ranks - The AP to dodge and parry is reduced by 1 (to a min of 1) and the difficulty is reduced by 1 5+ ranks - Gain the effects of two rank 1s from different modules Bash - [Basic Brawl Attack] 3 AP, Brawn +2 bludgeoning damage Taunt - 3 AP, presence + intimidate, difficulty 6. A number of creatures equal to successes on the roll can only attack your mechanical pal for three turns. All targets must be within 30ft. <table style=\"border:none;border-collapse:collapse\"><colgroup><col width=\"125\"><col width=\"131\"><col width=\"119\"><col width=\"125\"><col width=\"125\"></colgroup><tbody><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Available AP</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Command Limit</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Speed</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Soak</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Health </span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">5</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">1</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">8</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">1</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">4 x HP</span></p></td></tr></tbody></table> Construct - All constructs are immune to poisons, diseases, bleed effects and necrotic damage. In addition, they don't need to breathe, sleep, or eat Intelligence - Mechanical Pals can perform standard actions and wield most gear, unless the design doesn’t allow for it. Module - The pal has a number of modules that it can choose from, but may only have one active at a time. At the beginning of each encounter, choose what module your mechanical pal will have for the entire encounter. There are six modules to choose from, based off the six attributes. Each module can give three bonuses, based off the creature’s ranks in the attribute. Brawn: 1+ ranks - +1 damage per ranks of brawn on all attacks 3+ ranks - +1 health modifier 5+ ranks - Basic attacks can affect another creature within 5ft of the target. Dexterity: 1+ ranks - +1 die on all dexterity rolls per ranks of dexterity 3+ ranks - Can make one move action for no AP cost each turn 5+ ranks - Can dodge once per round for no AP cost Presence: 1+ ranks - Gain +1 HP per rank of presence 3+ ranks - Gain two automatic successes on all rolls 5+ ranks - Can use Eye Lasers one more time per encounter Subterfuge: 1+ ranks - Range of attacks that already have a range is increased by 10’ per rank of subterfuge 3+ ranks - This mechanical pal can not be targeted by harmful attacks or effects unless there is no other option 5+ ranks - You can not be targeted by harmful attacks or effects unless there is no other option Senses: 1+ ranks - The difficulty of perception and insight rolls is reduced by ranks in senses 3+ ranks - Sizing up requires no AP 5+ ranks - Can parry once per round for no AP cost. Can parry all single target attacks Intellect: 1+ ranks - Take half damage from one damage type per ranks of intellect 3+ ranks - The AP to dodge and parry is reduced by 1 (to a min of 1) and the difficulty is reduced by 1 5+ ranks - Gain the effects of two rank 1s from different modules Bash - [Basic Brawl Attack] 3 AP, Brawn +2 bludgeoning damage Eye Lasers - [Basic Ranged Attack] 3 AP, All creatures in a 5ft wide, 60ft long line take 18 fire damage. Usable once per encounter <table style=\"border:none;border-collapse:collapse\"><colgroup><col width=\"125\"><col width=\"128\"><col width=\"122\"><col width=\"125\"><col width=\"125\"></colgroup><tbody><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Available AP</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Command Limit</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Speed</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Soak</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Health </span></p></td></tr><tr style=\"height:0pt\"><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">6</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">6</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">2</span></p></td><td style=\"border-left:solid #000000 1pt;border-right:solid #000000 1pt;border-bottom:solid #000000 1pt;border-top:solid #000000 1pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;\"><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">4 x HP</span></p></td></tr></tbody></table> Construct - All constructs are immune to poisons, diseases, bleed effects and necrotic damage. In addition, they don't need to breathe, sleep, or eat Intelligence - Mechanical Pals can perform standard actions and wield most gear, unless the design doesn’t allow for it. Dart Gun - Support-a-trons wield a two-handed dart gun to administer their beneficial abilities Module - The pal has a number of modules that it can choose from, but may only have one active at a time. At the beginning of each encounter, choose what module your mechanical pal will have for the entire encounter. There are six modules to choose from, based off the six attributes. Each module can give three bonuses, based off the creature’s ranks in the attribute. Brawn: 1+ ranks - +1 soak per ranks of brawn 3+ ranks - +1 health multiplier 5+ ranks - Can suffer the effects of any harmful attack directed towards a creature within 5ft Dexterity: 1+ ranks - +1 die on all dexterity rolls per ranks of dexterity 3+ ranks - Can make one dodge action for no AP cost each round 5+ ranks - +2 maximum AP Presence: 1+ ranks - All healing is increased by 2 per rank in presence 3+ ranks - For each AP you give to this mechanical pal when commanding it, it gains two AP 5+ ranks - Dart Gun abilities can affect up to two targets within 10ft of each other Subterfuge: 1+ ranks - Dart Gun abilities have their range increased by 10ft per rank of subterfuge 3+ ranks - This mechanical pal can not be targeted by harmful attacks or effects unless there is no other option 5+ ranks - You can not be targeted by harmful attacks or effects unless there is no other option Senses: 1+ ranks - Poison Dart deals +1 damage per rank of senses 3+ ranks - Can parry once per round for no AP cost. Can parry while wielding the Dart Gun 5+ ranks - Automatically reveals any hidden creatures within 30ft to all allies Intellect: 1+ ranks - Take half damage from one damage type per ranks of intellect 3+ ranks - The AP to dodge and parry is reduced by 1 (to a min of 1) and the difficulty is reduced by 1 5+ ranks - Gain the effects of two rank 1s from different modules Bash - [Basic Brawl Attack] 3 AP, Brawn +2 bludgeoning damage Repair Dart - [Dart Gun] 2 AP, 30ft, the target regains 20 health (this can affect mechanical creatures and living creatures) Damage Dart - [Dart Gun] 2 AP, 30ft, the target deals 5 more damage on their next attack Defensive Dart - [Dart Gun] 2 AP, 30ft, the target gains +3 titan soak until the end of the mechanical pal’s next turn Poison Dart - [Dart Gun] 2 AP, 30ft, the target takes 5 unsoakable poison damage"),
        new Rank(5, "Master Soulbinder", "When you are wielding a weapon that is modified, you gain one automatic success on any attack roll with it. In addition, once per encounter, you may overload one of your mechanical pals. It gains 6 AP."),
    ],
    "[Artificing]");

export const specializationMystic: RankOption = new RankOption("Mystic", specializationCategory,
    [
        new Rank(1, "Not the time", "When a charm you are wearing would be triggered, you can choose to not trigger it. Whenever you roll for a tarot card, roll twice and choose whichever result you prefer."),
        new Rank(2, "Prophecy Savant", "The difficulty of all prophecy crafting is reduced by 2 for you"),
        new Rank(3, "Prophecy Master", "All prophecy crafting you do requires half the gold and time. In addition, the difficulty of all prophecy crafting you do is reduced by 1. You may wear and benefit from up to two charms"),
    ],
    "[Prophecy]");

const augmentSetMentalManipulationManipulator: Set<Augment> = new Set<Augment>([
    new Augment("Confusion", new Cost(1, currencyAp), "The target suffers the confused condition while enthralled. The enthrall supersedes the confuse effect, meaning no matter the confusion result, the target cannot attack you."),
    new Augment("Fear", new Cost(1, currencyAp), "The target suffers the afraid condition while enthralled. "),
    new Augment("Control", new Cost(1, currencyAp), "While the target is enthralled, you may dictate an action for the target to take on each of its turns, using up to 2 of its AP. This augment can be applied multiple times, increasing the amount of AP that can be spent."),
    new Augment("Focused", new Cost(1, currencyAp), "The target deals 5 extra damage on all of their attacks while enthralled. This augment can be applied multiple times."),
]);
export const specializationMentalManipulation: RankOption = new RankOption("Mental Manipulation", specializationCategory,
    [
        new Rank(1, "Impose Your Will", "Anytime you spend resolve to affect a deception, persuasion, insight or leadership roll, you gain two automatic successes instead of one and you may reroll and take either result. In addition, you may use Intellect instead of the listed Attribute for all [Enthrall] abilities."),
        new Rank(2, "Manipulator", "You gain a few augments that can be applied to any [Enthrall] abilities you perform.", augmentSetMentalManipulationManipulator),
        new Rank(3, "Deceive", "Your allies attacks no longer remove the enthralled condition from your [Enthrall] abilities. Your [Enthrall] abilities gain +1 augment slot. The difficulty of all [Enthrall] abilities are reduced by 1."),
    ],
    "[Enthrall]");

const augmentSetChangeOfHeartConvincing: Set<Augment> = new Set<Augment>([
    new Augment("Doubt", new Cost(1, currencyAp), "While the targets are enthralled, they suffer 2 automatic failures on all rolls against any of your allies. This augment can be applied multiple times."),
    new Augment("Irresistible", new Cost(1, currencyAp), "This ability requires one extra resolve to remove."),
    new Augment("Trusting", new Cost(1, currencyAp), "The target takes 5 extra damage from all sources while enthralled. This augment can be applied multiple times."),
    new Augment("Fatigue", new Cost(1, currencyAp), "After the enthrall effect wears off, the target is incapacitated on their next turn."),
]);
const augmentSetChangeOfHeartBrokenHeart: Set<Augment> = new Set<Augment>([
    new Augment("Self Harm", new Cost(1, currencyAp), "This ability does not remove enthrall effects on the target."),
]);
export const specializationChangeOfHeart: RankOption = new RankOption("Change of Heart", specializationCategory,
    [
        new Rank(1, "Friendly Face", "Your training in manipulating people's hearts makes you better at first impressions. Creatures you meet for the first time will generally regard you in a favorable light. A creature that would normally be hostile towards you may be willing to hear what you have to say."),
        new Rank(2, "Convincing", "You gain a few augments that can be applied to any [Enthrall] abilities you perform.", augmentSetChangeOfHeartConvincing),
        new Rank(3, "Broken Heart", "When you use an [Enthrall] ability on a creature, you may force them to perform a [Basic] ability immediately against targets of your choice. Your [Enthrall] abilities gain +1 augment slot. In addition, you gain a new augment that can be applied to any ability you perform.", augmentSetChangeOfHeartBrokenHeart),
    ],
    "[Enthrall]");

export const specializationMerchant: RankOption = new RankOption("Merchant", specializationCategory,
    [
        new Rank(1, "I’ve Got a Guy", "For each rank in Merchant you have, gain two moderate contacts, as per the contacts background. In addition, all contacts you have from other sources are upgraded from minor to moderate."),
        new Rank(2, "Investment", "All of your contacts are upgraded to offer another service. On top of standard services, your contacts can also provide more advanced services, listed below. Fence - This contact is willing to buy and sell stolen goods Blackmarket Connections - This contact knows where to get the good stuff, whether the goods are illegal or just hard to come by. Safehouse - This contact has safehouses that you can stay at, which are discreet places to stay if you need to lay low. Dividends - Your investments with this contact have paid out. You gain 50 gold a day. There might be other advanced services available to you, as determined by the GM. You may spend 500g, to change one of the services of one of your contacts. This process takes 3 days before it takes effect."),
        new Rank(3, "Master Haggler", "Reduce the difficulty of all persuasion, intimidate and deception checks by 1. All of your contacts are upgraded to major contacts."),
    ],
    "");

export const specializationMinstrel: RankOption = new RankOption("Minstrel", specializationCategory,
    [
        new Rank(1, "Traveling Performer", "You may stay at any inn with free lodging and food. You may be required to perform for them. You may learn new perform types for only 2 experience."),
        new Rank(2, "Quick Learner", "[Song] abilities cost half the experience to purchase."),
        new Rank(3, "Inspiring Musician", "Reduce the difficulty of all perform rolls by 1. Friendly creatures affected by any of your [Song] abilities gain 1 automatic success on all rolls on their next turn."),
    ],
    "[Song]");

const augmentSetBardDedication: Set<Augment> = new Set<Augment>([
    new Augment("Encore", new Cost(1, currencyAp), "The effects last for one additional turn. This augment can be applied multiple times."),
    new Augment("Project", new Cost(1, currencyAp), "The range is increased by 30’. This augment can be applied multiple times."),
    new Augment("Practiced", new Cost(1, currencyAp), "The ability gains one automatic success. This augment can be applied multiple times."),
]);
export const specializationBard: RankOption = new RankOption("Bard", specializationCategory,
    [
        new Rank(1, "Bardic Espionage", "When you do a performance you gain once piece of useful information. Whether it is afterwords chatting the bartender or eavesdropping to a conversation during your set. The information could be anything, from a tip about magical artifact recently uncovered or rumors of the monarch about to be deposed. If you are looking for specific information, you will gain it if possible."),
        new Rank(2, "Dedication", "You learn a few augments that can be applied to any [Song] abilities you perform.", augmentSetBardDedication),
        new Rank(3, "Virtuoso", "Your [Song] abilities cost 3 less AP (minimum of 1) and gain +1 augment slot."),
    ],
    "[Song]");

export const specializationSkald: RankOption = new RankOption("Skald", specializationCategory,
    [
        new Rank(1, "Inspiring Songs", "The difficulty of all presence rolls are reduced by 1 for you. All [Song] abilities you know gain the [Inspire] tag."),
        new Rank(2, "Morale", "Any creature that has temporary hit points from any effect you produce also benefits from +2 titan soak, +3 potency and +1 maximum AP."),
        new Rank(3, "True Leader", "You may use one [Inspire] ability once per turn for no AP cost. You gain 2 AP each turn you can spend to command your companions. Your abilities no longer count against the number of times [Out-of-Turn] actions can be taken per round."),
    ],
    "[Song, Inspire]");

const augmentSetWarlordInspirational: Set<Augment> = new Set<Augment>([
    new Augment("Encouraging", new Cost(1, currencyAp), "The targets gain 5 temporary hit points. This augment can be applied multiple times."),
    new Augment("Ferocity", new Cost(1, currencyAp), "The targets gain +2 potency on all abilities until the end of your next turn. This augment can be applied multiple times."),
    new Augment("Speed", new Cost(1, currencyAp), "The targets gain +2 movement speed until the end of your next turn. This augment can be applied multiple times."),
]);
export const specializationWarlord: RankOption = new RankOption("Warlord", specializationCategory,
    [
        new Rank(1, "Leader", "You may spend your resolve to benefit any ally within 60’. The effects produced are increased, however. If you would grant an automatic success, you instead grant two. If you would cause a reroll, the target can choose either result. If you would remove an adverse effect, you can instead remove two."),
        new Rank(2, "Inspirational", "You gain a few augments that can only be applied to [Inspire] abilities.", augmentSetWarlordInspirational),
        new Rank(3, "Resolved", "The difficulty of all leadership rolls is reduced by 1. You gain +2 maximum resolve."),
    ],
    "[Inspire]");

const augmentSetDiplomatBoomingVoice: Set<Augment> = new Set<Augment>([
    new Augment("Steel Yourself", new Cost(1, currencyAp), "Targets gain +1 soak until the end of your next turn. This augment can be applied multiple times."),
]);
export const specializationDiplomat: RankOption = new RankOption("Diplomat", specializationCategory,
    [
        new Rank(1, "Diplomatic Immunity", "Your status and skill as a diplomat can be used to your advantage. Most guards are willing to ignore minor crimes you commit, unless you make a habit of it. In addition, most officials will give you an audience upon request."),
        new Rank(2, "Booming Voice", "The range of all your [Inspire] abilities are increased by 30’. In addition, you gain a new augment that can be applied to any [Inspire] ability.", augmentSetDiplomatBoomingVoice),
        new Rank(3, "Fast Talker", "The AP cost of all [Inspire] abilities are reduced by 1 for you. The difficulty of all deception and persuasion rolls are reduced by 1 for you. All of your [Inspire] abilities gain +1 augment slot."),
    ],
    "[Inspire]");

const augmentSetConmanSilverTongued: Set<Augment> = new Set<Augment>([
    new Augment("Rattle", new Cost(1, currencyAp), "Targets suffers -1 success on all rolls until the end of your next turn. This augment can be applied multiple times."),
]);
export const specializationConman: RankOption = new RankOption("Conman", specializationCategory,
    [
        new Rank(1, "Silver Tongued", "Your mastery of language allows you to achieve results using methods seemingly in direct opposition. Using innuendos, fast talk and misdirection, you may automatically convince someone of a lie or tall tale. Most people will begin to catch on if this trick is used multiple times in succession. In addition, you can now use Subterfuge instead of Presence when using [Inspire] Abilities2: Cold Read - The first time you make a deception, persuasion, or leadership roll against a target unfamiliar with you, you roll 2 extra dice. In addition, you gain a new augment that can be applied to any [Inspire] ability.", augmentSetConmanSilverTongued),
        new Rank(2, "Double Entendre", "When using [Inspire] abilities you can choose to have the augments applied to them to have the reverse effect where possible. Also, you can now use either deception or leadership when using [Inspire] abilities."),
    ],
    "[Inspire]");

export const specializationBrawn: RankOption = new RankOption("Brawn", specializationCategory,
    [
        new Rank(1, "Beast", "Your carrying capacity is now 7 + 4x Brawn. In addition, The lowest result you can get on a Brawn roll is 1 success."),
        new Rank(2, "Tough", "You gain +1 titan soak. Your health multiplier is increased by 1. Your HP is increased by 1."),
        new Rank(3, "Tough as Nails", "You take half damage from all sources.  When calculating damage, this benefit always applies last."),
    ],
    "");

export const specializationDexterity: RankOption = new RankOption("Dexterity", specializationCategory,
    [
        new Rank(1, "Pickpocket", "If you spend a minute with someone, through sleight of hand and misdirection you can always remove one item from their possession without anyone noticing."),
        new Rank(2, "Rapid Reactions", "When you use the Dodge or Parry ability, you may choose to spend extra AP for automatic successes.  Each extra AP spent counts as two automatic successes. You gain +1 AP each round that can only be spent on [Out-of-Turn] abilities."),
        new Rank(3, "Finesse", "You may use your dexterity instead of brawn for purposes of determining damage of attacks that let you add your brawn. In addition, you may take an unlimited number of [Out-of-Turn] actions each round. You must still follow the limitations each ability may have for itself."),
    ],
    "");

export const specializationPresence: RankOption = new RankOption("Presence", specializationCategory,
    [
        new Rank(1, "Force of Personality", "You can always find someone to buy your next drink, meal, or bed for you. You are frequently given gifts from people who seek your fancy."),
        new Rank(2, "Loved", "Creatures like you one step higher than they would normally. (Mortal Enemies -> Hated -> Disliked -> Neutral -> Liked -> Loved -> Obsessed) This simply denotes a starting level. Your actions may influence this in either direction like normal."),
        new Rank(3, "Everyone’s Friend", "All sentient creatures can understand you when you communicate, and you can understand them. In addition, if you choose to, you can immediately draw the attention of a crowd when you start speaking.  If you address the crowd for at least 10 minutes, you can direct them to perform any simple task for up to 8 hours.  For example, you could direct a crowd to start rioting and destroying local property, or you could sway a crowd to build a simple home for a family in need."),
    ],
    "");

export const specializationSubterfuge: RankOption = new RankOption("Subterfuge", specializationCategory,
    [
        new Rank(1, "Mental Fog", "Your mind cannot be read unless you want it to."),
        new Rank(2, "Mystical Fog", "You, and all equipment you carry with you, can no longer be detected or scryed through magical means. (For example, a spell or ability that detects the presence of all living creatures within a certain distance.)"),
        new Rank(3, "Manipulator’s Fog", "Creatures will not target you with harmful actions or abilities unless there is no other option.  You may be included in area effect abilities, but when determining targets a creature will ignore you."),
    ],
    "");

export const specializationSenses: RankOption = new RankOption("Senses", specializationCategory,
    [
        new Rank(1, "Insight", "You always know when people are lying or being misleading."),
        new Rank(2, "Truesight", "Nothing can hide from you. Within 60’ you can see invisible creatures as if they were visible, and illusions appear translucent. If you already have Truesight, the range is increased to be unlimited."),
        new Rank(3, "Discerning", "When given enough time to search an area, anything hidden is safely revealed to you.  For example if you searched a room that had a hidden door and trap in it, you would find the secret door as well as the hidden trap and the panel to disarm it.  This can’t be done during combat or other stressful situations, but otherwise usually just takes a few minutes per area. In addition, you never accidently set off traps."),
    ],
    "");

export const specializationIntellect: RankOption = new RankOption("Intellect", specializationCategory,
    [
        new Rank(1, "Eidetic Memory", "You can clearly and accurately recall specific details from any event you witnessed."),
        new Rank(2, "Quick Learner", "The experience cost to purchase new abilities is reduced by 1."),
        new Rank(3, "Perfected Technique", "The difficulty of any ability you use is reduced by 1."),
    ],
    "");

export const specializationCrafter: RankOption = new RankOption("Crafter", specializationCategory,
    [
        new Rank(1, "Well Versed", "You may learn new crafts for only 2 experience. The difficulty of all craft rolls is reduced by 1"),
        new Rank(2, "Efficient", "All crafting you do takes half the time.  All crafting you do takes either half the required gold (after all other modifiers) or half the material cost"),
        new Rank(3, "Practice Makes Perfect", "The lowest result you can get on a craft roll is 1 success. If you would have failed normally, the project takes twice the amount of time as normal. Everything you craft sells for 20% more gold."),
    ],
    "");

export const specializationParaelements: RankOption = new RankOption("Paraelements", specializationCategory,
    [
        new Rank(1, " Suffocating Ash", "A cloud of thick ash fills the area.  Choose a point up to one mile away that you can see.  A 100' radius sphere of corrosive ash appears.  All creatures in the area are blind and suffocating.  On their first turn while in the ash cloud, a creature loses 1 soak from their armor and they take 1 hit point of unsoakable [Air, Earth] damage.  The soak reduction penalty and damage doubles each turn that a creature remains in the cloud.  This spell can be maintained for 7 AP each round.  The cloud dissipates as soon as the spell ends. After this power is used, your rank in Paraelement: Ash drops to 4.  You must buy rank 5 again with experience if you want to use this power another time. Alternatively, you can choose to only affect a single creature within 120' of you with a lesser version.  This costs 7 AP to use, and the target takes 60 [Air, Earth] damage and their armor is destroyed.  This version can be used once per day."),
        new Rank(2, " Fissure", "A 20' wide, 100' long gash in the earth opens up beneath your enemies within a mile of your location that you can see, quickly filling with churning magma.  Enemies can make a Dexterity + Athletics roll to avoid falling in.  If successful, they are prone and incapacitated for one round in an empty space adjacent to the fissure.  Those swallowed whole are slain instantly unless they are immune to both [Fire] and [Earth] damage.  If they survive they are still restrained until the spell ends, at which point the earth seals itself back up and shunts any living creatures out into nearby adjacent spaces.  You can maintain this spell for 7 AP each round. After this power is used, your rank in Paraelement: Magma drops to 4.  You must buy rank 5 again with experience if you want to use this power another time. Alternatively, a smaller fissure can be made under a single creature you can see within 120'.  That creature becomes restrained and takes 40 [Fire, Earth] damage each round until this spell ends, and you can maintain This spell for 7 AP on your turn.  This version can be used once per day."),
        new Rank(3, " Hurricane", "A destructive hurricane hits the area, destroying everything in its wake.  The eye of the storm is centered on you, and travels with you while the spell is active.  You can maintain this spell for 7 AP each round, and while maintaining this spell you gain a fly speed of 100' which you can do once on your turn for no AP cost.  The ground within a mile is flooded up to 20' with water, and high winds within the same area topple all but the sturdiest of structures.  Creatures other than you within the area are unable to cast spells or maintain existing ones, and they risk death by drowning or being crushed by large objects moving and fast speeds. After this power is used, your rank in Paraelement: Rain drops to 4.  You must buy rank 5 again with experience if you want to use this power another time. Alternatively, a small localized storm can be summoned for 7 AP.  Wind and rain pummel a 200' radius area surrounding you while this spell is active, and creatures other than you within the area are unable to cast spells or maintain existing ones.  You can maintain this spell for 7 AP each turn, and while maintaining this spell you can move once on your turn for no AP cost.  This version can be used once per day."),
        new Rank(4, " Lightning Sand", "Your foes disappear, swallowed up by the earth.  No evidence of the deadly quicksand can be seen until it is too late.  Choose a point within a mile that you can see.  The area within 100' radius becomes deadly quicksand.  Creatures within the area are restrained, as they sink partway into the ground.  If a creature restrained by this spell attempts to do anything on their turn, they are immediately swallowed up and perish, unless they are immune to both [Earth] and [Water] damage and can hold their breath for the duration.  This spell can be maintained for 7 AP each round.  When this spell ends, any creatures still alive are shunted to the nearest empty space as the ground returns to normal. After this power is used, your rank in Paraelement: Silt drops to 4.  You must buy rank 5 again with experience if you want to use this power another time. Alternatively, you can choose a lesser and more immediate effect.  Choose a point within 120' of you and spend 7 AP.  A 20' radius area centered on that point becomes lightning sand for only an instant.  Creatures in the area are sucked in, crushed for 40 [Earth, Water] damage, and then released prone in their square.  This version can be used once per day."),
        new Rank(5, " Sudden Evaporation", "Choose a 20' radius sphere within one mile that you can see.  All liquid in that area immediately boils off into steam.  Creatures made of liquid or that have liquid in their bodies that are in the area immediately die, unless they are immune to both [Fire] and [Water] damage.  Creatures within the affected area can choose to roll a Brawn + Athletics roll to survive long enough to escape the deadly area.  On a success, the creature is moved to a space outside the radius and is stunned until the end of your next turn. After this power is used, your rank in Paraelement: Steam drops to 4.  You must buy rank 5 again with experience if you want to use this power another time. Alternatively, you can choose to only affect a single creature within 120' of you with a lesser version.  This costs 7 AP to use, and the target takes 75 [Fire, Water] damage.  This version can be used once per day."),
        new Rank(6, " Solar Strike", "A beam of sunlight comes down from the heavens to smite those in your way.  Select a point on the ground that you can see within 1 mile.  A 20' radius beam of sunlight stretches from the heavens and disintegrates everything it touches, unless they are immune to both [Fire] and [Air] damage.  Creatures within the affected area may make a Senses + Athletics roll to notice the approaching beam and attempt to escape in time.  Those that succeed on their roll move to a space outside the radius and are blind until the end of your next turn. After this power is used, your rank in Paraelement: Sun drops to 4.  You must buy rank 5 again with experience if you want to use this power another time. Alternatively, the beam of sunlight can spring from the palm of your hand out in a 100' line for 7 AP.  This version deals 20 [Fire, Air] damage and can be maintained each round for 7 AP.  This version can be used once per day."),
    ],
    "");

export const specializations: RankOption[] = [
    specializationDefender,
    specializationSentinel,
    specializationTitan,
    specializationBladedancer,
    specializationTactician,
    specializationTempest,
    specializationBerserker,
    specializationMarauder,
    specializationPoisoner,
    specializationAdventurer,
    specializationAssassin,
    specializationShadow,
    specializationNightblade,
    specializationGladiator,
    specializationMyrmidon,
    specializationWhisper,
    specializationReaver,
    specializationDreadnought,
    specializationDragoon,
    specializationWeaponMaster,
    specializationTinkerer,
    specializationEngineer,
    specializationDemolitionist,
    specializationArchery,
    specializationCrossbowExpert,
    specializationGunslinger,
    specializationHunter,
    specializationCavalier,
    specializationMartialArtist,
    specializationMonk,
    specializationBlazingWrath,
    specializationMysticTorrent,
    specializationEruptingEarth,
    specializationHowlingZephyr,
    specialization__ndAirSpec,
    specializationStaticCharge,
    specializationFrozenDeluge,
    specializationCryomancer,
    specializationOozingAcid,
    specializationWizard,
    specializationArchmage,
    specializationIllusionist,
    specializationTrickster,
    specializationSpellblade,
    specializationBloodMagician,
    specializationLifedrinker,
    specializationSage,
    specializationAlchemist,
    specializationSpellMastery,
    specializationNecromancer,
    specializationLich,
    specializationDiabolist,
    specializationSpellbinder,
    specializationRitualCaster,
    specializationCrusader,
    specializationExemplar,
    specializationRevenant,
    specializationMissionary,
    specializationPurifier,
    specializationStormcaller,
    specializationInquisitor,
    specializationInvoker,
    specializationSeer,
    specializationAcolyte,
    specializationClairvoyant,
    specializationOracle,
    specializationProphet,
    specializationInfuser,
    specializationFate,
    specializationDeath,
    specializationDemonHunter,
    specializationProtection,
    specializationRetribution,
    specializationChampion,
    specializationOrderOfTheTemplar,
    specializationCompassion_sTouch,
    specializationAscension,
    specializationAngelicCall,
    specializationLuna_sServant,
    specializationSol_sServant,
    specializationElementalist,
    specializationElementalMastery,
    specializationDiscipleOfRadi_v,
    specializationDiscipleOfSpyg,
    specializationHydrologist,
    specializationDiscipleOfAleuel,
    specializationDiscipleOfFanhae,
    specializationDiscipleOfTilik,
    specializationDiscipleOfDawie,
    specializationNaturalist,
    specializationNature_sChosen,
    specializationBeastmaster,
    specializationShapeshifter,
    specializationDefiler,
    specializationMephite,
    specializationWanderer,
    specializationRavager,
    specializationCarnage,
    specializationTrapper,
    specializationBotanist,
    specializationRejuvenation,
    specializationAll_seeingEye,
    specializationPrivateEye,
    specializationThirdEye,
    specializationSoulShaper,
    specializationPsychic,
    specializationOutsider,
    specializationMindOverMatter,
    specializationSavant,
    specializationKiSage,
    specializationAdept,
    specializationMentalFortress,
    specializationTranquil,
    specializationShade,
    specializationSoulbinder,
    specializationMystic,
    specializationMentalManipulation,
    specializationChangeOfHeart,
    specializationMerchant,
    specializationMinstrel,
    specializationBard,
    specializationSkald,
    specializationWarlord,
    specializationDiplomat,
    specializationConman,
    specializationBrawn,
    specializationDexterity,
    specializationPresence,
    specializationSubterfuge,
    specializationSenses,
    specializationIntellect,
    specializationCrafter,
    specializationParaelements,
];

export function specializationByName(name: string): RankOption | undefined {
    for (let specialization of specializations) {
        if (specialization.name == name) {
            return specialization;
        }
    }
    return undefined;
}