const NAV_BUTTON = document.getElementById('nav-button');
const MAIN_NAVIGATION = document.getElementById('main-navigation');
const LAPTOP_VIEWPORT_WIDTH = 1024;
let isNavigationOpen = false;

NAV_BUTTON.addEventListener('click', () => {
  MAIN_NAVIGATION.classList.toggle('hidden');
  isNavigationOpen = !isNavigationOpen;
  NAV_BUTTON.setAttribute("aria-expanded", isNavigationOpen);
  MAIN_NAVIGATION.setAttribute("aria-expanded", isNavigationOpen)
});

window.innerWidth >= 1024 ? MAIN_NAVIGATION.classList.remove('hidden') : null;

window.addEventListener('resize', () => {
  let viewportWidth = window.innerWidth;

  if (viewportWidth >= LAPTOP_VIEWPORT_WIDTH) {
    MAIN_NAVIGATION.classList.remove('hidden');
  }
});