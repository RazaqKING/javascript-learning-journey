// Exercise 2 — Predict the output
// My prediction: "Apples: 8", "Cost: 16", "Apples left: 7"  -> correct
// Why `price = 3;` fails: price is declared with const, which can't be reassigned.
let apples = 5;
const price = 2;
apples = apples + 3;
console.log("Apples: " + apples);
console.log("Cost: " + apples * price);
apples = apples - 1;
console.log("Apples left: " + apples);
