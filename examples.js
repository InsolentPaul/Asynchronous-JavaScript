// Synchronous system example
console.log(" I");
console.log(" eat");

setTimeout(() => {
  console.log(" ice cream");
}, 1000); // async function

console.log(" with");
console.log(" a spoon");

// Callbacks
function one(call_two) {
  call_two();
  console.log("Step 1 Complete. Step 2 Caliing.");
}
function two() {
  console.log("Step 2 is here");
}

one(two);
