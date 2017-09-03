namespace Caravan {
    var i11n: Ii11n = {
        booleanTrue: new OptionStrings("true", "true"),
        booleanFalse: new OptionStrings("false", "false"),

        race: new ChoiceStrings("Race"),
        raceHuman: new OptionStrings("Human",
            "Humans are the driving force of the world. There is no typical human, and you would be hard pressed to go anywhere in the world and not encounter humans.\n"
            + "You don't follow the attribute and skill allocation process like normal. Instead you can put 12 points in to attributes as you see fit, and 30 points into skills as you see fit."),
        raceElf: new OptionStrings("Elf",
            "Elves are intelligent and perceptive creatures. They tend to be taller than humans and have large, pointed ears. They are exceptionally swift.\n"
            + "+1 to the mental attribute category.\n"
            + "Elven Swiftness: +2 to movement speed."),
        raceDwarf: new OptionStrings("Dwarf",
            "Dwarves are short and stout. Partially because of their center of gravity being much lower, partially because they are generally stubborn as all hell, dwarves have a hard time being moved.\n"
            + "+1 to the physical attribute category.\n"
            + "Dwarven Stubbornness: Cannot be forcefully moved and movement speed can’t be reduced (does not make you immune to losing all movement)"),
        raceKith: new OptionStrings("Kith",
            " Kith are an off breed of humans that somehow evolved to have some traits of animals. It is still a mystery how Kith can represent any number of different beasts but still can reproduce.\n"
            + "Choose the animal you are based on. Although humanoid, you will have traits of the chosen animal, such as ears, tails, fur, etc. The full extent of what animal traits you have is completely up to you. Whatever animal you choose will fit into a category, chosen by the GM. Either Brawn, Dexterity, Presence, Subterfuge, Senses or Intellect. You get different bonuses based off what category your animal falls under."),
        raceOrc: new OptionStrings("Orc",
            "Orcs are ferocious creatures. Typically taller and larger than humans, they tend to be pretty intimidating. Orcs have green or grey skin color. They are very strong, but tend to be less intelligent than the other races.\n"
            + "+2 to the physical attribute category, -1 to the mental attribute category.\n"
            + "Resilience: Gain +2 HP"),
        raceGolem: new OptionStrings("Golem",
            " Golems are rather large creatures seemingly made of stone. These creatures were accidentally created when a large arcane ritual went wrong. The golems are a pretty rare sight in the world, and because of their recent existence in the world, they lack the etiquette in social circles. Regardless, they are immensely strong and surprisingly dexterous.\n"
            + "+2 to the physical attribute category, -1 to the social attribute category.\n"
            + "Unbreakable: +1 titan soak."),
        raceGnome: new OptionStrings("Gnome",
            "Gnomes are very small creatures. Essentially they can be considered short humans on terms of how they look. Gnomes however, are incredibly smart and perceptive, but their small size makes them lack in strength. They also have a natural resistance to magic.\n"
            + "+2 to the mental attribute category, -1 to the physical attribute category.\n"
            + "Magic Resistance: Reduces the number of successes on any spell that targets you by 1 (this can cause the spell to fail) This even reduces the effects of friendly spells."),
        raceHalfElf: new OptionStrings("Half-Elf",
            "Half-elves are a mix between humans and elves. In the past, there was a lot of racism towards half-elves from both humans and elves. Because of this mistreatment, half-elves needed to adapt and survive. They became very persuasive, or good liars, to integrate themselves into a place that they would belong. Although the racism has all but disappeared, this social aptitude stuck with half-elves.\n"
            + "+1 to the social attribute category.\n"
            + " Grace: You get a bonus die on all social rolls"),

        kithCategory: new ChoiceStrings("Kith Category"),
        kithBrawn: new OptionStrings("Brawn", "+1 Brawn, gain natural claws that use brawl to attack and deal brawn +2 damage, and cost 3 AP."),
        kithDexterity: new OptionStrings("Dexterity", "+1 Dexterity, +2 movement speed."),
        kithPresence: new OptionStrings("Presence", "+1 Presence, gain a bonus die on all social rolls."),
        kithSubterfuge: new OptionStrings("Subterfuge", "+1 Subterfuge, gain a bonus die on all stealth, guise, skulduggery, and deception rolls."),
        kithSenses: new OptionStrings("Senses", "+1 Senses, difficulty of perception rolls are reduced by 1."),
        kithIntellect: new OptionStrings("Intellect", "+1 Intellect, you can use Intellect instead of dexterity for weapon attack rolls."),

        atunementMartial: new ChoiceStrings("Martial"),
        atunementArcane: new ChoiceStrings("Arcane"),
        atunementDivine: new ChoiceStrings("Divine"),
        atunementNature: new ChoiceStrings("Nature"),
        atunementAnimus: new ChoiceStrings("Animus"),
        atunementAttributes: new ChoiceStrings("Attributes"),
        atunementSkills: new ChoiceStrings("Skills"),
    };
}