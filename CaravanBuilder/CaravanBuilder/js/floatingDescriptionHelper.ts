import { ChoiceOption, ChoiceFocusChangeListener } from "./types/ChoiceOption";
import { OptionCategory } from "./types/OptionCategory.js";
import { Choice } from "./types/Choice.js";
import { nonNull } from "./util/nonNull.js";


const floatingDescriptionBlock: HTMLElement = nonNull(document.getElementById('floatingDescriptionBox'), "cannot find floatingDescriptionBox") as HTMLElement;
const focusTitle: HTMLHeadingElement = nonNull(document.getElementById('focusTitle'), "cannot find focusTitle") as HTMLHeadingElement;
const focusDescription: HTMLDivElement = nonNull(document.getElementById('focusDescription'), "cannot find focusDescription") as HTMLDivElement;
const searchBox: HTMLSelectElement = nonNull(document.getElementById('searchBox'), "cannot find searchBox") as HTMLSelectElement;
const searchSelect: HTMLButtonElement = nonNull(document.getElementById('searchSelect'), "cannot find searchSelect") as HTMLButtonElement;
const searchHeader: HTMLHeadingElement = nonNull(document.getElementById('searchHeader'), "cannot find searchHeader") as HTMLHeadingElement;
const searchDetails: HTMLDivElement = nonNull(document.getElementById('searchDetails'), "cannot find searchDetails") as HTMLDivElement;
const searchFeatures: HTMLUListElement = nonNull(document.getElementById('searchFeatures'), "cannot find searchFeatures") as HTMLUListElement;

const cssDescriptionBlockDisplay: string = floatingDescriptionBlock.style.display || "block";
const cssSearchBoxDisplay: string = searchBox.style.display || "block";
const cssSearchSelectDisplay: string = searchSelect.style.display || "block";
const cssSearchHeaderDisplay: string = searchHeader.style.display || "block";
const cssSearchDetailsDisplay: string = searchDetails.style.display || "block";
const cssSearchFeaturesDisplay: string = searchFeatures.style.display || "block";


var currentCateogry: OptionCategory | null = null;
var currentOption: ChoiceOption | null = null;
var choiceMap: Map<string, Choice> = new Map<string, Choice>();
var currentChoice: Choice | null = null;


function onSearchResults(choice: Choice) {
    searchHeader.innerHTML = choice.getName();
    searchDetails.innerHTML = choice.getDescription();

    while (searchFeatures.lastChild) {
        searchFeatures.removeChild(searchFeatures.lastChild);
    }
    for (let feature of choice.getSheetFeatures()) {
        const child = document.createElement('li');
        child.innerHTML = "<b>" + feature.getName() + "</b> " + feature.description;
        searchFeatures.appendChild(child);
    }

    currentChoice = choice;

}
searchBox.oninput = function () {
   if (searchBox.selectedIndex != -1) {
       const choice: Choice | undefined = choiceMap.get(searchBox.value);
       if (choice != undefined) {
           onSearchResults(choice);
        }
    }
}
searchSelect.onclick = function () {
    if (currentOption != null && currentChoice != null) {
        currentOption.getSelectUiElement().value = currentChoice.getName();
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
    currentOption = null;
    currentChoice = null;
    searchBox.style.display = "none";
    searchSelect.style.display = "none";
    searchHeader.style.display = "none";
    searchDetails.style.display = "none";
    searchFeatures.style.display = "none";
}

function onChoiceGainFocusImpl(uiElement: HTMLSelectElement, option: ChoiceOption, selectedChoice: Choice|null): void {
    if (option == currentOption && selectedChoice == currentChoice) return;
    onGenericCategoryGainFocus(uiElement, option.getCategory());
    if (selectedChoice == null) {
        return;
    }
    currentOption = option;
    searchBox.style.display = cssSearchBoxDisplay;
    searchSelect.style.display = cssSearchSelectDisplay;
    searchHeader.style.display = cssSearchHeaderDisplay;
    searchDetails.style.display = cssSearchDetailsDisplay;
    searchFeatures.style.display = cssSearchFeaturesDisplay;
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
            onSearchResults(choice);
        }
    }
    currentChoice = selectedChoice;
    searchBox.value = selectedChoice.getName();
    onSearchResults(selectedChoice);
}


export const focusListener: ChoiceFocusChangeListener = {
    onChoiceGainFocus: onChoiceGainFocusImpl,
    onCategoryGainFocus: onCategoryGainFocusImpl
}