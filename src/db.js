function getSummary(customers, field) {
    const summary = {};

    for (const customer of customers.map(customer => customer[field])) {
        if (summary[customer]) {
            summary[customer] += 1;
        } else {
            summary[customer] = 1;
        }
    }

    return Object.entries(summary);
}

export const getCountrySummary = (customers) => getSummary(customers, 'country')
export const getGenderSummary = (customers) => getSummary(customers, 'gender')
export const getDietSummary = (customers) => getSummary(customers, 'diet')
export const getDoubleBeds = (customers) => +customers.filter(customer => customer.bed === "double").length;

export const countBooking = riders =>
    +riders.filter(rider => rider.status === "booking").length;

export const countOption = riders =>
    +riders.filter(rider => rider.status === "option").length;