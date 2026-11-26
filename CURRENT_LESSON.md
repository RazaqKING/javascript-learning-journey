# 📘 Current Lesson: Day 4, Conditionals

**Status:** In progress · **Started:** 2026-11-26 · Day 3 completed 2026-11-26 (79/100)

## Carry-over from Day 3
- Store or print a method's result; strings never change.
- No hard-coded positions: use `indexOf` / `lastIndexOf`.
- Output must match the target exactly (spelling, spaces).
- Send **all** answers in one message. Explain **why**.

## A. Objectives: by the end of today you can:
1. Compare values with `===`, `!==`, `>`, `<`, `>=`, `<=`, and explain why we avoid `==`.
2. Combine conditions with `&&` (and), `||` (or), `!` (not).
3. Explain truthy and falsy values.
4. Make decisions with `if / else if / else`, the ternary `? :`, and `switch`.

---

## B. Concepts

### 1. Comparisons give booleans
Every comparison answers a yes/no question, so the result is `true` or `false`:
```js
10 > 3     // true
10 <= 3    // false
5 === 5    // true   ← "is exactly equal": same value AND same type
5 !== 8    // true   ← "is not equal"
```
⚠️ **`===` vs `==`**
```js
5 === "5"   // false ← number vs string: different types
5 == "5"    // true  ← == converts types first (coercion again!), which hides bugs
```
**Rule: always use `===` and `!==`.** And remember: `=` stores, `===` compares.

### 2. Logical operators: combining questions
| Operator | Meaning | Real life | Example | Result |
|---|---|---|---|---|
| `&&` | AND: both must be true | "You need a ticket **and** ID to board" | `10 > 3 && 2 > 5` | `false` |
| `\|\|` | OR: at least one true | "Pay with cash **or** card" | `10 > 3 \|\| 2 > 5` | `true` |
| `!` | NOT: flips it | "**not** raining" | `!true` | `false` |

### 3. Truthy and falsy
In a condition, JavaScript treats every value as "true-ish" or "false-ish".
**Only these are falsy:** `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.
**Everything else is truthy**, even `"0"`, `"false"` and `" "` (a space).
```js
Boolean("")   // false
Boolean("0")  // true  ← it's a non-empty string!
```
Useful for checks like "did the user type anything?": `if (name) { ... }`

### 4. `if / else if / else`: choosing a path
```js
const temperature = 31;

if (temperature >= 30) {
  console.log("Hot: drink water");        // runs if the first condition is true
} else if (temperature >= 20) {
  console.log("Warm: nice day");          // checked only if the first was false
} else {
  console.log("Cool: take a jacket");     // runs if nothing above was true
}
```
Like a road junction: JavaScript checks the signs **top to bottom** and takes the **first** road that matches, then skips the rest. That's why order matters: put the most specific/highest check first.

The code inside `{ }` is called a **block**. Indent it 2 spaces so you can see what belongs to what.

### 5. Ternary `? :`: a one-line if/else for choosing a value
```js
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
//             condition ? if true  : if false
```
Use it for **picking between two values**. Use `if` for anything bigger.

### 6. `switch`: matching one value against many options
```js
const operator = "/";

switch (operator) {
  case "+":
    console.log("Add");
    break;              // ← stop here and leave the switch
  case "/":
    console.log("Divide");
    break;
  default:
    console.log("Unknown operator");  // when no case matches (like else)
}
```
⚠️ Forget `break` and JavaScript **falls through** into the next case and runs it too.
Use `switch` when comparing **one value** to a list of exact options (like a menu). Use `if` for ranges (`score >= 70`).

---

## C. Live demo
```js
const balance = 5000;
const price = 3500;
const hasCard = true;

if (price <= balance && hasCard) {
  console.log("Payment approved ✅");
} else if (!hasCard) {
  console.log("No card on file");
} else {
  console.log(`Insufficient funds: you need ₦${price - balance} more`);
}
const message = balance > 10000 ? "Gold customer" : "Regular customer";
console.log(message);
```

---

## D. Exercises

**Exercise 1 (Easy).** `const age = 20;`
(a) With `if / else`, print `"Adult"` if age is 18 or more, otherwise `"Minor"`.
(b) Do the same in **one line** using the ternary operator.

**Exercise 2 (Intermediate). Predict, then check:**
```js
console.log(5 === "5");
console.log(5 == "5");
console.log(10 > 3 && 2 > 5);
console.log(10 > 3 || 2 > 5);
console.log(!true);
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(0));
```

**Exercise 3 (Problem-solving). Leap year checker.**
A year is a leap year if it is divisible by 4, **except** years divisible by 100 are not, **unless** they are also divisible by 400.
Write a program that prints `"2024 is a leap year"` or `"2026 is not a leap year"`. Test with **2024, 1900, 2000, 2026** (expected: yes, no, yes, no).
Plan in English first. Hint: "divisible by 4" means `year % 4 === 0`.

---

## E. Project: Simple Calculator + Grade Checker

**What you're building:** one program with two parts: a calculator that handles 5 operators safely, and a grade checker using the Nigerian university grading scale.

**Concepts practised:** `switch`, `if / else if / else`, comparisons, `&&` / `||`, ternary, `Number()`, template literals.

**Folder structure:**
```
daily-projects/day-04/
├── README.md
├── exercises/ex1.js, ex2.js, ex3.js
└── calculator-grades.js
```

### Part 1: Calculator
1. Inputs as **strings**: `num1Text = "12"`, `num2Text = "4"`, `operator = "/"`. Convert the numbers.
2. Use a **`switch`** on the operator for `+`, `-`, `*`, `/`, `%`.
3. **Divide-by-zero check:** for `/` (and `%`), if the second number is 0, print `Error: cannot divide by zero` instead.
4. `default` case: `Error: unknown operator "x"`.
5. Output format: `12 / 4 = 3`

### Part 2: Grade checker
6. Input `score = 67`.
7. **Validate first:** if the score is below 0 or above 100, print `Invalid score` (use `||`).
8. Otherwise use `if / else if / else`:
   | Score | Grade | Comment |
   |---|---|---|
   | 70–100 | A | Excellent |
   | 60–69 | B | Very good |
   | 50–59 | C | Good |
   | 45–49 | D | Fair |
   | 40–44 | E | Pass |
   | 0–39 | F | Fail |
9. Print `Score: 67 → Grade B (Very good)`.
10. Use a **ternary** to print `Result: PASSED` (grade isn't F) or `Result: FAILED`.
11. Section comments for both parts.

**Test cases (change the inputs and run each):**
| Calculator | Expected | Grade checker | Expected |
|---|---|---|---|
| `12 / 4` | `12 / 4 = 3` | `67` | B, PASSED |
| `7 % 0` | divide-by-zero error | `70` | A |
| `5 x 2` | unknown operator error | `39` | F, FAILED |
| `9 * 3` | `9 * 3 = 27` | `105` | Invalid score |

**Milestones:** 1) Calculator switch → 2) zero & unknown checks → 3) grade validation → 4) grade ladder → 5) ternary pass/fail → 6) run all 8 test cases → 7) re-read the checklist.

**Completion criteria:** all 11 requirements met; all 8 test cases give the expected output.

**Bonus:**
- Support `**` (power) in the calculator.
- Print `So close!` if the score is within 2 points of the next grade up (e.g. 68 or 69).

---

## F. Code review · G. Assessment · H. Progress report
_After the project._
