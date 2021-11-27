# Start your React development Journey from Here..

Some projects I made during learning react are here
### <a href="keeper-app">Keeper App</a>


## Contents
<li><a href="#what">What is React?</a>
<li><a href="#intro">Introduction to Babel and JSX.</a>
<li><a href="#jsinjsx"> JavaScript Expressions inside JSX</a>
<li><a href="#jsx-styling">JSX Attributes and styling React Elements</a>
<li><a href="#react-components">React Components</a>
<li><a href="#es6-1">JavaScript ES6 Import and Export modules</a>
<li><a href="#local-setup">Local Environment Setup for React development</a>
<li><a href="#props">Props in React</a>
<li><a href="#mapping">Mapping Components </a>
<li><a href="#es6-functions">Some new ES6 functions on arrays and arrow functions</a>
<li><a href="#conditional">Conditional Rendering in react </a>
<li><a href="#state">What is state? declarative and imperative programming</a>
<li><a href="#usestate">Use State Hook</a>
<li><a href="#destructuring">Destructuring in JavaScript</a>
<li><a href="#handling">Handling events in React </a>
<li><a href="#components">Class components vs Functional Components</a>

<h1 id="what"> What is React? </h1>
A javascript library for building user interfaces.<br>
We end up breaking down a very complex user interface structure into a component
tree.<br><br>

<h1 id="intro"> Introduction to React, Babel and JSX</h1>

### Start HTML template for react project

```html
<!DOCTYPE html>
<html lang="en">
 
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="styles.css">
 
  <title>React App</title>
</head>
 
<body>
  <div id="root"></div>
  <script src="../src/index.js"></script>
</body>
 
</html>
```

Everything that we create using react will go inside this div(id=root)<br>

All of code we do in the index.js file in JavaScript using react.

The first thing we have to do in index.js is require react and react-dom modules.
```javascript
var React = require("react");
var ReactDOM = require("react-dom");
```

### Render Function

<b>ReactDOM.render()</b>

to use React to actually create something on screen ,

we're going to use the render function.

render function takes three inputs. The first input is "WHAT TO SHOW".

second input is "WHERE TO SHOW IT", And finally we

can also add a optional callback to tell us when that render function has completed.
```javascript
ReactDOM.render("What to show","Where to show",()=>{
  
})
```

### Writing Hello World in React
```javascript
var React = require("react");
var ReactDOM = require("react-dom");
 
ReactDOM.render(<h1>Hello World</h1>,document.getElementById("root"))
```

## What is JSX?

we're inside a JavaScript file
and we're able to write plain HTML without any sort of fancy angle brackets or for example the EJS
brackets or anything to denote that this is somehow not Javascript.
So what exactly is this magic?
Well this is what JSX does. React works by creating these JSX files, so files where we've got
HTML right in the body of a JavaScript file. And what happened behind the scenes is that our HTML
is picked up by a compiler and it gets converted or compiled down to actual JavaScript. And the compiler
comes from including this React module right here.

## What is Babel?

inside the React module, there is something called Babel. And Babel, as they tell you, is a JavaScript compiler. So it's able to take next generation JavaScript like ES 6, 7, 8 and compile it down
to a version of JavaScript that every browser can understand.
And this includes compiling JSX down to plain old JavaScript.


## React vs Vanilla JavaScript

```javascript
ReactDOM.render(<h1>Hello World</h1>,
  document.getElementById("root"))
  
// Vanilla js
var h1 = document.createElement('h1');
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1);
```

## Babel working

Babel actually goes a lot further than just
rendering JSX, It allows us to use some next generation JavaScript,
so for example ES6 OR ES 2015. And we can use some of the new constructs that are available through
these new versions of JavaScript and it's able to compile it down into bog standard normal JavaScript.

## Import Keyword- JavaScript ES6

instead of requiring the React module and setting it to a variable and doing all of this, the new
way of doing it is to simply just import React from a particular module or a particular location,
so in our case it's still the React module right here.
```javascript
import React from "react";
```

### Note:-

when we use this render method it can only take a single HTML element.
That means if you have two HTML elements back to back, then this is not going to work.
So we can wrap up all the element to a element of HTML just like this-

