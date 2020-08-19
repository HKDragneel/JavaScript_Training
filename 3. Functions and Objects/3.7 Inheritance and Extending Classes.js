function Vehicle (make, color, year, cost) {
    this.make = make;
    this.color = color;
    this.year = year;
    this.cost = cost;
    this.aboutMe = () => {
        return `${this.make} ${this.color} ${this.year} ${cost}`;
    }
}

let myRide = new Vehicle('Buick', 'Red', 2019, 4000000);
console.log(myRide.aboutMe());

function SUV (size, passengers) {
    this.size = size;
    this.passengers = passengers;
}

SUV.prototype = new Vehicle();              //inheritance is implemented
let myNewRide = new SUV('Mid', 6);
myNewRide.make = 'Lamborghini';
myNewRide.color = 'Orange';
myNewRide.year = 2016;
myNewRide.cost = 8000000;
for(i in myNewRide) {
    console.log(myNewRide[i]);
}