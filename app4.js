/** 4th part: runReadingCommand(action, first, second, restOnSeventhDay) **/
import {plannedPages} from "./app.js";
import {remainingPages} from "./app2.js";
import {daysToFinish} from "./app3.js";

function runReadingCommand(action, first, second, restOnSeventhDay) {
    if (action === "plan") {
        // first = days
        // second = dailyPages
        return `plannedPagesIn7Days: ${plannedPages(first, second, restOnSeventhDay)}`
    } else if (action === "remaining") {
        // first = goalPages
        // second = readPages
            if (first) {
                return "invalid-input"
            }
        return `pagesToFinish: ${remainingPages(first, second)}`
    } else if (action === "finish") {
        // first = pagesLeft
        // second = dailyPages
        if (first === null)
            return "invalid-input"
        return `daysToFinish: ${daysToFinish(first, second, restOnSeventhDay)}`
    } else {
        return null
    }
}

// tests
console.log(runReadingCommand("plan", 7, 20, true));            // 120
console.log(runReadingCommand("remaining", 200, 79, false));    // 121
console.log(runReadingCommand("finish", 121, 20, true));        // 8
console.log(runReadingCommand("Plan", 7, 20, true));            // null