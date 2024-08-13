
// interactive accordian

const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordian => {
    accordian.addEventListener("click", () => {
        accordian.classList.toggle("active")
    })
})