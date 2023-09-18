let marksMass1 = 78
let marksHeight1 = 1.69
let joihnsMass1 = 92
let joihnsHeight1 = 1.95
let marksBMI1 = marksMass1 / marksHeight1 ** 2
let johnsBMI1 = joihnsMass1 / joihnsHeight1 ** 2
let markHigherBMI1 = marksBMI1 > johnsBMI1
let marksMass2 = 95
let marksHeight2 = 1.88

let joihnsMass2 = 85
let joihnsHeight2 = 1.76
let marksBMI2 = marksMass2 / marksHeight2 ** 2
let johnsBMI2 = joihnsMass2 / joihnsHeight2 ** 2
let markHigherBMI2 = marksBMI2 > johnsBMI2
console.log("Task1 : ");
let functionChallenge2Task1 = (markHigherBMI) => {
    if (markHigherBMI) {
        console.log("Mark's BMI is higher than John's!");
    } else {
        console.log("John's BMI is higher than Mark's!");
    }
}
functionChallenge2Task1(markHigherBMI1)
functionChallenge2Task1(markHigherBMI2)
console.log("Task 2 : ");
let functionChallenge2Task2 = (marksBMI, johnsBMI, markHigherBMI) => {
    if (markHigherBMI) {
        console.log(`Mark's BMI (${marksBMI.toFixed(1)}) is higher than John's (${johnsBMI.toFixed(1)})!`);
    } else {
        console.log(`John's BMI (${johnsBMI.toFixed(1)}) is higher than Mark's (${marksBMI.toFixed(1)})!`);
    }
}
functionChallenge2Task2(marksBMI1, johnsBMI1, markHigherBMI1)
functionChallenge2Task2(marksBMI2, johnsBMI2, markHigherBMI2)

