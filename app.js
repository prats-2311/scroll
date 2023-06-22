// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************

const linksContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const navBar = document.querySelector("#nav");
const topBtn = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const navBarHeight = navBar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navBarHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topBtn.classList.add("show-link");
  } else {
    topBtn.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");

// select links
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate heights
    const navheight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");
    let position = element.offsetTop - navheight;
    if (!fixedNav) {
      position = element.offsetTop - navheight;
    }
    if (navheight > 82) {
      position += containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
