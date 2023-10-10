import {
    writable
} from 'svelte/store'
import {
    periodToDate
} from "$lib/db"

async function getWeeks() {
    const jsons =
        import.meta.glob('$lib/_data/2024/*.json')
    const weeksContents = await Promise.all(Object.entries(jsons).map(async([path, resolver]) => {
        const content = await resolver()
        const week = content.default

        week.file = path.match(/.*\/([^?]+)/)[1]
        week.dates = periodToDate(week.period);
        week.old = week.dates.arrival < Date.now()

        return week
    }))

    const data = await weeksContents

    return data
}

const weeks = getWeeks()

export const weeksLoad = writable(weeks)