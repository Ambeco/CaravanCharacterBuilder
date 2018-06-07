
export function findParentWithClass(uiElement: HTMLElement, classname: string): HTMLElement | null {
    for (; ;) {
        if (uiElement.parentElement == null) {
            return null; 
        } else if (uiElement.classList.contains(classname)) {
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