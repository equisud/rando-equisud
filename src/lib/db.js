function getSummary(customers, field) {
    const summary = {}

    const relevantCustomers = customers.filter(customer => customer[field])

    for (const customer of relevantCustomers.map(customer => customer[field])) {
        if (summary[customer]) {
            summary[customer] += 1;
        } else {
            summary[customer] = 1;
        }
    }

    return Object.entries(summary);
}

function convertPeriodToDate(period) {
    function convertToDate(mmjj) {
        const year = new Date().getFullYear()

        return new Date(`2026/${mmjj}`)
    }

    const date = {}
    date.departure = convertToDate(period.match(/^[0-9]*\/[0-9]*/)[0])
    date.arrival = convertToDate(period.match(/[0-9]*\/[0-9]*$/)[0])

    return date
}

export const getCountrySummary = (customers) => getSummary(customers, 'country')
export const getGenderSummary = (customers) => getSummary(customers, 'gender')
export const getDietSummary = (customers) => getSummary(customers, 'diet')
export const getDoubleBeds = (customers) => +customers.filter(customer => customer.bed === "double").length

export const countBooked = (riders) =>
    +riders.filter(rider => rider.status === "booked").length

export const countOption = riders =>
    +riders.filter(rider => rider.status === "option").length

export const periodToDate = (period) => convertPeriodToDate(period)