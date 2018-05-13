
export function clarifyError(e: any, clarification: string) {
    if (e instanceof Error) {
        const insertPosition = lastDifferentLineIndex(e.stack, new Error().stack);
        e.stack = e.stack.substr(0, insertPosition) + "\n" + clarification + e.stack.substr(insertPosition);
    }
    throw e;
}

function lastDifferentLineIndex(message1: string, message2: string): number {
    let matchCount: number = 0;
    for (; ;) {
        const newlinePos1:number = message1.lastIndexOf("\n", message1.length - matchCount);
        const newlinePos2: number = message2.lastIndexOf("\n", message2.length - matchCount);
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