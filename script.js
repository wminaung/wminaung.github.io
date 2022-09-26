const navbar = document.querySelector(".win-navbar");
const body = document.querySelector("body");
const winName = document.querySelector(".win-name");

document.addEventListener("scroll", (e) => {
  if (scrollY > 0) {
    navbar.classList.add("addT");
  } else {
    navbar.classList.remove("addT");
  }
  if (scrollY > 43) {
    winName.style.fontFamily = "sans-serif";
    winName.style.color = "black";
  } else {
    winName.style.fontFamily =
      '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif';
    winName.style.color = "white";
  }
});
