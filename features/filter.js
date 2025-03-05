const typeTrigger = document.querySelector('.filters__type-trigger');
const typeDropdown = document.querySelector('.filters__type-dropdown');
const typeClose = document.querySelector('.filters__type-close');
const typeFilter = document.querySelector('.filters__type');
const typeIcon = typeTrigger.querySelector('img');

const colorStyles = new Map([
  [
    'outline-teal',
    {
      backgroundColor: '#FFFFFF',
      border: '2px solid #3D948E',
      filter: 'invert(40%) sepia(78%) saturate(364%) hue-rotate(140deg) brightness(85%) contrast(90%)',
    },
  ],
  [
    'outline-gray',
    {
      backgroundColor: '#FFFFFF',
      border: '2px solid #B5B7B6',
      filter: 'invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)',
    },
  ],
]);

const getDefaultStyles = color => ({
  backgroundColor: color,
  border: 'none',
  filter: 'none',
});

function init() {
  typeDropdown.style.display = 'none';
  addEventListeners();
}

function updateClassList(isCloseDropDown = false) {
  if (isCloseDropDown) {
    typeDropdown.style.display = 'none';
  }
  typeTrigger.classList.remove('hidden');
  typeFilter.classList.remove('open');
}

function openDropdown() {
  typeDropdown.style.display = 'flex';
  typeTrigger.classList.add('hidden');
  typeFilter.classList.add('open');
}

function handleColorClick(event) {
  const color = event.target.closest('.filters__type-color');
  if (!color) return;

  const selectedColor = color.getAttribute('data-color');
  const styles = colorStyles.get(selectedColor) || getDefaultStyles(selectedColor);

  typeTrigger.style.backgroundColor = styles.backgroundColor;
  typeTrigger.style.border = styles.border;
  typeIcon.style.filter = styles.filter;

  updateClassList(true);
}

function handleOutsideClick(event) {
  !typeFilter.contains(event.target) && updateClassList(true);
}

function addEventListeners() {
  typeTrigger.addEventListener('click', openDropdown);
  typeClose.addEventListener('click', updateClassList.bind(null, true));
  typeDropdown.addEventListener('click', handleColorClick);
  document.addEventListener('click', handleOutsideClick);
}

init();
