for (let index = 0; index < 10; index++) {
    console.log(index);
  }
  
  const cars = ["Ferrari", "Lamborghini", "Porsche"];
  
  A
  
  for (let car of cars) {
    console.log(car);
  } // for of is a loop that iterates over iterable objects (like arrays, strings, etc.) and returns the values of the iterable one by one
  
  cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
  }); // forEach is a method that executes a provided function once for each array element
  