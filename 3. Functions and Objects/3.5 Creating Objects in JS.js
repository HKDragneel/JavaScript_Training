/*
    There are four ways of creating objects in JavaScript
    1. Object Literals
    2. Constructor Functions
    3. Class
    4. Object.create method
*/

/**
 * 1. Object literals or Custom Objects
 * 
 * Object methods can be defined as shown below
 * 
 * ->this<- keyword is used to reference the property of an object
 * inside object method definition 
 */
let vehicle = {
    make: 'Buick',
    color: 'Red',
    year: 2019,
    cost: 200000,
    aboutMe() {
        return `${this.make} ${this.color} ${this.year}`;
    },
    costPlusTax: function() {
        return this.cost + this.cost*0.1;
    }
}

console.log(vehicle.aboutMe() + '\n' + vehicle.costPlusTax());

/**
 * 2. Constructor Function
 *
 * Used to create multiple objects of same type i.e.,
 * it is used to declare a class
 */
function Vehicle (make, color, year, cost) {
    this.make = make;
    this.color = color;
    this.year = year;
    this.cost = cost;
    this.aboutMe = () => {
        return `${this.make} ${this.color} ${this.year}`;
    }
    this.costPlusTax = () => (this.cost + this.cost*0.1);
}

let myRide = new Vehicle('Ford', 'White', 2009, 200000);
for (i in myRide) {
    if(typeof(myRide[i]) == 'function') {
        console.log(myRide[i]());
    } else {
        console.log(myRide[i]);
    }
}

/**
 * 3. Class keyword
 * 
 * Used to create object templates instead of using constructor functions
 * Declaring class isolates class methods from properties
 */
class VehicleClass {
    
    constructor(make, color, year, cost) {
        this.make = make;
        this.color = color;
        this.year = year;
        this.cost = cost;
    }

    aboutMe() {
        return `${this.make} ${this.color} ${this.year}`;
    };

    costPlusTax() {
        return this.cost + this.cost * 0.1;
    }
    
}

let myNewRide = new VehicleClass('Toyata', 'Black', 2019, 400000);
for (i in myNewRide) {
    console.log(myNewRide[i]);
}
console.log(myNewRide.aboutMe() + '\n' + myNewRide.costPlusTax());

/**
 * 4. Object.create method
 */
let advancedVehicle = Object.create(vehicle, {
    type: {
        value: 'Electric',
        writable: true,
        configurable: false,
        enumerable: true
    },
    aboutMe: {
        value: function() {
            return `${this.make} ${this.color} ${this.year} ${this.type}`;
        },
        writable: true,
        configurable: false,
        enumerable: false
    }
});
console.log(advancedVehicle.aboutMe());

