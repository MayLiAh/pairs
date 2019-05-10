// Получение попапа и кнопки закрытия
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.ok');

// Получение списка всех клеток
const ceils = document.querySelectorAll('.ceil');

// Получение кнопки старта
const start = document.querySelector('.start');

// Установка обработчика событий на клик по кнопке старт
start.addEventListener('click', () => {
  event.preventDefault();
  colors = shuffle(colors);
  dateObj = new Date();
  startTimer();
});

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

// Обработчик кликов по клеткам
document.addEventListener('click', (element) => {
  // Проверка того, что клик сделан по клетке с нужным классом
  if (element.target.className === 'ceil') {
    // Проверка того, что нет открытых непарных клеток
    if (count === 0) {
      // Получение id клетки, по которой кликнули
      id1 = element.target.id;
      // Получение числовой части id
      id1Number = Number(id1.substring(2));
      // Присвоение клетке цвета по id
      color1 = colors[id1Number];
      document.querySelector(`#${id1}`).classList.add(color1);
      // Открыта непарная клетка
      count = 1;
    } else {
        // Обработка клетки, если на поле есть открытая клетка без пары
        id2 = element.target.id;
        id2Number = Number(id2.substring(2));
        color2 = colors[id2Number];
        document.querySelector(`#${id2}`).classList.add(color2);

        // Проверка того, что цвета текущей и последней открытой клеток совпадают
        if (color1 !== color2) {
          // Установка задержки закрытия непарных клеток
          window.setTimeout("deleteColors(color1, color2, id1, id2);", 200);
        } else {
            // Увеличение счетчика пар
            pairsCount += 1;
        }
        // Обнуление счетчика непарных клеток
        count = 0;
    }

    if (pairsCount === 8) {
      document.getElementById('result').innerHTML = document.timerForm.timer.value;
      popup.classList.add('show-popup');
      clearTimeout(clocktimer);
      clearTimer();
    }
  }
});

// Установка обработчика событий на клик по кнопке 'Ок' (закрывает попап), обнуляет игру
closePopup.addEventListener('click', () => {
  // Закрытие попапа
  popup.classList.remove('show-popup');
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
});
