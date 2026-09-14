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
    if (Number(currentVal) === 0)
        currentVal = imagArry.length - 1;
    else
        currentVal--;
    mainItem.src = imagArry[currentVal];
    clearInterval(autoplay)
    startAutoplay()
})

next.addEventListener('click', () => {
    if (Number(currentVal) === (imagArry.length - 1))
        currentVal = 0;
    else
        currentVal++
    mainItem.src = imagArry[currentVal];
    clearInterval(autoplay)
    startAutoplay()
})

imagArry.forEach((ele, x) => {
    const dot = document.createElement('button')
    dot.textContent = 0;
    dot.id = x;
    carouselDots.appendChild(dot)

    dot.addEventListener('click', (e) => {
        currentVal = e.currentTarget.id
        mainItem.src = imagArry[currentVal]
        clearInterval(autoplay)
        startAutoplay()
    })
})

function startAutoplay() {
    autoplay = setInterval(() => {
        if (Number(currentVal) === (imagArry.length - 1))
            currentVal = 0;
        else
            currentVal++;
        mainItem.src = imagArry[currentVal]
    }, 5000)
}

startAutoplay();

