let isTransitioning = false;

function initializePageTransitions(selector = 'a[href^="/"]') {
  const links = document.querySelectorAll(selector); // Select all internal links

  links.forEach(link => {
    // Avoid adding duplicate listeners
    if (link.dataset.transitionListener) {
      return;
    }
    link.dataset.transitionListener = true;

    link.addEventListener('click', function(event) {
      // If a transition is already happening, do nothing
      if (isTransitioning) {
        event.preventDefault();
        return;
      }

      // If the link has the 'no-transition' class, let it behave normally
      if (this.classList.contains('no-transition')) {
        return;
      }
      
      // Prevent the default link behavior
      event.preventDefault();

      // Set the transition flag
      isTransitioning = true;

      // Get the destination URL
      const destination = this.href;

      // Fade the loader back in
      document.body.classList.remove('page-loaded');

      // Wait for the loader to fade in, then navigate
      setTimeout(() => {
        window.location.href = destination;
      }, 500); // This should match the loader's fade-in duration

    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');

  // Add page-loaded class to body when the page is fully loaded
  window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
  });

  initializePageTransitions();
});
