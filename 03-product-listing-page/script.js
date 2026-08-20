//DOM elements
const list = document.querySelector("#list")
const loadingError = document.querySelector("#loading-error")

loadProducts()
async function loadProducts() {
    renderLoading();
    try {
        const data = await fetchProducts();
        renderProducts(data.products);
    } catch (error) {
        renderError(error.messsage)
    }
}

async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products")
    if (!response.ok) {
        throw new Error("Failed to fetch quote")
    }
    return response.json();;
}

function renderProducts(products) {
    loadingError.textContent = ""
    list.innerHTML = ""
    list.style.display = 'grid'
    list.style.gridTemplateColumns = 'repeat(3, 1fr)';
    list.style.gap = '50px' 

    if(products.length === 0) {
        loadingError.textContent = "No products found"
    }
    products.map(element => {
        createProductCard(element.id, element.title, element.description, element.stock, element.rating, element.thumbnail)
    })
}
function renderLoading() {
    loadingError.textContent = "Loading..."
}
function renderError(error) {
    loadingError.textContent = error;
    list.textContent = ""
}

function createProductCard(productId, productTitle, productDes, productStock, productRating, productImg) {
    const productDetail = document.createElement('div');
    productDetail.setAttribute('id', productId);
    list.appendChild(productDetail);

    const title = document.createElement('div')
    title.setAttribute('id', `title${productId}`)
    title.textContent = productTitle;

    const description = document.createElement('div')
    description.setAttribute('id', `description${productId}`)
    description.textContent = productDes;

    const stockrating = document.createElement('div')
    stockrating.setAttribute('id', `sc${productId}`)
    stockrating.style.display = 'flex'
    stockrating.style.justifyContent = 'space-between'

    const stock = document.createElement('div')
    stock.setAttribute('id', `stock${productId}`)
    stock.textContent = productStock;

    const rating = document.createElement('div')
    rating.setAttribute('id', `rating${productId}`)
    rating.textContent = productRating;

    const image = document.createElement('img')
    image.setAttribute('id', `image${productId}`)
    image.src = productImg ? `${productImg}` : "no image";

    const addBtn = document.createElement('button');
    addBtn.setAttribute('id', `addBtn${productId}`)
    addBtn.textContent = "Add to cart"

    productDetail.append(image, title, description, stockrating, addBtn)
    stockrating.append(stock, rating)

    addBtn.addEventListener('click', (e) => {
        console.log({
            id:productId,
            title:productTitle,
            description:productDes,
            stock:productStock,
            rating:productRating,
        })
    })
}




