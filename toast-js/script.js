const mainContent = document.querySelector("#main-content")
const showToast = document.querySelector("#show-toast")
const createEvent = document.querySelector("#create-event")

showToast.addEventListener('click', () => {
    showToastDesign()
})

function showToastDesign() {
    const showed = document.createElement('div')

    const h2Title = document.createElement('h4')
    h2Title.textContent = "Event created"

    const spanDate = document.createElement('span')
    spanDate.textContent = "Sunday, Dec 3 at 9:00AM"

    const cancelBtn = document.createElement('button')
    cancelBtn.textContent = "x"
    cancelBtn.addEventListener('click', () => {
        closeShowToast()
    })

    showed.append(h2Title, spanDate, cancelBtn)
    mainContent.appendChild(showed)

    setTimeout(() => {
        closeShowToast()
    }, 5000)

    function closeShowToast() {
        mainContent.removeChild(showed)
    }
}

createEvent.addEventListener('click', () => {
    // const created = document.createElement('div')
    // created.textContent = "Creating event..."
    // mainContent.appendChild(created)
    // setTimeout(() => {
    //     created.innerHTML = 'Event created <button>x</button>'
    //     setTimeout(() => {
    //         mainContent.removeChild(created)
    //     }, 10000)
    // }, 3000)
    createEventDesign();
})

function createEventDesign() {
    const created = document.createElement('div')
    
    const creatingText = document.createElement('div')
    creatingText.textContent = "Creating event..."
    created.appendChild(creatingText)

    mainContent.appendChild(created)

    setTimeout(() => {
        created.removeChild(creatingText)

        const createdText = document.createElement('div')
        createdText.textContent = "Event created"

        const onCancel = document.createElement('button')
        onCancel.textContent = "x"
        onCancel.addEventListener('click', () => {
            closeCreateEvent()
        })

        created.append(createdText, onCancel)

        setTimeout(() => {
           closeCreateEvent()
        }, 10000)
    }, 3000)

    function closeCreateEvent() {
        mainContent.removeChild(created)
    }
}