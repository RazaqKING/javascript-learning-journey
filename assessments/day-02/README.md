# Day 2 Assessment

| Q | Answer (summary) | Mark |
|---|---|---|
| 1 | string, number, boolean, undefined, null, each with an example | ✅ 1 |
| 2 | 105 and 5 (no "why") | ½ |
| 3 | Used a number `25`, said "declare it first" (missed: convert the string with `Number()`; otherwise `"25" + 1` → `"251"`) | ❌ 0 |
| 4 | "3", "% means percentage" (correct: 2; % = remainder) | ❌ 0 |
| 5 | Math.floor(7.8) → 7 ✅ but said "rounds up" (it rounds **down**) | ½ |
| 6 | Code correct: 5500 left, 3 more items. Labels differ from the expected output | ✅ |

## Provisional score: 70/100 (pass mark 75)
| Area | Score |
|---|---|
| Concepts | 15/25 |
| Exercises | 17/20 |
| Project | 23/30 |
| Code quality | 10/15 |
| Explanation | 5/10 |

Revision needed: string → number conversion for user input; `%` = remainder; `Math.floor` rounds down; explaining "why".

## Reassessment
| Q | Answer | Mark |
|---|---|---|
| 1 | `+` can join strings and add numbers; `-` only does maths | ✅ |
| 2 | `const nextYearAge = Number(ageText) + 1;`; without it you'd get a string | ✅ (exact result: `"251"`) |
| 3 | "gives 5 with 3 left over" | ½ Remainder idea correct, but `23 % 4` **gives 3** (5 is how many times 4 fits) |
| 4 | `Math.floor(9.9)` → 9 (rounds down); `Number("9.9")` → 9.9 (converts string to number) | ✅ |

## Revised score: 79/100 ✅ PASS
| Area | Score |
|---|---|
| Concepts | 21/25 |
| Exercises | 17/20 |
| Project | 23/30 |
| Code quality | 10/15 |
| Explanation | 8/10 |
