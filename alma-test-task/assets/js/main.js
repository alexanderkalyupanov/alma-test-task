const burgerBtn = document.querySelector(".hamburger__icon");
const navList = document.querySelector(".nav__block");
// const navBar = document.querySelector(".nav")
const body = document.querySelector(".body")

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    navList.classList.toggle("active")
    body.classList.toggle("body--overflow")
})

navList.addEventListener("click", (e) => {
  console.log(e.target)
  if (e.target.closest(".nav__link") || e.target.closest(".nav__button")) {
    burgerBtn.classList.remove("active");
    navList.classList.remove("active")
    body.classList.remove("body--overflow")
  }
})

document.addEventListener("click", (e) => {
  if (e.target.closest(".header__info")) {
    burgerBtn.classList.remove("active");
    navList.classList.remove("active")
    body.classList.remove("body--overflow")
  }
})