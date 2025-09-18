document.addEventListener('DOMContentLoaded', function() {
  const artPieces = document.querySelectorAll('.art-piece');
  const textElements = document.querySelectorAll('.main-content h1, .main-content .title-divider, .main-content time, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6, .main-content p, .post-list li, .quote-container, .art-carousel');
  const allAnimatedElements = [...artPieces, ...textElements];

  // Initially apply the fade-in class to hide the elements
  allAnimatedElements.forEach(element => {
    element.classList.add('fade-in');
  });

  // Enforce a minimum 1-second display time for the loader
  setTimeout(function() {
    // Add the 'page-loaded' class to the body to trigger the loader fade-out
    document.body.classList.add('page-loaded');
    
    // Wait for the loader to fade out before starting the content animation
    setTimeout(function() {
      let delay = 0;
      const stagger = 600;

      // Animate art pieces first
      artPieces.forEach((element) => {
        setTimeout(() => {
          element.classList.add('visible');
        }, delay);
        delay += stagger;
      });

      // Animate text elements after art pieces
      textElements.forEach((element) => {
        setTimeout(() => {
          element.classList.add('visible');
        }, delay);
        delay += stagger;
      });
    }, 1000); // This should match the loader's fade-out duration in the CSS
  }, 1000); // Minimum 1-second display time
});
