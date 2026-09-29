const mainContent = document.querySelector("#main-content")
const foodSection = document.querySelector("#food-section")
const listOfFood = document.querySelector("#list-of-food")

foodSection.addEventListener('input', async() => { 
    const foodArray = await getData();
    listOfFood.innerHTML = "";
    console.log(foodSection.value)
    const search = foodSection.value.trim();

    foodArray
    .filter(element => element.name.toLowerCase().includes(search.toLowerCase()))
    .forEach(element => {
        const foodName = document.createElement('div')
        foodName.textContent = element.name;
        listOfFood.appendChild(foodName)
    });

    mainContent.appendChild(listOfFood)
})

async function getData() {
    // renderLoading();
    try {
        const response = await fetch("https://dummyjson.com/recipes")
        if(!response.ok) {
            throw new Error("Error")
        }
        const data = await response.json();
        return data.recipes;
    } catch (error) {
        // renderError();
    }
}
getData();