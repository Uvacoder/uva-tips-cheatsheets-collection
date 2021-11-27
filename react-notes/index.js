//   React Js is an open source view library created and maintained by Facebook.
//  It's a great tool to render the User Interface (UI) of modern web applications.
// React uses a syntax extension of Javascript called JSX that allows you to write HTML directly with Javascript.

// const JSX = ( <
//   div > {
//     " "
//   } <
//   h1 > Hello JSX < /h1>{" "} < /
//   div >
// );

// // 2 add comments in react js
// const JSX = ( <
//   div > {
//     " "
//   } {
//     /**Valid comment */
//   } <
//   h1 > This is a block of Jsx < /h1> <
//   p > Here 's a subtitle </p> < /
//   div >
// );

// const TypesOfFruits = ()=>{
//   return(

//       <div>
//         <h2>Fruits: </h2>
//          <ul>
//            <li>Apples</li>
//            <li>Blueberries</li>
//            <li>Bananas</li>
//          </ul>
//       </div>

//   );
// }

// const Fruits = ()=>{
//   return(
//     <div>
//       {/**render typesoffruit here*/}
//       <TypesOfFruits/>
//     </div>
//   )
// }
// class TypesOfFood extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         <h1>These are types of food:</h1>
//         <Fruits/>
//         </div>
//     )
//   }
// }

//  Using props
// const CurrentDate = (props)=>{
//   return(
//     <div>
//       <p>The current date is : {props.date}</p>
//     </div>
//   )
// };

// class Calender extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         <h1>This is the current Date:</h1>
//         <CurrentDate date= {Date()}/>
//       </div>
//     )
//   }
// }

//****Pass an array as a prop *******
// const ChildComponent = (props) => {
//   return (
//     <div>
//       <p>{props.colors.join(",")}</p>
//     </div>
//   );
// };

// ReactDOM.render(
//   <ChildComponent colors={["red,green,yellow"]} />,
//   document.querySelector("#render-here")
// );

// const List = (props)=>{
//   return(
//     <div>
//       <p>{props.tasks.join(",")}</p>
//     </div>
//   )
// }

// class Tasks extends React.Component {
//   constructor(props){
//     super(props)
//   }
//     render(){
//       return(
//         <div>
//           <h2>Tasks for today</h2>
//           <List tasks={["dog walk, beach"]}/>
//           <h2>Tomorrow:</h2>
//           <List tasks={["Code, Gym"]}/>
//         </div>
//       )
//     }
//   }

// ReactDOM.render(
//   <Tasks/>,
//   document.querySelector("#render-here")
// );

//******* Using default props **************
// const ShoppingCart = (props) => {
//   return (
//     <div>
//       <h1>Shoppinf Cart Component items: {props.item}</h1>
//     </div>
//   );
// };

// ShoppingCart.defaultProps = { item: 0 };

// ReactDOM.render(<ShoppingCart />, document.querySelector("#render-here"));

// const Items = (props)=>{
//   return (
//     <div>
//       <h1>
//         Current items in the cart: {props.quantity}
//       </h1>
//     </div>
//   )
// }

// Items.defaultProps = {quantity: 0}

// class ShoppingCart extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return(
//       <div>
//         <Items quantity= {10}/>
//       </div>
//     )
//   }
// }

// // ReactDom.render(<ShoppingCart/>, document.querySelector('#render-here'));
// ReactDOM.render(<ShoppingCart />, document.querySelector("#render-here"));

// ***** ProtoTypes to define props *****

//import PropTypes from 'prop-types';

// const Items = (props)=>{
//   return(
//     <div>
//        <h1> Current Items in the cart: {props.quantity} </h1>
//     </div>
//   )
// }

// Items.defaultProps = {quantity: 0}

// Items.propTypes = {
//   quantity: propTypes.number.isRequired;
// }

// class ShoppingCart extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return (
//       <Items quantity ={10}/>
//     )
//   }
// }

// ReactDOM.render(<ShoppingCart/>, document.querySelector("#render-here"));

//Access props in es6 class components

// class ReturnTempPassword extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <p>Your password is {(this.props.password = "Janetracy")}</p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ReturnTempPassword />, document.querySelector("#render-here"));

// this.state in classes

// class Component extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Name"
//     };
//   }

//   render() {
//     return ( <
//       div >
//       <
//       h1 > {
//         this.state.name
//       } < /h1> <
//       /div>
//     );
//   }
// }

// ReactDOM.render( < Component / > , document.querySelector("#render-here"));

//ES6 CLASS SYNTAX
/*
constructor(){
  this.property = value;
}

super(property);
*/
// class GreatMovies {
//   constructor(movie) {
//     this.movie = movie;
//   }

//   printMovie() {
//     return `My favorite movie is ${this.movie}`;
//   }
// }

// class GreatSeries extends GreatMovies {
//   constructor(movie, series) {
//     super(movie);
//     this.series = series;
//   }

//   printList() {
//     return `${this.printMovie()}, now I am watching ${
//       this.series
//     } series today.`;
//   }
// }
// const watchingList = new GreatSeries("The Social dilemma", "The Society");
// console.log(watchingList.printList());

// //ES7 CLASS SYNTAX
// class GreatMovies {
//   movie = movie;

