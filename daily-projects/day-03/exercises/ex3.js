const fullName = "  ada LOVELACE  ";
const cleanedName = fullName.trim(). toLowerCase();
const spaceIndex = cleanedName.indexOf(" ");
const firstName = cleanedName.slice(0, spaceIndex);
const lastName = cleanedName.slice(spaceIndex + 1);

const capitalizedFirstName = firstName = firstName(0).toUpperCase() + firstName.slice(1);
const capitalizedLastName = lastName(0).toUpperCase() + lastName.slice(1);
const finalName = capitalizedFirstName + " " + capitalizedLastName;
console.log(finalName);
