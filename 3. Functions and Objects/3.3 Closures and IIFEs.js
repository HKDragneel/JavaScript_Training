/* ---------Uncomment each version and check the behaviour-------- */

/**
 * Version 1
 * 
 * Here the counter numFriends which is declared in global scope
 * gets modified by another piece of code other than the
 * addFriend() function call and as a result counter value is lost
 */

/*
var numFriends = 0;

function addFriend() {
    numFriends += 1;
    return numFriends;
}

var friend1 = addFriend();
var friend2 = addFriend();
var friend3 = addFriend();

console.log(friend1, friend2, friend3);
console.log(numFriends);

numFriends = 'numFriends';
console.log(numFriends);
*/

/**
 * Version 2
 * 
 * Here the counter numFriends is declared in a functional scope hence
 * each time function is invoked we get a new scope and the counter cease
 * to exist at the end of each execution rendering counter useless.
 */

 /*
function addFriend() {
    var numFriends = 0;
    numFriends += 1;
    return numFriends;
}

var friend1 = addFriend();
var friend2 = addFriend();
var friend3 = addFriend();

console.log(friend1, friend2, friend3);
*/

/**
 * Version 3
 * 
 * Closures
 * 
 * When an outer function creates an inner function a closure is formed
 * 
 * The closure is the inner function with a snapshot of scope it was able
 * to access when it was declared
 * 
 * So when the inner function is returned by outer function both definition
 * as well as the variables declared in that scope are returned along with 
 * the values they were set to
 * 
 * This scope continues to live on and can be modified by the inner function
 * 
 * This way counter numFriend can be protected from outside access and it can
 * exhibit the intended behaviour
 */

function friendCounter() {
    
    var numFriends = 0;
    
    function addFriend() {
        numFriends += 1;
        return numFriends;
    }
    
    return addFriend;
}

var addFriend = friendCounter();
var friend1 = addFriend();
var friend2 = addFriend();
var friend3 = addFriend();

console.log(friend1, friend2, friend3);

/**
 * Version 4
 * 
 * IIFEs - Immediately Invoked Function Expressions
 * 
 * IIFEs are anonymous functions that are wrapped in paranthesis
 * and are immediately invoked as soon as it is declared
 * 
 * IIFEs can be used when the functionality of outer function is
 * only to create a closure and is going to be invoked only once
 * in the runtime
 */

var addFriend = (function() {
    
    var numFriends = 0;
    
    function addFriend() {
        numFriends += 1;
        return numFriends;
    }
    
    return addFriend;
})();

var friend1 = addFriend();
var friend2 = addFriend();
var friend3 = addFriend();

console.log(friend1, friend2, friend3);

var name = (function() {
    
        var firstName = 'John';
        var lastName = 'Doe';
    
        function getName() {
            return firstName + ' ' + lastName;
        }
    
        function setName(name) {
            firstName = name.split(' ')[0];
            lastName = name.split(' ')[1];
        }
    
        return {
            getName: getName,
            setName: setName
        }
})();
console.log(name.getName());
name.setName('Rocket Man');
console.log(name.getName());