//   printMovie = () => {
//     return `My favorite movie is ${this.movie}`;
//   };
// }
// const movie = new GreatMovies("The Social dilemma 😒 💕 ");
// movie.printMovie();
// class GreatSeries extends GreatMovies {
//   movie = movie;
//   series = series;

//   printList = () => {
//     return `${this.printMovie()}, now I am watching ${this.series} series today.`
//   }
// }

// const watchingList = new GreatSeries('The Social dilemma', 'The Society');
// console.log(watchingList.printList());

class GreatMovies {
  movie = "The Social dilemma";

  printMovie = () => {
    console.log(`My favorite movie is ${this.movie}`);
  };
}

class GreatSeries extends GreatMovies {
  movie = "The Social dilemma 🎥 ";
  series = "The Society";

  printList = () => {
    return `My favorite movie is ${this.movie} and now I am watching ${this.series} series today 🍹.`;
  };
}

const watchingList = new GreatSeries();
console.log(watchingList);
console.log(watchingList.printList());

//****************Spread and rest ****************

const person = {
  name: "jane",
};

const profileCard = {
  ...person,
  age: 20,
};

console.log(profileCard);

const profile = (...users) => {
  return users.filter((user) => user === "jane");
};

const results = profile("jane", "tracy", "Andrew", "Rachel");

console.log(results);

//How jsx is compiled
// function App() {
//   return (
//     <div className="App">
//       <h1>Learning React now! 👩‍💻</h1>
//     </div>
//   );

//   //The above jsx syntax is compiled into the code below
//   // return React.createElement('div', {
//   //   className: 'App'
//   // }, React.createElement('h1', null, 'Learning React now! 👩‍💻 '));
// }

// function App() {
//    return (
//       <div className='App'>
//          <h1>Learning React now! 👩‍💻</h1>
//          <Person name='Tracy' age='23' date={Date()} />
//          <Person name='Alssay Drake' age='22' date={Date()}>
//             {' '}
//             I am from The Society Series{' '}
//          </Person>
//       </div>
//    )
//    // return React.createElement('div', {
//    //   className: 'App'
//    // }, React.createElement('h1', null, 'Learning React now! 👩‍💻 '));
// }

// function name(name) {
//   console.log("Tracy 🚠 ");
// }
// name();

// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 5));

// const add = (a, b) => a + b;

// console.log(add(3, 5));

// const series = (favorite) => console.log(`I love watching ${favorite}`);
// series("The office");

// class GreatMovies {
//   movie = "The Social dilemma";

//   printMovie = () => {
//     console.log(`My favorite movie is ${this.movie}`);
//   };
// }

// const myMovies = new GreatMovies();
// myMovies.printMovie();

// const jobs = ["teacher 👩‍🏫 ", "engineer 🧰", "developer 👩‍💻"];

// const currentJobs = [
//   ...jobs,
//   "actor 🎥",
//   "social media influencer 📴",
//   "musician 🎻",
// ];

// console.log(currentJobs);

//output => ["teacher 👩‍🏫 ", "engineer 🧰", "developer 👩‍💻", "actor 🎥", "social media influencer 📴", "musician 🎻"]

// const currentJob = {
//   name: "Jane",
//   job: "developer 👩‍💻",
// };

// console.log(currentJob);

// const funnyJob = {
//   ...currentJob,
//   name: "Tracy",
//   PartTimejob: "musician 🎻",
// };

// console.log(funnyJob);

//output => {name: "Tracy", job: "developer 👩‍💻", PartTimejob: "musician 🎻"}

// const num = (...args) => {
//   return args.map((arg) => arg / 2);
// };
// const result = num(40, 60, 80, 120, 200, 300);
// console.log(result);

// output => [20, 30, 40, 60, 100, 150]

// const myFruits = (...fruits) => {
//   return fruits.filter((fruit) => fruit !== "🍌");
// };

// const result = myFruits("🍎", "🥝", "🍌", "🍍", "🍉", "🍏");

// console.log(result);

// const myFruits = ["🍎", "🥝", "🍌", "🍍", "🍉", "🍏"];
// [myFavorite, , listFavorite] = myFruits;
// console.log(myFavorite, listFavorite);

// const myJob = {
//   name: "Jane",
//   job: "developer 👩‍💻",
// };

// const { name, job } = { name: "Tracy", job: "musician 🎻" };
// console.log(name, job);

// const friends = [{
//     name: 'Jane 🌟',
//     age: 23
//   },
//   {
//     name: 'Bob 🥽',
//     age: 22
//   },
//   {
//     name: 'Tracy 🏌',
//     age: 24
//   },
//   {
//     name: 'Jack 🎸',
//     age: 25
//   },
//   {
//     name: 'Fred 🤾',
//     age: 25
//   }
// ];

// const filterAge = friends.filter(friend => friend.age > 23);
// console.log(filterAge);

// const mapNames = friends.map(friend => friend.name);
// console.log(mapNames);

// ["Jane 🌟", "Bob 🥽", "Tracy 🏌", "Jack 🎸", "Fred 🤾"]

const friends = [
  {
    name: "Bob 🥽",
    age: 22,
    hobby: "golf🏌",
    music: "rock 🎸",
  },
];

const result = (friends.age = 23);
console.log(result);

friends = [
  {
    name: "Jane 🥽",
    age: 24,
    hobby: "golf🏌",
    music: "Pop 🎸",
  },
];

console.log(friends);