```javascript
ReactDOM.render(<div><h1>Hello World</h1><p>This is a paragraph</p></div>,
  document.getElementById("root"))
```

<hr>

<h1 id="jsinjsx"> JavaScript Expressions inside JSX</h1>

### Use JS Expressions inside JSX
If we wanted to insert JavaScript code inside the HTML inside the JavaScript file then what we have to do is to simply wrap the JavaScript inside a set of curly braces.

```javascript
const name = "Pan Card";
const Bb = ()=>{
  return(
    <div>
      <h1>My document List</h1>
      <ul>
        <li>{name}</li> 
      </ul>
    </div>
  )
}
ReactDOM.render(<Bb />,
document.getElementById("root"))
```

Note:-
>We can add any JavaScript expression in between these curly braces which is injecting code into our HTML elements in our JSX file. But we can't write JavaScript statements.

### Statements vs Expressions in JavaScript
#### Statements
When we write programs - we describe the sequences of actions that should be performed to get a desired result. In programming languages those actions are called statements. So every Javascript program basically consists of statements. In Javascript statements are separated by semicolons.

```javascript
let declaredVariable; // variable declaration is a statement
let otherVariable = 0; // even with assignment
function functionCall() { // function declaration is a statement
}
if(true){} // if is statement
2+2; // even this is statement
```

#### Expressions
Simply speaking an expression returns a value:
```javascript
2+2
true
true && false
functionCall() // whatever the function returns
declaredVariable // whatever the variable value was
declaredVariable = 'new value' // assignment is an expression
```
### Template literals in ES6

if you come from another language you might know it as
string interpolation.

So basically injecting strings into a piece of JavaScript.

So the way we would do that is add a set of backticks and in between the backticks we can add a dollar
sign and then another set of curly braces
and inside here we can add a piece of JavaScript.
```HTML
<h1>Hello {`${fname} ${lname}`} </h1>
```

<hr>

<h1 id="jsx-styling"> JSX Attributes and styling React Elements </h1>

Even though JSX looks like HTML, it's still being rendered down to JavaScript. And
in JavaScript the property to access all of the classes that exist on an element is a property called
className.

So In JSX we use html attributes in a different way same as in Javascript.
```javascript
<h1 className="headings">My Favourite Foods</h1>
```
### Including jsx file in HTML file
```HTML
<script src="../src/index.js" type="text/javascript"></script>
```
Our HTML file doesn't know that this index.js file is in fact a JSX file. So how to solve this...

```HTML
<script src="../src/index.js" type="text/JSX"></script>
```
when we add an attribute in normal
HTML, it's not camelcase like this where the first word is lowercase and the next words are capitalized
like the end for name here.
> Attribute name should be in camel case
```JSX
<h1 className="headings" contentEditable="true">
```

> Tags should be self closing 

```JSX
<img src="nsfnoe" />
```

## Inline Styling in React JSX
In Javascript, it wants this value for the style property as a Javascript object.
Javascript objects look like this:
```JavaScript
{
color: "red",
}
```
they exist in a set of curly braces
and then they have key-value pairs.

So in this case, the key would be the word color and this would behave a bit like a variable, so it's not a string.
Whereas the value, in terms of CSS anyways, is going to be a string.
So in this case, it will be red.
And each of these key-value pairs in a Javascript object is separated by commas not semicolons as you
would see in the style sheet.
```JSX
import React from "react";
import ReactDOM from "react-dom";

const stylesheet = {
  headingStyle: {
    fontSize: "20px",
    border: "1px solid black",
    color: "red"
  },
  contentStyle: {
    color: "pink"
  }
};
ReactDOM.render(
  <div>
    <h1 style={stylesheet.headingStyle}>Hello World!</h1>
    <p style={stylesheet.contentStyle}>
      loremrerniovn prov eivr ikepv evi gkpev ti
    </p>
  </div>,
  document.getElementById("root")
);

```

If at some point in our code something changes let's say the user did something or the day changed or the time changed became
morning to night, something happens and we wanted to change the style of our h1.

