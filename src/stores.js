import {
    readable
} from 'svelte/store'

const jsons =
    import.meta.glob('./lib/_data/2022/*.json')

const trecksContents = await Promise.all(Object.entries(jsons).map(async([path, resolver]) => {
    const content = await resolver()

    return content.default
}))

export const trecks = readable(null, (set) => {
    set(trecksContents)
})