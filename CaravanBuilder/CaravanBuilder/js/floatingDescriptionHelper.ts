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
const searchFeatures: HTMLUListElement = nonNull(document.getElementById('searchFeatures'), "cannot find searchFeatures") as HTMLUListElement;
const searchRanks: HTMLUListElement = nonNull(document.getElementById('searchRanks'), "cannot find searchRanks") as HTMLUListElement;

const cssDescriptionBlockDisplay: string = "block";
const cssSearchBoxDisplay: string = "block";
const cssSearchSelectDisplay: string = "block";
const cssSearchHeaderDisplay: string = "block";
const cssSearchDetailsDisplay: string = "block";
const cssSearchFeaturesDisplay: string = "block";
const cssSearchRanksDisplay: string = "block";


var currentCateogry: OptionCategory | null = null;
var currentChoiceOption: ChoiceOption | null = null;
var choiceMap: Map<string, Choice> = new Map<string, Choice>();
var currentChoice: Choice | null = null;
var currentRankOption: RankOption | null = null;


function onChoiceSearchResults(choice: Choice) {
    searchHeader.innerHTML = choice.getName();
    searchDetails.innerHTML = choice.getDescription();

    while (searchFeatures.lastChild) {
        searchFeatures.removeChild(searchFeatures.lastChild);
    }
    for (let feature of choice.getSheetFeatures()) {
        const child = document.createElement('li');
        child.innerHTML = "<b>" + feature.getName() + "</b>: " + feature.description;
        searchFeatures.appendChild(child);
    }
    currentChoice = choice;
}

searchBox.oninput = function () {
   if (searchBox.selectedIndex != -1) {
       const choice: Choice | undefined = choiceMap.get(searchBox.value);
       if (choice != undefined) {
           onChoiceSearchResults(choice);
        }
    }
}
searchSelect.onclick = function () {
    if (currentChoiceOption != null && currentChoice != null) {
        currentChoiceOption.getSelectUiElement().value = currentChoice.getName();
    }
}

function onGenericCategoryGainFocus(uiElement: HTMLElement, category: OptionCategory): void {
    floatingDescriptionBlock.style.display = cssDescriptionBlockDisplay;
    focusTitle.textContent = category.getName();
    focusDescription.innerHTML = category.getDescription();
    currentCateogry = category;
}

function onCategoryGainFocusImpl(uiElement: HTMLElement, category: OptionCategory): void {
    if (category == currentCateogry) return;
    onGenericCategoryGainFocus(uiElement, category);
    currentChoiceOption = null;
    currentChoice = null;
    searchBox.style.display = "none";
    searchSelect.style.display = "none";
    searchHeader.style.display = "none";
    searchDetails.style.display = "none";
    searchFeatures.style.display = "none";
    searchRanks.style.display = "none";
}

function onChoiceGainFocusImpl(uiElement: HTMLSelectElement, option: ChoiceOption, selectedChoice: Choice|null): void {
    if (option == currentChoiceOption && selectedChoice == currentChoice) return;
    onGenericCategoryGainFocus(uiElement, option.getCategory());
    if (selectedChoice == null) {
        return;
    }
    currentChoiceOption = option;
    searchBox.style.display = cssSearchBoxDisplay;
    searchSelect.style.display = cssSearchSelectDisplay;
    searchHeader.style.display = cssSearchHeaderDisplay;
    searchDetails.style.display = cssSearchDetailsDisplay;
    searchFeatures.style.display = cssSearchFeaturesDisplay;
    searchRanks.style.display = "none";
    while (searchBox.lastChild) {
        searchBox.removeChild(searchBox.lastChild);
    }
    choiceMap.clear();
    for (let choice of option.getChoiceSet()) {
        const child = document.createElement('option');
        child.value = choice.getName();
        child.appendChild(document.createTextNode(choice.getName()));
        searchBox.appendChild(child);
        choiceMap.set(choice.getName(), choice);
        if (currentChoice == null && choice === selectedChoice) {
            searchBox.value = choice.getName();
            onChoiceSearchResults(choice);
        }
    }
    currentChoice = selectedChoice;
    searchBox.value = selectedChoice.getName();
    onChoiceSearchResults(selectedChoice);
    if (selectedChoice instanceof RankChoice) {
        showRankInfo(selectedChoice.getRankOption())
    }
}

function onRankGainFocusImpl(uiElement: HTMLInputElement, option: RankOption): void {
    if (option == currentRankOption) return;
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

    if (hasDetailedRanks)
        showRankInfo(option);
}

function showRankInfo(option: RankOption): void {
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