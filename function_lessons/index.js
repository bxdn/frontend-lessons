// To print in JS, use console.log()
console.log('Hello, World!') // prints "Hello, World"

// As described in hello, browser, to define a function, you can use the 'function' keyword.
// Notice the camelCase standard in JS.  In Python, snake_case is used, but in different langauges, different standards are applied.
// Recall the make_sparkly function from before.
function makeSparkly(text) {
    return '*' + text + '*';
}

console.log(makeSparkly('Hi')) // prints '*Hi*'
console.log(makeSparkly('omg')) // prints '*omg*'

// In addition to this syntax, an alternate syntax exists which is used frequently.  The following code is functionally the same.
// Explanation: the => sign signifies a function is being defined.  Whatever comes before the => are the arguments, and what comes after is the body of the function.
// If {} are not used in the body, only 1 line is allowed in the function body, and it has an implicit 'return' keyword added before the line.
const makeSparkly2 = text => '*' + text + '*';
const makeSparkly3 = (text) => {
    return '*' + text + '*';
}
const make_sparkly4 = (text) => '*' + text + '*';
const make_sparkly5 = text => {
    return '*' + text + '*';
}

// To make a function this way with no arguments, the following syntax is used.
// Note the empty parens () for 0-argument functions defined in this way.
const greet = () => print('Hi!');

// There are methods in JS lists that are used frequently that take other functions as arguments.
// This has the reputation of breaking brains, so think about that carefully before we procede.
// Here are the most common ones.

const myList = [1, 3, 2, 5];

// The .map method takes in a function that alters in some way an element of the list, then returns the result.
// Therefore, the result of mapping the above list to the doubling function num => num * 2 is that each element in the resulting list is doubled.
const myListDoubled = myList.map(num => num * 2);
console.log(myListDoubled) // prints [2, 6, 4, 10]

// The .filter method takes in a function that returns a boolean to decide whether the element should be in the resulting list.
// Therefore, the result of filtering myList by returning the function num => num > 2 is that a new list is returned where only the elements greater than 2 are included.
const myListFiltered = myList.filter(num => num > 2);
console.log(myListFiltered) // prints [3,5]

// These methods can be chained together to transform lists in brief yet powerful ways.
const myListFilteredDoubled = myList.filter(num => num > 2).map(num => num * 2);
console.log(myListFilteredDoubled); // prints ?

const myListDoubledFiltered = myList.map(num => num * 2).filter(num => num > 2);
console.log(myListDoubledFiltered); // prints ?
