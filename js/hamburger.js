const hamburgerButton = document.getElementById("hamburger");
const navSection = document.getElementById("crazyNav");
const linkList = document.getElementsByClassName("link-list")[0];
const header = document.getElementsByTagName("header")[0];

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

function disableScroll() {
  document.body.classList.toggle("block-scroll");
  document.body.style.marginRight = `${getScrollbarWidth()}px`;
  navSection.style.paddingRight = `${getScrollbarWidth()}px`;
  header.style.paddingRight = `${getScrollbarWidth()}px`;
}

function enableScroll() {
  document.body.classList.toggle("block-scroll");
  document.body.style.marginRight = "0";
  navSection.style.paddingRight = "0";
  header.style.paddingRight = "0";
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

console.log(document.body.clientWidth);
console.log(document.body.offsetWidth);

linkList.childNodes.forEach((node) => node.addEventListener("click", hideMenu));

hamburgerButton.addEventListener("click", toggleMenu);
