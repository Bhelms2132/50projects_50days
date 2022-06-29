// Variables
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// Index
let currentActive = 1

// Event Listener
next.addEventListener('click', () => {
    // Increments the active progress step by 1
    currentActive++

    // if statement created to prevent the function to continue incrementing by the last progress circle
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    // Decrements the active progress step by 1
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1 ) / (circles.length -1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}




