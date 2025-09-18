document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".main-nav a");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});