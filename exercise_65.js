// Privacy

// Accessing and updating properties is fundamental in working with objects. 

// However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. 
// When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.


/*
Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.
*/


const bankAccount = {
  _amount: 1000
}

// the _amount is not intended to be directly manipulated.
// Even so, it is still possible to reassign _amount:

bankAccount._amount = 1000000;

// Getters can return the value of internal properties and setters can safely reassign property values.

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';
robot.recharge();

