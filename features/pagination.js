document.addEventListener('DOMContentLoaded', function () {
  const paginationNumbers = document.querySelectorAll('.pagination__number');
  const prevButton = document.querySelector('.pagination__button--prev');
  const nextButton = document.querySelector('.pagination__button--next');
  const serviceIcons = document.querySelectorAll('.service__icon'); // Service section icons
  const serviceLines = document.querySelectorAll('.service__line'); // Under-title lines

  
  let currentPage = 1; // Start at page 1
  const totalPages = 4; // Total number of pages

  // Define colors and icons for each page
  const iconPaths = {
    1: {
      color: '#D4AF37', // Default color (golden)
      icons: [
        'instructional-design.svg',
        'elearning-development.svg',
        'mobile-learning.svg',
        'instructor-led-training.svg',
      ],
    },
    2: {
      color: '#29B4AD',
      icons: [
        'teal-design-service-icon.svg',
        'teal-development-service-icon.svg',
        'teal-learning-service-icon.svg',
        'teal-training-service-icon.svg',
      ],
    },
    3: {
      color: '#23B6B0',
      icons: [
        'outline-teal-design-service-icon.svg',
        'outline-teal-development-service-icon.svg',
        'outline-teal-learning-service-icon.svg',
        'outline-teal-training-service-icon.svg',
      ],
    },
    4: {
      color: '#B5B7B6',
      icons: [
        'gray-design-service-icon.svg',
        'gray-development-service-icon.svg',
        'gray-learning-service-icon.svg',
        'gray-training-service-icon.svg',
      ],
    },
  };

  function updatePagination() {
    paginationNumbers.forEach(num => {
      const pageNumber = parseInt(num.innerText, 10);

      // Ensure three numbers are always visible
      if (currentPage === 1) {
        num.classList.toggle('pagination__number--visible', pageNumber <= 3);
      } else if (currentPage === totalPages) {
        num.classList.toggle('pagination__number--visible', pageNumber >= 2);
      } else {
        num.classList.toggle(
          'pagination__number--visible',
          pageNumber === currentPage || pageNumber === currentPage - 1 || pageNumber === currentPage + 1
        );
      }

      // Hide numbers that are not in the range
      num.classList.toggle('pagination__number--hidden', !num.classList.contains('pagination__number--visible'));

      // Update active page styling
      num.classList.toggle('pagination__number--active', pageNumber === currentPage);
    });

    // Update icons and line colors
    updateIconsAndLines();
  }

  function updateIconsAndLines() {
    const pageData = iconPaths[currentPage];
    if (!pageData) return;

    // Change the service section lines color
    serviceLines.forEach(line => {
      line.style.borderColor = pageData.color;
    });

    // Change service icons
    serviceIcons.forEach((icon, index) => {
      icon.src = `assets/images/services-section/${pageData.icons[index]}`;
    });
  }

  // Click event for pagination numbers
  paginationNumbers.forEach(num => {
    num.addEventListener('click', function () {
      currentPage = parseInt(this.innerText, 10);
      updatePagination();
    });
  });

  // Click event for "previous" button
  prevButton.addEventListener('click', function () {
    currentPage = currentPage === 1 ? totalPages : currentPage - 1;
    updatePagination();
  });

  // Click event for "next" button
  nextButton.addEventListener('click', function () {
    currentPage = currentPage === totalPages ? 1 : currentPage + 1;
    updatePagination();
  });

  updatePagination(); // Initialize pagination on load
});
