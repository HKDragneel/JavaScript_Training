/**
 * Number Object
 */
let num1 = 0b101;               /*binary number*/
let num2 = 0o27;                /*octal number*/
let num3 = 0x1af;               /*hexadecimal number*/
let num4 = '10';
let num5 = 3;
let num6 = '10.456';
let num7 = 83e4;                /*exponential number*/

console.log(num1, num2, num3, num7);
console.log(num4*num5);
console.log(num4-num5);
console.log(num4/num5);
console.log(num4+num5);         //Here + operator acts as concatenate operator
console.log(Number.MAX_VALUE);
console.log(Number.parseFloat(num6));

/**
 * Math Object
 */
console.log(Math.pow(15, 3));

console.log(Math.sqrt(100));

console.log(Math.random());

console.log(Math.abs(-12));

console.log(Math.PI);
console.log(Math.cos(Math.PI));

console.log(Math.ceil(1.6));
console.log(Math.floor(1.6));

console.log(Math.max(1, 2, 3, 4, 5, 6));
console.log(Math.min(1, 2, 3, 4, 5, 6));

/**
 * Date Object
 */
let date = Date();
console.log(date, typeof(date));

date = new Date(0);                 //Time in ms passed through constructor
console.log(date, typeof(date));
date = new Date(100000000000);
console.log(date);

date = new Date(1997, 10, 15, 22, 45, 59, 99);
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());

date = new Date('January 10 2015 23:00:53');
console.log(date);