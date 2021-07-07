import {generatePhotos} from './data.js';

const PHOTOS_AMOUNT = 25;

const pictureBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const dataArray = generatePhotos(PHOTOS_AMOUNT);

const renderPicture = (pictureObject) => {

  const picture = pictureTemplate.cloneNode(true);
  const img = picture.querySelector('.picture__img');
  const likes = picture.querySelector('.picture__likes');
  const comments = picture.querySelector('.picture__comments');

  img.src = pictureObject.url;
  likes.textContent = pictureObject.likes;
  comments.textContent = pictureObject.comments.length;

  return picture;
};

const renderPictures = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach((item => {
    fragment.appendChild(renderPicture(item));
  });

  pictureBlock.appendChild(fragment);
};

renderPictures(dataArray);
