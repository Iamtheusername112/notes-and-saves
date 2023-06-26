// Searching for Elements by ID

// Before we can modify elements in our webpage, we may want to look for them so we can have a reference. We can find any HTML element in the document using JavaScript and the document object.

// We can access any element that has a particular ID attribute by using the getElementById method of the document object:

// let element = document.getElementById('some-id-goes-here');

//----- Remember that id must be a string, and it will return the first occurrence only.

// To change the content of an element, we can use the element.innerHTML property:

// index.js

// console.log("JS connected"); // <== just a quick check up to make sure js doc is connected properly

// TO GET THE ELEMENT FROM DOM YOU CAN USE "getElementById"
// let theCatDiv = document.getElementById("cat");

// console.log(theCatDiv); // <== what can you see in browser's console

// TO ADD TEXT TO DOM USE "innerHTML"
// theCatDiv.innerHTML = "I'm a cat";

// set the HTML content of "otherElement" to "I'm a cat"
// otherElement.innerHTML = theCatDiv.innerHTML;

// Elements attributes and content
// Once we have fetched an element using one of the above methods, we can also modify them. Here we are going to learn a few useful properties that we can manipulate to change the style, set a class name or an ID programmatically.

// Another useful element property is element.style, which allows us to change the styles from JavaScript.

// index.js
// ...

// theCatDiv.style.backgroundColor = "red";
// theCatDiv.style.border = "2px green solid";
// theCatDiv.style.fontSize = "50px";
// theCatDiv.style.marginTop = "30px";
// theCatDiv.style.paddingBottom = "30px";

// :warning: Note that the property names may differ from CSS; (i.e. backgroundColor instead of background-color).

// Example:

// html file

/* <div id="color-overlay"><h1 id="text-bg">RAVE</h1></div> */

// css file

// body {
//   padding: 0px;
//   margin: 0px;
//   background-image: url("https://static.pexels.com/photos/2143/lights-party-dancing-music.jpg");
//   width: 100%;
//   height: 100vh;
//   background-size: cover;
// }

// #color-overlay {
// width: 100%;
// height: 100vh;
// opacity: 0.8;
// text-align: center;
// color: #fff;
// }

// #text-bg {
// line-height: 100vh;
// font-size: 80px;
// margin: 0px;
// font-family: Verdana;
// }

// Javascript file
// Generates a random color in hexadecimal (ie. #62b9cc)
// function generateRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// // Changes the color of the background using STYLE
// function changeBackgroundColor() {
//   var colorBg = document.getElementById("color-overlay");
//   colorBg.style.backgroundColor = generateRandomColor();
// }

// function changeBackgroundText() {
//   var textBg = document.getElementById("text-bg");
//   if (textBg.innerHTML == "RAVE") {
//     textBg.innerHTML = "OR";
//   } else if (textBg.innerHTML == "OR") {
//     textBg.innerHTML = "DIE";
//   } else if (textBg.innerHTML == "DIE") {
//     textBg.innerHTML = "RAVE";
//   }
// }

// function changeBackground() {
//   changeBackgroundColor();
//   changeBackgroundText();
// }

// Run this function every 300ms
// setInterval(changeBackground, 300);
// ---------------------------------------------------------------------

// Accessing Elements by Class Name

// document.getElementsByClassName() returns an array of all child elements which have all of the given class names.

// let elements = document.getElementsByClassName(names);

// example
// index.js
// ....

// let mice = document.getElementsByClassName("mouse");
// console.log(mice); // <== HTMLCollection(3) [div.mouse, div.mouse, div.mouse]
// ----------------------------------------------------------------------------------------------

// HTML Collections
// The HTMLCollection represents a generic collection (array-like object) of elements.

// In the .getElementsByClass() case, it will return the collection with all the elements that have the className we are looking for. It is important to notice, that the collection will be ordered in the same index it appears on the DOM.

// An HTMLCollection in the HTML DOM is live; it is automatically updated when the document is changed.

// Iterate over an HTML Collection
// The HTMLCollection is an array-like object but is not an array. So we can’t use the array methods like forEach, map, push, etc.

// To iterate over an HTMLCollection, we should use a for loop.

// :heavy_check_mark: Another option we have is to turn our HTML collection into an array, using spread operator [...] or any other approach to copy the array (we learned 4-5 of them, remember :wink:).

// index.js
// ...
// let miceArray = [...mice];

