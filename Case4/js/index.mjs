function toggleShowCompletedHandler (event) {
    const completedElements = document.querySelectorAll(".completed");
    for ( let item of completedElements ) {
        item.classList.toggle("hidden");
    }
}

const button = document.querySelector('button');
button.addEventListener('click', toggleShowCompletedHandler)