We don't have to touch any of our code in here.
All we have to do is to just update the properties of our custom style object.


```JSX
stylesheet.headingStyle.color = "blue";
```

<hr>

<h1 id="react-components"> React Components </h1>

Give your components a name that is in Pascal case which means that every single word has the first letter capitalized.
Call this component heading and let's open up a set of parentheses and open up a set of curly braces.

Now in this heading function, all that it's going to do is to return a HTML element that is created using

Javascript.
```JSX
const Heading = () => {
  return (
    <div>
      <h1>My Favourite Foods</h1>
      <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
      </ul>
    </div>
  );
};
```

## How react differentiate between custom components vs DOM elements

All of our components have names which start with
a capital letter using Pascal case.
And this allows React to differentiate between the custom components that we're building versus the
HTML elements that we're trying to get hold of that exists in the DOM.

### Rendering our custom component
```JSX
ReactDOM.render(<Heading></Heading>, document.getElementById("root"));
```

We can do like this too
```JSX
ReactDOM.render(<Heading />, document.getElementById("root"));
```
> <a href="https://github.com/airbnb/javascript/tree/master/react">AirBNB React Styling Guide</a>

## Including Components per seperate file
If I had a very large website and I had all of my components cluttering index
.js that would be terrible.
<br>So we're going to use a ES6 feature where we import our heading component from a separate file and it's
going to be very similar to what we're doing with React and ReactDOM. But in this case we're going to be doing all of the importing and exporting ourselves.<br>
we would have all of our components separated into individual files with the JSX extension.
like this--
> Heading.jsx

#### Importing jsx files into index.js file
we have to use the ES6 import export functionality.
#### Export Function

In the file where we've got our component, We're going to export this heading function as the default export.
```JSX
export default Heading;
```

So I'm going to import heading from that heading.jsx file.

So I'm going to use the relative path

so ./, and then heading.jsx


But of course in ES6 the extension of the file is actually optional.
```JSX
import Heading from "./Heading";
```
In mostly cases index.js just has a custom component called App. And instead of all of these things,<br>
we would have a custom file called App.jsx and inside here we would have all import statements.<br>
we would render our component as a function called App which returns a div
which contains that heading custom component as well as the list custom component.

#### Index.js file--
```JSX
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
```

#### App.jsx file
```JSX
import React from "react";
import Heading from "./Heading";
import List from "./list";
const App = () => {
  return (
    <div>
      <Heading />
      <h1>My fav Places</h1>
      <List />
    </div>
  );
};
export default App;
```

remember that each of these components can now be reused as and when we want to.
<hr>

<h1 id="es6-1"> JavaScript ES6 Import and Export modules </h1>

#### Exporting something from a module(file) of javascript



math.js file
```javascript
const pi = 3.14;
export default pi;
```

#### Importing the file in another  file
```javascript
import pi from "./math";
// pi  3.14
```
creating a default export means that when another file writes import something
from this file, that something is going to be equivalent to the default export. You can use any variable to import that file default export will be imported.
```javascript
import x from "./math";
// x == 3.14
```

what if we had more than one thing in this file math.js?
### How would we export multiple things?
If you want to export more from this file you can export without using default like this.

```javascript
const pi = 3.14;
const add=(a,b)=>{
  return a+b;
}
export default pi;
export {add};
```

And how we can import these other things to an external file?
```javascript
import {add} from "./math"
```

>What import and
export and the concept of modules allows us to do is to really be able to start splitting up our large
Javascript files into individual more manageable components.

How to import everything from a module?
```javascript
import * as m from "./file";
```

<h1 id="local-setup"> Local Environment Setup for React development</h1>

<ol>
<li>Check node js is up to date
<li>Install VS code(or any editor of your choice)
<li><a href="https://reactjs.org/docs/create-a-new-react-app.html">Create React App</a>

Easiest way to create a new react application.
```Bash
$ npx create-react-app my-app
```
<li>Running React App

```Bash
$ cd my-app
$ npm start
```

Inside our source folder
the only ones that we want to keep is the index.js.
And we're going to delete everything else.
</ol>


<hr>

