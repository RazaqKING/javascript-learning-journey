# 🧠 Mistakes & Lessons

Recurring mistakes get logged here with the fix and the rule behind it. We revisit this list at the start of each week.

| Date | Day | Mistake | Why it happened | Correct approach | Times seen |
|---|---|---|---|---|---|
| 2026-11-18 | 1 | Ended a statement with `.` instead of `;` → `SyntaxError: Unexpected end of input` | Treated code like an English sentence | Statements end with `;` | 1 |
| 2026-11-18 | 1 | Wrote `"cupB"` (a string) when meaning the variable `cupB` | Unclear difference between text and a variable name | Quotes = literal text; no quotes = "look inside the box" | 1 |
| 2026-11-18 | 1 | Swap attempt overwrote a value before saving it | Didn't trace each step | Save a value in a `temp` variable before overwriting it | 1 |
| 2026-11-18 | 1 | Skipped parts of requirements/questions (Ex3 "Before" print; quiz Q1 & Q5 half-answered) | Didn't re-read requirements before submitting | Re-read the requirements as a checklist before saying "done" | 3 |

## Rules I've learned
- Statements end with `;`, not `.`
- `"name"` is text; `name` is a variable.
- `=` means "work out the right side, then store it on the left", not "equals".
- `const` can't be reassigned (`TypeError: Assignment to constant variable.`). Use `let` when a value must change.
- Plan in plain English (an algorithm) before writing code.
- Re-read the requirements before submitting.
