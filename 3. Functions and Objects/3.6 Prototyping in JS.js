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

let rideOne = new Vehicle('Honda', 'Orange', 2019, 150000);

//New property can be added to an object as shown below
rideOne.model = 'Civic';
for(i in rideOne) {
    console.log(i);             //make color year cost aboutMe costPlusTax model
}

//But similarly a property cannot be added to a constructor function
Vehicle.model = undefined;

//Observe that the new object of type Vehicle doesn't contain model property
let rideTwo = new Vehicle('Honda', 'Silver', 2010, 100000);
console.log('----------------------');
for(i in rideTwo) {
    console.log(i);             //make color year cost aboutMe costPlusTax
}

//In order to add property to a constructor function prototype property of an object is used
Vehicle.prototype.model = undefined;

//Observe that the new object of type Vehicle contains model property
let rideThree = new Vehicle('Swift', 'White', 2005, 70000);
console.log('----------------------');
for(i in rideThree) {
    console.log(i);             //make color year cost aboutMe costPlusTax model
}
rideThree.model = 'Dzire';
console.log(`${rideThree.aboutMe()} ${rideThree.cost} ${rideThree.model}`);