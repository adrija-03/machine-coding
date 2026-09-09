const listProds = document.querySelector("#list-of-products")
const search = document.querySelector("#search-product")

let products = []

// async function loadProducts() {
//     // renderLoadingState()
//     try{
//         const data = await getProducts();
//         renderProductsOnSearch(data.products, )
//         products = data.products
//     } catch(error) {
//         // renderErrorState();
//     }
// }

async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
        throw new Error("Error")
    }
    const data = response.json();
    return data;
}

renderProductsOnSearch("")

function renderProducts(products) {
    listProds.innerHTML = "";
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

async function renderProductsOnSearch(character) {
    // renderLoadingState()
    try {
        listProds.innerHTML = "";
        const data = await getProducts();
        products = data.products;
        let matches = products.filter((element) => {
            return element.title.toLowerCase().includes(character.toLowerCase())
        })
        matches.forEach((element) => createLi(element.title))
    } catch (error) {
        // renderErrorState();
    }
    
}

search.addEventListener("input", () => {
    debouncedSearch(search.value)
})

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
            console.log("this", args)
        }, delay);
    }
}

const debouncedSearch = debounce(renderProductsOnSearch, 500);

