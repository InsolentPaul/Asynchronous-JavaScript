// Async/Await Example
let store = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Penuts"],
};

let isShopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${store.Fruits[0]}`);

    console.log("Start the production");

    await time(2000);
    console.log("Cut the fruit");

    await time(1000);
    console.log(`${store.Liquid[0]} and ${store.Liquid[1]} was added`);

    await time(1000);
    console.log("Start the machine");

    await time(2000);
    console.log(`Ice Cream was put in ${store.Holder[0]}`);

    await time(3000);
    console.log(`${store.Toppings[0]} was selected`);

    await time(2000);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log("Customer left");
  } finally {
    console.log("Day ended, shop is closed");
  }
}

kitchen();
