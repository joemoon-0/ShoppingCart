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

const displayWindow = document.getElementById("displayWindow");

// STORE ITEM INVENTORY
const inventory = [
  {
    productID: 1,
    img_src: "/images/bigbird.png",
    name: "Big Bird",
    description: "Today is brought to you by the letter 'B' for 'Buy Me!'",
    price: 11.99,
  },
  {
    productID: 2,
    img_src: "/images/cookiemonster.png",
    name: "Cookie Monster",
    description: "Cookie Cookie Cookie starts with C!",
    price: 9.99,
  },
  {
    productID: 3,
    img_src: "/images/elmo.png",
    name: "Elmo",
    description: "I'm not the tickling kind!",
    price: 9.99,
  },
  {
    productID: 4,
    img_src: "/images/ernie.png",
    name: "Ernie",
    description: "Umm... Hey Bert!",
    price: 10.99,
  },
  {
    productID: 5,
    img_src: "/images/grover.png",
    name: "Grover",
    description: "I'm just a cute, furry little monster!",
    price: 8.99,
  },
  {
    productID: 6,
    img_src: "/images/oscar.png",
    name: "Oscar the Grouch",
    description: "I love trash!",
    price: 12.99,
  },
  {
    productID: 7,
    img_src: "/images/thecount.png",
    name: "The Count",
    description: "One! Ha Ha Ha! Twoo! Ha! Ha! Ha!",
    price: 11.99,
  },
];

// Display inventory to UI
function displayInventory() {
  inventory.forEach((item) => {
    let itemDiv = document.createElement("div");
    itemDiv.className = "itemDisplay";

    let productImage = document.createElement("img");
    productImage.className = "itemImg";
    productImage.src = item.img_src;
    productImage.alt = item.description;
    itemDiv.append(productImage);

    let productName = document.createElement("p");
    productName.textContent = `${item.name}: $${item.price}`;
    itemDiv.append(productName);

    let productDescription = document.createElement("p");
    productDescription.textContent = item.description;
    itemDiv.append(productDescription);

    displayWindow.append(itemDiv);
  });
}

// Add: When the user selects an item, the shopping cart should add the item.
function addItem() {}

// Remove: Add functionality so that a user may also remove an item from the shopping cart.
function removeItem() {}

// Select: Adds and item to the shopping cart when clicked by the user
function selectItem() {}

displayInventory();
