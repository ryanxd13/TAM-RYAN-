// Carousel functionality
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel-container');
let listHTML = document.querySelector('.carousel-container .slide');

next.onclick = function() {
    showSlider('next');
};

prev.onclick = function() {
    showSlider('prev');
};

const showSlider = (type) => {
    next.style.pointerEvents = 'none';
    prev.style.pointerEvents = 'none';

    carousel.classList.remove('prev', 'next');
    let items = document.querySelectorAll('.carousel-container .slide .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        let lastItem = items[items.length - 1];
        listHTML.prepend(lastItem);
        carousel.classList.add('prev');
    }

    // Reset pointer events after animation
    setTimeout(() => {
        next.style.pointerEvents = 'auto';
        prev.style.pointerEvents = 'auto';
    }, 500);
};

// Modal popup functionality
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close-btn")[0];

// Open modal from carousel buttons
function openCarouselModal() {
    modal.style.display = "block";
}

// Open modal for event boxes (with program name)
function openModal(programName) {
    var modalTitle = modal.querySelector('.modal-body h2');
    modalTitle.textContent = 'FEU ROOSEVELT - ' + programName;
    modal.style.display = "block";
}

// Close modal when user clicks 'x'
span.onclick = function() {
    modal.style.display = "none";
};

// Close modal when user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};