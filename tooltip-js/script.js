const content = document.querySelector("#content")
const hoverBtn = document.querySelector("#hover-btn")

const tooltip = document.createElement('span');
tooltip.className = 'tooltip';
tooltip.textContent = "Hi! I am a tooltip";

hoverBtn.addEventListener('mouseenter', (e) => {
    
    content.appendChild(tooltip)
})

hoverBtn.addEventListener('mouseleave', (e) => {
    content.removeChild(tooltip);
})