> Some JavaScript tips to make your code even more awesome than it already is!

JavaScript is an awesome language, but from time to time you can get lost in the multitude of features it offers nowadays.

This repository is going to give you some short and concise tips to improve your code or make things easier or better to read.

## Table of Contents
- [Creating a really empty object](#creating-a-really-empty-object)
- [Swap variables with the array destructuring assignment](#swap-variables-with-the-array-destructuring-assignment)
- [Iterating over indices and values of an array with a for..of loop](#iterating-over-indices-and-values-of-an-array-with-a-forof-loop)
- [Switching over ranges](#switching-over-ranges)
- [Extract unique values from an array](#extract-unique-values-from-an-array)
- [Get the last elements from an array](#get-the-last-elements-from-an-array)
- [Using some and every on arrays instead of filter](#using-some-and-every-on-arrays-instead-of-filter)
- [Using the clipboard API to access the clipboard of your users](#using-the-clipboard-api-to-access-the-clipboard-of-your-users)
- [Broadcasting messages to other browser windows and tabs](#broadcasting-messages-to-other-browser-windows-and-tabs)
- [Optional Chaining](#optional-chaining)
- [Infinitely flatten arguments](#infinitely-flatten-arguments)
- [Object destructuring](#object-destructuring)

## Tips
### Creating a really empty object
You can create a really empty object by using `Object.create(null)`.

This prevents modification from the outside and creates a dictionary as vanilla as possible.

```JavaScript
// object used as a dict
const dict = {};
dict.__proto__; // => {}
dict.hasOwnProperty; // => f hasOwnProperty() {}

Object.prototype.myFunction = function() {};

dict.myFunction; // => f myFunction() {}

const emptyDict = Object.create(null);
emptyDict.__proto__; // => undefined
emptyDict.hasOwnProperty; // => undefined

// emptyDict isn't affected by the Object prototype
emptyDict.myFunction; // => undefined
```

### Swap variables with the array destructuring assignment
You can use an array destructuring assignment to swap two variables.

```JavaScript
let a = 1;
let b = 2;

// traditional
let tmp = a;
a = b;
b = tmp;

// with destructuring
[a, b] = [b, a];
```

### Iterating over indices and values of an array with a for..of loop
You can also get access to the index, next to the element, when you iterate over an array with a for..of-loop.

There is no need to handle the index manually. Array.prototype.entries can do that for you.

```JavaScript
// Iterating over the array with each individual element at hand while separately
// keeping track of the index.
let i = 0;
for (const element of array) {
  console.log(i++, element);
}


// Array.prototype.entries() returns an iterator which itself returns an array instead
// of each individual element every time next() is called.
// By using array destructuring, you take the tuple (array) the iterator returns on
// each iteration step and destructure it into individual variables.
// You can then iterate over the array while having the index and the element at hand on
// each iteration.
for (const [index, element] of array.entries()) {
  console.log(index, element);
}
```

### Switching over ranges
You can also use the switch statement in JavaScript to cover a range instead of only one value. Simply switch over true.

It's a great way to use a switch instead of if-statements where it's simply more readable.

```JavaScript
function getCheering(followers) {
  // If you were to switch over followers, you'd be surprised,
  // because you'd always hit the default case.
  // By switching over true, all cases get evaluated properly, although they
  // contain numeric ranges!
  switch (true) {
    case followers >= 2000:
      return "Wow, I'm speechless. I'm so happy, thank you!!!";
    case followers >= 1000:
      return "Wow, this is so great!";
    case followers >= 500:
      return "Awesome!";
    case followers >= 100:
      return "Wooooo!";
    default:
      return "Yay!";
  }
}

const cheer = getCheering(2125);
console.log(cheer); // => "Wow, I'm speechless. I'm so happy, thank you!!!"
```

### Extract unique values from an array
You can get all unique values from an array by using a Set and the spread operator.

No need to filter the array, or use some other, less readable methods.

But be adviced, this only works for primitives.

```JavaScript
const array = [1, 1, 1, 2, 3, 2, 4, 5, 1, 6, 7, 3, 8, 7, 6, 9];

const uniqueValues = [...new Set(array)];
// => uniqueValues is now: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Get the last elements from an array
You can get the last elements of an array by using Array.prototype.slice with negative numbers.

```JavaScript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.slice(-1); // => [9]
array.slice(-2); // => [8, 9]
array.slice(-3); // => [7, 8, 9]
```

### Using some and every on arrays instead of filter
You can use Array.prototype.some and Array.prototype.every to test whether some or all values of an array satisfy a certain condition.

This is way more readable and concise than using Array.prototype.filter.

```JavaScript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ❌ Using filter to test if all values pass a test
array.filter((num) => num > 0).length === array.length; // => true

// ✅ Using every
array.every((num) = num > 0); // => true

// ❌ Using filter to test if some values pass a test
array.filter((num) => num > 5).length > 0; // => true

// ✅ Using every
array.some((num) = num > 5); // => true
```

### Using the clipboard API to access the clipboard of your users
You can use the clipboard API to interact with a user's clipboard.

writeText writes text,
write writes arbitrary data (like images),
read reads arbitrary data,
and readText reads text.

**Attention: read\* needs user permission!**

```HTML
<div>
  <input type="text" id="select"/>
  <button id="btn">Select & Copy</button>
</div>
```

```JavaScript
const button = document.getElementById('btn');

button.onclick = function(event) {
  const input = document.getElementById('select');
  try {
    // this writes the current value within the input into the user's clipboard
    await navigator.clipboard.writeText(input.value);
  } catch (error) {
    console.error(error);
  }
}
```

### Broadcasting messages to other browser windows and tabs
You can use a BroadcastChannel to send messages between browsing contexts (tabs, windows, etc.) that share the same origin.

You can use this to sync your frontend state across multiple browser tabs a user has open, no matter where they make changes.

```JavaScript
const bc = new BroadcastChannel("state");

// This is the receiver. The function is fired each time a message is received.
bc.onmessage = function(message) {
  console.log(event);
};

// Send a message. Could be anything, not only strings. Objects work, as well.
bc.postMessage("Hey there!");

setTimeout(() => {
  // close the channel
  bc.close();
}, 5000);
```

### Optional Chaining
Optional chaining is a great way to access deeply nested properties and functions in a safe way.

Instead of TypeErrors being thrown, your results become undefined. No need for try-catch blocks for a relatively trivial property access.

```JavaScript
const obj = {
  property: 1,
  nestedObject: {
    property: 2,
    func: () => "foo"
  }
}

const throwsResult = obj.nestedObject.fun(); // => TypeError - obj.nestedObject.fun is not a function

const result = obj?.nestedObject?.fun?.(); // => undefined, fun is not found but the optional chaining prevents an error
```

### Infinitely flatten arguments
You can use an easy-to-implement utility function with a rest parameter to concat as many arguments as you like into a single, flattened array.

```JavaScript
function flatten(...arguments) {
  return arguments.flat(Infinity);
}

const result = flatten([1, 2, 3, 4, 5], [[1], [2, 3]], 2, 1, "a", "z");
// => [1, 2, 3, 4, 5, 1, 2, 3, 2, 1, "a", "z"]
```

### Object destructuring
Object destructuring is a way to access nested properties of objects.

It puts the emphasis on the left side of the assignment instead of the right.

```JavaScript
const obj = {
  propertyOne: 2,
  propertyTwo: "hello there"
};

const defaultValue = 1;

// Extracts propertyOne from obj, renames it to nowKnownAsNumber, and assigns defaultValue if the property is null or undefined.
const { propertyOne: nowKnownAsNumber = defaultValue } = obj;

console.log(nowKnownAsNumber); // => 2
```
