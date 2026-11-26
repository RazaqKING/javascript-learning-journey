const rawCode = "  ng-2026-lagos  ";

const cleanedrawCode = (rawCode.trim().toUpperCase());



const city = cleanedrawCode.slice(8).toLowerCase();
const capitalizedFirstCity = city [0].toUpperCase() + city.slice(1);
const codeLenght = (cleanedrawCode.length);

console.log(`Order code: ${cleanedrawCode}` );

console.log(`City: ${capitalizedFirstCity}`);
console.log(`Code Lenght: ${codeLenght}`);
