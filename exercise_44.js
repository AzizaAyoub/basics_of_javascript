// Do...While Statements

// A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

// Note that the while and do...while loop are different! 
// Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

// Write your code below
const cupsOfSugarNeeded = 1;
let cupsAdded = 0;
do {
  cupsAdded++
  console.log(cupsAdded + 'cup was added')
} while (cupsAdded < cupsOfSugarNeeded);

