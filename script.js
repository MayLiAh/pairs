// Получение попапа и кнопки закрытия
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.ok');

// Получение списка всех клеток
const ceils = document.querySelectorAll('.ceil');

// Получение кнопки старта
const start = document.querySelector('.start');



// Счетчик открытых непарных клеток и открытых пар
let count = 0;
let pairsCount = 0;
// id и цвета для клеток
let id1 = '';
let id1Number = '';
let color1 = '';
let id2 = '';
let id2Number = '';
let color2 = '';

// Установка обработчика событий на клик по кнопке старт
start.addEventListener('click', () => {
  event.preventDefault();
  // Удаление цветов у клеток
  Array.from(ceils).forEach((el) => {
    el.classList.remove('red');
    el.classList.remove('orange');
    el.classList.remove('yellow');
    el.classList.remove('blue');
    el.classList.remove('green');
    el.classList.remove('black');
    el.classList.remove('gray');
    el.classList.remove('lightblue');
  });
  // Обнуление счетчика пар
  pairsCount = 0;
  colors = shuffle(colors);
  dateObj = new Date();
  startTimer();
  // Обработчик кликов по клеткам
  document.addEventListener('click', (element) => {
    // Проверка того, что клик сделан по клетке с нужным классом
    if (element.target.className === 'ceil') {
      startGame(element);
    }
  });
});

// Установка обработчика событий на клик по кнопке 'Ок' (закрывает попап), обнуляет игру
closePopup.addEventListener('click', () => {
  // Закрытие попапа
  popup.classList.remove('show-popup');
});
