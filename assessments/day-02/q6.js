const priceText = "1500";
let wallet = 10000;
const price = Number(priceText);
console.log("Price:", price);
wallet -= price*3;
console.log("Wallet after purchase:", wallet);
const extraItems = Math.floor(wallet / price);
console.log("Extra items that can be bought:", extraItems);
