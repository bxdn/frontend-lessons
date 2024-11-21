// In JS, objects (along with lists) are at the core of moving data around and displaying it.
// You can think of an object as being like a dict in Python, except the keys can only be strings.
// Because the keys can only be strings, there is no reason to use ""
// This is a valid way to make an object in JS, where the keys are x, y, and z.
myObject = {
    x: 1,
    y: 2,
    z: 3
};

// While you can use the same indexing syntax as python, there is a more concise way to access the same information, by using '.' notation, like in classes in Python.
console.log(myObject['x']); // prints 1
console.log(myObject.x); // also prints 1
myObject.x = 2;
console.log(myObject.x); // prints 2
myObject['x'] = 1;
console.log(myObject.x); // prints 1

// A fast way to quickly instantiate variables is a concept called "destructuring" which uses the following syntax.
const {x, y, z} = myObject;
console.log(x); // prints 1
console.log(y); // prints 2
console.log(z); // prints 3

// The same can be done with lists
const myList = ["Hello", "World"];
const [hello, world] = myList;
console.log(hello); // prints "Hello"
console.log(world); // prints "World"

// A fast way to copy lists/objects is to use the ... syntax.
// The ... syntax will destructure the list/object inside another list/object, so they aren't nested.
const myOtherList = [...myList, "!"];
console.log(myOtherList); // prints ["Hello", "World", "!"]

// Be careful, when destructuring with overlapping key values on objects, something is bound to be overwritten based on the order provided.
const myOtherObject = {...myObject, x: 10};
console.log(myOtherObject); // prints {x: 10, y: 2, z: 3}
const myThirdObject = {x: 10, ...myObject};
console.log(myThirdObject); // prints {x: 1, y: 2, z: 3}