<h1 id="props"> Props in React </h1>
When we code in plain html we can't define our own attributes as well as elements.
 But in React components we have almost as a custom HTML element then we can define these attributes.
And in the React component world, those attributes are called properties and you'll usually hear them
referred to as <b> props</b>.

So let's create a reusable component card, let's say every card has students informatoion like name, class, section, roll no.

“props” (which stands for properties) object argument with data and returns a React element.


```java
const Student = (props)=>{
  return(
    <div>
      <h2>{props.name}</h2>
      <h2>{props.rollno}</h2>
      <h2>{props.class}</h2>
      <h2>{props.section}</h2>
      </div>
  )
}
```
How to use these reusable components with props? 
```HTML
<Student name="Tushar Rajpoot" rollno="24" class="12th" section="B1" />
```
When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.




<hr>
<h1 id="mapping"> Mapping Components </h1>
Mapping components make it easy for us to
map all of individual custom pieces of data to each of these custom components.

```HTML
<Card
    name={contacts[0].name}
    img={contacts[0].imgURL}
    tel={contacts[0].phone}
    email={contacts[0].email}
/>
<Card
    name={contacts[1].name}
    img={contacts[1].imgURL}
    tel={contacts[1].phone}
    email={contacts[1].email}
/>
```
we don't need now to repeat these components

## Map function
map function is a Javascript function that's really useful for handling arrays such as our contacts
array.

like this array currently contains three items. And each of these are a Javascript object with
the same properties but different values.
```javascript
const contacts = [
  {
    id: 1,
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    id: 2,
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    id: 3,
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];
```

### use map function for using this array for rendering its items
This map function as the input
the thing that should go inside these parentheses, it expects an actual function.
So in this case we're calling a function and then passing it a function.

```javascript
arr.map((element)=>console.log(element))
```

### functional programming
where instead of
passing values around your code, you're passing functions into functions even into functions.

Now we use map function for rendering our contact cards from contact array--

make a createCard function that returns card with props of passed argument

```javascript
const createCard = (element)=>{
  return <Card name={element.name} />
}
```


add map function instead of many card components like this
```JSX
{contacts.map(createCard)}
```


what the map function does is it loops through this
array of contacts
and for every single item that exists in the array, it calls the createCard function and it passes over
each of the objects inside the array.

we can also do the same thing  like this
```javascript
{contacts.map((contact)=>{
    return <Card name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email} 
    />
    })
}
```

### key property
we will have to give components a property that has to be
called key. And this property has to be something that is unique amongst each of these card components
that's being created using this loop.

```HTML
{contacts.map((contact)=>{
    return <Card
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email} 
    />
    })
}
```

key prop has to be spelt exactly like this and it's expected by React. And the value can be
a string or it can be a number, but it must be unique across all of the repeated components.


key property for each React component is a special property.
And it's used to ensure the right order of items goes into the tree, We can't use it as a prop.


<hr>
<h1 id="es6-functions"> Map/Reduce/Filter ES6 functions</h1>

we will look at some of the related functions
that help us deal with arrays such as map, filter, reduce find, and find index.

## map() function
<b>Create a new array by doing something with each item in an array.</b>

let's look at this array I have of numbers
```javascript
let numbers = [12,34,56,545];
const double = (n)=>{
    return  n*2;
}
let newNumbers = numbers.map(double);
```

If I pass this function double into my map function, then it's going to loop through my numbers array
and for each of the numbers in there it's going to put it as the input of this function and output a
new array with each item replaced with double the size of the previous one.

#### How to do the same thing using foreach method
```javascript
let newNumbers = [];
numbers.foreach((n)={
    newNumbers.push(n*2);
})
```

So it's more concise using map because this function itself actually returns an output
which is a new array.


## Filter function
Create a new array by keeping the items that return true.
```javascript
const num = [2,3,5,7,12,45,34];
const newArr = num.filter((e)=>e<10)
console.log(newArr)
```
Do the same thing with foreach--
```javascript
let newArr = [];
num.forEach((e)=>{
  if(e<10){
    newArr.push(e)
  }
})
```

## Reduce Function
Accumulate a value by doing something to each item in an array.

