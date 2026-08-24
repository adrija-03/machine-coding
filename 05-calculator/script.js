const displayScreen = document.querySelector('#display-screen')
const buttons = document.querySelectorAll('button')
let displayedExp = ""

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if( e.target.textContent === "CE") {
            displayedExp = ""
            displayScreen.value = displayedExp
            return
        }
        if( e.target.textContent === "=") {
            //calculation
            let result = calculation(displayedExp)
            displayedExp = ""
            displayScreen.value = result
            return
        }
        displayedExp = displayedExp + (e.target.textContent);
        displayScreen.value = displayedExp
        console.log(displayedExp)
    });
});

function calculation (expression) {
    console.log(typeof(expression))
    return "calculating..."
}