let cupA = "Coffee";
let cupB = "Tea";

// Introduce a temporary variable
let temp;

// Step 1: Pour the content of cupA into temp
temp = cupA;

// Step 2: Pour the content of cupB into cupA
cupA = cupB;

// Step 3: Pour the content of temp into cupB
cupB = temp;

console.log("Cup A:", cupA);
console.log("Cup B:", cupB);
