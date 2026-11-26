# 🧠 Mistakes & Lessons

Recurring mistakes get logged here with the fix and the rule behind it. We revisit this list at the start of each week.

| Date | Day | Mistake | Why it happened | Correct approach | Times seen |
|---|---|---|---|---|---|
| 2026-11-18 | 1 | Ended a statement with `.` instead of `;` → `SyntaxError: Unexpected end of input` | Treated code like an English sentence | Statements end with `;` | 1 |
| 2026-11-18 | 1 | Wrote `"cupB"` (a string) when meaning the variable `cupB` | Unclear difference between text and a variable name | Quotes = literal text; no quotes = "look inside the box" | 1 |
| 2026-11-19 | 2 | Used `let` for values never reassigned (Ex1) | Choosing by "could it change in life" not "does the code change it" | `const` by default; `let` only if a line reassigns it | 2 |
| 2026-11-18 | 1 | Swap attempt overwrote a value before saving it | Didn't trace each step | Save a value in a `temp` variable before overwriting it | 1 |
| 2026-11-18 | 1 | Skipped parts of requirements/questions (Ex3 "Before" print; quiz Q1 & Q5 half-answered) | Didn't re-read requirements before submitting | Re-read the requirements as a checklist before saying "done" | 7 (Day 2 Ex1; Day 3 Ex1(b), Ex2/3 & Q2-6 sent separately) |
| 2026-11-19 | 2 | Called `%` "percentage"; said `Math.floor` rounds *up* | Guessing from the symbol/name instead of the lesson | `%` = remainder (17 % 5 = 2); `Math.floor` always rounds **down** | 1 |
| 2026-11-19 | 2 | Didn't convert user input (`"25"`) before maths | Missed that input always arrives as a string | Always `Number()` user input before maths; `"25" + 1` → `"251"` | 1 |
| 2026-11-24 | 3 | Called a method / wrote a value without storing or printing it (`name.toUpperCase();`, bare template literal) | Expected the line to show or change something | Wrap in `console.log(...)` or store in a variable; strings never change | 3 |
| 2026-11-24 | 3 | `firstName(0)` instead of `firstName[0]` → `TypeError: ... is not a function` | Mixed up brackets | `( )` runs a function; `[ ]` gets a position | 1 |
| 2026-11-26 | 3 | Hard-coded position `slice(8)`; label typo "Lenght" | Solved for one example only; didn't compare output to target | Find positions with `indexOf`/`lastIndexOf`; compare output to the target character by character | 1 |

## Rules I've learned
- Statements end with `;`, not `.`
- `"name"` is text; `name` is a variable.
- `=` means "work out the right side, then store it on the left", not "equals".
- `const` can't be reassigned (`TypeError: Assignment to constant variable.`). Use `let` when a value must change.
- Plan in plain English (an algorithm) before writing code.
- Re-read the requirements before submitting.
- `%` is the remainder, not percentage.
- User input is always a string: convert with `Number()` before maths.
- `Math.floor` rounds down. `Number()` changes type, not value.
- `ReferenceError` usually means a misspelled name: check letter by letter.
- Strings never change: store or print the result of a method.
- `( )` runs a function; `[ ]` gets a character at a position.
- `padEnd(n)` fills UP TO n characters: n must be bigger than the longest label.
- Avoid hard-coded positions: find them with `indexOf` / `lastIndexOf`.
