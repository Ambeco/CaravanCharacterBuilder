import { ChoiceOption, ChoiceFocusChangeListener } from "./types/ChoiceOption";
import { OptionCategory } from "./types/OptionCategory.js";
import { Choice } from "./types/Choice.js";
import { nonNull } from "./util/nonNull.js";
import { RankFocusChangeListener, RankOption } from "./types/RankOption";
import { Rank } from "./types/Rank";
import { RankChoiceOption } from "./types/RankChoiceOption";
import { RankChoice } from "./types/RankChoice";


const floatingDescriptionBlock: HTMLElement = nonNull(document.getElementById('floatingDescriptionBox'), "cannot find floatingDescriptionBox") as HTMLElement;
const focusTitle: HTMLHeadingElement = nonNull(document.getElementById('focusTitle'), "cannot find focusTitle") as HTMLHeadingElement;
const focusDescription: HTMLDivElement = nonNull(document.getElementById('focusDescription'), "cannot find focusDescription") as HTMLDivElement;
const searchBox: HTMLSelectElement = nonNull(document.getElementById('searchBox'), "cannot find searchBox") as HTMLSelectElement;
const searchSelect: HTMLButtonElement = nonNull(document.getElementById('searchSelect'), "cannot find searchSelect") as HTMLButtonElement;
const searchHeader: HTMLHeadingElement = nonNull(document.getElementById('searchHeader'), "cannot find searchHeader") as HTMLHeadingElement;
const searchDetails: HTMLDivElement = nonNull(document.getElementById('searchDetails'), "cannot find searchDetails") as HTMLDivElement;
const searchRequirements: HTMLDivElement = nonNull(document.getElementById('searchRequirements'), "cannot find searchRequirements") as HTMLDivElement;
const searchFeatures: HTMLUListElement = nonNull(document.getElementById('searchFeatures'), "cannot find searchFeatures") as HTMLUListElement;
const searchRankValue: HTMLInputElement = nonNull(document.getElementById('searchRankValue'), "cannot find searchRankValue") as HTMLInputElement;
const searchRanks: HTMLUListElement = nonNull(document.getElementById('searchRanks'), "cannot find searchRanks") as HTMLUListElement;

const cssDescriptionBlockDisplay: string = "block";
const cssSearchBoxDisplay: string = "block";
const cssSearchSelectDisplay: string = "block";
const cssSearchHeaderDisplay: string = "block";
const cssSearchDetailsDisplay: string = "block";
const cssSearchRequirementsDisplay: string = "block";
const cssSearchFeaturesDisplay: string = "block";
const cssSearchRankValueDisplay: string = "block";
const cssSearchRanksDisplay: string = "block";


var currentCateogry: OptionCategory | null = null;
var currentChoiceOption: ChoiceOption | null = null;
var choiceMap: Map<string, Choice> = new Map<string, Choice>();
var currentChoice: Choice | null = null;
var currentRankOption: RankOption | null = null;
var currentUISliderHost: HTMLInputElement | null = null;


function onChoiceSearchResults(choice: Choice) {
    console.log("Showing search details for choice " + choice.name);
    searchHeader.innerHTML = choice.getName();
    searchDetails.innerHTML = choice.getDescription();
    showRequirements(currentRankOption);
    while (searchFeatures.lastChild) {
        searchFeatures.removeChild(searchFeatures.lastChild);
    }
    for (let feature of choice.getSheetFeatures()) {
        const child = document.createElement('li');
        child.innerHTML = "<b>" + feature.getName() + "</b>: " + feature.description;
        searchFeatures.appendChild(child);
    }
    if (choice instanceof RankChoice) {
        if (currentUISliderHost == null) throw new Error("Selected" + choice + " but currentUISliderHost==null");
        currentRankOption = choice.getRankOption();
        showRankSlider(currentUISliderHost, currentRankOption);
        showRankDetails(currentRankOption)
    } else {
        currentUISliderHost = null;
    }
    currentChoice = choice;
}

function clearSearchResults() {
    searchHeader.innerHTML = "";
    searchDetails.innerHTML = "";
    searchRequirements.innerHTML = "";
    while (searchFeatures.lastChild) {
        searchFeatures.removeChild(searchFeatures.lastChild);
    }
    while (searchRanks.lastChild) {
        searchRanks.removeChild(searchRanks.lastChild);
    }
    searchRankValue.style.display = "none";
    currentChoice = null;
}


searchBox.oninput = function () {
    if (searchBox.selectedIndex != -1) {
        const choice: Choice | undefined = choiceMap.get(searchBox.value);
        if (choice != undefined) {
            onChoiceSearchResults(choice);
        } else {
            console.log("Search failed for " + searchBox.value);
            clearSearchResults();
        }
    } else if (searchBox.value.length > 0) {
        throw new Error("Dont' understand search for choice " + searchBox.value);
    }
}
searchSelect.onclick = function () {
    if (currentChoiceOption != null && currentChoice != null) {
        currentChoiceOption.getSelectUiElement().value = currentChoice.getName();
    } else {
        console.log("select button fail: currentChoiceOption=" + currentChoiceOption + " currentChoice=" + currentChoice);
    }
}

function onGenericCategoryGainFocus(uiElement: HTMLElement, category: OptionCategory): void {
    console.log("Showing generic category " + category.name);
    floatingDescriptionBlock.style.display = cssDescriptionBlockDisplay;
    focusTitle.textContent = category.name;
    focusDescription.innerHTML = category.getDescription();
    currentCateogry = category;
}

