// data 1
let calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
let tipOfBillsValue275 = calculateTip(275)
let tipOfBillsValue40 = calculateTip(40)
let tipOfBillsValue430 = calculateTip(430)
    /*2. Print a string to the console containing the bill value, the tip, and the final value
    (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
    316.25”*/
console.log("Task 2 : ");
let functionChallenge4Task2 = (bill) => {
    let tipOfBillsValue = calculateTip(bill)
    console.log(`The bill was ${bill}, the tip was ${tipOfBillsValue}, and the total value ${bill + tipOfBillsValue}`);
}
functionChallenge4Task2(275)
functionChallenge4Task2(40)
functionChallenge4Task2(430)