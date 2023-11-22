// Agregamos un evento para el scroll
window.addEventListener('scroll', () => {
    // Obtenemos el valor del scroll
    const scrollValue = window.scrollY;

    // Obtenemos las imágenes
    const beautyImage = document.querySelector('.beauty-section img');
    const qualitiesImage = document.querySelector('.qualities-section img');

    // Aplicamos el efecto de paralaje
    beautyImage.style.transform = `translateY(-${scrollValue * 0.3}px)`;
    qualitiesImage.style.transform = `translateY(-${scrollValue * 0.2}px)`;

    // Obtenemos las secciones
    const beautySection = document.querySelector('.beauty-section');
    const qualitiesSection = document.querySelector('.qualities-section');

    // Verificamos si la sección está en el viewport
    const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    // Si la sección está en el viewport, la mostramos con un efecto de fade
    if (isInViewport(beautySection)) {
        beautySection.style.opacity = 1;
        beautySection.style.transform = 'translateY(0)';
    }

    if (isInViewport(qualitiesSection)) {
        qualitiesSection.style.opacity = 1;
        qualitiesSection.style.transform = 'translateY(0)';
    }
});
