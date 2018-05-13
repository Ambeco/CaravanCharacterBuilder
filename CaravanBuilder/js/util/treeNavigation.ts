
export function findParentWithClass(uiElement: HTMLElement, classname: string) {
    for (; ;) {
        if (uiElement == null || uiElement.classList.contains(classname)) {
            return uiElement;
        }
        uiElement = uiElement.parentElement;
    }
}
export function stripHtml(html: string): string {
    const tmp:HTMLElement = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}