// console.log(miceArray); // <== [div.mouse, div.mouse, div.mouse]

// A List of DOM Properties and Methods
// Here is a list of some more DOM Properties and DOM Methods for you to refer to

// Property / Method	Description
// element.attributes -----	Returns a NamedNodeMap of an element’s attributes
// element.childNodes----	Returns a collection of an element’s child nodes (including text and comment nodes)
// element.children-----	Returns a collection of an element’s child element (excluding text and comment nodes)
// element.classList :heart:---	Returns an array with the class name(s) of an element
// element.className---	Sets or returns the value of the class attribute of an element
// element.clientHeight :heart:---	Returns the height of an element, including padding
// element.clientLeft	---Returns the width of the left border of an element
// element.clientTop	----Returns the width of the top border of an element
// element.clientWidth :heart:----	Returns the width of an element, including padding
// element.contains()	----Returns true if a node is a descendant of a node, otherwise false
// element.contentEditable	--Sets or returns whether the content of an element is editable or not
// element.firstChild	---Returns the first child node of an element
// element.firstElementChild---	Returns the first child element of an element
// element.focus()---	Gives focus to an element
// element.getAttribute() :heart:---	Returns the specified attribute value of an element node
// element.getAttributeNode()----	Returns the specified attribute node
// element.getElementsByClassName()	------Returns a collection of all child elements with the specified class name
// element.getElementsByTagName()-----	Returns a collection of all child elements with the specified tag name
// element.getFeature()-----	Returns an object which implements the APIs of a specified feature
// element.hasAttribute()	----Returns true if an element has the specified attribute, otherwise false
// element.hasAttributes()----	Returns true if an element has any attributes, otherwise false
// element.hasChildNodes()----	Returns true if an element has any child nodes, otherwise false
// element.id	----Sets or returns the value of the id attribute of an element
// element.isEqualNode()	----Checks if two elements are equal
// element.isSameNode()----	Checks if two elements are the same node
// element.lastChild	---------Returns the last child node of an element
// element.lastElementChild	------Returns the last child element of an element
// element.nextSibling-----------------	Returns the next node at the same node tree level
// element.nextElementSibling	------------Returns the next element at the same node tree level
// element.nodeName	----------Returns the name of a node
// element.nodeValue	--------Sets or returns the value of a node
// element.offsetHeight	--------------Returns the height of an element, including padding, border and scrollbar
// element.offsetWidth	------Returns the width of an element, including padding, border and scrollbar
// element.offsetLeft	----------Returns the horizontal offset position of an element
// element.offsetParent-------------	Returns the offset container of an element
// element.offsetTop--------	Returns the vertical offset position of an element
// element.parentNode :heart:--------	Returns the parent node of an element
// element.parentElement	--------------Returns the parent element node of an element
// element.previousSibling-----------------	Returns the previous node at the same node tree level
// element.previousElementSibling	-------Returns the previous element at the same node tree level
// element.querySelector() :heart:	--------------Returns the first child element that matches a specified CSS selector(s) of an element
// element.querySelectorAll() :heart:	--------Returns all child elements that matches a specified CSS selector(s) of an element
// element.removeAttribute()	-----Removes a specified attribute from an element
// element.removeAttributeNode()	----Removes a specified attribute node, and returns the removed node
// element.removeChild()	---Removes a child node from an element
// element.replaceChild()----	Replaces a child node in an element
// element.removeEventListener()	--- Removes an event handler that has been attached with the addEventListener() method
// element.scrollHeight	------------Returns the entire height of an element, including padding
// element.scrollLeft-----------	Sets or returns the number of pixels an element’s content is scrolled horizontally
// element.scrollTop	-----Sets or returns the number of pixels an element’s content is scrolled vertically
// element.scrollWidth	----Returns the entire width of an element, including padding
// element.setAttribute()	----Sets or changes the specified attribute, to the specified value
// element.setAttributeNode()------	Sets or changes the specified attribute node
// element.style :heart:	-----Sets or returns the value of the style attribute of an element
// element.tabIndex	-----Sets or returns the value of the tab index attribute of an element
// element.tagName----	Returns the tag name of an element
// element.textContent	----Sets or returns the textual content of a node and its descendants
// element.title	----Sets or returns the value of the title attribute of an element
// element.toString()	---Converts an element to a string
// nodelist.item()	-----------Returns the node at the specified index in a NodeList
// nodelist.length	---------Returns the number of nodes in a NodeList

