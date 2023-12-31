// Return

/*
When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.
*/

function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

// To pass back information from the function call, we use a return statement.
// To create a return statement, we use the return keyword followed by the value that we wish to return.

// When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed.

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

function monitorCount(rows, columns) {
  return rows * columns;
};
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);
