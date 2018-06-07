import { Currency } from "../types/Currency.js";


export const currencyAttunementPoints = new Currency("attunementPoints", 6, false);
export const currencyExp = new Currency("exp", 0, false);
export const currencyAp = new Currency("ap", 0, false);

Currency.setAlternativeName("xp", "exp");