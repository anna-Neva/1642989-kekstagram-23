import {
  generateUniqueId,
  getRandomArrayElement,
  getRandomInteger
} from './utils.js';

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

const MIN_LIKES = 15;

const MAX_LIKES = 200;

const MIN_AVATAR = 1;

const MAX_AVATAR = 6;

const MIN_COMMENT = 1;

const MAX_COMMENT = 10;

// const MAX_STRING_LENGTH = 140;

const photoIds = [];

const urlIds = [];

const commentIds = [];

//Генерация одного комментария
const getComment = () => {
  return {
    id: generateUniqueId(commentIds, 1, 1000),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  };
};

//Генерация всех комментариев
const getComments = () => new Array(getRandomInteger(MIN_COMMENT, MAX_COMMENT)).fill(null).map(() => getComment());

//Генерация одной фотографии
const getPhoto = () => {
  return {
    id: generateUniqueId(photoIds),
    url: `photos/${generateUniqueId(urlIds)}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: getComments(),
  };
};

//Генерация всех фотографий
const generatePhotos = (amount) => new Array(amount).fill(null).map(() => getPhoto());

export {generatePhotos};
// export {createMiniatures};
