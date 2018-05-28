export function toCamelCase(str:string) {
    const firstPass = str.replace(/\s([_A-Za-z])/g, function (match:string, letter:string) {
        return letter.toUpperCase();
    });
    const secondPass = firstPass.replace(/[^_a-zA-Z]/g, function (match: string) {
        return "_";
    });
    return secondPass;
}