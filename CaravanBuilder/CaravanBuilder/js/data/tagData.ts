import { Tag } from "../types/Tag.js";


export const tagUniversal: Tag = new Tag("Universal");
export const tagMartial: Tag = new Tag("Martial");
export const tagArcane: Tag = new Tag("Arcane");
export const tagDivine: Tag = new Tag("Divine");
export const tagNature: Tag = new Tag("Nature");
export const tagKi: Tag = new Tag("Ki");
export const tagHeal: Tag = new Tag("Heal");
export const tagSong: Tag = new Tag("Song");
export const tagInspire: Tag = new Tag("Inspire");
export const tagEnthrall: Tag = new Tag("Enthrall");
export const tagTank: Tag = new Tag("Tank");
export const tagSkulker: Tag = new Tag("Skulker");
export const tagDemonology: Tag = new Tag("Demonology");
export const tagIllusion: Tag = new Tag("Illusion");
export const tagFire: Tag = new Tag("Fire");
export const tagWater: Tag = new Tag("Water");
export const tagEarth: Tag = new Tag("Earth");
export const tagAir: Tag = new Tag("Air");
export const tagLightning: Tag = new Tag("Lightning");
export const tagIce: Tag = new Tag("Ice");
export const tagForce: Tag = new Tag("Force");
export const tagPoison: Tag = new Tag("Poison");
export const tagAcid: Tag = new Tag("Acid");
export const tagNecrotic: Tag = new Tag("Necrotic");
export const tagRadiant: Tag = new Tag("Radiant");
export const tagShadow: Tag = new Tag("Shadow");
export const tagPsychic: Tag = new Tag("Psychic");

export const tags: Tag[] = [
    tagUniversal,
    tagMartial,
    tagArcane,
    tagDivine,
    tagNature,
    tagKi,
    tagHeal,
    tagSong,
    tagInspire,
    tagEnthrall,
    tagTank,
    tagSkulker,
    tagDemonology,
    tagIllusion,
    tagFire,
    tagWater,
    tagEarth,
    tagAir,
    tagLightning,
    tagIce,
    tagForce,
    tagPoison,
    tagAcid,
    tagNecrotic,
    tagRadiant,
    tagShadow,
    tagPsychic,
];

export function tagByName(name: string): Tag | undefined {
    for (let tag of tags) {
        if (tag.name == name) {
            return tag;
        }
    }
    return undefined;
}

