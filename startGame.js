const startGame = () => {
  let isDobleClick = false;
  // Обработчик кликов по клеткам
  document.addEventListener('click', (element) => {
    // Проверка того, что клик сделан по клетке с нужным классом
    if (element.target.className === 'ceil') {
      // Проверка того, что нет открытых непарных клеток
      if (count === 0 && !isDobleClick) {
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
          if (count === 1 && !isDobleClick) {
            isDobleClick = true;
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
          } else {
            isDobleClick = false;
          }
      }

      // Проверка количества открытых пар, если 8 = игрок выиграл 
      if (pairsCount === 8) {
        document.getElementById('result').innerHTML = document.timerForm.timer.value;
        popup.classList.add('show-popup');
        clearTimeout(clocktimer);
        clearTimer();
      }
    }
  });
};