// Nested Loops

/*
When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.
*/

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

onst bobsFollowers = ['Saad', 'Elle', 'Amanullah', 'Ahmad'];
const tinasFollowers = ['Sam', 'Amanullah', 'Elle'];
mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let a = 0; a < tinasFollowers.length; a++) {
    if (bobsFollowers[i] === tinasFollowers[a]) {
      console.log(bobsFollowers[i]);
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