// ------------------------------------------------------------------------------------------

// Changing the value of an element’s attribute

// element.setAttribute(name, value);

// Example

// In this method, id is the name of the attribute as a string and the value is the desired new value of the attribute. The .setAttribute() method returns undefined.

// index.js
// let paragraph = document.getElementById("paragraph");
// paragraph.setAttribute("id", "info-paragraph");
// ------------------------------------------------------------------------

// ime to practice (1)
// Set the href attribute of the a element identified as google-link to http://www.google.com.

// Creating a new element’s attribute

// The .setAttribute() method is very useful for creating new attributes. When we call the method, it will look for the attribute specified in the first parameter name in the element. If the attribute is found, it will change the value. If not, it will create a new attribute using the name and the desired value.

// let contentDiv = document.getElementById("google-link");

// console.log(contentDiv);

// contentDiv.setAttribute("href", "http://www.google.com.");
// console.log(contentDiv);
// contentDiv.setAttribute("target", "_blank");
// -------------------------------------------------------------------

// let paragraph = document.getElementById("paragraph");
// paragraph.removeAttribute("id");
// paragraph.setAttribute("class", "paragraph");

// let h2Tag = document.createElement("h2");
// h2Tag.innerHTML = "Hello world";

// let body = document.getElementsByTagName("body")[0];
// body.appendChild(h2Tag);
// console.log(h2Tag);

// console.log(h2Tag);

// let pElement = document.createElement("p");
// pElement.innerHTML = "Hi there! I am using JavaScript";

// let body = document.getElementsByTagName("body")[0];
// body.appendChild(pElement);
// console.log(pElement);
// // body.removeChild(pElement);

// const button = document.getElementById("add-item-button");
// console.log(buttton);

// button.onclick = function () {
//   console.log("Button was clicked");
// };

// // with event listeners

// button.addEventListener("click", function () {
//   console.log("clicked using event listener");
// });

// input.onchange = function () {
//   console.log("input was changed");
// };

// script.js

// const box = document.getElementById("box");

// let topPosition = 100;
// let leftPosition = 100;

// box.style.position = "absolute";
// box.style.backgroundColor = "blue";
// box.style.width = "50px";
// box.style.height = "50px";
// box.style.left = `${leftPosition}px`;
// box.style.top = `${topPosition}px`;

// document.addEventListener("keydown", function (event) {
//   if (event.code === "ArrowLeft") {
//     leftPosition -= 50;
//     box.style.left = `${leftPosition}px`;
//   } else if (event.code === "ArrowRight") {
//     leftPosition += 50;
//     box.style.left = `${leftPosition}px`;
//   } else if (event.code === "ArrowUp") {
//     topPosition -= 50;
//     box.style.top = `${topPosition}px`;
//   } else if (event.code === "ArrowDown") {
//     topPosition += 50;
//     box.style.top = `${topPosition}px`;
//   }
// });

// Your code here ...

// -------------------------------Object oriented programming learning-----------------

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.radius = 3;
// // circle[draw] = function draw2() {
// //   console.log(draw2);
// // };

// circle.draw();
// class Car {
//   constructor(name, model, year, color) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// Creating a method helps to access the individual elements of the Car class
// Note also that "method" here simply means a function,, so creating a method means creating s function.
// So to access the individual properties of the car class, we will create methods according to the property we are trying to access, for instance lets start by accessing the name of the car, the follwed by the model, the year and the color.
// ----------------------------------------------------------------------------------------------------

//   getName() {
//     return this.name;
//   }

//   getModel = () => {
//     return this.model;
//   };

//   getYear() {
//     return this.year;
//   }

//   getColor = () => {
//     return this.color;
//   };

//   addCar(Car2) {
//     this.Car.push(Car2);
//   }
// }

// const Car1 = new Car("Audi", "A690", 2018, "Red");

// const Ford = new Car("Ford", "FRD-2452", 2020, "Blue");
// Car.addCar(Ford);
// console.log(Car1.getModel());

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log("Even number");
//   } else console.log("Odd number");
// }

// evenOrOdd();

// How to solve anagramic eamples

// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

// function anagramCounter (wordsArray) {

//   let wordA;
//   let wordB;
//   let counter = 0;

//   for (let i = 0; i < wordsArray.length; i++){
//      wordA = wordsArray[i].split("").sort().join("");

