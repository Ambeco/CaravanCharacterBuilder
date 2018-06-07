export function nonNull<T>(param: T | null | undefined, message: string): T {
    if (param == null || param == undefined) {
        throw new Error(message);
    }
    return param;
}
export function nonNullArray<T>(array: (T | null | undefined)[], message: string): T[] {
    for (let i = 0; i < array.length; i++) {
        nonNull(array[i], message + " (index " + i + ")");
    }
    return array as T[];
}
export function nonNaN(param: number | null | undefined, message: string): number {
    if (param == null || param == undefined || Number.isNaN(param)) {
        throw new Error(message);
    }
    return param;
}