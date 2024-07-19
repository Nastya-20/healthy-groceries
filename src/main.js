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
document.getElementById('preview-work').addEventListener('click', function () {
    closeMenu(mobMenu);
    document.getElementById('how_it_works').scrollIntoView({ behavior: 'smooth' })
});
document.getElementById('preview-vegetables').addEventListener('click', function () {
    closeMenu(mobMenu);
    document.getElementById('vegetables').scrollIntoView({ behavior: 'smooth' })
});
document.getElementById('preview-reviews').addEventListener('click', function () {
    closeMenu(mobMenu);
    document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })
});


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
// Ініціалізація форми
const formData = {
    name: "",
    email: "",
    comment: ""
};
const form = document.querySelector('#order-form');

// Завантаження збережених даних з localStorage
const loadFormData = () => {
    const savedData = localStorage.getItem('form-container-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.name = parsedData.name || "";
        formData.email = parsedData.email || "";
        formData.comment = parsedData.comment || "";

        // Перевірка чи існують елементи форми
        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const commentTextarea = form.querySelector('textarea[name="comment"]');
        
        if (nameInput) nameInput.value = formData.name;
        if (emailInput) emailInput.value = formData.email;
        if (commentTextarea) commentTextarea.value = formData.comment;
    }
};

// Збереження даних до localStorage
const saveFormData = () => {
    localStorage.setItem('form-container-state', JSON.stringify(formData));
};

// Обробка події введення
form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    saveFormData();
});

// Обробка події відправлення форми
form.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.comment) {
        alert('Будь ласка, заповніть усі поля форми');
        return;
    }

    console.log(formData);

    localStorage.removeItem('form-container-state');
    formData.name = "";
    formData.email = "";
    formData.comment = "";
    form.reset();
});

// Обробка події фокусу та втрати фокусу для полів введення
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.setAttribute('placeholder', 'Type area');
    });
    input.addEventListener('blur', () => {
        input.removeAttribute('placeholder');
    });
});

// Завантаження збережених даних при завантаженні сторінки
loadFormData();

// Получаем кнопку
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Функция отображения кнопки при прокрутке
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Если прокрутка больше 300 пикселей
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Функция прокрутки вверх при нажатии на кнопку
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
});


