import {
    get
} from 'svelte/store'
import {
    weeksLoad
} from "$lib/stores.js";
import {
    periodToDate
} from "$lib/db";

export async function load({
    params
}) {

    const weeks = await get(weeksLoad)
    const weekSelected = weeks.find(week => week.file === params.slug + '.yaml')

    weekSelected.dates = periodToDate(weekSelected.period)
    weekSelected.old = weekSelected.dates.arrival < Date.now()

    return {
        post: {
            weekSelected
        }
    }
}