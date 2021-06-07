function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(randomInteger(0, 10) );


function checkString(text, maxLength) {
  return text.length <= maxLength;
};

console.log(checkString('anna', 140));
