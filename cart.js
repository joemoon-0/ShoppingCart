/*

Video 1: https://www.youtube.com/watch?v=ZWviNV7lpXo&feature=youtu.be
Video 2: https://www.youtube.com/watch?v=lTBvFQvgMz8&t=181s

http://students.jccc.edu/lisalfri/web124/124projects/final-option3/finalproject.html

1. Create the front-end functionality of shopping cart on a web page. 
    Write all code from scratch.

2. Note that you are only creating the front-end of the shopping cart. 
    A real, functioning shopping cart would allow the user to search for and select products to view and purchase from a server-side database. A real shopping cart would also also ask for payment information and submit the order data back to the server to complete the purchase. Your shopping cart will not be receiving nor sending data to the server. It will also not be asking for payment information. Include the following functionality in your shopping cart:

    - Add all shopping cart content to your web page using JavaScript.
    - Array of Objects: To simulate querying a server for data that is returned to the web page, store your product data in an array of custom JavaScript objects. Include at least five items for purchase. Include a product id, picture, a short name, a description, and a price for each item.
    - Create and append HTML elements: Use a JavaScript loop to read the data and information from the custom JavaScript objects to list the information on the web page.
    - Add: When the user selects an item, the shopping cart should add the item.
    - Remove: Add functionality so that a user may also remove an item from the shopping cart.
    - Drop-down List: Add some functionality with HTML <select> and <option> elements.
    - Total Calculation: The grand total should change based on adding or removing an item from the list or using the drop-down list.

3. Include a pleasing, mobile-first, responsive style sheet. Be sure your images are flexible.

4. Write your JavaScript in a readable manner, following common, modern web programming language styles. For example:
    - The opening { should be at the end of the line where the block starts.
    - Indent code blocks with two or three spaces.
    - If in doubt, check the Airbnb JavaScript Style Guide() {
    - Use let and const versus var.
    - Use arrow function notation versus function declarations and function expressions (optional but desired).
    - Use backticks (template literal notation) versus string concatenation (optional but desired).

5. As always, spell check all content and identify your name and the current date in all files using comments. In html files you may use the html meta tag, e.g. <meta name="author" content="John Doe">

6. Include all other "best practices" as documented below.
*/

/* 
Joe Moon 03/XX/21
Final Project
*/

"use strict";

const outerwrapper = document.getElementById("outerwrapper");

// STORE ITEM INVENTORY
inventory = [
  {
    // ITEM:
    productID: 001,
    img_src: "",
    img_alt: "",
    name: "",
    description: "",
    price: 1,
  },
  {
    // ITEM:
    productID: 002,
    img_src: "",
    img_alt: "",
    name: "",
    description: "",
    price: 1,
  },
  {
    // ITEM:
    productID: 003,
    img_src: "",
    img_alt: "",
    name: "",
    description: "",
    price: 1,
  },
  {
    // ITEM:
    productID: 004,
    img_src: "",
    img_alt: "",
    name: "",
    description: "",
    price: 1,
  },
  {
    // ITEM:
    productID: 005,
    img_src: "",
    img_alt: "",
    name: "",
    description: "",
    price: 1,
  },
];

// Display inventory to UI
function displayInventory() {
  inventory.foreEach((item) => {});
}

// Add: When the user selects an item, the shopping cart should add the item.
function addItem() {}

// Remove: Add functionality so that a user may also remove an item from the shopping cart.
function removeItem() {}

// Select: Adds and item to the shopping cart when clicked by the user
function selectItem() {}
