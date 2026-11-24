# 📘 Current Lesson: Day 3, Strings, Template Literals & Numbers

**Status:** In progress · **Started:** 2026-11-24 · Day 2 completed 2026-11-19 (79/100)

## Carry-over from Day 2
- `%` gives the **remainder** itself (23 % 4 = 3).
- Explain *why*, not just *what*.
- Re-read every part of a question before answering (seen 5×).

## A. Objectives: by the end of today you can:
1. Build strings with template literals: `` `Hello, ${name}!` ``
2. Read a string's `length` and individual characters (`text[0]`).
3. Use string methods: `toUpperCase`, `toLowerCase`, `trim`, `includes`, `indexOf`, `slice`, `replace`, `padEnd`.
4. Explain why string methods return a **new** string instead of changing the original.
5. Round and format numbers: `Math.round`, `Math.ceil`, `Math.floor`, `toFixed`, `Math.max`, `Math.min`.

---

## B. Concepts

### 1. Template literals: fill-in-the-blank strings
Use **backticks** `` ` `` (top-left key on most keyboards, under Esc), and put any expression inside `${ }`:
```js
const name = "Ada";
const age = 20;
"Hello, " + name + "! You are " + age + " years old.";   // old way: lots of + and spaces
`Hello, ${name}! You are ${age} years old.`;              // template literal: reads like a sentence
`Next year: ${age + 1}`;                                  // maths inside ${} → "Next year: 21"
```
Think of a form letter: the text is fixed, and `${ }` are the blanks that get filled in.

### 2. Strings have a length and positions
```js
const word = "JavaScript";
word.length   // 10
word[0]       // "J"  ← positions (indexes) start at 0, not 1
word[9]       // "t"  ← the last one is length - 1
```

### 3. String methods: tools that come with every string
| Method | What it does | Example | Result |
|---|---|---|---|
| `toUpperCase()` | ALL CAPS | `"lagos".toUpperCase()` | `"LAGOS"` |
| `toLowerCase()` | all lowercase | `"LaGoS".toLowerCase()` | `"lagos"` |
| `trim()` | removes spaces at both ends | `"  hi  ".trim()` | `"hi"` |
| `includes(x)` | does it contain x? | `"hello".includes("ell")` | `true` |
| `indexOf(x)` | position where x first appears | `"a@b.com".indexOf("@")` | `1` |
| `slice(start, end)` | cut out a piece (end not included) | `"JavaScript".slice(0, 4)` | `"Java"` |
| `replace(a, b)` | swap the **first** a for b | `"banana".replace("a", "o")` | `"bonana"` |
| `padEnd(n, c)` | fill with c until length n | `"Food".padEnd(10, ".")` | `"Food......"` |

⚠️ **Strings never change.** A method gives you a **new** string; the original stays the same:
```js
let city = "lagos";
city.toUpperCase();          // creates "LAGOS"… and throws it away
console.log(city);           // "lagos"  ← unchanged!
city = city.toUpperCase();   // ✅ store the new string
```
Like photocopying a document and highlighting the copy: the original is untouched.

**Chaining:** each method returns a string, so you can call another method on it:
```js
"  Lagos  ".trim().toUpperCase()   // "LAGOS"
```

### 4. Numbers: rounding and formatting
```js
Math.round(2.5)    // 3    ← nearest whole number (.5 goes up)
Math.ceil(2.1)     // 3    ← always UP   (ceiling is above you)
Math.floor(2.9)    // 2    ← always DOWN (floor is below you)
(4.567).toFixed(2) // "4.57" ← 2 decimal places, but returns a STRING
Math.max(3, 9, 2)  // 9
Math.min(3, 9, 2)  // 2
0.1 + 0.2          // 0.30000000000000004 ← computers store decimals imperfectly; use toFixed for display
```
Money rule: **do maths with numbers, then use `toFixed(2)` only when printing.**

---

## C. Live demo
```js
const rawEmail = "  Student@Example.COM ";
const email = rawEmail.trim().toLowerCase();   // clean it: "student@example.com"
const atPosition = email.indexOf("@");          // 7
const username = email.slice(0, atPosition);    // everything before the @: "student"
console.log(`Email: ${email}`);
console.log(`Username: ${username}`);
console.log(`Valid-looking: ${email.includes("@")}`);   // true
```

---

## D. Exercises

**Exercise 1 (Easy).**
```js
const name = "AbdulRazaq";
const age = 20;
```
(a) Print `Hello, AbdulRazaq! You are 20 years old.` using a **template literal** (no `+`).
(b) Print the name in UPPERCASE.
(c) Print `Your name has 10 letters.`, getting the 10 from the string, not typing it.

**Exercise 2 (Intermediate). Predict, then check:**
```js
console.log("  Lagos  ".trim().length);
console.log("JavaScript".slice(0, 4));
console.log("banana".replace("a", "o"));
console.log((4.567).toFixed(2));
console.log(Math.ceil(2.1));
console.log(Math.round(2.5));
let city = "abuja";
city.toUpperCase();
console.log(city);
```

**Exercise 3 (Problem-solving).** Given `const fullName = "  ada LOVELACE  ";`
Print `Ada Lovelace` (cleaned, with proper capitals) and the initials `A.L.`
Plan in English first. Hints: clean it up first; find the space with `indexOf(" ")`; `slice` gives you pieces; `[0]` gives a first letter.

---

## E. Project: Bill Splitter & Tip Calculator

**What you're building:** split a restaurant bill between friends, add a tip, and print a neat receipt.

**Concepts practised:** template literals, `Number()`, `toFixed`, `Math.ceil`, `toUpperCase`, `padEnd`.

**Folder structure:**
```
daily-projects/day-03/
├── README.md
├── exercises/ex1.js, ex2.js, ex3.js
└── bill-splitter.js
```

**Requirements (checklist ✅):**
1. Inputs: `restaurantName` (lowercase, e.g. `"mama put kitchen"`), `billText = "12500"` (a **string**), `tipPercent = 10`, `numberOfPeople = 4`.
2. Convert the bill to a number before any maths.
3. Calculate the tip, the total, and the amount per person.
4. Print the restaurant name in **UPPERCASE** at the top of the receipt.
5. All money shown with **2 decimal places** and a currency sign, e.g. `₦3437.50`.
6. Also print the per-person amount **rounded up** to a whole naira (so the group never pays too little), e.g. `₦3438`.
7. Use **template literals** for every output line (no `+` for joining).
8. Labels aligned using `padEnd` (e.g. `"Subtotal:".padEnd(16)`).
9. Section comments: Input, Calculations, Output.

**Example receipt:**
```
======== MAMA PUT KITCHEN ========
Subtotal:       ₦12500.00
Tip (10%):      ₦1250.00
Total:          ₦13750.00
People:         4
Each pays:      ₦3437.50
Each (rounded): ₦3438
==================================
```

**Milestones:**
1. Inputs + conversion.
2. Calculations (tip = bill × tipPercent ÷ 100).
3. Receipt using template literals.
4. Alignment with `padEnd`, then the rounded-up line.
5. Change `numberOfPeople` to `3` and check the numbers still make sense (₦4583.33 / ₦4584).
6. Re-read requirements 1–9 and tick each one.

**Completion criteria:** runs without errors, all 9 requirements met, correct with both 4 and 3 people.

**Bonus:**
- Print a line showing how much extra the group pays in total because of the rounding up.
- Make the top border fit the restaurant name exactly, whatever its length (hint: `.length`, and `"=".repeat(n)`).

---

## F. Code review · G. Assessment · H. Progress report
_After the project._
