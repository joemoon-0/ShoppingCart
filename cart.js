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

const itemsNum = document.getElementById("itemsNum");
const subtotal = document.getElementById("subtotal");
const deliveryMode = document.getElementById("deliveryMode");
const total = document.getElementById("total");
const inventoryWindow = document.getElementById("inventoryWindow");
const cartWindow = document.getElementById("cartWindow");
let inventoryItems; // nodelist of displayed inventory items
let shoppingCart = []; // object array of items in shopping cart
let runningSubtotal = 0;

// STORE ITEM INVENTORY
const inventory = [
  {
    productID: 0,
    img_src: "/images/bigbird.png",
    name: "Big Bird",
    description: "Today is brought to you by the letter 'B' for 'Buy Me!'",
    price: 11.99,
  },
  {
    productID: 1,
    img_src: "/images/cookiemonster.png",
    name: "Cookie Monster",
    description: "Cookie Cookie Cookie starts with C!",
    price: 9.99,
  },
  {
    productID: 2,
    img_src: "/images/elmo.png",
    name: "Elmo",
    description: "I'm not the tickling kind!",
    price: 9.99,
  },
  {
    productID: 3,
    img_src: "/images/ernie.png",
    name: "Ernie",
    description: "Umm... Hey Bert!",
    price: 10.99,
  },
  {
    productID: 4,
    img_src: "/images/grover.png",
    name: "Grover",
    description: "I'm just a cute, furry little monster!",
    price: 8.99,
  },
  {
    productID: 5,
    img_src: "/images/oscar.png",
    name: "Oscar the Grouch",
    description: "I love trash!",
    price: 12.99,
  },
  {
    productID: 6,
    img_src: "/images/thecount.png",
    name: "The Count",
    description: "One! Ha Ha Ha! Twoo! Ha! Ha! Ha!",
    price: 11.99,
  },
];

// DELIVERY OPTIONS
const deliveryOptions = [
  { name: "In-store Pickup", price: 0.0 },
  { name: "Standard (7 - 10 days)", price: 3.99 },
  { name: "Express (3 - 5 days)", price: 6.99 },
  { name: "Overnight", price: 13.99 },
];

// Load UI features
function loadUI() {
  // Load Delivery Options
  let deliveryLabel = document.createElement("label");
  deliveryLabel.htmlFor = "deliveryList";
  deliveryLabel.textContent = "Delivery: ";
  // deliveryLabel.className = "mobileLabel";
  deliveryMode.append(deliveryLabel);

  const deliverySelect = document.createElement("select");
  deliverySelect.id = "deliveryList";
  deliveryOptions.forEach((delOption) => {
    let newOption = document.createElement("option");
    newOption.value = delOption.price;
    newOption.textContent = `${delOption.name} - $${delOption.price}`;
    deliverySelect.append(newOption);
  });
  deliveryMode.append(deliverySelect);

  // Display Inventory
  inventory.forEach((item) => {
    let itemDiv = document.createElement("div");
    itemDiv.id = item.productID; // assigned for referencing
    itemDiv.className = "itemDisplay";

    let productImage = document.createElement("img");
    productImage.className = "itemImg";
    productImage.src = item.img_src;
    productImage.alt = item.description;
    itemDiv.append(productImage);

    let productName = document.createElement("p");
    productName.textContent = `${item.name}: $${item.price}`;
    productName.className = "itemName";
    itemDiv.append(productName);

    let productDescription = document.createElement("p");
    productDescription.textContent = item.description;
    itemDiv.append(productDescription);

    inventoryWindow.append(itemDiv);
  });

  inventoryItems = document.querySelectorAll(".itemDisplay");
}

