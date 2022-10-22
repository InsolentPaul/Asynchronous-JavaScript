let store = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Penuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${store.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};

// Pyramid of Doom (Callback Hell!)
let production = () => {
  setTimeout(() => {
    console.log("Production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${store.Liquid[0]} and ${store.Liquid[1]} was added`);
        setTimeout(() => {
          console.log("Machine was started");
          setTimeout(() => {
            console.log(`Ice Cream was placed in ${store.Holder[0]}`);
            setTimeout(() => {
              console.log(`${store.Toppings[0]} was added`);
              setTimeout(() => {
                console.log("Ice Cream ready");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);
