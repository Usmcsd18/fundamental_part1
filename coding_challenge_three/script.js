let dolphinsScore = (2 + 2 + 2 / 3);
let koalasScore = (1 + 3 + 33 / 3);
console.log(dolphinsScore,koalasScore);

if (dolphinsScore > koalasScore && dolphinsScore > 100) {
    console.log(`Dolphins win with a score of ${dolphinsScore}`)
} else if (dolphinsScore < koalasScore && koalasScore > 100) {
    console.log(`Koalas win with a score of ${koalasScore}`)
} else if (dolphinsScore = koalasScore && dolphinsScore > 100 && koalasScore > 100) {
    console.log("Its a Draw!!")
} else {
    console.log("No one scored enough points to win")
}
