"use strict";
// ===== Part 1: Variables =====
const storeName = "ElectroShop";
const storeDescription = "Electronic online store";
const currency = "USD";
let productsCount = 5;
let isOpen = true;
// ===== Part 3: Arrays =====
let productNames = ["Laptop", "Mobile", "Headphones", "Keyboard", "Mouse"];
// multi-type array
let productInfo = ["Laptop", 650, true];
// ===== Part 4: Conditions and Loops =====
if (isOpen) {
    console.log("The store is open");
}
else {
    console.log("The store is closed");
}
let price = 650;
if (price > 500) {
    console.log("Expensive Product");
}
else if (price >= 100) {
    console.log("Medium Price");
}
else {
    console.log("Affordable Product");
}
for (let i = 0; i < productNames.length; i++) {
    console.log(productNames[i]);
}
let prices = [650, 300, 75, 45, 120];
let count = 0;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 100) {
        count++;
    }
}
console.log("Products more than 100: " + count);
// ===== Part 5: Functions =====
function calculateDiscount(price, discount) {
    return price - (price * discount) / 100;
}
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
function displayStoreMessage(message) {
    console.log(message);
}
console.log(calculateDiscount(200, 10)); // 180
console.log(checkProductAvailability(3)); // In Stock
displayStoreMessage("Welcome to ElectroShop");
// ===== Part 6: Optional and Default Parameters =====
function displayProductInfo(name, price, description, currency = "USD") {
    console.log("Name: " + name);
    console.log("Price: " + price + " " + currency);
    if (description) {
        console.log("Description: " + description);
    }
}
displayProductInfo("Mouse", 20);
displayProductInfo("Laptop", 650, "Core i5, 8GB RAM", "JOD");
// ===== Part 7: Rest Parameter =====
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total = total + prices[i];
    }
    return total;
}
console.log(calculateTotalPrice(100, 200, 50, 150)); // 500
// ===== Main Task: Load Products =====
let products = [
    { name: "Laptop", description: "Core i5, 8GB RAM", price: 650 },
    { name: "Headphones", description: "Wireless Bluetooth headphones", price: 75 },
    { name: "Keyboard", description: "Mechanical gaming keyboard", price: 45 }
];
function loadProducts() {
    let container = document.getElementById("products");
    container.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        container.innerHTML += "<h3>" + products[i].name + "</h3>"
            + "<p>" + products[i].description + "</p>"
            + "<p>Price: " + products[i].price + " " + currency + "</p>";
    }
}
