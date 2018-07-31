
export function findParentWithClass(uiElement: HTMLElement, classname: string): HTMLElement | null {
    for (; ;) {
        if (uiElement.classList.contains(classname)) {
            return uiElement;
        }else if (uiElement.parentElement == null) {
            return null; 
        } 
        uiElement = uiElement.parentElement;
    }
}
export function stripHtml(html: string): string {
    const tmp:HTMLElement = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}