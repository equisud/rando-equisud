function getSummary(riders, field) {
    const summary = {};

    for (const rider of riders.map(rider => rider[field])) {
        if (summary[rider]) {
            summary[rider] += 1;
        } else {
            summary[rider] = 1;
        }
    }

    return Object.entries(summary);
}

export const getCountrySummary = (riders) => getSummary(riders, 'country')
export const getGenderSummary = (riders) => getSummary(riders, 'gender')
export const getDietSummary = (riders) => getSummary(riders, 'diet')

export const countBooking = riders =>
    +riders.filter(rider => rider.status === "booking").length;

export const countOption = riders =>
    +riders.filter(rider => rider.status === "option").length;