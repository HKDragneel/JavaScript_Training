//string can be defined using both single as well as double quotes
let string = 'This is a string' + " in double quotes";
console.log(string);

//strings can be defined using back ticks when concatenating variables are involved
//--> ${} <-- are called placeholders and are used to embed expressions into strings
let newString = `Using backticks we added --> \n\t"${string}"\n to current string without concatenation operator`;
console.log(newString);

let firstName = 'Andy';
let lastName = new String('Jones');

console.log(typeof(firstName), typeof(lastName));

//get the length of the string
console.log('Length of firstName: ' + firstName.length);


/**
 * Common string methods
 */

console.log(firstName.charAt(2));
console.log(firstName.charCodeAt(2));

//regular expression matching
console.log(firstName.match(/nd/));

//regular expression replacing
console.log(firstName.replace(/nd/, '-replaced-'));

console.log(firstName.slice(1, 3));
console.log(firstName.split(""));

//bold() is a string method used to apply <b> tag to the string
console.log(`The length of newString is ${newString.length.toString().bold()}`);

let statement = 'The earth revolves around the sun.';
console.log(statement.toUpperCase());
console.log(statement.toLowerCase());

let position = statement.indexOf('earth');
console.log('earth is located at position ' + position);

let earth = statement.substring(position, position+5).toUpperCase();
console.log(earth);

console.log(statement = statement.replace('earth',  `${earth}`));
console.log(statement = statement.replace('sun',  `${'SUN'}`));

//Padding in JS
let x = 'Guinea';
let y = 'Washington';

console.log(x.padStart(15));
console.log(y.padStart(15));

console.log(x.padEnd(15, '-'));
console.log(y.padEnd(15, '-'));

console.log(x.padStart(10, '^').padEnd(14, '^'));