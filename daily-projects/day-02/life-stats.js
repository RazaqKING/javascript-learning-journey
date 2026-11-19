// --- Input ---
const birthYearText = "2006";
const currentYear = 2026;
console.log("Type before:", typeof birthYearText);
const birthYear = Number(birthYearText);
//  print the type after

console.log("Type after:", typeof birthYear);

// --- Calculations ---
const age = currentYear - birthYear;
const months = age * 12;
const weeks = age * 52;
const days = age * 365;
const hours = days * 24;
//  weeks, days, hours, heartbeats
const heartbeats = days * 115200; // average heartbeats per day

// --- Output ---
// labelled lines for every value
console.log("Age: " + age + " years");
console.log("Months: " + months);
console.log("Weeks: " + weeks);
console.log("Days: " + days);
console.log("Hours: " + hours);
console.log("Heartbeats: " + heartbeats);

//  "in 10 years" (let + +=) and the age % 2 line
let ageIn10Years = age + 10;
console.log("Age in 10 years: " + ageIn10Years);
// (0 or 1) - even or odd//
console.log("Age modulo 2: " + age % 2);