//      for (let j = i + 1; j < wordsArray.length; j++){
//      wordB = wordsArray[j].split("").sort().join("");
//     if(wordA === wordB) {
//       counter++;
//     };
//   }

//   }

//   return counter;
// }

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

/*string of digits --const String = "12345678";
 */

// -------------------------JAVASCRIPT PROMISES---------------------------------------------

// function func1() {
//   console.log("HI");
// }

// function func2() {
//   console.log("Goodbye");
// }

// func1();
// func2();

// const directions = [
//   "Starting point: Ironhack Madrid",
//   "➔ Turn right toward P. de la Chopera",
//   "← At the roundabout, take the 1st exit onto P. de la Chopera",
//   "* Lune Creperie P. de la Chopera 33, Madrid",
// ];

// function obtainDirections(step) {
//   return new Promise(function (resolve, reject) {
//     // setTimeout(() => {
//     console.log(directions[step]);

//     if (!directions[step]) reject("Instructions not found.");
//     else resolve();
//     // }, 2000);
//   });
// }

// obtainDirections(0)
//   .then(() => obtainDirections(1))
//   .then(() => obtainDirections(2))
//   .then(() => obtainDirections(3))
//   .then(() => console.log("You arrived at your destination!"))
//   .catch((err) => console.log(err));

// const pr7 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("A"), 2000);
// });

// pr7
//   .then((value1) => {
//     console.log("1. then(): ", value1);
//     throw new Error("FIRST ERROR");
//   })
//   .catch((err) => {
//     console.error("1. catch(): ", err);
//     return "Hello from catch";
//   })
//   .then((value2) => {
//     console.log("2. then(): ", value2);
//     throw new Error("SECOND ERROR");
//   })
//   .catch((err) => {
//     console.error("2. catch(): ", err);
//   });

// let promise = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve("sucess!");
//   }
//   reject("Failed!!");
// });

// promise
//   .then((message) => {
//     console.log("This is the" + message);
//   })
//   .catch((message) => {
//     console.log("This is an error " + message);
//   });

// index.js

// async function displayMissionPatches() {
//   try {
//     const response = await fetch("https://api.spacexdata.com/v4/launches");
//     const jsonResponse = await response.json();
//

//     console.log("Parsed response: ", jsonResponse);
//   } catch (err) {
//     // Handle error or a rejected Promise
//     console.log("Something went wrong!", error);
//   }
// }

// displayMissionPatches();

// const displayMissionPatches = async (limit = 10) {
//   try {
//       const url = ("https://api.spacexdata.com/v4/launches");
//       const response = await fetch(url);
//       const data = await response.json();

//       const sliceData = data.slice(0, limit);
//       const app = document.getElementById("app");
//       const rocketList = document.createElement("ul");

//       sliceData.forEach((element) => {
//           const { name, links } = element;

//           const listItem = document.createElement("li");
//           const image = document.createElement("img");

//           imgElement.setAttribute("src", links.patch.small);

//           const title = document.createElement("h2");
//           title.textContent = name;
//           listItem.appendChild("image");
//           listItem.appendChild("title");
//           rockList.appendChild("listItem");

//       })

// }

// displayMissionPatches();

// async function displayMissionPatches(limit = 0) {
//   try {
//     const response = await fetch("https://api.spacexdata.com/v4/launches");
//     const jsonResponse = await response.json();

//     console.log(jsonResponse);
//     const launchesToDisplay = jsonResponse.slice(0, limit);

//     launchesToDisplay.forEach((launchObj) => {
//       const patchImage = launchObj.links.patch.small;
//       const imgElement = document.createElement("img");

//       imgElement.setAttribute("src", patchImage);
//       imgElement.setAttribute("width", 200);
//       document.body.appendChild(imgElement);
//       const { name, links } = element;

//       const listItem = document.createElement("li");
//       const image = document.createElement("img");

//       imgElement.setAttribute("src", links.patch.small);

//       const title = document.createElement("h2");
//       title.textContent = name;
//       listItem.appendChild(image);
//       listItem.appendChild(title);
//       rockList.appendChild(listItem);
//     });
//   } catch (error) {
//     // Handle error or a rejected Promise
//     console.log("Something went wrong!", error);
//   }
// }

// displayMissionPatches(10);

// async function displayMissionPatches(limit = 0) {
//   try {
//     const response = await fetch("https://api.spacexdata.com/v4/launches");
//     const jsonResponse = await response.json();

