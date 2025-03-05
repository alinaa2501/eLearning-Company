const prevButton = document.querySelector('.pagination__button--prev');
const nextButton = document.querySelector('.pagination__button--next');
const serviceIcons = document.querySelectorAll('.service__icon');
const serviceLines = document.querySelectorAll('.service__description');
const pagination = document.getElementById('pagination');

const iconPaths = [
  {
    color: '#D4AF37',
    icons: [
      'instructional-design.svg',
      'elearning-development.svg',
      'mobile-learning.svg',
      'instructor-led-training.svg',
    ],
  },
  {
    color: '#29B4AD',
    icons: [
      'teal-design-service-icon.svg',
      'teal-development-service-icon.svg',
      'teal-learning-service-icon.svg',
      'teal-training-service-icon.svg',
    ],
  },
  {
    color: '#23B6B0',
    icons: [
      'outline-teal-design-service-icon.svg',
      'outline-teal-development-service-icon.svg',
      'outline-teal-learning-service-icon.svg',
      'outline-teal-training-service-icon.svg',
    ],
  },
  {
    color: '#B5B7B6',
    icons: [
      'gray-design-service-icon.svg',
      'gray-development-service-icon.svg',
      'gray-learning-service-icon.svg',
      'gray-training-service-icon.svg',
    ],
  },
];

const sideEffectUpdatePagination = withSideEffect(updatePagination);
const totalPages = iconPaths.length;
let currentPage = 1;

function withSideEffect(sideEffect) {
  return fn =>
    (...args) => {
      fn(...args);
      sideEffect();
    };
}

function setPage(page) {
  currentPage = page;
  updatePagination();
}

function renderPagination(items, visibleCount = 3) {
  pagination.innerHTML = '';

  items.forEach((_, index) => {
    const li = document.createElement('li');
    li.classList.add('pagination__number');
    li.textContent = index + 1;
    li.dataset.page = index + 1;

    if (index === 0) li.classList.add('pagination__number--active');
    li.classList.add(index < visibleCount ? 'pagination__number--visible' : 'pagination__number--hidden');

    pagination.appendChild(li);
  });
}

function updatePagination() {
  document.querySelectorAll('.pagination__number').forEach(num => {
    const pageNumber = Number(num.dataset.page);

    const isPageVisible =
      currentPage === 1
        ? pageNumber <= 3
        : currentPage === totalPages
        ? pageNumber >= totalPages - 2
        : Math.abs(currentPage - pageNumber) <= 1;

    num.classList.toggle('pagination__number--visible', isPageVisible);
    num.classList.toggle('pagination__number--hidden', !isPageVisible);
    num.classList.toggle('pagination__number--active', pageNumber === currentPage);
  });

  updateIconsAndLines();
}

function updateIconsAndLines() {
  const pageData = iconPaths[currentPage - 1];
  serviceLines.forEach(line => {
    line.style.setProperty('--before-color', pageData.color);
  });
  serviceIcons.forEach((icon, index) => (icon.src = `assets/images/services-section/${pageData.icons[index]}`));
}

const handlePageClick = sideEffectUpdatePagination(event => {
  const page = Number(event.target.dataset.page);
  if (page) setPage(page);
});

const handlePrevClick = sideEffectUpdatePagination(() => {
  setPage(currentPage === 1 ? totalPages : currentPage - 1);
});

const handleNextClick = sideEffectUpdatePagination(() => {
  setPage(currentPage === totalPages ? 1 : currentPage + 1);
});

function addEventListeners() {
  pagination.addEventListener('click', handlePageClick);
  prevButton.addEventListener('click', handlePrevClick);
  nextButton.addEventListener('click', handleNextClick);
}

function init() {
  renderPagination(iconPaths);
  addEventListeners();
  updatePagination();
}

init();
