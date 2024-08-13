document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
	console.log(sections);
	alert("Inside!");
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    // Show the first section initially
    sections[currentIndex].classList.add('active');

    function showSection(index) {
        sections[currentIndex].classList.remove('active');
        currentIndex = (index + sections.length) % sections.length;
        sections[currentIndex].classList.add('active');
    }

    leftArrow.addEventListener('click', () => {
        showSection(currentIndex - 1);
    });

    rightArrow.addEventListener('click', () => {
        showSection(currentIndex + 1);
    });
});
