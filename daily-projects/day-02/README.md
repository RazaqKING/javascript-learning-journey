# Day 2: Age & Life Stats Calculator

A Node.js program that takes a birth year **as text** (like real user input), converts it to a number, and prints stats about a life so far.

## Run it
```bash
node life-stats.js
```

## Output
```
Type before: string
Type after: number
Age: 20 years
Months: 240
Weeks: 1040
Days: 7300
Hours: 175200
Heartbeats: 840960000
Age in 10 years: 30
Even/odd check (0 = even, 1 = odd): 0
```

## What I practised
- Data types and `typeof`
- Converting text input with `Number()` before doing maths
- Arithmetic operators, including `%` (remainder)
- Updating a `let` variable with `+=`
- Organising code into Input → Calculations → Output

## Exercises
| File | Task |
|---|---|
| `exercises/ex1.js` | One variable of each of the 5 basic types, printed with `typeof` |
| `exercises/ex2.js` | Predict the results of type coercion (`"3" + 4 + 5` vs `3 + 4 + "5"`) |
| `exercises/ex3.js` | Convert minutes to "X hours and Y minutes" with `Math.floor` and `%` |
