# 🗺️ JavaScript Learning Plan: Complete Beginner → Intermediate

| Setting | Value |
|---|---|
| Duration | **30 days** (configurable; days can stretch, they are never skipped) |
| Daily study time | **2 hours** (~35 min theory, ~85 min hands-on) |
| Start level | Complete beginner |
| Target level | Practical intermediate JavaScript developer |
| Tools | VS Code / Claude Code, Node.js 22, a browser + DevTools, Git, GitHub |
| Pass mark | **75/100** on each daily assessment |

## How every day works

| Block | Time | What happens |
|---|---|---|
| A. Objectives | 2 min | What you must understand by the end of the day |
| B–C. Concepts + live demos | 30 min | Simple explanations, real-life analogies, small examples explained line by line |
| D. Exercises | 30 min | Easy → Intermediate → Problem-solving. You try first, hints before solutions |
| E. Project | 45 min | Build something real. You write the code; I guide and review |
| F. Code review | 5 min | Correctness, readability, naming, logic, bugs, improvements |
| G. Assessment | 8 min | Quiz + small coding task, scored /100 |
| H. Progress report | — | Saved to `DAILY_PROGRESS.md` |

**Scoring (100):** Concepts 25 · Exercises 20 · Project 30 · Code quality 15 · Explaining your solution 10.
Below 75 → revision lesson, extra exercises, improve the project, reassess. No inflated scores.

**Guidance fades over time:** Week 1 = step-by-step milestones. Week 2 = milestones + hints. Week 3 = requirements + plan review. Week 4 = requirements only; you plan, build, test, document, publish.

---

## Week 1 — Foundations (runs in the terminal with Node.js)

| Day | Topics | Project |
|---|---|---|
| 1 | What programming is, how JS runs (browser vs Node), running a file, `console.log`, statements, comments, `let` / `const` (and why we avoid `var`), naming rules | **Personal Intro Card** — prints a formatted profile card |
| 2 | Data types (string, number, boolean, null, undefined), `typeof`, type conversion & coercion, arithmetic/assignment operators, expressions | **Age & Life Stats Calculator** |
| 3 | Strings in depth, template literals, string methods, numbers & `Math`, rounding & `toFixed` | **Bill Splitter & Tip Calculator** |
| 4 | Comparison & logical operators, truthy/falsy, `if / else if / else`, ternary, `switch` | **Simple Calculator + Grade Checker** |
| 5 | Loops: `for`, `while`, `do...while`, `break` / `continue`; reading user input in Node | **Number Guessing Game** |
| 6 | Functions: declarations, parameters vs arguments, `return`, default params, arrow functions, pure functions | **Temperature & Unit Converter** |
| 7 | Problem solving: understanding requirements, pseudocode, breaking problems down, reading error messages. Week 1 review | **Terminal Quiz Game** + Week 1 checkpoint |

## Week 2 — Working with data and functions

| Day | Topics | Project |
|---|---|---|
| 8 | Arrays: indexes, `length`, `push/pop/shift/unshift`, `slice/splice`, `indexOf/includes`, `join`, looping over arrays | **Shopping List Manager** |
| 9 | Objects: properties, dot vs bracket notation, methods, nested objects, arrays of objects, `Object.keys/values/entries` | **Contact Book** |
| 10 | Scope (global, function, block), execution context, call stack, hoisting, `var` vs `let` vs `const` revisited | **Bank Account Simulator** + Debug-the-bug challenge |
| 11 | Destructuring (arrays & objects), spread `...`, rest parameters, copying vs referencing | **Student Records Formatter** |
| 12 | Callbacks, `forEach`, `map`, `filter`, `find`, `some`, `every` | **Movie Collection Explorer** |
| 13 | `reduce`, method chaining, higher-order functions, `sort` | **Expense Tracker (reports & categories)** |
| 14 | Closures, the `this` keyword, `call/apply/bind` basics. Week 2 review | **Password Generator** + Week 2 checkpoint |

## Week 3 — JavaScript in the browser

| Day | Topics | Project |
|---|---|---|
| 15 | Error handling (`try/catch/finally`, `throw`, custom errors), JSON (`stringify/parse`), Dates & number formatting | **Birthday Countdown & Safe Data Loader** |
| 16 | Just-enough HTML/CSS, the DOM tree, selecting elements, changing text/styles/classes, creating elements, DevTools & debugging | **Dynamic Profile Page** |
| 17 | Events, event listeners, the event object, event delegation | **Browser Calculator** |
| 18 | Forms, input values, form validation, user feedback | **Sign-up Form with Live Validation** |
| 19 | `localStorage` / `sessionStorage`, saving & loading JSON, app state → render pattern | **To-Do List (persistent)** |
| 20 | Timers: `setTimeout`, `setInterval`, clearing timers, working with time | **Digital Clock & Pomodoro Timer** |
| 21 | Week 3 review: plan & build with less guidance | **Interactive Quiz App** (high scores saved) ⭐ own repo |

## Week 4 — Async, modern JS, tooling, capstone

| Day | Topics | Project |
|---|---|---|
| 22 | Synchronous vs asynchronous, the event loop, callbacks → Promises, `then/catch`, `Promise.all` | **Pizza Order Tracker (simulated async)** |
| 23 | `async/await`, Fetch API, HTTP basics, status codes, loading & error states | **Random Quote / Joke App** |
| 24 | External APIs, query parameters, API keys & keeping secrets out of Git | **Weather App** (Open-Meteo, no key needed) ⭐ own repo |
| 25 | ES modules (`import/export`), splitting an app into files, folder structure | **Notes App (modular)** |
| 26 | Classes, constructors, methods, getters, inheritance, prototypes under the hood | **Shopping Cart (OOP)** ⭐ own repo |
| 27 | npm & `package.json`, scripts, introduction to Node.js (`fs`, `process.argv`), ESLint + Prettier | **CLI Notes Tool with Node.js** |
| 28 | Testing (`node:test`), debugging strategies, clean & reusable code, refactoring, basic app architecture. Capstone planning | **GitHub User Search App** (with tests) + capstone plan |
| 29 | Capstone build day 1 — you build, I review checkpoints | **Capstone** |
| 30 | Capstone build day 2, final code review, README, publish, final assessment | **Capstone** ⭐ own repo |

> If a day needs more time, we take it. Fundamentals are never skipped to stay on schedule.

## Capstone (Days 28–30)

You'll choose one (or propose your own) on Day 28, then write the plan yourself:

1. **MovieVault** — search movies via an API, save a watchlist, rate & filter, offline-friendly.
2. **Recipe Finder & Meal Planner** — search recipes (TheMealDB), weekly planner, shopping list generated with `reduce`.
3. **Country Explorer & Travel Wishlist** — REST Countries + weather, compare countries, persistent wishlist.

Required in every capstone: variables & types, functions, arrays & objects, array methods, DOM, events, ES modules, async/await + fetch, error handling, browser storage, clean structure, README, published on GitHub.

## What gets published where

- **`javascript-learning-journey` repo** — every day's project, exercises, assessments, and progress files.
- **Separate portfolio repos** — only polished, recruiter-worthy apps (⭐ above + capstone), each with a README, `.gitignore`, and a secrets check before pushing.
