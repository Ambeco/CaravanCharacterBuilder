namespace Caravan {
    enum ChoiceIdBrand { }
    export type ChoiceId = string & ChoiceIdBrand;
    enum OptionIdBrand { }
    export type OptionId = string & OptionIdBrand;

    export class ChoiceStrings {
        constructor(private name: string) {
        }
        getName(): string {
            return this.name;
        }
    };
    export class OptionStrings {
        constructor(private name: string, private description: string) {
        }
        getName(): string {
            return this.name;
        }
        getDescription(): string {
            return this.description;
        }
    };
    export interface Ii11n {
        booleanTrue: OptionStrings;
        booleanFalse: OptionStrings;

        race: ChoiceStrings;
        raceHuman: OptionStrings;
        raceElf: OptionStrings;
        raceDwarf: OptionStrings;
        raceKith: OptionStrings;
        raceOrc: OptionStrings;
        raceGolem: OptionStrings;
        raceGnome: OptionStrings;
        raceHalfElf: OptionStrings;

        kithCategory: ChoiceStrings;
        kithBrawn: OptionStrings;
        kithDexterity: OptionStrings;
        kithPresence: OptionStrings;
        kithSubterfuge: OptionStrings;
        kithSenses: OptionStrings;
        kithIntellect: OptionStrings;

        atunementMartial: ChoiceStrings;
        atunementArcane: ChoiceStrings;
        atunementDivine: ChoiceStrings;
        atunementNature: ChoiceStrings;
        atunementAnimus: ChoiceStrings;
        atunementAttributes: ChoiceStrings;
        atunementSkills: ChoiceStrings;
    }
    export let i11n: Ii11n;
}