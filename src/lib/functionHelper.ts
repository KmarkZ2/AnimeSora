import stableStringify from 'json-stable-stringify'

function toKeyPart(value: unknown): string {
    if (value === undefined) return '__UNDEFINED__'
    if (value === null) return '__NULL__'
    return String(value)
}

export function uniqueByAllKeys<T extends Record<string, unknown>>(
    items: T[]
): T[] {
    const map = new Map<string, T>()

    for (const item of items) {
        const key = Object.keys(item)
            .sort()
            .map(k => toKeyPart(item[k]))
            .join('|')

        map.set(key, item)
    }

    return [...map.values()]
}