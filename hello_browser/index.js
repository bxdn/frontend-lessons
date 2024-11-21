// To define a variable in JS, use the 'let' keyword
// If the variable should not be reassigned, use the 'const' keyword instead.
// In this case, since count can be reassigned, the 'let' keyword.
let count = 0;

// To define a function in JS, use the 'function' keyword (instead of 'def').
// In JS, for, while, if, and function blocks are surrounded with {} braces instead of just indenting.
function incrementCount() {
    count++;
    // The 'document' is a variable pointing to the html document.
    // To get an element from the html document, you can use the 'getElementById' method, assuming you've given the element an id in the html document.
    // To give the html element a different text value, assign the 'textContent' attribute of the element.
    document.getElementById('count').textContent = 'Count: ' + count;
}
