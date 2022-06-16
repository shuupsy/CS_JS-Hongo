// Dark mode 
let sections = document.querySelectorAll("section")

let dark = document.querySelector(".dark")
dark.addEventListener("click", () => {
    dark.classList.toggle("moon")
    if (dark.classList.contains("moon")) {
        dark.innerHTML = `<i class="fa-solid fa-sun"></i>`
        sections.forEach(e => {
            e.style.backgroundColor = "black"
            e.style.color = "white"
        })
    } else {
        dark.classList.remove("moon")
        dark.innerHTML = `<i class="fa-solid fa-moon"></i>`
        sections.forEach(e => {
            e.style.backgroundColor = "unset"
            e.style.color = "unset"
        })
    }
})

export {sections, dark}