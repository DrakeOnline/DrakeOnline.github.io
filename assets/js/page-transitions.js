document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  const links = document.querySelectorAll('a[href^="/"]'); // Select all internal links

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the destination URL
      const destination = this.href;

      // Fade the loader back in
      document.body.classList.remove('page-loaded');

      // Wait for the loader to fade in, then navigate
      setTimeout(() => {
        window.location.href = destination;
      }, 1000); // This should match the loader's fade-in duration
    });
  });
});
