// Функция, откладывающая вызов функции func на ms миллисекунд
// и отменяющая предыдущий вызов, если следующий произошел ранее, чем отработал этот
const debounce = (func, ms) => {
    let timer = null;
  
    return (...args) => {
      const onComplete = () => {
        func.apply(this, args);
        timer = null;
      }
  
      if (timer) {
        clearTimeout(timer);
      }
  
      timer = setTimeout(onComplete, ms);
    };
};

// Функция, определяющая процесс игры
const startGame = debounce((element) => {
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
            window.setTimeout("deleteColors(color1, color2, id1, id2);", 100);
          } else {
            // Увеличение счетчика пар
            pairsCount += 1;
          }
          // Обнуление счетчика непарных клеток
          count = 0;
      }

      // Проверка количества открытых пар, если 8 = игрок выиграл 
      if (pairsCount === 8) {
        document.getElementById('result').innerHTML = document.timerForm.timer.value;
        popup.classList.add('show-popup');
        // Обнуление таймера
        clearTimer();
      }
}, 100);