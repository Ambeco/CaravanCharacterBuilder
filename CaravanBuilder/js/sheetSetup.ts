import { ChoiceOption } from "./types/ChoiceOption.js";
import { races } from "./data/raceData.js";

let nameInput: HTMLInputElement = document.getElementById('nameValue') as HTMLInputElement;
let raceInput: HTMLInputElement = document.getElementById('raceValue') as HTMLInputElement;
let initiativeInput: HTMLInputElement = document.getElementById('initiativeValue') as HTMLInputElement;
let totalSoakInput: HTMLInputElement = document.getElementById('totalSoakValue') as HTMLInputElement;
let armorSoakInput: HTMLInputElement = document.getElementById('armorSoakValue') as HTMLInputElement;
let titanSoakInput: HTMLInputElement = document.getElementById('titanSoakValue') as HTMLInputElement;
let movementSpeedInput: HTMLInputElement = document.getElementById('movementSpeedValue') as HTMLInputElement;
let otherSpeedInput: HTMLInputElement = document.getElementById('otherSpeedValue') as HTMLInputElement;
let martialInput: HTMLInputElement = document.getElementById('martialValue') as HTMLInputElement;
let arcaneInput: HTMLInputElement = document.getElementById('arcaneValue') as HTMLInputElement;
let divineInput: HTMLInputElement = document.getElementById('divineValue') as HTMLInputElement;
let natureInput: HTMLInputElement = document.getElementById('natureValue') as HTMLInputElement;
let animusInput: HTMLInputElement = document.getElementById('animusValue') as HTMLInputElement;
let brawnInput: HTMLInputElement = document.getElementById('brawnValue') as HTMLInputElement;
let dexterityInput: HTMLInputElement = document.getElementById('dexterityValue') as HTMLInputElement;
let presenceInput: HTMLInputElement = document.getElementById('presenceValue') as HTMLInputElement;
let subterfugeInput: HTMLInputElement = document.getElementById('subterfugeValue') as HTMLInputElement;
let sensesInput: HTMLInputElement = document.getElementById('sensesValue') as HTMLInputElement;
let intellectInput: HTMLInputElement = document.getElementById('intellectValue') as HTMLInputElement;

let raceOption = new ChoiceOption("race", raceInput, races);