//     console.log(jsonResponse);
//     const launchesToDisplay = jsonResponse.slice(0, limit);

//     launchesToDisplay.forEach((launchObj) => {
//       const patchImage = launchObj.links.patch.small;
//       const imgElement = document.createElement("img");

//       imgElement.setAttribute("src", patchImage);
//       imgElement.setAttribute("width", 200);
//       document.body.appendChild(imgElement);
//     });
//   } catch (error) {
//     // Handle error or a rejected Promise
//     console.log("Something went wrong!", error);
//   }
// }

// displayMissionPatches(10);

// callback function

// function newfunc1(callback) {
//   console.log("i am always a new function");
//   //   console.log(newfunc1);
//   callback();
// }

// // newfunc1();

// function func2() {
//   console.log("treat me like a secod class citized, thanks");
// }
// // func2();

// newfunc1(func2);

// JAVASCRIPT PROMISES

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],

//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// // console.log(stocks.toppings[1]);

// let is_shop_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order(0000, () => console.log("production has started"));
//   })
//   .then(() => {
//     return order(2000, () => console.log("The fruit was chopped"));
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log("Machine was started"));
//   })
//   .then(() => {
//     return order(2000, () => console.log(`${stocks.holder[1]} was selected`));
//   })
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[1]} was selected`));
//   })
//   .then(() => {
//     return order(2000, () => console.log("Ice creame served"));
//   })
//   .catch(() => {
//     console.log("customer left");
//   })
//   .finally(() => {
//     console.log("Day is ended, shop closed");
//   });

// -----------------JAVASCRIPT ASYNC / await

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],

//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// let toppingsChoice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which toppings would you love"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log("A");
//   console.log("B");

//   await toppingsChoice();

//   console.log("C");
//   console.log("D");
//   console.log("E");
// }

// kitchen();

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],

//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// }

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`${stocks.Fruits[0]} was selected`);

//     console.log("Start the production");

//     await time(2000);
//     console.log("Cut fruit");

//     await time(1000);
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//     await time(1000);
//     console.log("Machine was started");

//     await time(2000);
//     console.log(`${stocks.holder[2]} was selected`);

//     await time(3000);
//     console.log(`${stocks.toppings[2]} was selected`);

//     await time(2000);
//     console.log("Ice creame was served");
//   } catch (error) {
//     console.log("Customer left", error);
//   } finally {
//     console.log("Day ended, shop is closed");
//   }
// }

// kitchen();

// console.log("Hello world");

// // after we installed "colors" npm package, we need to import it (require it)
// // in the file where we are planning to use it
// const myColors = require("colors/safe");

// console.log(myColors.yellow("hello")); // outputs green text
// console.log(myColors.red.underline("i like cake and pies")); // outputs red underlined text
// console.log(myColors.inverse("inverse the color")); // inverses the color
// console.log(myColors.rainbow("OMG Rainbows!")); // outputs text in colors of a rainbow
// console.log(myColors.trap("Run the trap")); // Outputs the text using the trap font

// const cows = require("cows");
// cows();

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

/**TO CREATE ROUTES FOR DIFFERENT PAGES USE THE TEMPLATE BELOW AND PASS IN THE PATH 
 * 
 * 
 * app.get("/about", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("Hello World!");
});


 * 
 */

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// destructuring

// const person = {
//   name: "francis",
//   age: 23,
//   city: "BERLIN",
// };

// console.log(person);

// ------------------------------------------------------------------------
// Destructuring Objects

// const data = {
//   name: {
//     firstName: "ana",
//     lastName: "marino",
//   },
//   isStudent: true,
//   favoriteFootballTeam: "fc barcelona",
//   hometown: {
//     city: "buenos aires",
//     country: "argentina",
//   },
// };

// Given the previous object data, use the object destructuring to be able to print student first and last name, favorite football club, as well as the city and the country this student is coming from.

// let {
//   name: { firstName, lastName },
//   isStudent,
//   hometown: { city, country },
// } = data;

// console.log(`${firstName} ${lastName}  ${city} ${country}`);

// Destructuring ARRAYS

// const [a, b] = [1];
// console.log(a * b); // <== ???

// const [a, b = 1] = [2];
// console.log(a * b); // <== ???

let [a, b = 2, c = 5, d = 1] = [3, 4];
console.log(a, b, c, d); // ==> ???
