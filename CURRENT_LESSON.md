# 📘 Current Lesson — Day 1: Your First JavaScript Program

**Status:** In progress · **Started:** 2026-11-18

## ⏸️ Where we stopped (2026-11-18)
- ✅ Exercise 1, 2, 3 done (`daily-projects/day-01/exercises/`)
- 🟡 Project `intro-card.js` works; one fix left: print the `Days done: 0` line **inside** the card (before the bottom border), and put the `// --- Update progress ---` comment above `daysCompleted = daysCompleted + 1;`. Remove the 2 stray `// --- Print the card ---` comments in "My details".
- ⬜ Day 1 assessment (5 quiz questions + mini coding task, ~10 min)
- Estimated time to finish Day 1: ~15 minutes

## A. Objectives — by the end of today you can:
1. Explain in your own words what a program is and where JavaScript runs.
2. Create a `.js` file and run it with `node`.
3. Print output with `console.log()`.
4. Write comments, and know what a statement is.
5. Create variables with `let` and `const`, and explain when to use each.
6. Name variables properly (camelCase, descriptive names).
7. Read a basic error message (`ReferenceError`, `TypeError: Assignment to constant variable`).

---

## B. Concepts

### 1. What is programming?
A program is a **list of instructions** for a computer, like a recipe. The computer follows them **exactly, top to bottom, one at a time**. It never guesses what you "meant", so if you write the instruction wrong it does the wrong thing (or stops with an error).

### 2. Where does JavaScript run?
- **In the browser** (Chrome, Firefox…): makes web pages interactive. This is Week 3.
- **In Node.js**: runs JavaScript outside the browser, in your terminal. We start here because it's the simplest place: no HTML needed.

### 3. Statements and `console.log`
A **statement** is one instruction. We end each with a semicolon `;` (like a full stop in a sentence).

```js
console.log("Hello, world!");
```
- `console` = a built-in tool for printing messages.
- `.log` = the "print" action on that tool.
- `( ... )` = what we give it to print.
- `"Hello, world!"` = text. Text in code is called a **string** and goes inside quotes.

### 4. Comments
Notes for humans. JavaScript ignores them.
```js
// This is a one-line comment
/* This is a
   multi-line comment */
```

### 5. Variables — labelled boxes
A variable is a **labelled box that holds a value**, so you can reuse it by name.

```js
const name = "Razaq";   // const = the box is sealed: this value will NOT be replaced
let score = 0;          // let   = the box can be refilled later
score = 10;             // refill it (no `let` the second time!)
console.log(name, score); // Razaq 10
```
**Rule of thumb:** use `const` by default. Use `let` only when you know the value will change. Avoid `var` (old style with confusing behaviour; we'll see why on Day 10).

### 6. Naming rules
- Allowed: letters, digits, `_`, `$`. Cannot start with a digit. No spaces. Case-sensitive (`age` ≠ `Age`).
- Use **camelCase**: `firstName`, `favouriteFood`, `daysCompleted`.
- Be descriptive: `x` ❌ → `userAge` ✅

### 7. Joining text with `+`
```js
const city = "Lagos";
console.log("I live in " + city + "."); // I live in Lagos.
```
Note the spaces inside the quotes — the computer adds nothing you didn't write.

---

## C. Live demo — explained line by line

```js
// day-01/demo.js
const learnerName = "Razaq";        // 1. sealed box holding text
let lessonsDone = 0;                // 2. changeable box holding a number
console.log("Welcome, " + learnerName + "!");     // 3. Welcome, Razaq!
lessonsDone = lessonsDone + 1;      // 4. read current value (0), add 1, store back (1)
console.log("Lessons done: " + lessonsDone);      // 5. Lessons done: 1
```
Line 4 is the most important idea today: the right side is calculated **first**, then the result is put into the box on the left. `=` means "store", **not** "equals" like in maths.

Run it: `node demo.js`

---

## D. Exercises (attempt first → ask for a hint → solution last)

**Exercise 1 — Easy.** Create `exercises/ex1.js`. Print three lines: your name, your country, and why you're learning JavaScript.

**Exercise 2 — Intermediate.** Predict the output **before** running, then check:
```js
let apples = 5;
const price = 2;
apples = apples + 3;
console.log("Apples: " + apples);
console.log("Cost: " + apples * price);
apples = apples - 1;
console.log("Apples left: " + apples);
```
Then explain in one sentence why line 3 works but `price = 3;` would cause an error.

**Exercise 3 — Problem-solving.** You have:
```js
let cupA = "coffee";
let cupB = "tea";
```
Swap the contents so `cupA` holds `"tea"` and `cupB` holds `"coffee"`, **without** typing the words "coffee" or "tea" again. Print both before and after. (Think about real cups: what would you need?)

---

## E. Project — Personal Intro Card

**What you're building:** a program that prints a neat profile card about you in the terminal.

**Concepts practised:** `console.log`, comments, `const` vs `let`, reassignment, string joining with `+`, naming.

**Folder structure:**
```
daily-projects/day-01/
├── README.md          (I'll help you write it)
├── exercises/
│   ├── ex1.js
│   ├── ex2.js
│   └── ex3.js
└── intro-card.js      (the project)
```

**Requirements:**
1. At least 6 variables: name, country/city, current role (student, job…), learning goal, a favourite thing, and `daysCompleted`.
2. Choose `const` or `let` correctly for each — be ready to justify every choice.
3. Print a card with a border, a title, and one labelled line per fact, e.g.:
   ```
   ==============================
        PERSONAL INTRO CARD
   ==============================
   Name:    ...
   Country: ...
   ...
   Days of JS completed: 0
   ==============================
   ```
4. After printing the card, increase `daysCompleted` by 1 and print: `Update: I have completed 1 day(s) of JavaScript!`
5. Use at least 3 comments explaining sections of your code.

**Milestones:**
1. Create the file and print the top border + title. Run it.
2. Create your variables (comment above the group).
3. Print each labelled line using `+`.
4. Print the bottom border.
5. Update `daysCompleted` and print the update line.
6. Run it, check the alignment, fix anything that looks off.

**Completion criteria:** runs with `node intro-card.js` with no errors; output matches the requirements; every `const`/`let` choice is justified; names are camelCase and descriptive.

**Bonus:**
- Add a `learningStreak` variable and a motivational line that uses it.
- Deliberately trigger the error `Assignment to constant variable`, copy the exact message, then fix it. Write in a comment what the message meant.

---

## F. Code review — after you share your code
## G. Assessment — quiz (5 Qs) + mini coding task, given after the project
## H. Progress report — saved to `DAILY_PROGRESS.md`
