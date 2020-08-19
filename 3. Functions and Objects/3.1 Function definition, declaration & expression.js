//Function without parameters
function sayHello() {
    console.log("Hello World");
}

//Calling function
sayHello();

//Function with parameters
function greetPerson(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

//Calling function and passing arguments
greetPerson('Clark','Kent');

//Function with return statement
function calculateProduct(num1, num2) {

    if(isNaN(num1) || isNaN(num2)) {
        console.log('Invalid parameters');
        return;                                         //by default returns undefined
    }

    return num1*num2;
}

console.log(calculateProduct(4, 6));
console.log(calculateProduct('4', '6'));
console.log(calculateProduct('five', 'six'));

/**
 * Function Declaration
 */
function sayHi(name) {
    return `Hi, ${name}`;
}

console.log(sayHi('HKDragneel'));

/**
 * Function expression  -   declaring a variable and assigning a function definition to the variable
 * Anonymous function   -   defining a function without a name
 */
var sayBye = function(name) {
    return `Bye, ${name}`;
}

console.log(sayBye('HKDragneel'));

/**
 * Higher order functions --functions which take a function expression as an argument
 */
function callMeBackAfterSomeTime(time, done) {
    setTimeout(function() {
        done()
    }, time
    )
}

//Invoking higher order function with a callback function as an argument
callMeBackAfterSomeTime(3000, function() {
    console.log('Thanks for calling me back');
})

/**
 * Understanding function invokation with arguments
 * 
 * arguments.length is the property of a function which returns
 * number of arguments passed into the function call
 */
function pricePlus(price, pcMarkup) {
    console.log(`No of arguments passed to the function: ${arguments.length}`);
    console.log(`Price ${price}, PcMarkup ${pcMarkup}`);
    console.log(price*(1+pcMarkup/100));
}

pricePlus(1000, 20);

//Invoking a function without all required argumentswon't throw error but may produce unexpected results
pricePlus(1000);

//Passing extra arguments won't affect the functionality but all arguments will be passed to the function call
pricePlus(1000, 20, 34, 26);

//spread opertor parameter is used if number of arguments being passed to function call is unknown
function addNum(...args) {
    var sum = 0
    for(i of args) {
        sum += i;
    }
    return sum;
}

console.log(addNum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110));