get sum of all elements in an array using foreach
```javascript
let arr = [1,2,53,7765,3,5];
let sum = 0;
arr.foreach((num)=>{
    sum+=num;
})
```
Do the same thing using reduce function
```javascript
let sumOfnum = num.reduce(function(Accumulator, currentnumber){
  return Accumulator+currentnumber;
})
```

## Find 
Find the first item that matches from an array.

```javascript
let findnum = numbers.find((e)=>e>10);
```

## FindIndex - 
find the index of the first item that matches.
```javascript
let findnum = numbers.findIndex((e)=>e>10)
// OR
findnum = numbers.findIndex((e)=>{
    return e>10;
})
```

## Arrow Functions

also known as the fat arrow.

Arrow functions allow us to write shorter function syntax:
```js
let hello = () => {
  return "Hello World!";
}
```

<hr>

<h1 id="conditional"> Conditional Rendering in React</h1>
what if we have to render a component based on the condition?<br>
As we know in JSX we can only use js expression inside curly braces but we can't use javascript statements and we can't use if/else statement inside our jsx code.<br>
so what we can do for this?
<br>
create a new function(or component) and return our jsx code conditionaly like this


```html
const RenderOrNot = ()=>{
  if(true){
    return(
      <h1>You are In</h1>
    )
  }
  else{
    return(
      <h1>No you can't go inside</h1>     
    )
  }
}
```

## Ternary Operator

```javascript
condition ? Do if true : Do if false
```

we can use ternary operator inside jsx code
```HTML
function App() {
  return (
    <div className="container">    
      {istrue ? <h1>You are in</h1> : <h1>You can't go inside</h1>}
    </div>
  );
}
```

## AND operator

### && in JS
<pre>
(Expression && Expression)
(x>2 && x<8)
</pre>

### && in React
<pre>
condition && Expression
true && expression
false && <del>expression</del>
</pre>

<hr>
<h1 id="state"> State in React </h1>
this is a really central concept to how React does things.<br>
The idea is that the UI(user interface )that somebody's looking at your website sees is a
function of the state of your app.

```javascript
let isDone = false;
function App(){
    return(
        <p style={isDone ? { textDecoration: "line-through" } : null}>Todo Task</p>
    )}
```


><br>
>we have a user interface that is dependent upon the value of a state variable.<br>
><br>

## Declarative programming
this kind of programming is often known as <b>declarative programming.</b> We're declaring
when we're writing our code how our user interface should look under different conditions dependent
upon the state.

## Imperative programming
this is what we've been doing all along
using Javascript.
```js
document.getElementById("root").style.textDecoration = "line-through";
```


<h1 id="usesate">Use State Hook</h1>

## What are hooks?
A way of being able to make our website interactive and actually have changeable state.

### we can't change rendered elements inside our jsx code
If we want to update we have to re-render all of this.
one way of doing this would be to call ReactDOM.render all over again inside our function(for changing elements ).
```JSX
var count = 0;
const increase = ()=>{
  count++;
  console.log("Got clicked")
}

ReactDOM.render(
  <div className="container">
    <h1>{count}</h1> 
    {
        // this will not gonna changed(value of count) because 
        // It has rendered once
    }
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);
```

So what we have to do for updating everytime button gets clicked is render elements everytime like this
```JSX
var count = 0;
const increase = ()=>{
  count++;
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
}
```

We have all of this repetition
that's not really doing anything for us.

## UseState hook

So how do people actually solve this problem using React?
Well this is where hooks come in. And there's a hook code useState that is perfect for this situation.
But one of the rules for using hooks is that you must use a hook inside a functional component.

>So we have to create a function that renders a component and then inside that function we can use hooks.

```javascript
function App() {

  const state = useState();

  function increase(){
    
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
```

if we console log our usestate variable value it will return like this
```
[undefined, ƒ bound dispatchAction()]
```

if we pass a value in our useState() hook like this
```js
const state = useState(0); // inside parentheses our starting state
// output- [0, ƒ bound dispatchAction()]
// we can get out starter state like this-
console.log(state[0]);
```

### Destructuring
 in JavaScript ES6 there's this concept called destructuring and what it allows you to do is to destructure a complex structure.
