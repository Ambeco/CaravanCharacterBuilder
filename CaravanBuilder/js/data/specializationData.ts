import { Rank, duplicateRankArray } from "../types/Rank.js";
import { OptionCategory } from "../types/OptionCategory.js";
import { RankOption } from "../types/RankOption.js";


const specializationCategory: OptionCategory = new OptionCategory("Specializations",
    "<p>blah blah</p>");

//TODO: Rank as a Sheet Feature.
//TODO: Add Augments
//TODO: Add tags
export const specializationDefender: RankOption = new RankOption("Defender", specializationCategory,
    [
        new Rank(1, "Shield Mastery", "Shields you wear gain +1 damage and the Concussive property. Shields also lose the unwieldy property. In addition, you gain a list of augments that you can apply to the ability, Taunt.", null, null),
        new Rank(2, "Dauntless", "You gain an extra 2 AP each turn that can only be spent on [Out-of-Turn] actions. In addition, you gain +2 titan soak. Soak from armor you wear is doubled.", null, null),
        new Rank(3, "True Defender", "Taunt’s range is increased by 30’ and can affect a number of additional creatures equal to your ranks in intimidate. In addition, you gain a list of augments you can apply to the ability, Intercept.", null, null),
    ],
    "[Tank] You are a defender of your allies.");


export const specializations: RankOption[] = [
    specializationDefender,
]

export function specializationByName(name: string): RankOption | undefined {
    for (let specialization of specializations) {
        if (specialization.name == name) {
            return specialization;
        }
    }
    return undefined;
}