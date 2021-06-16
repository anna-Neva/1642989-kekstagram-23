// improrts
// const
// fns / listeners
// exe

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const PHOTO_DESCS = [
  'Дома',
  'На природе',
  'На даче',
  'Животные',
  'Дети',
];

const photoIds = [];

const urlIds = [];

const commentIds = [];

const PHOTOS_COUNTS = 25;

const MIN_LIKES = 15;

const MAX_LIKES = 200;

const MIN_AVATAR = 1;

const MAX_AVATAR = 6;

const MIN_COMMENT = 1;

const MAX_COMMENT = 10;

const MAX_STRING_LENGTH = 140;

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min > max) {
    throw new Error('Введенные числа должны быть положительные');
  }

  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

const checkString = (text, max) => text.length <= max;

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const generateUniqueId = (arr, from = 1, to = 25) => {
  let id = getRandomInteger(from, to);

  while (arr.includes(id)) {
    id = getRandomInteger(from, to);
  }
  return id;
};

const getComment = () => {
  return {
    id: generateUniqueId(commentIds, 1, 1000),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  };
};

const getComments = () => {
  return new Array(getRandomInteger(MIN_COMMENT, MAX_COMMENT)).fill(null).map(() => getComment());
};

const getPhoto = () => {
  return {
    id: generateUniqueId(photoIds),
    url: `photos/${generateUniqueId(urlIds)}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: getComments(),
  };
};

// const generatePhotos = () => {
//   return new Array(PHOTOS_COUNT).fill(null).map(() => getPhoto());
// };

//mdn array map
const generatePhotos = new Array(PHOTOS_COUNTS).fill(null).map(() => getPhoto());

console.log(generatePhotos);

console.log(checkString('anna', MAX_STRING_LENGTH));


