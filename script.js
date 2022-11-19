import { images } from './content.js';

const createImgElement = (imgObject) => {
  const image = document.createElement('img');
  image.src = imgObject.src ? imgObject.src : '';
  image.alt = imgObject.alt ? imgObject.alt : '';
  return image;
};

const appendImageArray = (element, objectArray) => {
  for (const object of objectArray) {
    const item = document.createElement('li');
    const image = createImgElement(object);
    item.appendChild(image);
    element.appendChild(item);
  }
}

const sortList = (list) => {
  const listContentCopy = list.slice(0);
  listContentCopy.sort((a, b) => b.cuteness - a.cuteness);
  return listContentCopy;
}

function renderList(listElement, listContent) {
  const sortedList = sortList(listContent);
  appendImageArray(listElement, sortedList);
}

function renderFeatured(element, title, featuredImage) {
  const heading = document.createElement('h2');
  const image = createImgElement(featuredImage);
  heading.textContent = title;
  element.appendChild(heading);
  element.appendChild(image);
}

const list = document.getElementById('list');
renderList(list, images);

const featuredTitle = 'Otter Family';
const featuredImage = images[2];
const featured = document.getElementById('featured');
renderFeatured(featured, featuredTitle, featuredImage);
