const toggleBtn = document.querySelector("#toggle-btn")
const background = document.querySelector("#background")
toggleBtn.addEventListener('click', (e) => {
    let bgColor = e.currentTarget.parentNode.classList.value;
    if(bgColor === "light-theme") {
        e.currentTarget.parentNode.classList.replace("light-theme", "dark-theme")
    } else if(bgColor === "dark-theme") {
        e.currentTarget.parentNode.classList.replace("dark-theme", "light-theme")
    }
})
