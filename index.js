
//select game symbol // toggle class list upon click of button
const selectButton = document.querySelectorAll(".bottom-symbols")

selectButton.forEach(function (select) {
    select.addEventListener("click", (e) => {
        e.target.classList.toggle("bottom-symbols-clicked")  
    })
})