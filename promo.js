const slides = document.querySelectorAll(".promo__slider");
const dotsContainer = document.querySelector(".promo__slider-dots");
let currentSlide = 0;
let touchstartX = 0;
let touchendX = 0;

// Создаем кружочки динамически
function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) {
            dot.classList.add("active");
        }
        dot.addEventListener("click", () => showSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function showSlide(n) {
    // 1. Отключаем прежний setTimeout 
    clearTimeout(slides[currentSlide].timeout);

    gsap.to(slides[currentSlide], {
        scale: 0.7, // Уменьшаем масштаб слайда
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
            slides[currentSlide].classList.remove("active");
            dotsContainer.children[currentSlide].classList.remove("active");

            currentSlide = (n + slides.length) % slides.length;

            slides[currentSlide].classList.add("active");
            dotsContainer.children[currentSlide].classList.add("active");

            // 2. Запускаем новый setTimeout после завершения анимации
            slides[currentSlide].timeout = setTimeout(nextSlide, 6000);

            // Делаем новый слайд видимым после завершения анимации
            gsap.set(slides[currentSlide], { scale: 1, opacity: 1 });

        }
    });
}

// Функция для определения направления смахивания
function checkDirection() {
    if (touchendX < touchstartX) {
        nextSlide(); // Смахивание влево
    }
    if (touchendX > touchstartX) {
        prevSlide(); // Смахивание вправо
    }
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Добавляем обработчики событий для touch
slides.forEach(slide => {
    slide.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    slide.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
    });
});




function nextSlide() {
    showSlide(currentSlide + 1);
}

createDots();

// Запускаем автовоспроизведение после загрузки страницы
window.addEventListener('load', () => {
    slides[currentSlide].timeout = setTimeout(nextSlide, 6000);
});  