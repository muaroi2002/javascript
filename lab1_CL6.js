
console.log("Task 1 : ");
let calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
console.log(calcTip(100));
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
console.log("Task 2 : ");
let bills = [125, 555, 44]
console.log(bills);
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
console.log("Task 3 : ");
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
console.log("Task 4 : ");
let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total);

