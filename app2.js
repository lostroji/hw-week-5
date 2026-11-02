/** 2nd part: remainingPages(goalPages, readPages) **/

export function remainingPages(goalPages, readPages) {
    // invalidity check
    // goalPages is an integer from 1 to 5,000
    if (!(1 <= goalPages && goalPages <= 5000 && Number.isInteger(goalPages))) {
        // console.log("Invalid goalPages value")
        return null;
    }
    // readPages is an integer from 1 to 5,000
    if (!(0 <= readPages && readPages <= 6000 && Number.isInteger(readPages))) {
        // console.log("Invalid readPages value")
        return null;
    }

    if (readPages >= goalPages) {
        // console.log("The goal is reached or exceeded");
        return 0;
    } else {
        // console.log("The goal is not reached or exceeded");
        return (goalPages - readPages);
    }
}

// tests
console.log(remainingPages(200, 79))    // 121
console.log(remainingPages(200, 220))   // 0
console.log(remainingPages(0, 0))       // null

console.log(remainingPages(100, 50));       // 50
console.log(remainingPages(500, 250));      // 250
console.log(remainingPages(100, 99));       // 1
console.log(remainingPages(100, 100));      // 0
console.log(remainingPages(100, 150));      // 0
console.log(remainingPages(1, 0));          // 1
console.log(remainingPages(5000, 0));       // 5000
console.log(remainingPages(5000, 6000));    // 0
console.log(remainingPages(2500, 1250));    // 1250
