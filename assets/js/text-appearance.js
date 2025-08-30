document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.main-content h1, .main-content .title-divider, .main-content time, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6, .main-content p, .post-list li, .quote-container');

  // Initially hide all elements
  animatedElements.forEach(element => {
    element.classList.add('fade-in');
  });

  // Reveal elements one by one
  animatedElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible');
    }, index * 900); // Stagger the animation
  });
});
