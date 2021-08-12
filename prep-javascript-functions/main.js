// function addTwoNumbers(x, y) {
//   return x + y;
// }

// var sum = addTwoNumbers(4, 4);
// console.log('sum', sum);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(3, 3);
console.log('addTwoNumbers Exercise: ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(5);
console.log('convertHoursToMinutes Exercise: ', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var getGreetingResult = getGreeting('LearningFuze');
console.log('getGreeting Exercise: ', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 10);
console.log('addAndMultiplyBy5 Exercise: ', addAndMultiplyBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(9, 5);
console.log('subtractTwoNumbers Exercise: ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise: ', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Peter', 'Vila');
console.log('getFullName Exercise: ', getFullNameResult);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log('cube Exercise: ', cubeResult);
