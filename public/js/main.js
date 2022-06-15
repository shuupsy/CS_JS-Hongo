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
    }
}
window.addEventListener("scroll", navBg)


// Produits
class Produits {
    constructor(nom, prix, lien, hover) {
        this.nom = nom;
        this.prix = prix;
        this.lien = lien;
        this.hover = hover;
    }
}

let p1 = new Produits("Textured Sweater", "$50.00", "public/img/fashion/fashion-recent-products-01-1-1.jpg", "public/img/fashion/fashion-recent-products-01-a-1-1.jpg")
let p2 = new Produits("Traveller Shirt", "$510.00", "public/img/fashion/fashion-recent-products-02-1-1.jpg", "public/img/fashion/fashion-recent-products-02-a-1-1-1.jpg")
let p3 = new Produits("Crewneck Sweatshirt", "$50.00", "public/img/fashion/fashion-recent-products-01-b.jpg", "public/img/fashion/fashion-recent-products-03-a-1-1.jpg")
let p4 = new Produits("Skinny Trousers", "$160.00", "public/img/fashion/fashion-recent-products-04.jpg", "public/img/fashion/fashion-recent-products-04-a-1.jpg")
let p5 = new Produits("High Neck Sweater", "$35.00", "public/img/fashion/fashion-recent-products-05-1.jpg", "public/img/fashion/fashion-recent-products-05-a-1.jpg")
let p6 = new Produits("Sleeve Sweater", "$120.00", "public/img/fashion/fashion-recent-products-06-1.jpg", "public/img/fashion/fashion-recent-products-06-a-1.jpg")
let p7 = new Produits("Pocket Sweatshirt", "$410.00", "public/img/fashion/fashion-recent-products-07-1.jpg", "public/img/fashion/fashion-recent-products-07-a-1.jpg")
let p8 = new Produits("Top With Pleated", "$50.00", "public/img/fashion/fashion-recent-products-08-1.jpg", "public/img/fashion/fashion-recent-products-08-a.jpg")
let p9 = new Produits("Cotton Sweater", "$155.00", "public/img/fashion/fashion-recent-products-01-d.jpg", "public/img/fashion/fashion-recent-products-09-a-1-1.jpg")
let p10 = new Produits("Textured Plain Regular", "$70.00", "public/img/fashion/fashion-recent-products-10-1.jpg", "public/img/fashion/fashion-recent-products-10-a-1.jpg")

let produits = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]


// Ajout du titre
const sect3 = document.querySelector("#products")
sect3.style.padding = "15vh 0"

let h2 = document.createElement("h2")
h2.innerHTML = "Recent Products"
h2.classList.add("py-2")

let p = document.createElement("p")
p.innerHTML = "Lorem Ipsum is simpy dummy text of the printing and typesetting industry printing and industry."
p.style.fontSize = "0.8rem"
p.classList.add("text-secondary")

let divT = document.createElement("div")
divT.style.padding = "0 35vw"
divT.style.textAlign = "center"

sect3.appendChild(divT)
divT.appendChild(h2)
divT.appendChild(p)

// Boite des items shopping
let divB = document.createElement("div")
sect3.appendChild(divB) // Ajout dans la boite
divB.setAttribute("class", "text-center px-5 my-5")
divB.style.display = "grid"
divB.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px,1fr))"
divB.style.justifyContent = "center"
divB.style.gap = "10px"
divB.style.fontSize = "0.8rem"


// SUPER LOOP
produits.forEach(item => {
    // Div Element qui contient image + la div des p
    let divE = document.createElement("div")
    divB.appendChild(divE)
    // Div Image + Div p
    let divI = document.createElement("div")
    divE.appendChild(divI)
    let divP = document.createElement("div")
    divP.classList.add("py-3")
    divE.appendChild(divP)
    // Image
    let imgShopping = document.createElement("img")
    imgShopping.setAttribute("src", item.lien)
    imgShopping.style.width = "100%"
    divI.appendChild(imgShopping)
    // p : nom item
    let nom = document.createElement("p")
    nom.innerHTML = item.nom
    nom.classList.add("fw-bold")
    // p : prix item
    let prix = document.createElement("p")
    prix.innerHTML = item.prix
    prix.classList.add("text-secondary")
    divP.appendChild(nom)
    divP.appendChild(prix)
    // Div Fav/Cart au hover
    let divH = document.createElement("div")
    divH.setAttribute("class", "position-relative text-center text-light bg-light")
    divH.style.display = "grid"
    divH.style.gridTemplateColumns = "repeat(2, 1fr)"
    divH.style.gap = "1px"
    divI.appendChild(divH)
    // Elements p
    let heartP = document.createElement("p")
    heartP.setAttribute("class", "bg-dark py-2")
    let cartP = document.createElement("p")
    cartP.setAttribute("class", "bg-dark py-2")
    // Elements i
    let heart = document.createElement("i")
    heart.setAttribute("class", "fa-solid fa-heart")
    heartP.appendChild(heart)
    let cart = document.createElement("i")
    cart.setAttribute("class", "fa-solid fa-cart-shopping")
    cartP.appendChild(cart)

    divH.appendChild(heartP)
    divH.appendChild(cartP)

    //hover
    imgShopping.addEventListener("mouseover", () => {
        imgShopping.setAttribute("src", item.hover) // Change l'image
    })
    imgShopping.addEventListener("mouseout", () => {
        imgShopping.setAttribute("src", item.lien)
    })
})