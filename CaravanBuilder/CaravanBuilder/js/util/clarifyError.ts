
/**
 * Used to add context to an exception that's bubbling up.
 * 
 * Usage:
 * function parseAbility(name:string):void {
 *     try {
 *         doStuff();
 *     } catch(e) {
 *         clarifyError(e, "while parsing ability " + name);
 *     }
 * }
 * 
 * Results:
 * ClarifyError.ts:7 Uncaught TypeError: Cannot read property 'slice' of null
 *     at parseTags (http://localhost:10202/js/abilityTools.js:157:33)
 * while parsing ability Parry
 *     at parseAbility (http://localhost:10202/js/abilityTools.js:119:22)
 * while processing child 0 of DIV
 *     at findAbilities (http://localhost:10202/js/abilityTools.js:32:37)
 * while processing child 2 of SPAN
 *     at findAbilities (http://localhost:10202/js/abilityTools.js:36:17)
 * while processing child 0 of DIV
 *     at findAbilities (http://localhost:10202/js/abilityTools.js:36:17)
 *     at HTMLDivElement.editableDiv.oninput (http://localhost:10202/js/abilityTools.js:11:5)
 *     
 */
export function clarifyError(e: any, clarification: string): never {
    if (e instanceof Error && e.stack != null) {
        const insertPosition = lastDifferentLineIndex(e.stack, new Error().stack as string);
        e.stack = e.stack.substr(0, insertPosition) + "\n" + clarification + e.stack.substr(insertPosition);
    }
    throw e;
}

function lastDifferentLineIndex(message1: string, message2: string): number {
    let matchCount: number = 0;
    for (; ;) {
        const newlinePos1:number = message1.lastIndexOf("\n", message1.length - matchCount - 1);
        const newlinePos2: number = message2.lastIndexOf("\n", message2.length - matchCount - 1);
        const subMessage1:string = message1.substr(newlinePos1 + 1);
        const subMessage2: string = message2.substr(newlinePos2 + 1);
        if (subMessage1 != subMessage2 || newlinePos2 == -1) {
            return newlinePos1;
        } else if (newlinePos1 == -1) {
            return 0;
        } else {
            matchCount = message1.length - newlinePos1;
        }
    }
}