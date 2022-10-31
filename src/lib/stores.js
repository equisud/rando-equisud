import {
    readable
} from 'svelte/store'

async function trecksContents(set) {

    function convertPeriodToDate(period) {

        function convertToDate(mmjj) {
            const year = new Date().getFullYear();

            return new Date(`${year}/${mmjj}`);
        }

        const date = {};
        date.departure = convertToDate(period.match(/^[0-9]*\/[0-9]*/)[0]);
        date.arrival = convertToDate(period.match(/[0-9]*\/[0-9]*$/)[0]);

        return date;
    }

    function formatTreck(trecks) {
        return trecks.map(treck => {
            treck.dates = convertPeriodToDate(treck.period);
            treck.old = treck.dates.arrival < Date.now()

            return treck
        })
    }

    const jsons =
        import.meta.glob('./_data/2022/*.json')

    const trecksContents = await Promise.all(Object.entries(jsons).map(async([path, resolver]) => {
        const content = await resolver()
        content.default.file = path.match(/.*\/([^?]+)/)[1]

        return await content.default
    }))

    function sortByDate(trecks) {
        return trecks.sort((a, b) => a.dates.departure - b.dates.departure)
    }

    set(sortByDate(formatTreck(trecksContents)))

    return () => {}
}


export function getTrecks() {
    let trecks = readable([], set => {
        trecksContents(set)
        return () => {}
    })

    return trecks
}

export function getTreck(period) {
    let trecks = readable([], set => {
        return () => {}
    })

    return trecks
}