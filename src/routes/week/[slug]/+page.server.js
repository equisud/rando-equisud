import {
    periodToDate
} from "$lib/db";

export async function load({
    params
}) {
    const fileName = `../../../lib/_data/2022/${params.slug}`
    const importWeek =
        import ( /* @vite-ignore */ fileName)
    const week = JSON.parse(JSON.stringify(await importWeek))
    week.file = fileName.match(/.*\/([^?]+)/)[1]
    week.dates = periodToDate(week.period)
    week.old = week.dates.arrival < Date.now()

    return {
        post: {
            week
        }
    }
}