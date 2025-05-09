function sum(a, b = 10) {
    return a + b;
}

const sumValue =  sum(2);

console.log(sumValue); // 12


// Arrow function with default parameter
const sumArrow = (a, b = 10) => {
    return a + b;
}    
const sumArrowValue =  sumArrow(5);
console.log(sumArrowValue); // 15

// Arrow function with default parameter and implicit return
const sumArrowImplicit = (a, b = 10) => a + b;
console.log(sumArrowImplicit(3)); // 13
