'use strict'

/**
 * Hoisting -   It is a kind of compilation phase in which all variable and functions 
 *              declarations are moved to the top of the current scope ahead of execution.
*/

//Variable Hoisting
console.log(myName);
var myName = 'HKDragneel';
console.log(myName);

/**
 * What hoisted phase looks like behind the scenes
 * before any execution
 */

/**
  * var myName;
  * console.log(myName);
  * myName = 'HKDragneel';
  * console.log(myName);
  */


  //Function Hositing
sayHi('HKDragneel');
function sayHi(name) {
    console.log(`Hi ${name}`);
}
sayHi('Juvia');

/**
 * What hoisted phase looks like behind the scenes
 * before any execution
 * 
 * In function hositing function definition is carried
 * along with function declaration to the top of the scope
 */

/**
 * function sayHi(name) {
 *     console.log(`Hi ${name}`);
 * }
 * sayHi('HKDragneel');
 * sayHi('Juvia');
 */


// sayBye('HKDragneel');                        //Uncomment this line and check the console output

var sayBye = function(name) {
    console.log(`Bye ${name}`);
}
sayBye('Juvia');

/**
 * Hoisting function expression works in similar way as Variable Hosting,
 * since variable is essentially being declared here
 */