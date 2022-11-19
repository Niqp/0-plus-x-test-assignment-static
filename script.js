import { images } from "./content.js";

const ORDER = {
  ascending: "Ascending",
  descending: "Descending",
};

const SORTING_TYPES = {
  cuteness: "Cuteness",
  location: "Location",
};

const FEATURED_TITLE = "Otter Family";

const featuredImage = images[2];
const list = document.querySelector("#list");
const sortingButtons = document.querySelector(".sorting-menu");
const sortingOrderButton = sortingButtons.querySelector("#sorting-order");
const featured = document.querySelector("#featured");

let currentOrder = ORDER.ascending;
let currentSorting = SORTING_TYPES.cuteness;

const createImgElement = (imgObject) => {
  const image = document.createElement("img");
  image.src = imgObject.src ?? "";
  image.alt = imgObject.alt ?? "";
  return image;
};

const appendImageArray = (element, objectArray) => {
  for (const object of objectArray) {
    const item = document.createElement("li");
    const image = createImgElement(object);
    item.appendChild(image);
    element.appendChild(item);
  }
};

const sortList = (list, type, order) => {
  const listContentCopy = list.slice(0);
  if (type === SORTING_TYPES.cuteness) {
    listContentCopy.sort((a, b) => b.cuteness - a.cuteness);
  } else if (type === SORTING_TYPES.location) {
    listContentCopy.sort((a, b) => {
      const locationA = a.location.toUpperCase();
      const locationB = b.location.toUpperCase();
      if (locationA < locationB) {
        return -1;
      }
      if (locationA > locationB) {
        return 1;
      }
      return 0;
    });
  }
  if (order === ORDER.descending) listContentCopy.reverse();
  return listContentCopy;
};

function renderList(listElement, listContent) {
  const sortedList = sortList(listContent, currentSorting, currentOrder);
  appendImageArray(listElement, sortedList);
}

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

function renderFeatured(element, title, featuredImage) {
  const heading = document.createElement("h2");
  const image = createImgElement(featuredImage);
  heading.textContent = title;
  element.appendChild(heading);
  element.appendChild(image);
}

renderList(list, images);
renderFeatured(featured, FEATURED_TITLE, featuredImage);

const handleSortingButtonClick = (ev) => {
  if (ev.target.id === "sorting-order") {
    clearElement(list);
    if (currentOrder === ORDER.ascending) currentOrder = ORDER.descending;
    else currentOrder = ORDER.ascending;
    sortingOrderButton.textContent = currentOrder;
    renderList(list, images);
    return;
  }
  if (ev.target.id === "sort-by-cuteness") {
    if (currentSorting !== SORTING_TYPES.cuteness) {
      clearElement(list);
      currentSorting = SORTING_TYPES.cuteness;
      renderList(list, images);
    }
    return;
  }
  if (ev.target.id === "sort-by-location") {
    if (currentSorting !== SORTING_TYPES.location) {
      clearElement(list);
      currentSorting = SORTING_TYPES.location;
      renderList(list, images);
    }
    return;
  }
};

sortingButtons.addEventListener("click", handleSortingButtonClick);
