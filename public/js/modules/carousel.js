// Carousel Testimonials
let gauche = document.querySelector("#left")
let droite = document.querySelector("#right")

let avis = document.querySelectorAll(".avis") //Tableau d'avis


let i = 0
droite.addEventListener("click", Droite)

function Droite() {
    if (i == avis.length - 1) {
        avis[i].classList.add("inactif")
        avis[0].classList.remove("inactif")
        i=0
    } else {
        avis[i].classList.add("inactif")
        avis[i + 1].classList.remove("inactif")
        i++
    }
}

export {gauche, droite, avis, i, Droite}