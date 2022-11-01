import {
    periodToDate
} from "$lib/db";

export async function load({
    fetch,
    params
}) {
    const fileName = `https://raw.githubusercontent.com/equisud/rando-equisud/main/src/lib/_data/2022/${params.slug}`
    const res = await fetch(fileName)
    const week = await res.json()
    week.file = fileName.match(/.*\/([^?]+)/)[1]
    week.dates = periodToDate(week.period)
    week.old = week.dates.arrival < Date.now()

    return {
        post: {
            week
        }
    }
}