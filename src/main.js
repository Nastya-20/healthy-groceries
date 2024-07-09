document.getElementById('order-button').addEventListener('click', function() {
document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
});

// Открытие и закрытие мобильного меню
const mobMenu = document.querySelector('.mob-menu');
const modalOverlay = document.querySelector('.modal-overlay');
const closeMobMenuBtn = document.querySelector('.close-menu-btn');
const headerMobButton = document.querySelector('.header-mob-button');

// Открытие и закрытие таб-меню
const tabMenu = document.querySelector('.tab-menu');
const closeTabBtn = document.querySelector('.close-tab-btn');
const headerButton = document.querySelector('.header-button');

// Функции для открытия и закрытия меню
function openMenu(menu) {
    menu.classList.add('open');
}

function closeMenu(menu) {
    menu.classList.remove('open');
}

// Обработчики событий для открытия и закрытия мобильного меню
headerMobButton.addEventListener('click', () => openMenu(mobMenu));
closeMobMenuBtn.addEventListener('click', () => closeMenu(mobMenu));

// Обработчики событий для открытия и закрытия таб-меню
headerButton.addEventListener('click', () => openMenu(modalOverlay));
closeTabBtn.addEventListener('click', () => closeMenu(modalOverlay));

// Закрытие меню при клике на оверлей
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeMenu(modalOverlay);
    }
});

