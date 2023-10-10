let bill = 430;
let tip = bill > 50 && bill < 300 ? bill * .15 : bill * .20;
const total = tip + bill

console.log(`The bill is ${bill}, the tip is ${tip}, and the total is ${total}`)