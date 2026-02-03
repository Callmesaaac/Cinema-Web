let currentIndex = 0;

function moveSlide(direction) {
    const container = document.querySelector('.carousel-container');
    const totalSlides = document.querySelectorAll('.carousel-slide').length;

    currentIndex += direction;

    if (currentIndex < 0){
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const newTransformValue = -currentIndex * 100;
    container.style.transform = `translateX(${newTransformValue}%)`;
}


function searchMovie() {
    const query = document.getElementById('search-input').value.toLoweCase();

    const movies = ['pelicula 1', 'pelicula 2', 'pelicula 4', 'pelicula 5'];
    if (movies.includes(query)) {
        alert(`Encontrado: ${query}`);

        window.location.href = `pelicula.html?pelicula=${query}`;
    }else {
        alert('La pelicula no esta en cartelera.')
    }
}
