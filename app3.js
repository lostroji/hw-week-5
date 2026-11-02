/** 3rd part: daysToFinish(pagesLeft, dailyPages, restOnSeventhDay) **/

function daysToFinish(pagesLeft, dailyPages, restOnSeventhDay) {

    let extraDays = 0;
    let days = 1;

    // Invalidity check
    // PagesLeft: integer from 0 to 5,000.
    if (!(0 <= pagesLeft && pagesLeft <= 5000 && Number.isInteger(pagesLeft))) {
        // console.log("pagesLeft is invalid");
        return null;
    }
    // DailyPages: integer from 1 to 100.
    if (!(1 <= dailyPages && dailyPages <= 100 && Number.isInteger(dailyPages))) {
        // console.log("dailyPages is invalid");
        return null;
    }
    // RestOnSeventhDay variable is invalid: it is not a boolean
    if (!((restOnSeventhDay === true || restOnSeventhDay === false))) {
        // console.log("restOnSeventhDay value is invalid");
        return null;
    }

    // When there is no pages to read then it is gonna take 0 days
    if (pagesLeft === 0) {
        return 0
    }


    // Calculating the days and extra days based on restOnSeventhDay
    while (pagesLeft > dailyPages) {
        pagesLeft -= dailyPages;
        days++;
        if ((days + extraDays) % 7 === 0 && restOnSeventhDay) {
            extraDays++;
        }
    }

    return (days + extraDays);
}


// tests
console.log(daysToFinish(120, 20, true));    // 6
console.log(daysToFinish(121, 20, true));    // 8
console.log(daysToFinish(121, 20, false));   // 7
console.log(daysToFinish(121, 0, true));     // null
console.log(daysToFinish(140, 20, true));    // 8
console.log(daysToFinish(260, 20, true));    // 15
console.log(daysToFinish(500, 100, true));   // 5
console.log(daysToFinish(120, 20, false));   // 6
console.log(daysToFinish(121, 20, false));   // 7
console.log(daysToFinish(140, 20, false));   // 7
console.log(daysToFinish(260, 20, false));   // 13
console.log(daysToFinish(500, 100, false));  // 5
console.log(daysToFinish(0, 20, true));      // 0
console.log(daysToFinish(0, 20, false));     // 0
console.log(daysToFinish(1, 100, true));     // 1
console.log(daysToFinish(1, 1, false));      // 1
console.log(daysToFinish(5000, 100, false)); // 50
console.log(daysToFinish(5000, 100, true));  // 58

