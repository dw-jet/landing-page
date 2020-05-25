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
  currentSection.classList.remove("your-active-class");
  activeSection.classList.toggle("your-active-class");
  currentSection = activeSection;
}

const scrollTo = (selector) => {
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

  for (section of sections) {
    item = document.createElement('li');
    item.innerHTML = `<a href="#${section.id}">${section.dataset.nav} |</a>`;
    fragment.appendChild(item);
  }

  navbarUl.appendChild(fragment);
}

buildNavListItems();

// Add class 'active' to section when near top of viewport
const findActive = () => {
  const lastSection = sections.length - 1;
  let pick = sections[lastSection];
  for (section of sections) {
    const bounding = section.getBoundingClientRect();
    const offset = 75;
    if (bounding.bottom < offset) { continue; }
    if (bounding.bottom <= pick.getBoundingClientRect().bottom) {
      pick = section;
    }
  }
  if (pick != currentSection) { toggleActiveSection(pick); }
}

document.addEventListener('scroll', findActive)

toggleActiveSection(currentSection);

// Scroll to anchor ID using scrollTO event
const navMenu = document.querySelector('.navbar__menu');
navMenu.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.nodeName === 'A') {
    const targetHref = event.target.href;
    const scrollTarget = targetHref.substring(targetHref.lastIndexOf("#"));
    scrollTo(scrollTarget);
  }
})

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active