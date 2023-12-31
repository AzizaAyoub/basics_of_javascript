// The .pop() Method

// Another array method, .pop(), removes the last item of an array.

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

// When you need to mutate an array by removing the last element, use .pop().

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores); // [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]

