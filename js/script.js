document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
	const filmsLink = document.querySelector('.films-link');
	const ctaLink = document.querySelector('.cta');
	const aboutLink = document.querySelector('.about-link');
	const contactLink = document.querySelector('.contact-link');
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
	
	filmsLink.addEventListener('click', () => {
		sections[currentIndex].classList.remove('active');
		currentIndex = 2;
		sections[currentIndex].classList.add('active');
    });
	ctaLink.addEventListener('click', () => {
		sections[currentIndex].classList.remove('active');
		currentIndex = 2;
		sections[currentIndex].classList.add('active');
    });
	aboutLink.addEventListener('click', () => {
		sections[currentIndex].classList.remove('active');
		currentIndex = 1;
		sections[currentIndex].classList.add('active');
    });
	contactLink.addEventListener('click', () => {
		sections[currentIndex].classList.remove('active');
		currentIndex = 3;
		sections[currentIndex].classList.add('active');
    });
});
