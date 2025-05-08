const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const bob = names[1];

names.push('Frank'); // Add 'Frank' to the end of the array
names.unshift('Grace'); // Add 'Grace' to the beginning of the array
names.pop(); // Remove the last element ('Frank')
names.shift(); // Remove the first element ('Grace')
names[2] = 'Zoe'; // Change the third element ('Charlie') to 'Zoe'
names.splice(2, 1, 'Alice'); // Replace 'Zoe' with 'Alice' at index 2

console.log(names.indexOf('Alice')); // shows index of 'Alice' (2)
console.log(names.includes('Eve')); // shows if 'Eve' is in the array (false)
console.log(names.length); // shows the length of the array (4)
console.log(names.slice(1, 4)); // shows elements from index 1 to 3 (['Bob', 'Alice', 'David'])
console.log(names.join(', ')); // joins the array into a string ('Bob, Alice, David')
console.log(names.reverse()); // reverses the array (['David', 'Alice', 'Bob'])
console.log(names.sort()); // sorts the array alphabetically (['Alice', 'Bob', 'David'])

const namesIsArray = Array.isArray(names); // checks if names is an array (true)
console.log(namesIsArray); // shows if names is an array (true)

console.log(names); // ['Grace', 'Alice', 'Bob', 'Charlie', 'David']

/* ############ --------metodo MAP---------- ############### */

const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function(number) {
    return number * 2
})

console.log(numbers);
console.log('Abaixo passou pela função numbers.map')
console.log(numbersMultipliedByTwo);

/* ############ --------metodo FILTER---------- ############### */

const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function(age) {
    return age % 2 === 0;
})

console.log(evenAges);

/* ############ --------metodo REDUCE---------- ############### */

const sumOfages = ages.reduce(function(age, accumulator) {
    return accumulator + age;
}, 0)

console.log(sumOfages); // shows the sum of all ages (140)

//fim da aula 04

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "traveling", "swimming"],
    dog:{
        name: "joe",
        age: 5,
        breed: "Labrador"
    }
}
/* 
const firstName = person.firstName; // Accessing object properties using dot notation
const lastName = person.lastName; // Accessing object properties using dot notation
const age = person.age; // Accessing object properties using dot notation
const hobbies = person.hobbies; // Accessing object properties using dot notation
 */

// Exacltly the same as above but using destructuring assignment
const {
     firstName,
     lastName,
     age,
     hobbies, 
     dog: {name: dogname },
 } = person; // Destructuring assignment

console.log(`First Name: ${firstName}`); // Output: First Name: John
console.log(`Last Name: ${lastName}`); // Output: Last Name: Doe
console.log(`Age: ${age}`); // Output: Last Name: Doe
console.log(`Hobbies: ${hobbies}`); // Output: Last Name: Doe

const read = person.hobbies[2]; // Accessing array elements using index
console.log(`Hobby: ${read}`); // Output: Hobby: swimming

console.log(`Last hobbie:  ${hobbies[hobbies.length - 1]}`); // Output: Last hobbie: swimming

/* person.dog = "dog"; */ // Adding a new property to the object

console.log(person.dog.age); //Acessing a prop in a nested object using dot notation
console.log(dogname); //Acessing a prop in a nested object using destructuring assignment
