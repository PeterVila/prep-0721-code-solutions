const person = {
  firstName: 'Peter',
  lastName: 'Vila',
  hobby: 'Playing Tennis'
};

console.log(person);
console.log(`The person's name is: ${person.firstName} ${person.lastName}.`);

person.job = 'Nothing at the moment';
console.log("The person's current job is: " + person.job);
person.previousJob = 'Theatre technician';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);
