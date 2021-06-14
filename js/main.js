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

const PHOTO_DESC = [
  'Дома',
  'На природе',
  'На даче',
  'Животные',
  'Дети',
];

const PHOTOS_COUNT = 25;

let photoId = [];
let urlId = [];
let commentId = [];

function randomInteger(min, max) {
  if (min < 0 || max < 0 || min > max) {
    throw new Error('Введенные числа должны быть положительные');
  }

  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

console.log(NAMES[randomInteger(0, NAMES.length - 1)]);

const checkString = (text, max) => text.lenght <= max;

console.log(checkString('anna', 140));

const getPhotoId = () => {
  let id;
  while (true) {
    id = randomInteger(1, 25);
    if (photoId.indexOf(id) === -1) {
      photoId.push(id);
      break;
    }
  }
  return id;
};

const getPhotoUrl = () => {
  let id;
  while (true) {
    id = randomInteger(1, 25);
    if (urlId.indexOf(id) === -1) {
      urlId.push(id);
      break;
    }
  }
  return `photos/${id}.jpg`;
};

const getCommentId = () => {
  let id;
  while (true) {
    id = randomInteger(1, 1000);
    if (commentId.indexOf(id) === -1) {
      commentId.push(id);
      break;
    }
  }
  return id;
};

const getComment = () => {
  return {
    id: getCommentId(),
    avatar: `img/avatar-${randomInteger(1, 6)}.svg`,
    message: COMMENTS[randomInteger(0, COMMENTS.length - 1)],
    name: NAMES[randomInteger(0, NAMES.length - 1)],
  };
};

const getComments = () => {
  return new Array(randomInteger(1, 10)).fill(null).map(() => getComment());
};

const getPhoto = () => {
  return {
    id: getPhotoId(),
    url: getPhotoUrl(),
    description: PHOTO_DESC[randomInteger(0, PHOTO_DESC.length - 1)],
    likes: randomInteger(15, 200),
    comments: getComments(),
  };
};

const generatePhotos = new Array(PHOTOS_COUNT).fill(null).map(() => getPhoto());

console.log(generatePhotos);

