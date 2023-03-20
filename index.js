const carousel = document.querySelector('.card-carousel');
const cardNodeList = carousel.querySelectorAll('.card');

const leftButton = document.querySelector('.back-button');
const rightButton = document.querySelector('.next-button');

const cardCount = cardNodeList.length;

let leftCard = 0;
let rightCard = cardCount - 1;

// Infinite Carousel

function alignEdgeCard(value) {
  if (value === cardCount) return 0;
  if (value === -1) return cardCount - 1;
  return value;
}

function createFragment(index) {
  const fragment = document.createDocumentFragment();
  let iterationCount = 0;

  while (iterationCount < cardCount) {
    fragment.appendChild(cardNodeList[index]);
    index = alignEdgeCard(index + 1);
    iterationCount++;
  }

  return fragment;
}

leftButton.addEventListener('click', leftCarouselMove);

function leftCarouselMove() {
  let index = rightCard;
  const fragment = createFragment(index);
  leftCard = alignEdgeCard(leftCard - 1);
  rightCard = alignEdgeCard(rightCard - 1);
  carousel.appendChild(fragment);
}

rightButton.addEventListener('click', rightCarouselMove);

function rightCarouselMove() {
  let index = alignEdgeCard(leftCard + 1);
  const fragment = createFragment(index);
  leftCard = alignEdgeCard(leftCard + 1);
  rightCard = alignEdgeCard(rightCard + 1);
  carousel.appendChild(fragment);
}

// Select Menu
