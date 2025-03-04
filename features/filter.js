// Type

document.addEventListener('DOMContentLoaded', function () {
  const typeTrigger = document.querySelector('.filters__type-trigger');
  const typeDropdown = document.querySelector('.filters__type-dropdown');
  const typeClose = document.querySelector('.filters__type-close');
  const typeColors = document.querySelectorAll('.filters__type-color');
  const typeFilter = document.querySelector('.filters__type');
  const typeIcon = typeTrigger.querySelector('img');

  // Ensure dropdown is hidden on page load
  typeDropdown.style.display = 'none';

  // Show Dropdown, Hide Main Circle, and Adjust Margin
  typeTrigger.addEventListener('click', function () {
    typeDropdown.style.display = 'flex';
    typeTrigger.classList.add('hidden');
    typeFilter.classList.add('open');
  });

  // Close Dropdown and Restore Margin
  typeClose.addEventListener('click', function () {
    typeDropdown.style.display = 'none';
    typeTrigger.classList.remove('hidden');
    typeFilter.classList.remove('open');
  });

  // Handle Color Selection
  typeColors.forEach(color => {
    color.addEventListener('click', function () {
      let selectedColor = this.getAttribute('data-color');

      if (selectedColor === 'outline-teal') {
        typeTrigger.style.backgroundColor = '#FFFFFF';
        typeTrigger.style.border = '2px solid #3D948E';
        typeIcon.style.filter =
          'invert(40%) sepia(78%) saturate(364%) hue-rotate(140deg) brightness(85%) contrast(90%)';
      } else if (selectedColor === 'outline-gray') {
        typeTrigger.style.backgroundColor = '#FFFFFF';
        typeTrigger.style.border = '2px solid #B5B7B6';
        typeIcon.style.filter = 'invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)';
      } else {
        typeTrigger.style.backgroundColor = selectedColor;
        typeTrigger.style.border = 'none';
        typeIcon.style.filter = 'none';
      }

      typeDropdown.style.display = 'none';
      typeTrigger.classList.remove('hidden');
      typeFilter.classList.remove('open');
    });
  });

  // Close Dropdown When Clicking Outside
  document.addEventListener('click', function (event) {
    if (!typeFilter.contains(event.target)) {
      typeDropdown.style.display = 'none';
      typeTrigger.classList.remove('hidden');
      typeFilter.classList.remove('open');
    }
  });
});
