document.getElementById('order-button').addEventListener('click', function() {
document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
});


// Открытие и закрытие мобильного меню
const mobMenu = document.querySelector('.mob-menu');
const modalOverlay = document.querySelector('.modal-overlay');
const closeMobMenuBtn = document.querySelector('.close-menu-btn');


// Открытие и закрытие таб-меню
const tabMenu = document.querySelector('.tab-menu');
const closeTabBtn = document.querySelector('.close-tab-btn');
const headerButton = document.querySelector('.header-button');
const openMobMenuBtn = document.querySelector('.open-menu-btn');

// Функции для открытия и закрытия меню
function openMenu(menu) {
    console.log('Opening menu:', menu);
    menu.classList.add('is-open');
    modalOverlay.classList.add('is-open');
}
function closeMenu(menu) {
    console.log('Closing menu:', menu);
    menu.classList.remove('is-open');
    modalOverlay.classList.remove('is-open');
}

 // Обработчики событий для открытия и закрытия мобильного и планшетного меню
openMobMenuBtn.addEventListener('click', () => openMenu(mobMenu));
closeMobMenuBtn.addEventListener('click', () => closeMenu(mobMenu));
tabMenu.addEventListener('click', () => closeMenu(tabMenu));

// Обработчик события для кнопки "Shop now" в мобменю
document.getElementById('order-btn').addEventListener('click', function() {
      closeMenu(mobMenu);
document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
});
// Обработчик события для кнопки "Shop now" в tabменю
document.getElementById('order-tab-btn').addEventListener('click', function() {
      closeMenu(tabMenu);
document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
});

        // Закрытие меню при клике на оверлей
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeMenu(mobMenu);
   }
});

