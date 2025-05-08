const sun = 1 + 2;

if (sun === 2) {
  console.log("The sun is 2!");
} else if (sun === 3) {
  console.log("The sun is 3!");  
} else {
  console.log("The sun is not 2!");
}

let number = sun === 2 ? 2 : 4; // Ternary operator

if (sun === 2) {
  number = 2;
} else {
  number = 4;
}

console.log(number);

const car = 'Mercedes';

switch (car) {
    case 'Mercedes':
        console.log('The car is a Mercedes!');
        break;
    case 'BMW':
        console.log('The car is a BMW!');
        break;
    case 'Audi':
        console.log('The car is an Audi!');
        break;
} // shows what the car is, referencing the variable 'car'

