const sayHi = (str, num) => console.log("Hi " + str + num);
const sayBye = str => console.log("It's becoming late " + str + ", I'm gonna go, byeeee");

const greetWithEnthusiasm = (str, callback) => {
  const enthusiasmStr = str + "!!!";

  callback(enthusiasmStr); // enthusiasmStr => { sayHi(enthusiasmStr, 40) } ), sayBye(enthusiasmStr), enthusiasmStr => console.log("See ya later, " + enthusiasmStr))
};

const randomNum = Math.random() * 100;

greetWithEnthusiasm("Marios", enthusiasmStr => sayHi(enthusiasmStr, randomNum));
greetWithEnthusiasm("Harika", sayBye);
greetWithEnthusiasm("Agris", str => console.log("See ya later, " + str));

const thirdFunc = str => console.log("See ya later, " + str);

// const displayEventWithIndex = function(event, idx) { event.target.innerText = idx }

// for (let index = 0; index < array.length; index++) {

//     div.addEventListener("click", function(event) { displayEventWithIndex(event, index) })
// }

const animals = ["cat", "dog", "horse", "rabbit", "duck", "lizard", "goldfish"];

const displayAnimal = string => {
  console.log("I looked in the hat and found a... " + string);
};

const displayAnimal2 = string => {
  console.log("What a nice " + string + "!!!");
};

const getRandomAnimal = (array, callback) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const selectedAnimal = array[randomIndex];

  callback(selectedAnimal); // displayAnimal(selectedAnimal), displayAnimal2(selectedAnimal),  (selectedAnimal) => console.log("I love " + selectedAnimal + "s"))
};

getRandomAnimal(animals, displayAnimal);
getRandomAnimal(animals, displayAnimal2);
getRandomAnimal(animals, str => console.log("I love " + str + "s"));

// DEFAULT PARAMS
const sum = (n1, n2 = 0) => n1 + n2;
// console.log(sum(2));

// REST OPERATOR
const myFunc = (param1, param2, ...rest) => {
  console.log(param1);
  console.log(param2);
  console.log(rest.length);
};

myFunc(2, 3, 6, 10, 12);

// DESTRUCTURING OBJs

const person = {
  name: "Sweta",
  hwPoints: 900,
  location: { country: "UK", region: "Essex" },
};

// const { name, hwPoints, location: { country, region }} = person;

// console.log(name);
// console.log(hwPoints);
// console.log(country);
// console.log(region);

// DESTRUCTURING FUNCTION's PARAMETERS

const displayPersonInfo = ({ location: { country, region } }) => {
  console.log("FUNCTION", country);
  console.log("FUNCTION", region);
};

displayPersonInfo(person);

// DESTRUCTURING ARRAYS

const arr = ["a", "b", "c", "d", "e", "f"];

const [first, second, third, , , whatever] = arr;

console.log(first);
console.log(second);
console.log(third);
console.log(whatever);

const [, , ...rest] = arr;

console.log(rest);

// SPREAD OPERATOR

const hero = {
  name: "Superman",
  age: 43,
  planet: "Kripton",
};

const person2 = Object.assign({}, person);
const person3 = { ...person, ...hero, planet: "Earth", name: "Stefano" };

// person3.name = "Stefano";
console.log(person3);
