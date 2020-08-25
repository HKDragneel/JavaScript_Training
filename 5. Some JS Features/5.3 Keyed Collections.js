/**
 * Map Object
 */
let myMap = new Map();
myMap.set('Crystal', 'clear');
myMap.set('0', null);
myMap.set('seven', 7);
myMap.set(50, 'bucks');

console.log(myMap.size);

myMap.forEach(
    (item, key, mapObj) => (
        console.log(key, item)
    )
);

/**
 * Set Object
 */
let mySet = new Set();
mySet.add(null).add(undefined).add(12).add('Hurray');
mySet.add(true);
console.log(mySet.size);

for(let value of mySet) {
    console.log(value);
}