//генерирует случайное число
const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min > max) {
    throw new Error('Введенные числа должны быть положительные');
  };

  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

//Берет слуйчайный номер в массиве для комментария и фото

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

//Гененрирует слуйчайный неповторяющийся номер комментария

const generateUniqueId = (arr, from = 1, to = 25) => {
  let id = getRandomInteger(from, to);

  while (arr.includes(id)) {
    id = getRandomInteger(from, to);
  }
  return id;
};

// Проверяет длину строки

const checkString = (text, max) => text.length <= max;

export {getRandomInteger, getRandomArrayElement, generateUniqueId, checkString};
