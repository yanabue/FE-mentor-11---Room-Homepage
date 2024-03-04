// Mapping of necessary resources for slider UI
const imgDictDesktop = {
  1: "./images/desktop-image-hero-1.jpg",
  2: "./images/desktop-image-hero-2.jpg",
  3: "./images/desktop-image-hero-3.jpg",
};

const imgDictMobile = {
  1: "./images/mobile-image-hero-1.jpg",
  2: "./images/mobile-image-hero-2.jpg",
  3: "./images/mobile-image-hero-3.jpg",
};

const h1Dict = {
  1: "Discover innovative ways to decorate",
  2: "We are available all across the globe",
  3: "Manufactured with the best materials",
};

const pDict = {
  1: `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,
  2: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
  3: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
};

// Getting arrow buttons and setting event listeners
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

rightBtn.addEventListener("click", () => changeSlider("forwards"));
leftBtn.addEventListener("click", () => changeSlider("backwards"));
let currentNumber = 1;

function changeSlider(direction) {
  // Indicating which image dictionary to use depending on screen width
  let usedImgDict;
  if (window.innerWidth <= 800) {
    usedImgDict = imgDictMobile;
  } else if (window.innerWidth > 800) {
    usedImgDict = imgDictDesktop;
  }

  // Getting manipulated DOM elements
  const h1 = document.getElementById("variable-header");
  const p = document.getElementById("variable-paragraph");

  // slider UI resource index logic (loop through 1-3 depending on arrow clicked)
  if (direction === "forwards") {
    if (currentNumber === 2 || currentNumber === 1) {
      currentNumber++;
    } else if (currentNumber === 3) {
      currentNumber = 1;
    }
  } else if (direction === "backwards") {
    if (currentNumber === 3 || currentNumber === 2) {
      currentNumber--;
    } else if (currentNumber === 1) {
      currentNumber = 3;
    }
  }

  // Set the DOM elements as the resources in the current index
  clearAnimationClasses();
  applyAnimationClasses(direction);

  setTimeout(() => {
    clearAnimationClasses();
  }, 750);

  setTimeout(() => {
    image.src = usedImgDict[currentNumber];
  }, 500);

  h1.innerText = h1Dict[currentNumber];
  p.innerText = pDict[currentNumber];
}

function clearAnimationClasses() {
  if (
    image.classList.contains("slide-right-animation") ||
    image.classList.contains("slide-left-animation")
  ) {
    image.classList.remove("slide-right-animation");
    image.classList.remove("slide-left-animation");
  }
}

function applyAnimationClasses(direction) {
  if (direction === "backwards") {
    image.classList.add("slide-right-animation");
  } else if (direction === "forwards") {
    image.classList.add("slide-left-animation");
  }
}