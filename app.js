/** 1st part: plannedPages(days, dailyPages, restOnSeventhDay) **/

export function plannedPages(days, dailyPages, restOnSeventhDay) {
    // days variable is invalid when: 1. it is more than 60 or 2. under 0 or 3. not an integer
    if (!((0 <= days) && (days <= 60) && Number.isInteger(days))) {
        // console.log("Days value is not valid")
        return null;
    }
    // dailyPages variable is invalid when: 1. it is more than 100 or 2. under 0 or 3. not an integer
    if (!((0 <= dailyPages && dailyPages <= 100 && Number.isInteger(dailyPages)))) {
        // console.log("dailyPages value is not valid")
        return null;
    }
    // restOnSeventhDay variable is invalid: it is not a boolean
    if (!((restOnSeventhDay === true || restOnSeventhDay === false))) {
        // console.log("restOnSeventhDay value is invalid")
        return null
    }

    if (restOnSeventhDay) {
        // days or restOnSeventhDay is zero -> return zero
        if (days === 0 || restOnSeventhDay === 0) {
            return 0

            // days under 7 but there is restOnSeventhDay being true
        } else {
            return (days * dailyPages - (Math.floor(days / 7) * dailyPages));
        }
    } else {
        return (days * dailyPages);
    }
}

// tests
// console.log(plannedPages(7, 20, true))       //120
// console.log(plannedPages(7, 20, false))     // 140
// console.log(plannedPages(14, 20, true));     // 240
// console.log(plannedPages(14, 20, false));    // 280
// console.log(plannedPages(6, 20, true));      // 120
// console.log(plannedPages(60, 100, true));    // 5200
//
// console.log(plannedPages(61, 20, true));     // null
// console.log(plannedPages(-1, 20, true));     // null
// console.log(plannedPages(2.5, 20, true));    // null
// console.log(plannedPages(7, 101, true));     // null
// console.log(plannedPages(7, -1, true));      // null
// console.log(plannedPages(7, 2.5, true));     // null
// console.log(plannedPages(7, 20, "true"));    // null
// console.log(plannedPages(7, 20, 1));         // null