const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;

    arrow.addEventListener("click", function () {
        const imageItem = movieLists[i].querySelectorAll("img").length;
        const currentTransform = getComputedStyle(movieLists[i]).transform;

        // Mevcut X değerini hesapla
        const currentX = currentTransform !== 'none' ? parseInt(currentTransform.split(',')[4]) : 0;

        // Görünen film sayısını ayarla
        const visibleItems = window.innerWidth <= 800 ? 1 : 4; // 800 pikselden küçükse 1 film, büyükse 4 film

        // Sağ kaydırma sınırını kontrol et
        if (imageItem - (visibleItems + clickCounter) > 0) {
            // Kaydırma işlemi
            movieLists[i].style.transform = `translateX(${currentX - 300}px)`;
            clickCounter++;
        } else {
            // Eğer filmler bitmişse, kaydırmayı başa döndür
            clickCounter = 0;
            movieLists[i].style.transform = "translateX(0)"; // Başlangıç noktasına dön
        }
    });
});




/* DARK MODE */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select"
);

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
});



