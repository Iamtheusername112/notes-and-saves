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

let contentDiv = document.getElementById("google-link");

console.log(contentDiv);

contentDiv.setAttribute("href", "http://www.google.com.");
console.log(contentDiv);
contentDiv.setAttribute("target", "_blank");
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

let pElement = document.createElement("p");
pElement.innerHTML = "Hi there! I am using JavaScript";

let body = document.getElementsByTagName("body")[0];
body.appendChild(pElement);
console.log(pElement);
// body.removeChild(pElement);

const button = document.getElementById("add-item-button");
console.log(buttton);

button.onclick = function () {
  console.log("Button was clicked");
};

// with event listeners

button.addEventListener("click", function () {
  console.log("clicked using event listener");
});

input.onchange = function () {
  console.log("input was changed");
};
