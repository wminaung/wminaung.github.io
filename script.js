const navbar = document.querySelector(".win-navbar");
const body = document.querySelector("body");
const winName = document.querySelector(".win-name");
const log = console.log;

document.addEventListener("scroll", (e) => {
  log(scrollY); //48
  if (scrollY > 0) {
    isOk = false;
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
  // if (isOk) {
  //   winName.classList.add("sticky");

  //   isOk = false;
  // }
});