// Add: When the user selects an item, the shopping cart should add the item.
function addItem(productID) {
  if (!inCart(productID)) {
    const selectedItem = inventory[productID]; // item reference call

    // DIV that holds each item (row) in shopping cart
    let itemDiv = document.createElement("div");
    itemDiv.id = `cart${selectedItem.productID}`;
    itemDiv.className = "cartDisplay"; // 5 column grid

    // Image - 1fr
    let selectedImage = document.createElement("img");
    selectedImage.src = selectedItem.img_src;
    selectedImage.alt = selectedItem.description;
    itemDiv.append(selectedImage);

    // Description - 1fr
    let selectedName = document.createElement("p");
    selectedName.className = "mobileDisp";
    selectedName.textContent = selectedItem.name;
    itemDiv.append(selectedName);

    // Price - 1fr
    let selectedPrice = document.createElement("p");
    selectedPrice.textContent = `$${selectedItem.price}`;
    itemDiv.append(selectedPrice);

    // Quantity - 1fr
    let quantitySpan = document.createElement("span");
    let itemLabel = document.createElement("label");
    itemLabel.htmlFor = `product${productID}`;
    itemLabel.textContent = "Quantity: ";
    itemLabel.className = "mobileLabel";
    quantitySpan.append(itemLabel);

    let itemQuant = document.createElement("input");
    itemQuant.className = "inputField";
    itemQuant.id = `product${productID}`;
    itemQuant.name = `product${productID}`;
    itemQuant.type = "number";
    itemQuant.min = 1;
    itemQuant.value = 1;
    quantitySpan.append(itemQuant);
    itemDiv.append(quantitySpan);

    let removeButton = document.createElement("button");
    removeButton.id = `button${productID}`;
    removeButton.className = "removeButtons";
    removeButton.textContent = "Remove";
    itemDiv.append(removeButton);

    // Total Calculation - 1fr
    let itemTotalPrice = document.createElement("p");
    itemTotalPrice.id = `product${productID}price`;
    itemTotalPrice.textContent = `$${currency(
      selectedItem.price * itemQuant.value
    )}`;
    itemDiv.append(itemTotalPrice);

    cartWindow.append(itemDiv);

    // Push shopping cart meta data to shoppingCart array
    const metadata = {
      productID: productID,
      itemPrice: selectedItem.price, // fixed
      itemQuantity: itemQuant.value, // only value that changes
    };
    shoppingCart.push(metadata);
    updateQuantity(productID, itemQuant.value);
  } else {
    // Item already in cart.  Get index of reselected item from shoppingCart array
    const cartIndex = shoppingCart.findIndex((meta) => {
      return meta.productID.indexOf(productID) > -1;
    });

    // Increment quantity and price
    let cartQuantity = document.getElementById(`product${productID}`);
    let newQuantity = +cartQuantity.value + 1;
    cartQuantity.value = newQuantity;

    let cartPrice = document.getElementById(`product${productID}price`);
    let newPrice = newQuantity * shoppingCart[cartIndex].itemPrice;
    cartPrice.textContent = `$${currency(newPrice)}`;

    // Update meta data
    shoppingCart[cartIndex].itemQuantity = newQuantity;
    updateQuantity(productID, newQuantity);
  }
}

// inCart: Checks if an inventory item is already in the shopping cart
function inCart(productID) {
  return shoppingCart.some((cartItemID) => {
    return cartItemID.productID == productID;
  });
}

// updateQuantity: registers changes in item quantity
function updateQuantity(productID, newQuantity) {
  let cartIndex = shoppingCart.findIndex((item) => {
    return item.productID.indexOf(`${productID}`) > -1;
  });
  shoppingCart[cartIndex].itemQuantity = newQuantity;
  updatePrice(productID, cartIndex);
}

// updatePrice: recalculates and displays price changes
function updatePrice(productID, cartIndex) {
  // Update shopping cart item prices
  const cartPrice = document.getElementById(`product${productID}price`);
  const updatedQuantity = shoppingCart[cartIndex].itemQuantity;
  const itemPrice = shoppingCart[cartIndex].itemPrice;
  cartPrice.textContent = `$${currency(updatedQuantity * itemPrice)}`;

  // Output Number of Items
  const calcItemNum = shoppingCart.reduce((sum, itemSum) => {
    return sum + +itemSum.itemQuantity;
  }, 0);
  itemsNum.textContent = calcItemNum;

  // Output subtotal
  const calcSubtotal = shoppingCart.reduce((sum, itemSum) => {
    return sum + itemSum.itemQuantity * itemSum.itemPrice;
  }, 0);

  runningSubtotal = currency(calcSubtotal);
  subtotal.textContent = `$${runningSubtotal}`;
  delivery(runningSubtotal);
}

// removeItem: allows items to be removed from the shopping cart.
function removeItem(productID) {
  const removeTarget = document.getElementById(`cart${productID}`);
  updateQuantity(productID, 0);
  removeTarget.remove();

  // remove item entry from shoppingCart array
  let removeIndex = shoppingCart.findIndex((item) => {
    return item.productID.indexOf(`${productID}`) > -1;
  });
  shoppingCart.splice(removeIndex, 1);
}

// currency: display a value amount to two decimals
function currency(amount) {
  return (Math.round(amount * 100) / 100).toFixed(2);
}

// delivery: factors in delivery fee into total price
function delivery(subtotal) {
  total.textContent = `${currency(+subtotal + +deliveryList.value)}`;
}

loadUI();

// ***** EVENT LISTENERS *****
// Listens for actions on the display window
inventoryItems.forEach((item) => {
  item.addEventListener(
    "click",
    () => {
      addItem(item.id);
    },
    false
  );
});

// Listens for quantity changes in the shopping cart list
cartWindow.addEventListener(
  "change",
  (e) => {
    if (e.target.classList.contains("inputField")) {
      updateQuantity(e.target.id.slice(-1), e.target.value);
    }
  },
  false
);

// Listens for item Remove actions
cartWindow.addEventListener(
  "click",
  (e) => {
    if (e.target.classList.contains("removeButtons")) {
      removeItem(e.target.id.slice(-1));
    }
  },
  false
);

// Listens for changes in delivery selection
deliveryMode.addEventListener(
  "change",
  (e) => {
    if (e.target.id == "deliveryList") {
      delivery(+runningSubtotal);
    }
  },
  false
);
