// for div 1
const images = document.getElementById("images");

// for button
const submit = document.getElementById("submit");

// for input URL
const url = document.getElementById("url");

// for input Project Title
const pt = document.getElementById("pt");

// for input Project Description
const pd = document.getElementById("pd");

//  for a featured image section 
const featured = document.getElementById("featured-img");
const fpt = document.getElementById("fpt");
const fpd = document.getElementById("fpd");

// click & submit 
function handleClick() {
  const imgUrl = url.value;
  const imgTitle = pt.value;
  const imgDescription = pd.value;

  const img = document.createElement("img");
  img.src = imgUrl;
  img.classList.add("image");
  img.addEventListener("click", () => {
    featured.src = imgUrl;
    fpt.innerHTML = imgTitle;
    fpd.innerHTML = imgDescription;
  });

  images.appendChild(img);
}
submit.addEventListener("click", handleClick);
