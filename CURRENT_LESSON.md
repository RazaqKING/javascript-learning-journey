# 📘 Current Lesson: Day 2, Data Types & Operators

**Status:** In progress · **Started:** 2026-11-19 · Day 1 completed 2026-11-18 (79/100)

## Carry-over from Day 1
- ⚠️ Re-read every requirement as a checklist before saying "done" (seen 3×).
- Keep comments short and about *why*.

## A. Objectives: by the end of today you can:
1. Name JavaScript's 5 basic data types: string, number, boolean, `undefined`, `null`.
2. Check a value's type with `typeof`.
3. Convert between types with `Number()` and `String()`, and predict surprises like `"5" + 2`.
4. Use arithmetic operators `+ - * / % **` and shortcuts `+= -= ++`.
5. Explain the difference between an expression and a statement.

---

## B. Concepts

### 1. Data types: what kind of thing is in the box?
| Type | Example | Real-life idea |
|---|---|---|
| **string** | `"Lagos"`, `"25"` | Words written on paper (even `"25"` in quotes is *text*) |
| **number** | `25`, `3.5`, `-10` | A value you can do maths with |
| **boolean** | `true`, `false` | A light switch: on or off, yes or no |
| **undefined** | `let x;` | An empty box: created, nothing put in yet |
| **null** | `let winner = null;` | A box you *deliberately* marked "empty on purpose" |

### 2. `typeof`: ask JavaScript what type something is
```js
typeof "hi"       // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object"  ← a famous 30-year-old bug in JavaScript. Just remember it.
```

### 3. Operators
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `+` | add | `7 + 2` | `9` |
| `-` | subtract | `7 - 2` | `5` |
| `*` | multiply | `7 * 2` | `14` |
| `/` | divide | `7 / 2` | `3.5` |
| `%` | **remainder** after dividing | `7 % 2` | `1` (7 = 2×3, 1 left over) |
| `**` | power | `2 ** 3` | `8` (2×2×2) |

`%` is like sharing 7 sweets between 2 children: each gets 3, **1 is left over**.

**Shortcuts** for changing a `let` variable:
```js
let score = 10;
score += 5;   // same as: score = score + 5  → 15
score -= 3;   // same as: score = score - 3  → 12
score++;      // same as: score = score + 1  → 13
```

### 4. Type conversion: the big surprise ⚠️
`+` has **two jobs**: adding numbers *and* joining strings. If **either side is a string**, it joins.
```js
"5" + 2    // "52"  ← joins (string wins)
"5" - 2    // 3     ← `-` only does maths, so JS converts "5" to 5
"5" * "2"  // 10    ← same: `*` only does maths
```
This automatic conversion is called **coercion**. It causes real bugs, so convert **on purpose**:
```js
Number("42") + 8   // 50   ← string → number
String(42) + 8     // "428" ← number → string
Number("hello")    // NaN  ← "Not a Number": the conversion failed
typeof NaN         // "number" (another JavaScript oddity)
```
**Why this matters:** everything a user types (in a form, a prompt, the terminal) arrives as a **string**, even if they type `2000`. You must convert it before doing maths.

### 5. Expression vs statement
- An **expression** produces a value: `2 + 3`, `age * 12`, `"Hi " + name`.
- A **statement** is a complete instruction: `const months = age * 12;`
Think: an expression is a *phrase*, a statement is a full *sentence*.

---

## C. Live demo
```js
const birthYearText = "2000";            // arrives as text, like user input
console.log(typeof birthYearText);       // "string"
const birthYear = Number(birthYearText); // convert on purpose
console.log(typeof birthYear);           // "number"
const age = 2026 - birthYear;            // 26
console.log("Age: " + age);
console.log("Wrong: " + birthYearText + 1);   // "Wrong: 20001" ← string joining!
console.log("Right: " + (birthYear + 1));     // "Right: 2001"  ← brackets: maths first
```
The brackets in the last line force the maths to happen **before** the joining.

---

## D. Exercises

**Exercise 1 (Easy).** Create one variable of each of the 5 types (string, number, boolean, undefined, null). Print each value **and** its `typeof`, e.g. `console.log(city, typeof city);`

**Exercise 2 (Intermediate). Predict, then check.** Write down what each line prints *before* running:
```js
console.log("5" + 2);
console.log("5" - 2);
console.log(10 % 3);
console.log(2 ** 3);
console.log(Number("hello"));
console.log("3" + 4 + 5);
console.log(3 + 4 + "5");
```
(The last two are tricky. Remember: JavaScript works **left to right**.)

**Exercise 3 (Problem-solving).** A movie lasts `const totalMinutes = 135;`. Print `"2 hours and 15 minutes"` by **calculating** the hours and minutes (don't type 2 or 15). It must still work if you change `totalMinutes` to `200`.
Hint: which operator gives you "what's left over"?

---

## E. Project: Age & Life Stats Calculator

**What you're building:** a program that takes a birth year (as **text**, like real user input) and prints stats about your life so far.

**Concepts practised:** number vs string, `Number()`, `typeof`, arithmetic operators, `%`, `+=`, brackets for order of operations.

**Folder structure:**
```
daily-projects/day-02/
├── README.md
├── exercises/ex1.js, ex2.js, ex3.js
└── life-stats.js
```

**Requirements (use as a checklist ✅):**
1. `const birthYearText = "2000";` (use your own year, **in quotes**) and `const currentYear = 2026;`
2. Print the `typeof` of `birthYearText`, convert it with `Number()`, then print the `typeof` again.
3. Calculate and print, each with a label: age in **years**, **months**, **weeks**, **days** (use 365), and **hours**.
4. Calculate **heartbeats** lived, assuming 80 beats per minute.
5. Print the age in **10 years** using a `let` variable and `+=`.
6. Print the **remainder** of `age % 2` with a label explaining what it means (0 = even age, 1 = odd age).
7. Use section comments (`// --- Input ---`, `// --- Calculations ---`, `// --- Output ---`).

**Milestones:**
1. Input + `typeof` before and after conversion.
2. All calculations stored in `const` variables.
3. Labelled output.
4. The "in 10 years" line with `+=`, and the `%` line.
5. Re-read requirements 1–7 and tick each one.

**Completion criteria:** runs with no errors, all 7 requirements met, numbers are correct, and no maths is done on the raw string.

**Note:** age is approximate (it assumes your birthday has passed). We fix that on Day 4 with `if/else`.

**Bonus:**
- Print how many **seconds** you've lived.
- Show what goes wrong if you skip `Number()`: print `birthYearText + 10` and explain the result in a comment.

---

## F. Code review · G. Assessment · H. Progress report
_After the project._
