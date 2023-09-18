//Coding Challenge #3

let dolphinsScore1 = 96
let dolphinsScore2 = 108
let dolphinsScore3 = 89
let koalasScore1 = 88
let koalasScore2 = 91
let koalasScore3 = 110
let dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3
let koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3
let dolphinsHigherScore = dolphinsAverageScore > koalasAverageScore
let koalasHigherScore = koalasAverageScore > dolphinsAverageScore
let draw = dolphinsAverageScore === koalasAverageScore
let minimumScore = dolphinsAverageScore >= 100 && koalasAverageScore >= 100
let minimumScoreDolphins = dolphinsAverageScore >= 100
let minimumScoreKoalas = koalasAverageScore >= 100
let dolphinsHigherScoreMinimum = dolphinsHigherScore && minimumScore
let koalasHigherScoreMinimum = koalasHigherScore && minimumScore
let drawMinimum = draw && minimumScore
let dolphinsHigherScoreMinimumKoalas = dolphinsHigherScore && minimumScoreKoalas
let koalasHigherScoreMinimumDolphins = koalasHigherScore && minimumScoreDolphins
let drawMinimumDolphins = draw && minimumScoreDolphins
let drawMinimumKoalas = draw && minimumScoreKoalas
let functionChallenge3Task1 = (dolphinsAverageScore, koalasAverageScore) => {
    if (dolphinsAverageScore > koalasAverageScore) {
        console.log(`Dolphins win with ${dolphinsAverageScore} points!`);
    } else if (koalasAverageScore > dolphinsAverageScore) {
        console.log(`Koalas win with ${koalasAverageScore} points!`);
    } else {
        console.log(`It's a draw!`);
    }
}
functionChallenge3Task1(dolphinsAverageScore, koalasAverageScore)
let functionChallenge3Task2 = (dolphinsAverageScore, koalasAverageScore) => {
    if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
        console.log(`Dolphins win with ${dolphinsAverageScore} points!`);
    } else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
        console.log(`Koalas win with ${koalasAverageScore} points!`);
    } else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
        console.log(`It's a draw!`);
    } else {
        console.log(`No one wins the trophy!`);
    }
}
functionChallenge3Task2(dolphinsAverageScore, koalasAverageScore)
let functionChallenge3Task3 = (dolphinsAverageScore, koalasAverageScore) => {
    if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
        console.log(`Dolphins win with ${dolphinsAverageScore} points!`);
    } else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
        console.log(`Koalas win with ${koalasAverageScore} points!`);
    } else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
        console.log(`It's a draw!`);
    } else {
        console.log(`No one wins the trophy!`);
    }
}
functionChallenge3Task3(dolphinsAverageScore, koalasAverageScore)
let functionChallenge3Task4 = (dolphinsAverageScore, koalasAverageScore) => {
    if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
        console.log(`Dolphins win with ${dolphinsAverageScore} points!`);
    } else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
        console.log(`Koalas win with ${koalasAverageScore} points!`);
    } else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
        console.log(`It's a draw!`);
    } else {
        console.log(`No one wins the trophy!`);
    }
}
functionChallenge3Task4(dolphinsAverageScore, koalasAverageScore)


