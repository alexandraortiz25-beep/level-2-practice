// Day 2 — Object methods, this, and JSON
// Read each Example, then write YOUR truck's version under the TODOs.
// Label every console.log so you can explain each step.

// ---------- Step 1: A method that uses this ----------
// A method is a function that lives inside an object.
// Inside it, "this" means "the object I belong to".
// Example:
const exampleTruck = {
  name: "Taco Rocket",
  describe: function () {
    return "Welcome to " + this.name + "!";
  },
};
console.log("Step 1:", exampleTruck.describe());   // Welcome to Taco Rocket!

// TODO: Make an object for YOUR truck with a name and a describe() method that uses this.name.
// TODO: Log the result of calling describe().
const myTruck = {
name: "Alex's Coffee Truck",

describe: function() {
return "Welcome to " + this.name + "!";
}
};

console.log("My truck:", myTruck.describe());

// ---------- Step 2: Compare with an arrow function ----------
// Example:
const exampleArrowTruck = {
  name: "Ale's Coffee Truck",
  describe: () => {
    return "Welcome to " + this.name + "!";
  },
};
console.log("Step 2:", exampleArrowTruck.describe());   // the name is missing!

// TODO: Add an arrow-function version to YOUR truck and log it.
// TODO: Write one sentence in a comment: what went wrong with the arrow version?
// (Hint: arrow functions don't get their own "this".)
myTruck.describeArrow = () => {
return "Welcome to " + this.name + "!";
};

console.log("My arrow function:", myTruck.describeArrow());

// Arrow functions don't have their own "this", so they cannot access myTruck.name like regular functions.

// ---------- Step 3: JSON text → JavaScript ----------
// JSON is text that looks like an object. JSON.parse turns it into a real object.
// Example:
const exampleJson = '{"name": "taco", "price": 4.5}';
const exampleParsed = JSON.parse(exampleJson);
console.log("Step 3 text:", exampleJson);
console.log("Step 3 object:", exampleParsed);
console.log("Step 3 price:", exampleParsed.price);

// TODO: Write a JSON string for one of YOUR menu items. Parse it. Log one property.
const myMenuJson = '{"name": "Coffee", "price": 3}';

const myMenuParsed = JSON.parse(myMenuJson);

console.log("My JSON text:", myMenuJson);
console.log("My menu object:", myMenuParsed);
console.log("My menu price:", myMenuParsed.price);


// ---------- Step 4: JavaScript → JSON text ----------
// Example:
const exampleBack = JSON.stringify(exampleParsed);
console.log("Step 4:", exampleBack, typeof exampleBack);   // it's a string again

// TODO: Turn your parsed menu item back into a JSON string and log it with typeof.
const myMenuBack = JSON.stringify(myMenuParsed);

console.log("My JSON back:", myMenuBack, typeof myMenuBack);

// ---------- Extra practice (if you finish early) ----------
// 1. Make a second truck object with its own describe() method.
// 2. Pretty JSON: try JSON.stringify(yourItem, null, 2) and compare.
