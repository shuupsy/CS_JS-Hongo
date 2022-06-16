// Dark mode 
let sections = document.querySelectorAll("section")
let dark = document.querySelector(".dark")

dark.addEventListener("click", () => {
    dark.classList.toggle("moon") // Changement d'îcone
    let btnT = document.querySelectorAll(".bg-transparent")

    if (dark.classList.contains("moon")) {
        dark.innerHTML = `<i class="fa-solid fa-sun"></i>`
        sections.forEach(e => {
            if (e.classList.contains("darker")) {
                e.style.backgroundColor = "#111111"
            } else {
                e.style.backgroundColor = "#2A2B2E"
            }
            e.style.color = "white"
        })
        btnT.forEach(e => {
            e.style.color = "white" // Bouton testimonials
        })
    } else {
        dark.classList.remove("moon")
        dark.innerHTML = `<i class="fa-solid fa-moon"></i>`
        sections.forEach(e => {
            if (e.classList.contains("darker")) {
                e.style.backgroundColor = "#F7F2ED"
            } else {
                e.style.backgroundColor = "unset"
            }
            e.style.color = "unset"
        })
        btnT.forEach(e => {
            e.style.color = "unset" // Bouton testimonials
        })
    }
})

export {sections, dark}