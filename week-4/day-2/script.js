// Week 4 Day 2 warm-up — Bootstrap cards made by JavaScript (about 20 minutes)
// JavaScript can add Bootstrap classes too. className sets an element's classes.

// TODO first: change this to YOUR truck's menu.
const menu = [
  { name: "Taco", price: 4.5 },
  { name: "Burrito", price: 9 },
  { name: "Nachos", price: 6.25 },
];

const area = document.getElementById("card-area");


// -------- Step 1 and Step 2 --------
menu.forEach((item) => {
const card = document.createElement("div");
card.className = "card p-3 bg-light shadow-sm";
card.textContent = `${item.name} - $${item.price.toFixed(2)}`;
area.appendChild(card);
});




// ---------- Extra practice (if you finish early) ----------
// Give cheap items (under $5) a different class than the others. (forEach + if)
