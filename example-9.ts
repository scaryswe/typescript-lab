// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape

// Import Kaiju and KaijuType from example-8.js

// Fix the rampage function so it makes use of the KaijuType enum

import { Kaiju, KaijuType } from "./example-8";

function rampage(kaiju: Kaiju, city: string): string {
  const { name, type, power } = kaiju;
  let action: string;
  switch (type) {
    case KaijuType.Ape:
      action = "smash";
      break;

    case KaijuType.Lizard:
      action = "burn";
      break;

    case KaijuType.Flying:
      action = "flap";
      break;
  }
  let result = `${name} ${action} over ${city} causing ${
    power * 10000
  } damage!`;
  return result;
}

const gojira = new Kaiju("Gojira", 90, KaijuType.Lizard);
// Define two more monsters

console.log(rampage(gojira, "tokyo"));
// Set the new monsts to rampage in a city
