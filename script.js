// Добавляем кнопку прокрутки вверх на страницу
document.body.insertAdjacentHTML('beforeend', '<button class="scroll-to-top" aria-label="Прокрутить вверх"></button>');

const scrollToTopButton = document.querySelector('.scroll-to-top');

// Показываем/скрываем кнопку в зависимости от прокрутки
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Плавная прокрутка вверх при клике на кнопку
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Кнопка прокрутки вверх
const scrollTopBtn = document.getElementById('scrollTop');
window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
};
scrollTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}; 