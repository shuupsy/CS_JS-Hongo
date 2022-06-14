// Navbar fixed
let body = document.querySelector("body")
let nav = document.querySelector("nav")
let navLinks = document.querySelectorAll(".nav-link")
let sect1 = document.querySelector("#sect-1").offsetTop
let logo = document.querySelector(".logo")

function navBg() {
    let x = window.scrollY
    if (x > sect1) {
        logo.setAttribute("src", "public/img/white-logo.png")
        nav.style.backgroundColor = "#222222"
        nav.style.color = "white"
        nav.classList.add("fixed-top")
        navLinks.forEach(element => {
            element.classList.add("text-light")
        })
    } else {
        logo.setAttribute("src", "public/img/logo.png")
        nav.style.backgroundColor = "unset"
        nav.style.color = "unset"
        nav.classList.remove("fixed-top")
        navLinks.forEach(element => {
            element.classList.remove("text-light")
        })
    }}

window.addEventListener("scroll", navBg)