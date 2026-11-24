// First thing is to clean the name by trimming whitespace and converting to lowercase. Then, we find the index of the space to separate the first and last names. After that, we capitalize the first letter of each name and create initials. Finally, we log the capitalized full name and initials to the console.//

const fullName = "  ada LOVELACE  ";
const cleanedName = fullName.trim(). toLowerCase();
const spaceIndex = cleanedName.indexOf(" ");
const firstName = cleanedName.slice(0, spaceIndex);
const lastName = cleanedName.slice(spaceIndex + 1);

const capitalizedFirstName = firstName [0].toUpperCase() + firstName.slice(1);
const capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1);
const initials = firstName[0].toUpperCase() + " . " + lastName[0].toUpperCase() + " . ";

console.log (capitalizedFirstName + " " + capitalizedLastName);
console.log(initials);
