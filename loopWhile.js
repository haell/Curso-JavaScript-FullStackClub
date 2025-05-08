let index = 0;

while (index < 10) {
  console.log(index);
/* index++;
  index = index + 1; */ // incrementing the index by 1
  index += 1; // incrementing the index by 1
} // while is a loop that executes as long as the condition is true

const person = {
    name: "John",
    age: 30,     
};

for (property in person) {
    // console.log(property); // prints the property name
    console.log(person[property]); // prints the property value
}

