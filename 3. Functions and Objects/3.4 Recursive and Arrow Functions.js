/**
 * Recursive Functions
 */
function calculateFactorial(num) {
    if(num>0) {
        return num*calculateFactorial(num-1)
    } else {
        return 1;
    }
}

console.log(calculateFactorial(5));

/**
 * Arrow Functions
 */
let sellingPrice = (costPrice, profitPercent) => (costPrice*(1+profitPercent/100));
console.log(sellingPrice(1000, 15));

let calcFact = (num) => {
    if(num>0) {
        return num*calcFact(num-1)
    } else {
        return 1;
    }
}
console.log(calcFact(5));