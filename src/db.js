export function getCountrySummary(riders) {
    const summary = {};

    for (const rider of riders.map(rider => rider.country)) {
        if (summary[rider]) {
            summary[rider] += 1;
        } else {
            summary[rider] = 1;
        }
    }

    return Object.entries(summary);
}

export function getGenderSummary(riders) {
    const summary = {};

    for (const rider of riders.map(rider => rider.gender)) {
        if (summary[rider]) {
            summary[rider] += 1;
        } else {
            summary[rider] = 1;
        }
    }

    return Object.entries(summary);
}

export const countBooking = riders =>
    +riders.filter(rider => rider.status === "booking").length;

export const countOption = riders =>
    +riders.filter(rider => rider.status === "option").length;