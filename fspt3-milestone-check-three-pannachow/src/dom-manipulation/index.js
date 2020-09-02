/*
 * Use what you learned on how to manipulate the DOM using plain JS to
 * complete the questions below upon submitting the form:
 * 1. Change the <body> element's style so that all text has a font-family of "Verdana, sans-serif".
 * 2. Ensure all <span> elements display the content that you submitted.
 * 3. Loop through each <li> and change the class to "list-item".

 * 4. Create a new <img> element, set its src attribute to a picture of you,
 *    and add it to the top of the About Me section. If you need to add any additional element on the
 *    index.html file, you can do so (but extra credit if you manage to do it without it!)
 
 * 5. Bonus - Tweak the layout and style of your 'About Me' page to look as polished as possible
 */

document.body.style.fontFamily = "Verdana, sans-serif";

const restaurant = document.getElementById("restaurant");
const neighborhood = document.getElementById("neighborhood");
const hometown = document.getElementById("hometown");
const restaurantsInput = document.getElementById("restaurantsInput");
const neighborhoodInput = document.getElementById("neighborhoodInput");
const hometownInput = document.getElementById("hometownInput");

function handleClick() {
  // alert("Click!");
  restaurant.innerText = restaurantsInput.value;
  neighborhood.innerText = neighborhoodInput.value;
  hometown.innerText = hometownInput.value;
}

const button = document.getElementById("submit");
button.addEventListener("click", handleClick);

const items = document.getElementsByTagName("li");

for (let item of items) {
  item.classList.add("list-item");
}

const img = document.createElement("img");
img.src = "berta.jpeg";
// https://stackoverflow.com/a/5882802
document.body.insertBefore(img, document.body.children[1]);
