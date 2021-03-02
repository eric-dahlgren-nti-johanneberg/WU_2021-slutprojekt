const hamburgerButton = document.getElementById("hamburger");
const navSection = document.getElementById("crazyNav");
const linkList = document.getElementsByClassName("link-list")[0];
function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

const showMenu = () => {
  disableScroll();
  hamburgerButton.classList.toggle("open");
  navSection.style.opacity = "100%";
  navSection.style.pointerEvents = "unset";
};
const hideMenu = () => {
  enableScroll();
  hamburgerButton.classList.toggle("open");
  navSection.style.opacity = "0%";
  navSection.style.pointerEvents = "none";
};

const toggleMenu = () => {
  if (hamburgerButton.classList.contains("open")) {
    hideMenu();
  } else {
    showMenu();
  }
};

linkList.childNodes.forEach((node) => node.addEventListener("click", hideMenu));

hamburgerButton.addEventListener("click", toggleMenu);
