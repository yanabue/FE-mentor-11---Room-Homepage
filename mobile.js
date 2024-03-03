// Getting existing DOM elements
const navLinks = document.getElementById("sub-links");
const navBar = document.querySelector("nav");
const mainLink = document.getElementById("main-link");
const mobileMenu = document.getElementById("mobile-menu");

// Creating new element for mobile navbar menu
const menuBtn = document.createElement("button");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = `
<img src='./images/icon-hamburger.svg' alt='hamburger menu icon'>
`;
menuBtn.addEventListener("click", toggleMobileMenu);

const image = document.getElementById("top-row-img");

function mobileUIHandler() {
  let screenWidth = window.innerWidth;

  // When screen is less than 800px and current navbar doesnt have the mobile menu button
  // insert it into the navBar before the main link + change image to mobile ver.
  if (screenWidth <= 800 && !navBar.querySelector(".menu-btn")) {
    navBar.insertBefore(menuBtn, mainLink);
    image.src = "./images/mobile-image-hero-1.jpg";
  } else if (screenWidth > 800 && navBar.querySelector(".menu-btn")) {
    navBar.removeChild(navBar.querySelector(".menu-btn"));
    image.src = "./images/desktop-image-hero-1.jpg";
  }

  // Move the navbar links from image container/text box depending on screen width
  if (screenWidth <= 800 && navBar.contains(navLinks)) {
    navBar.removeChild(navLinks);
    mobileMenu.appendChild(navLinks);
  } else if (screenWidth > 800 && mobileMenu.contains(navLinks)) {
    mobileMenu.removeChild(navLinks);
    navBar.appendChild(navLinks);
  }

  const arrowBtns = document.getElementById("control-btns");
  const descriptionBlock = document.getElementById("top-right-description");
  const imageCont = document.getElementById("image-container");

  // Move the arrow buttons from the text box/image container depending on screen size
  if (screenWidth <= 800 && descriptionBlock.contains(arrowBtns)) {
    imageCont.appendChild(arrowBtns);
  } else if (screenWidth > 800 && imageCont.contains(arrowBtns)) {
    descriptionBlock.appendChild(arrowBtns);
  }
}

window.addEventListener("resize", mobileUIHandler);
mobileUIHandler();

const modal = document.querySelector(".modal");
modal.addEventListener("click", toggleMobileMenu);

const closeMenu = document.getElementById("close-icon");
closeMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("open");
  if (mobileMenu.classList.contains("open")) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}
