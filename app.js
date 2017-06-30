const age = 1;
const people = ["Jeremy", "Eileen"];

const fullNames = people.map(name => `${name} Jones`);

for(const person of people) {
  console.log(person);
}



function logPet(petName, petType = "dog") {
  console.log(`${petName} is a ${petType}`);
}

logPet('Virgil');
