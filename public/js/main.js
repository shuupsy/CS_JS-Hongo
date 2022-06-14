// Navbar fixed
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


// Produits
class Produits {
    constructor(nom, prix, liens) {
        this.nom = nom;
        this.prix = prix;
        this.liens = liens;
    }
}

let p1 = new Produits("Textured Sweater", 50.00, "public/img/fashion/fashion-recent-products-01-1-1.jpg")
let p2 = new Produits("Traveller Shirt", 510.00, "public/img/fashion/fashion-recent-products-02-1-1.jpg")
let p3 = new Produits("Crewneck Sweatshirt", 50.00, "public/img/fashion/fashion-recent-products-01-b.jpg")
let p4 = new Produits("Skinny Trousers", 160.00, "public/img/fashion/fashion-recent-products-04.jpg")
let p5 = new Produits("High Neck Sweater", 35.00, "public/img/fashion/fashion-recent-products-05-1.jpg")
let p6 = new Produits("Sleeve Sweater", 120.00, "public/img/fashion/fashion-recent-products-06-1.jpg")
let p7 = new Produits("Pocket Sweatshirt", 410.00, "public/img/fashion/fashion-recent-products-07-1.jpg")
let p8 = new Produits("Top With Pleated", 50.00, "public/img/fashion/fashion-recent-products-08-1.jpg")
let p9 = new Produits("Cotton Sweater", 155.00, "public/img/fashion/fashion-recent-products-01-d.jpg")
let p10 = new Produits("Textured Plain Regular", 70.00, "public/img/fashion/fashion-recent-products-10-1.jpg")
console.log(p1.prix)

let produits = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10]

// Ajout du titre
const sect3 = document.querySelector("#products")
sect3.style.padding = "15vh 0"

let h2 = document.createElement("h2")
h2.innerHTML = "Recent Products"
h2.classList.add("py-2")

let p = document.createElement("p")
p.innerHTML = "Lorem Ipsum is simpy dummy text of the printing and typesetting industry printing and industry."
p.style.fontSize = "1rem"
p.classList.add("text-secondary")

let div = document.createElement("div")
div.style.padding = "0 35vw"
div.style.textAlign = "center"

sect3.appendChild(div)
div.appendChild(h2)
div.appendChild(p)