function onCategoryGainFocusImpl(uiElement: HTMLElement, category: OptionCategory): void {
    if (category == currentCateogry) return;
    console.log("Showing ONLY category " + category.name);
    onGenericCategoryGainFocus(uiElement, category);
    currentChoiceOption = null;
    currentChoice = null;
    searchBox.style.display = "none";
    searchSelect.style.display = "none";
    searchHeader.style.display = "none";
    searchDetails.style.display = "none";
    searchRequirements.style.display = "none";
    searchFeatures.style.display = "none";
    searchRankValue.style.display = "none"
    searchRanks.style.display = "none";
}

function onChoiceGainFocusImpl(uiElement: HTMLSelectElement, option: ChoiceOption, selectedChoice: Choice|null): void {
    if (option == currentChoiceOption && selectedChoice == currentChoice) return;
    console.log("Showing choice " + option + " (" + selectedChoice + ")");
    onGenericCategoryGainFocus(uiElement, option.getCategory());
    currentChoiceOption = option;
    searchBox.style.display = cssSearchBoxDisplay;
    searchSelect.style.display = cssSearchSelectDisplay;
    searchHeader.style.display = cssSearchHeaderDisplay;
    searchDetails.style.display = cssSearchDetailsDisplay;
    searchDetails.style.display = cssSearchRequirementsDisplay;
    searchFeatures.style.display = cssSearchFeaturesDisplay;
    searchRanks.style.display = "none";
    while (searchBox.lastChild) {
        searchBox.removeChild(searchBox.lastChild);
    }
    choiceMap.clear();
    currentChoice = null;
    if (selectedChoice != null && option instanceof RankChoiceOption) {
        currentUISliderHost = option.getUiSlider();
    }
    for (let choice of option.getChoiceSet()) {
        const child = document.createElement('option');
        child.value = choice.getName();
        child.appendChild(document.createTextNode(choice.getName()));
        searchBox.appendChild(child);
        choiceMap.set(choice.getName(), choice);
        if (choice === selectedChoice) {
            currentChoice = selectedChoice;
            searchBox.value = choice.getName();
            onChoiceSearchResults(choice);
        }
    }
    if (currentChoice == null) {
        searchBox.oninput(new Event("input"));
    }
}

function onRankGainFocusImpl(uiElement: HTMLInputElement, option: RankOption): void {
    if (option == currentRankOption) return;
    console.log("Showing rank " + option);
    onGenericCategoryGainFocus(uiElement, option.getCategory());
    currentRankOption = option;
    const hasDetailedRanks = option.getRanks()[0].description.length > 0;
    searchBox.style.display = "none";
    searchSelect.style.display = "none";
    searchHeader.style.display = cssSearchHeaderDisplay;
    searchFeatures.style.display = "none";
    searchRanks.style.display = hasDetailedRanks ? cssSearchRanksDisplay : "none";
    searchHeader.innerHTML = option.getName();

    if (option.getName() != option.getDescription()) {
        searchDetails.style.display = cssSearchDetailsDisplay;
        searchDetails.innerHTML = option.getDescription();
    } else {
        searchDetails.style.display = "none";
    }

    showRequirements(option);
    showRankSlider(option.getUISlider(), option);
    if (hasDetailedRanks)
        showRankDetails(option);
}
function showRequirements(option: RankOption | null): void {
    if (option != null && option.getRequirements().length > 0) {
        searchRequirements.style.display = cssSearchRequirementsDisplay;
        let requirements = "";
        for (let requirement of option.getRequirements()) {
            requirements += requirement.toString() + "\n";
        }
        searchRequirements.innerText = requirements;
    } else {
        searchRequirements.style.display = "none";
    }
}

function showRankSlider(hostInput: HTMLInputElement, option: RankOption): void {
    console.log("Showing slider for " + option);
    currentUISliderHost = hostInput;

    const currentRankValue: string = option.getSelection().getValue().toString() || hostInput.value;
    const minRank = Math.min(option.getRanks()[0].value, option.getRanks()[option.getRanks().length - 1].value);
    const maxRank = Math.max(option.getRanks()[0].value, option.getRanks()[option.getRanks().length - 1].value);

    searchRankValue.min = minRank.toString();
    searchRankValue.max = maxRank.toString();
    searchRankValue.value = currentRankValue;
    searchRankValue.style.display = cssSearchRankValueDisplay;

    hostInput.onchange = function () {
        if (currentUISliderHost == hostInput && searchRankValue.value != hostInput.value)
            searchRankValue.value = hostInput.value;
    }
    searchRankValue.onchange = function () {
        if (hostInput.value != searchRankValue.value)
            hostInput.value = searchRankValue.value;
    }
}

function showRankDetails(option: RankOption): void {
    console.log("Showing rank details for " + option);
    searchRanks.style.display = cssSearchRanksDisplay;
    while (searchRanks.lastChild) {
        searchRanks.removeChild(searchRanks.lastChild);
    }
    for (let rank of option.getRanks()) {
        const child = document.createElement('li');
        child.setAttribute("value", rank.value.toString());
        child.innerHTML = "<b>" + rank.getName() + "</b>: " + rank.description;
        searchRanks.appendChild(child);
    }
}


export const focusListener: ChoiceFocusChangeListener & RankFocusChangeListener = {
    onChoiceGainFocus: onChoiceGainFocusImpl,
    onRankGainFocus: onRankGainFocusImpl,
    onCategoryGainFocus: onCategoryGainFocusImpl
}