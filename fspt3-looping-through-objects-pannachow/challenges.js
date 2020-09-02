/*------------------
1)
The loop is currently printing
the keys of the person object.
Switch it so it is printing
the values instead.
------------------*/
const person = {
  name: "Sofia",
  age: 30,
  location: "Barcelona",
  hairColor: "brown",
  coder: true
}

for (let features in person) {
  console.log(person[features]);
}

/*------------------
2)
Write a loop that prints all the values
in pet: ("Spot", 2, "dog", "brown").
------------------*/

const pet = {
  name: "Spot",
  age: 2,
  animal: "dog",
  color: "brown",
}

for (let key in pet) {
  console.log(pet[key]);
}
/*------------------
3)
Add at least FOUR properties
to the car object.

Then, create a loop that prints
the values of the car object
to the console.
------------------*/

const car = {
  color: "black",
  year: 1994,
  brand: "BMW",
  horsePowers: 100,
};

for (let key in car) {
  console.log(car[key]);
}

/*------------------
4)
Now, let's print all the features
in ONE statement instead of one at
a time. Using a loop, add each value
to the "carFeatures" string.

Bonus #1: add a comma between each feature
so it more closely resembles a real
sentence when it prints.

Bonus #2: ensure that each feature is comma-separated but the entire sentence ends with a '.'.
For example: 'white, citroen, c1, 2016.'
Hint - For this step you'll need to check if we are on the last key and if so, treat it differently than we did in Bonus #1.  
------------------*/

let carFeatures = "The features of the car are: ";

for (let key in car) {
  carFeatures += car[key];
  if (key === "horsePowers") {
    carFeatures += ".";
  } else {
    carFeatures += ", ";
  }
}

console.log(carFeatures);

/*------------------
5)
Create a loop that adds each
component of the adddress object
to the fullAddress string.
------------------*/

const address = {
  line1: "Carrer de CodeOp",
  line2: 42,
  city: "Barcelona",
  country: "Spain"
}

let fullAddress = "";

for (let key in address) {
  fullAddress += address[key];
  if (key === "country") {
    fullAddress += ".";
  } else {
    fullAddress += ", ";
  }
}

console.log(fullAddress);


/*------------------
6)
Write a loop that updates
all values that are strings to
uppercase.

Hint: use "typeof" to determine
if the value is a string, and use
".toUpperCase()" to convert the string
to uppercase.
------------------*/

for (let key in address) {
  if (typeof address[key] === "string") {
    address[key] = address[key].toUpperCase();
  }
}

console.log(address);

/*------------------
7)
Write a loop that updates
everyone's age by one year.
------------------*/

const friendsAges = {
  pedro: 30,
  sofia: 38,
  mia: 40,
  lucy: 27
};
for (let key in friendsAges) {
  friendsAges[key]++;
}

console.log(friendsAges);

/*------------------
8)
Now, do the same thing– but
this time, you'll have to access
age from within each object.

It's already been started for you.
Hint: Use "typeof" to determine
if the feature is a number. If it
is, increase the value by 1.
------------------*/

const friends = {
  a: {
    name: "Pedro",
    relationship: "school",
    age: 30
  },
  b: {
    name: "Sofia",
    relationship: "work",
    age: 38
  },
  c: {
    name: "Mia",
    relationship: "school",
    age: 40
  },
  d: {
    name: "Lucy",
    relationship: "work",
    age: 27
  }
}

for (let friend in friends) {
  for (let features in friends[friend]) {
    const feature = friends[friend][features];
    if (typeof feature === "number") {
      friends[friend][features]++;
    }
  }
}
console.log(friends);
/*------------------
9)
Who are the work friends, and who
are the school friends? Create a
loop that populates the two strings.
------------------*/

let workFriends = "";
let schoolFriends = "";

for (let key in friends) {
  const friend = friends[key];
  if (friend.relationship === "school") {
    schoolFriends += friend.name + " ";
  } else if (friend.relationship === "work") {
    workFriends += friend.name + " ";
  }
}

console.log(`The person's work friends are ${workFriends} and school friends are ${schoolFriends}.`)

/*------------------
10)
Loop through the chores object and
add the name of the chore to the
day that it is associated with.
When you are finished, print "mondayChores"
and "wednesdayChores" to the console.

Try to make what you print as natural as possible–
for example: "Monday's chores are: tidying,
vacuuming, bills."

------------------*/

const chores = {
  tidying: "Monday",
  vaccuuming: "Monday",
  dishes: "Wednesday",
  laundry: "Wednesday",
  bills: "Monday",
}

const mondayChores = [];
const wednesdayChores = [];

for (let key in chores) {
  if (chores[key] === "Monday") {
    mondayChores.push(key);
  } else {
    wednesdayChores.push(key);
  }
}

console.log(`Monday's chores are: ${mondayChores.join(", ")}. Wednesday's chores are: ${wednesdayChores.join(", ")}.`);