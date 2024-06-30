const headerSection = document.querySelector("header");


// to change the bg of NavBar after hero-section
function changeBg() {
  var navBar = document.getElementById("barNav");
  var scrollValue = window.scrollY;
  // console.log(scrollValue);

  if (window.scrollY < headerSection.offsetHeight - navBar.offsetHeight) {
    navBar.classList.remove("navBgColor");
  } else {
    navBar.classList.add("navBgColor");
  }
}
window.addEventListener("scroll", changeBg);
