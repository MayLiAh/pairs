// Функция получения случайного целого числа из диапазона, не включая max
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
 
// Функция перемешивания массива
const shuffle = (arr) => {
  const lastIndex = arr.length - 1;
  // Создание случайного индекса и временной переменной
  let randomIndex = 0;
  let temp = '';
  for (let i = 0; i < lastIndex; i += 1) {
    // Получение случайного индекса (ислючая последний)
    randomIndex = randomNum(0, lastIndex);
    // Взаимная замена последнего и случайного элементов массива
    temp = arr[randomIndex];
    arr[randomIndex] = arr[lastIndex];
    arr[lastIndex] = temp;
  }
  return arr;
};
