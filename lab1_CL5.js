

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
let checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log("No team wins");
    }
}
let avgDolhins = calcAverage(44, 23, 71)
let avgKoalas = calcAverage(65, 54, 49)
checkWinner(avgDolhins, avgKoalas)
avgDolhins = calcAverage(85, 54, 41)
avgKoalas = calcAverage(23, 34, 27)
checkWinner(avgDolhins, avgKoalas)
