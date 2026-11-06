// Day 4 — Loops: for and forEach
// A loop runs the same code once for every item in a list.
// Tomorrow's graded work uses both loops, so practice them here.

// TODO first: replace this menu with YOUR truck's menu (keep the same shape).
const menu = [
{ name: "Coffee", price: 3 },
{ name: "Latte", price: 5 },
{ name: "Cappuccino", price: 4 },
{ name: "Iced Coffee", price: 4 },
];


// ---------- Step 1: A for loop ----------
// Example: log every item's name.
for (let i = 0; i < menu.length; i++) {
  console.log("for loop:", menu[i].name);
}

// TODO: Write a for loop that logs every item's PRICE.
for (let i = 0; i < menu.length; i++) {
console.log("Price:", menu[i].price);
}

// ---------- Step 2: forEach ----------
// Same job, shorter to write. forEach hands you each item, one at a time.
// Example:
menu.forEach(function (item) {
  console.log("forEach:", item.name);
});

// TODO: Use forEach to log a sentence for each item, like "Taco costs $4.5".
menu.forEach(function(item) {
console.log(item.name + " costs $" + item.price);
});

// ---------- Step 3: Put the menu on the page ----------
// Example: one item, made safely with createElement + textContent.
const list = document.getElementById("menu-list");
menu.forEach(function(item) {
const li = document.createElement("li");
li.textContent = item.name + " - $" + item.price;
list.appendChild(li);
});

// TODO: Use forEach to add an <li> for EVERY menu item, showing its name and price.
// Then delete the example <li> code above.


// ---------- Step 4: A loop that adds up ----------
// TODO: Use a for loop to add up every price into a total. Log the total.
// Hint: start with  let total = 0;  then add each price inside the loop.
let total = 0;

for (let i = 0; i < menu.length; i++) {
total = total + menu[i].price;
}

console.log("Total:", total);

// ---------- Extra practice (if you finish early) ----------
// 1. Count how many items cost less than $5 (a loop + an if).
// 2. Sneak peek at next week: what order do these two lines log in? Guess, then try it.
//    setTimeout(function () { console.log("Order up!"); }, 2000);
//    console.log("Taking your order...");

let count = 0;

for (let i = 0; i < menu.length; i++) {
if (menu[i].price < 5) {
count++;
}
}

console.log("Items under $5:", count);

setTimeout(function () {
console.log("Order up!");
}, 2000);

console.log("Taking your order...");