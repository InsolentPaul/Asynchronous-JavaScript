// Promises
let store = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Penuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our Shop is closed"));
    }
  });
};

order(2000, () => console.log(`${store.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log("Production has started"));
  })

  .then(() => {
    return order(2000, () => console.log("The fruit was chopped"));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`${store.Liquid[0]} and ${store.Liquid[1]} was selected`)
    );
  })

  .then(() => {
    return order(1000, () => console.log("Start the machine"));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`Ice Cream was placed in ${store.Holder[0]}`)
    );
  })

  .then(() => {
    return order(3000, () => console.log(`${store.Toppings[0]} was selected`));
  })

  .then(() => {
    return order(1000, () => console.log("Ice Cream was served"));
  })

  .catch(() => {
    console.log("Customer Left");
  })

  .finally(() => {
    console.log("Day ended, shop is closed");
  });
