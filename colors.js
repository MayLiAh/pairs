// Массив цветов для клеток
let colors = ['red',
              'orange',
              'yellow',
              'green',
              'blue',
              'black',
              'gray',
              'lightblue',
              'red',
              'orange',
              'yellow',
              'green',
              'blue',
              'black',
              'gray',
              'lightblue'
             ];

// Функция, удаляющая несовпадающие цвета у клеток
const deleteColors = (color1, color2, id1, id2) => {
    document.querySelector(`#${id1}`).classList.remove(color1);
    document.querySelector(`#${id2}`).classList.remove(color2);
};