import stableStringify from 'json-stable-stringify'

function toKeyPart(value: unknown): string {
    if (value === undefined) return '__UNDEFINED__'
    if (value === null) return '__NULL__'
    return String(value)
}

export function uniqueByValue<T>(arr: T[]): T[] {
    return Array.from(
        new Map(arr.map(item => [JSON.stringify(item), item])).values()
    );
}
