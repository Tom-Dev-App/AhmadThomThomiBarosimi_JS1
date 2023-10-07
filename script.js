// IF ELSE
// Check if a person is student or worker or both
let isStudent = false
let isWorker = false
console.log("IF ELSE STATEMENT")
if (isStudent === true && isWorker === true){
    console.log("You are a worker and a student at the same time, marvelous!")
}

else if(isWorker === true) {
    console.log("You are only a worker, you can do it!")
} 

else if (isStudent === true) {
    console.log("You are only a student, yeay... you're still learning! It's great time to prepare for your bright future😍")
}

else {
    console.log("You are not a worker or a student! Don't be discourage! You can be the best of who you are😊")
}
// END OF IF ELSE


// IF ELSE AND NESTED IF
// Check if the input is a number
console.log("IF ELSE WITH NESTED IF STATEMENT")
let input = 12
if (typeof input === 'number') {
    if (input === 0) {
      console.log("The input is zero, yeay...😆");
    } else if (input % 2 === 0) {
      console.log("The input is even, yeay...😆");
    } else {
      console.log("The input is odd, yeay...😆");
    }
  } else if (typeof input === 'string') {
    console.log("The input is a string.");
  } else if (typeof input === 'boolean') {
    console.log("The input is a boolean.");
  } else {
    console.log("The input is not a number, string, character, or boolean, try again to input a number🤗");
  }
// END OF IF ELSE AND NESTED IF


// SWITCH CASE
// Let fills a number of your favorites drinks
// Coffee: 0, Iced Tea: 1, Lemonade: 2, Green Smoothie: 3, Water: any
let inputDrinkIndex = 1
let favoriteDrink;
console.log("SWICTH CASE STATEMENT")
  
  switch (inputDrinkIndex) {
    case 0:
      favoriteDrink = 'Coffee';
      break;
    case 1:
      favoriteDrink = 'Iced Tea';
      break;
    case 2:
      favoriteDrink = 'Lemonade';
      break;
    case 3:
      favoriteDrink = 'Green Smoothie';
      break;
    default:
      favoriteDrink = 'Water';
  }
console.log(`My favorite drink is ${favoriteDrink}.`);
// END OF SWITCH CASE


// WHILE LOOP
// WHOOOAH TROPICAL FRUITS, thats delightful
// Array of Tropical Fruits
console.log("WHILE LOOP STATEMENT")
const tropicalFruits = ['Mango', 'Pineapple', 'Banana', 'Papaya', 'Coconut'];

let index = 0;
while (index < tropicalFruits.length) {
  console.log(tropicalFruits[index]);
  index++;
}
// END OF WHILE LOOP


// DO WHILE LOOP
console.log("DO WHILE LOOP STATEMENT")
// Finding your favorite foods inside an array of Indonesian Foods
const indonesianFoods = ['Nasi Goreng', 'Rendang', 'Sate', 'Mie Ayam', 'Gado-Gado'];
let indexOfFoods = 1;

do {
  const food = indonesianFoods[indexOfFoods];
  console.log(`I love ${food} so much!`);
  index++;
} while (index < indonesianFoods.length);
// END OF DO WHILE LOOP


// FUNCTION
console.log("FUNCTION STATEMENT")
// SHOWING OFF YOUR NAMES
function myName(name) {
 console.log(`My name is ${name}. It's nice to meet you👋`)
}
myName("Tom")
// END OF FUNCTION