import {generatePhotos} from './data.js';

const PHOTOS_AMOUNT = 25;

const pictureBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const dataArray = generatePhotos(PHOTOS_AMOUNT);

const renderPicture = (pictureObject) => {
  console.log(pictureObject);

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

  for (let i = 0; i < data.length; i++) {
    fragment.appendChild(renderPicture(data[i]));
  }

  console.log(fragment);
  pictureBlock.appendChild(fragment);
};

renderPictures(dataArray);
