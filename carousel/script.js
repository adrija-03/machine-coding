const mainContent = document.querySelector("#main-content")
const mainItem = document.querySelector("#main-item")
const prev = document.querySelector("#prev-button")
const next = document.querySelector("#next-button")
const carouselDots = document.querySelector("#carousel-dots")

const imagArry = ["https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"]

let currentVal = 0;

mainItem.src = imagArry[currentVal];

prev.addEventListener('click', () => {
    currentVal = (currentVal === 0) ? (imagArry.length - 1) : currentVal - 1;
    mainItem.src = imagArry[currentVal];
    restartAutoplay()
})

next.addEventListener('click', () => {
    currentVal = (currentVal === (imagArry.length - 1)) ? 0 : currentVal + 1;
    mainItem.src = imagArry[currentVal];
    restartAutoplay()
})

imagArry.forEach((ele, x) => {
    const dot = document.createElement('button')
    dot.textContent = 'o';
    dot.id = x;
    carouselDots.appendChild(dot)

    dot.addEventListener('click', (e) => {
        currentVal = Number(e.currentTarget.id)
        mainItem.src = imagArry[currentVal]
        restartAutoplay()
    })
})

function startAutoplay() {
    autoplay = setInterval(() => {
        currentVal = (currentVal === (imagArry.length - 1)) ? 0 : currentVal + 1;
        mainItem.src = imagArry[currentVal]
    }, 5000)
}

startAutoplay();

function restartAutoplay() {
    clearInterval(autoplay)
    startAutoplay()
}

