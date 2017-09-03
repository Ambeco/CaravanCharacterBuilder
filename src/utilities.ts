function assert(condition: boolean, message?: string): void {
    if (!condition) {
        throw message || "Assertion failed";
    }
}