So the complex things in JavaScript are objects and arrays.

let's say we have an array like this one
```js
const students = ["Tushar", "Rahul","Sahul"];
```
We can destructure this array,so that instead of having this name students, we can use a set of square
brackets. like this and  then we can provide some names for each of the
elements inside the array ordered by their positions.
```js
const [student1, student2, student3] = ["Tushar", "Rahul","Sahul"];
```

> Note: only when working with arrays - arrays are declared using square brackets, so we also deconstruct them using a square bracket.


We can use this concept with our state like this
```js
const [count] = useState(0);
```
so count is our starter state now and now we can use or render our state like this--

```HTML
<h1>{count}</h1>
```

So how do we use this useState hook to update its value?

Well remember that we mentioned that this array that gets returned from this function has two items.
The first one is a value
and the second one is a function.
so lets give the function a name like this-
```js
const [count, setCount] = useState(0);
```

and now we can use this function for interactivity in our starter state
```js
function App() {
  const [count, setCount] = useState(0);
  function increase(){
    setCount(12)
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
```
now if we want to increase our starter state by 1 on pressing the button so we can do like this
```js
function increase(){
    setCount(count+1)
  }
```

<hr>

<h1 id="destructuring"> Destructuring Assignment in JavaScript</h1>
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

```
## Object destructuring
Basic assignment

```js
const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true
```
lets destructure this array of objects
```js
cars = [
  {
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5
    }
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];
```
```js
let [honda, tesla] = cars
let {speedStats: {topSpeed: hondaTopSpeed}} = honda;
let {speedStats:{topSpeed: teslaTopSpeed}} = tesla;
let {coloursByPopularity:[hondaTopColour]} = honda;
let {coloursByPopularity:[teslaTopColour]} = tesla;
```

<hr>

<h1 id="handling"> Handling events in React</h1>

let's say we have a function 

```js
const clicked =()=>{
    console.log("Clicked")
  }
```

and we can use this function to handle onclick event like this
```js
<button onClick={clicked}>Submit</button>
```

if we have to change some content on the page after clicking the button, then we can use our useState hook like this
```js
const [headingText, setHeadingText] = useState("Hello");

  const clicked =()=>{
    console.log("Clicked")
    setHeadingText("Hello Tushar")
  }
```

><a href="https://codesandbox.io/s/event-handling-in-react-forked-usorr?file=/src/components/App.jsx">See this sandbox for more about handling events </a>

<hr>

<h1 id="components">Class Components vs Functional Components </h1>

once upon a time, there were two ways of adding state into a React app.
One way or what you might call functional components, look like this.

```js 
function App(){
  return(
    <h1>Hello</h1>
  )
}
```

there's also another way that you can in fact create React components. Instead of splitting
individual components into functions,
you can also create a class. And the only difference is the keyword, instead of function becomes class.

Classes are not called, so they don't have these parentheses.
And this class must extend something that comes from the React module something called component.
And this turns your app class into a React component class. And in order to render what you want to see
inside this component, you have to add your code inside a render method.
```js
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```
in the past, the main reason why people converted their functional components into class components
was because it was required in order to have state.
<a href="https://reactjs.org/docs/state-and-lifecycle.html">State and Lifecycle</a>

## Converting a Function to a Class
You can convert a function component like Clock to a class in five steps:
<ol>
<li>Create an ES6 class, with the same name, that extends React.Component.
<li>Add a single empty method to it called render().
<li>Move the body of the function into the render() method.
<li>Replace props with this.props in the render() body.
<li>Delete the remaining empty function declaration.
</ol>

```js
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
// OR
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

So what does managing state using classes actually look like?

Counter app using class component
```js
import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
```
counter app using functional component and hooks
```js
function FunctionalComponent() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
```
>what the React team recommends is that if you're writing new code that you should start using hooks instead of classes because this is a much easier way of managing state.

>you can only use hooks with functional components. You can't use it inside a class component.



















> <br>
> Tushar Rajput<br>
> <a href="https://tush-tr.github.io/">tush-tr.github.io</a>
> <br>
><br>
