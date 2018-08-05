export interface Clonable<T> {
    clone(): T;
}

export function cloneSet<T extends Clonable<T>>(set: Set<T>): Set<T> {
    const result = new Set<T>();
    for (let item of set) {
        result.add(item.clone());
    }
    return result;
}
export function cloneArray<T extends Clonable<T>>(array: T[]): T[] {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i].clone();
    }
    return result;
}
