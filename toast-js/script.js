const mainContent = document.querySelector("#main-content")
const createEvent = document.querySelector("#create-event")

createEvent.addEventListener('click', () => {
    const created = document.createElement('div')
    created.textContent = "Event Created"
    mainContent.appendChild(created)
})