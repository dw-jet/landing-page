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
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/




// * End Helper Functions
const buildNavListItems = () => {
  const pageSections = document.querySelectorAll('[data-nav]');
  const navbarUl = document.getElementById('navbar__list');
  const fragment = document.createDocumentFragment();

  for (section of pageSections) {
    item = document.createElement('li');
    item.innerHTML = `<a href="#${section.id}">${section.dataset.nav} |</a>`;
    fragment.appendChild(item);
  }

  navbarUl.appendChild(fragment);
}
// * Begin Main Functions


// build the nav
buildNavListItems();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


