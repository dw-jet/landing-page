/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
*/
const sections = document.querySelectorAll('[data-nav]');
let currentSection = sections[0];

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

const toggleActiveSection = (activeSection) => {
  currentSection.classList.toggle("your-active-class");
  activeSection.classList.toggle("your-active-class");
  currentSection = activeSection;
}

const scrollToSelector = (selector) => {
  document.querySelector(selector).scrollIntoView({
    behavior: 'smooth'
  });
}
// * End Helper Functions

// * Begin Main Functions


// build the nav
const buildNavListItems = () => {
  const navbarUl = document.getElementById('navbar__list');
  const fragment = document.createDocumentFragment();

  for (const section of sections) {
    const item = document.createElement('li');
    item.innerHTML = `<a href="#${section.id}">${section.dataset.nav}&nbsp</a>`;
    fragment.appendChild(item);
  }

  navbarUl.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
const findActive = () => {
  const lastSection = sections.length - 1;
  let pick = sections[lastSection];
  for (const section of sections) {
    const bounding = section.getBoundingClientRect();
    const offset = 75;
    if (bounding.bottom < offset) { continue; }
    if (bounding.bottom <= pick.getBoundingClientRect().bottom) {
      pick = section;
    }
  }
  if (pick != currentSection) { toggleActiveSection(pick); }
}

// Scroll to anchor ID
const navMenu = document.querySelector('.navbar__menu');
navMenu.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.nodeName === 'A') {
    const targetHref = event.target.href;
    const scrollTarget = targetHref.substring(targetHref.lastIndexOf("#"));
    scrollToSelector(scrollTarget);
  }
})

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildNavListItems();
// Scroll to section on link click
document.addEventListener('scroll', findActive)
// Set sections as active
toggleActiveSection(currentSection);