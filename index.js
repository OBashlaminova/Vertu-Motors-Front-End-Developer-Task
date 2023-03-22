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

const headerNav = document.querySelector('.header-nav');

headerNav.addEventListener('click', (event) => toggleDropdown(event));

function toggleDropdown(event) {
  const target = event.target;
  if (!target.classList.contains('dropdown-button')) return;

  const dropdownContainer = target.parentElement;
  const dropdown = dropdownContainer.querySelector('.dropdown');
  dropdown.classList.toggle('open');
}

document.addEventListener('click', (event) => closeDropdown(event));

function closeDropdown(event) {
  const target = event.target;
  if (target.classList.contains('dropdown')) return;
  if (target.classList.contains('dropdown-button')) return;

  const dropdownNodeList = document.querySelectorAll('.dropdown');
  const dropdownCount = dropdownNodeList.length;

  for (let i = 0; i < dropdownCount; i++) {
    var dropdown = dropdownNodeList[i];
    if (dropdown.classList.contains('open')) {
      dropdown.classList.remove('open');
    }
  }
}
