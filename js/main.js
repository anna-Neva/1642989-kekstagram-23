function randomInteger(min, max) {
  if (min < 0 || max < 0 || min > max) {
    throw new Error('Введенные числа должны быть положительные');
  }

  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

console.log(randomInteger(0, 10));

const checkString = (text, max) => text.lenght <= max;


console.log(checkString('anna', 140));
