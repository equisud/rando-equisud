import {
    get
} from 'svelte/store'
import {
    weeksLoad
} from "$lib/stores.js";

export async function load() {
    const weeks = await get(weeksLoad)

    return {
        post: {
            weeks
        }
    }
}