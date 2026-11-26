# Day 3: Bill Splitter & Tip Calculator

A Node.js program that splits a restaurant bill between friends, adds a tip, and prints a neatly aligned receipt in naira.

## Run it
```bash
node bill-splitter.js
```

## Output
```
======== MAMA PUT KITCHEN ========
Subtotal:       ₦12500.00
Tip (10%):      ₦1250.00
Total:          ₦13750.00
People:         4
Each pays:      ₦3437.50
Each (rounded): ₦3438
====================================
```
Change `tipPercent` or `numberOfPeople` at the top and everything updates, including the tip label.

## What I practised
- Template literals for every output line
- Converting text input with `Number()` before maths
- `toFixed(2)` for money and `Math.ceil` so the group never pays too little
- `toUpperCase()` and `padEnd()` to format and align a receipt

## Exercises
| File | Task |
|---|---|
| `exercises/ex1.js` | Template literals, `toUpperCase`, `length` |
| `exercises/ex2.js` | Predict string/number method results (strings never change!) |
| `exercises/ex3.js` | Clean `"  ada LOVELACE  "` into `Ada Lovelace` and initials |
