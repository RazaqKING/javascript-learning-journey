// --- Input ---
const restaurantName = "mama put kitchen";
const billText = "12500";
const tipPercent = 10;
const numberOfPeople = 4;

// --- Calculations ---
const bill = Number(billText);
const tip = bill * tipPercent / 100;
const total = bill + tip;
const perPerson = total / numberOfPeople;
const perPersonRounded = Math.ceil(perPerson);


// --- Output ---
console.log(`======== ${restaurantName.toUpperCase()} ========`);

console.log(`${"Subtotal:".padEnd(16)}₦${bill.toFixed(2)}`);

const tipLabel = `Tip (${tipPercent}%):`;
console.log(`${tipLabel.padEnd(16)}₦${tip.toFixed(2)}`);

console.log(`${`Total:`.padEnd(16)}₦${total.toFixed(2)}`);

console.log( `${`People:`.padEnd(16)}${numberOfPeople}`);

console.log(`${`Each pays:`.padEnd(16)}₦${perPerson.toFixed(2)}`);

console.log(`${"Each (rounded):".padEnd(16)}₦${perPersonRounded}`);

console.log(`====================================`);
