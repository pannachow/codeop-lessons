/*------------------
1)
The loop is currently printing
the index of the person array.
Switch it so it is printing
the values instead.
------------------*/
const person = ["Sofia", 30, "Barcelona", true];

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}

/*------------------
2)
Write a loop that prints all
the values in pet.
------------------*/

const pet = ["Spot", 2, "dog", "spotted"];

for (let i = 0; i < pet.length; i++) {
  console.log(pet[i]);
}

/*------------------
3)
Create an array called "features" and
add at least four items to it.

Then, print all the features
in ONE statement instead of one at
a time. Using a loop, add each value
to the "carFeatures" string.

Bonus: add a comma between each feature
so it more closely resembles a real
sentence when it prints.
------------------*/

const features = ["red", "BMW", "Germany", 1994];
let carFeatures = "The features of the car are: ";

for (let i = 0; i < features.length; i++) {
  carFeatures += features[i];
  if (i === features.length - 1) {
    carFeatures += ".";
  } else {
    carFeatures += ", ";
  }
}

console.log(carFeatures);


/*------------------
4)
Write a loop that prints all
the items in the nums array
backwards (ie: start with 10 and
end with 0).
------------------*/

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}

/*------------------
5)
Create a nested loop that prints
the numbers in the gridNum array
in order.
------------------*/

const gridNum = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
  [10]
];

for (let i = 0; i < gridNum.length; i++) {
  const innerArray = gridNum[i];
  for (let k = 0; k < innerArray.length; k++)
    console.log(innerArray[k]);
}

/*------------------
6)
Write a loop that prints
the Pokemon names.
------------------*/
const pokemons = [
  {
    pkdx_id: 1,
    name: "Bulbasaur",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    types: ["poison", "grass"]
  },
  {
    pkdx_id: 2,
    name: "Ivysaur",
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    types: ["poison", "grass"]
  },
  {
    pkdx_id: 3,
    name: "Venusaur",
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    types: ["poison", "grass"]
  },
  {
    pkdx_id: 4,
    name: "Charmander",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    types: ["fire"]
  }
];



// #1
let pokemonNames = "Pokemon names are: ";

const names = [];
for (let pokemon of pokemons) {
  names.push(pokemon.name);
}

pokemonNames += names.join(", ");
pokemonNames += ".";
console.log(pokemonNames);

/* #2
console.log(`Pokemon names are: ${pokemons.map(pokemon => pokemon.name).join(", ")}.`)
*/

/*------------------
7)
Now, create a nested loop
that prints all the "types" from
the pokemon array.
------------------*/

for (let pokemon of pokemons) {
  for (let type of pokemon.types) {
    console.log(type);
  }
}


/*------------------
8)
Create a loop that prints
the letters in alphabetical
order (you will have to use
three nested loops to do this).

Try to do this WITHOUT looking at the slides.
------------------*/

const letters = [
  [["A"], ["B"], ["C"]],
  [["D"], ["E"], ["F"]],
  [["G"], ["H"], ["I"]]
];

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  for (let j = 0; j < letter.length; j++) {
    const letter2 = letter[j];
    for (let k = 0; k < letter2.length; k++) {
      const letter3 = letter2[k];
      console.log(letter3);
    }
  }
}

/*------------------
9)
Create a nested loop to add each address
into the "allAddress" array. However,
instead of adding them in as objects, loop
through the objects to concatenate the values
into strings.

Your result should look like this:
["Carrer de CodeOp 42 Barcelona Spain", "Carrer de Tech 200 Madrid Spain", "Carrer de JSON Seville Spain"]

Hint: try creating a variable between the
loops to store each address string before
pushing it into the allAddress array.
------------------*/

const allAddresses = [];

const addressList = [
  {
    line1: "Carrer de CodeOp",
    line2: 42,
    city: "Barcelona",
    country: "Spain"
  },
  {
    line1: "Carrer de Tech",
    line2: 200,
    city: "Madrid",
    country: "Spain"
  },
  {
    line1: "Carrer de JSON",
    line2: 22,
    city: "Seville",
    country: "Spain"
  }
];

for (let i = 0; i < addressList.length; i++) {
  const address = addressList[i];

  let addressString = '';
  for (let key in address) {
    const value = address[key];
    addressString += value + " ";
  }

  allAddresses.push(addressString.trim());
}

console.log(allAddresses);

/*------------------
10)
Create a to do list for each
day of the week.

Your result should be an array
of strings that looks like this:

["Sunday's chores are: nothing.", "Monday's chores are: tidying, vacuuming, dishes.", "Tuesday's chores are: nothing.", (etcetera)]

Hint: to accomplish this, you will
need to combine a lot of the things you've
learned from previous activities. Go back
and look at them if you need help!
------------------*/

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const chores = {
  monday: ["tidying", "vacuuming", "dishes"],
  wednesday: ["laundry", "bills"],
  friday: ["dusting", "lawncare"]
};

const allChores = [];

for (let i = 0; i < daysOfWeek.length; i++) {
  const dayofweek = daysOfWeek[i];

  let dayChores = chores[dayofweek.toLowerCase()];
  if (typeof dayChores === "undefined") {
    dayChores = ["nothing"];
  }
  allChores.push(`${dayofweek}'s chores are: ${dayChores.join(", ")}.`);
}

console.log(allChores);
