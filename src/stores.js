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

    const trecksContentsSortByDate = trecksContents.sort((a, b) => {

        function extractDate(period) {
            const year = new Date().getFullYear()
            const mmdd = period.match(/^[0-9]*\/[0-9]*/)[0]

            return new Date(`${year}/${mmdd}`)
        }

        return extractDate(a.period) - extractDate(b.period)
    })

    set(trecksContentsSortByDate)
})