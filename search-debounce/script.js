const listProds = document.querySelector("#list-of-products")
const search = document.querySelector("#search-product")

let products = []

async function loadProducts() {
    // renderLoadingState()
    try{
        const data = await getProducts();
        renderProducts(data.products)
        products = data.products
    } catch(error) {
        // renderErrorState();
    }
}

async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    if(!response.ok) {
        throw new Error("Error")
    }
    const data = response.json();
    return data;
}

loadProducts()

function renderProducts(products) {
    console.log(products)
    let list = products.map((element) => {
        createLi(element.title)
        return element.title;
    })    
}

function createLi(name) {
    const product = document.createElement("li")
    product.textContent = name
    listProds.appendChild(product)
}

function renderProductsOnSearch(character) {
    listProds.innerHTML = "";
    let matches = products.filter((element) => {
        element.title.toLowerCase().includes(character.toLowerCase())
    })
    matches.forEach((element) => {
        return createLi(element.title)
    })
    console.log(matches)
}

search.addEventListener("input", () => {
    console.log(search.value)
    // renderProductsOnSearch(search.value)
    debouncedSearch(search.value)
})

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

const debouncedSearch = debounce(renderProductsOnSearch, 500);

