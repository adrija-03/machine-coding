const mainContent = document.querySelector("#main-content")
const foodSection = document.querySelector("#food-section")
const listOfFood = document.querySelector("#list-of-food")
const loadingError = document.querySelector("#loading-error")

foodSection.addEventListener('input', () => {
    const search = foodSection.value.trim();
    debounceComplete(search)
})
listOfFood.style.display = 'none'

async function getData(search) {
    renderLoading();
    setTimeout(async() => {
        try {
            loadingError.style.display = 'none'
            listOfFood.style.display = 'block'
            const foodArray = await fetchData();
            listOfFood.innerHTML = "";

            foodArray
                .filter(element => element.name.toLowerCase().includes(search.toLowerCase()))
                .forEach(element => {
                    const foodName = document.createElement('div')
                    foodName.innerHTML = highlightMatch(element.name, search);
                    foodName.id = "foodName"
                    listOfFood.appendChild(foodName)
                });

            mainContent.appendChild(listOfFood)
        } catch (error) {
            // renderError();
        }
    }, 500)
}

function highlightMatch(text, search) {
    if(!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
}

async function fetchData() {
    const response = await fetch("https://dummyjson.com/recipes")
    if (!response.ok) {
        throw new Error("Error")
    }
    const data = await response.json();
    return data.recipes;
}

function renderLoading() {
    listOfFood.style.display = 'none'
    loadingError.style.display = 'block'
    loadingError.textContent = "Loading..."
}

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

const debounceComplete = debounce(getData, 500)