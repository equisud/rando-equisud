import { writable } from 'svelte/store';
import { periodToDate } from "$lib/db";
import { load as loadYaml } from 'js-yaml';

async function getWeeks() {
    const yamlFiles =
        import.meta.glob('$lib/_data/2026/*.yaml', { as: 'raw', eager: true });

    const weeksContents = Object.entries(yamlFiles).map(([path, yamlContent]) => {
        const week = loadYaml(yamlContent);

        week.file = path.match(/.*\/([^?]+)/)[1];
        week.dates = periodToDate(week.period);
        week.old = week.dates.arrival.getTime() < Date.now();

        return week;
    });

    return weeksContents;
}

const weeks = getWeeks();

export const weeksLoad = writable(weeks);