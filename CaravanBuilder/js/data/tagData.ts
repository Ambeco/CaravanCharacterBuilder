import { Tag } from "../types/Tag.js";


const tagUniversal: Tag = new Tag("Universal");
const tagMartial: Tag = new Tag("Martial");
const tagArcane: Tag = new Tag("Arcane");
const tagDivine: Tag = new Tag("Divine");
const tagNature: Tag = new Tag("Nature");
const tagKi: Tag = new Tag("Ki");
const tagHeal: Tag = new Tag("Heal");
const tagSong: Tag = new Tag("Song");
const tagInspire: Tag = new Tag("Inspire");
const tagEnthrall: Tag = new Tag("Enthrall");
const tagTank: Tag = new Tag("Tank");
const tagSkulker: Tag = new Tag("Skulker");
const tagDemonology: Tag = new Tag("Demonology");
const tagIllusion: Tag = new Tag("Illusion");
const tagFire: Tag = new Tag("Fire");
const tagWater: Tag = new Tag("Water");
const tagEarth: Tag = new Tag("Earth");
const tagAir: Tag = new Tag("Air");
const tagLightning: Tag = new Tag("Lightning");
const tagIce: Tag = new Tag("Ice");
const tagForce: Tag = new Tag("Force");
const tagPoison: Tag = new Tag("Poison");
const tagAcid: Tag = new Tag("Acid");
const tagNecrotic: Tag = new Tag("Necrotic");
const tagRadiant: Tag = new Tag("Radiant");
const tagShadow: Tag = new Tag("Shadow");
const tagPsychic: Tag = new Tag("Psychic");

const tags: Tag[] = [
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

