document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.art-carousel-track');
  if (track) {
    const items = Array.from(track.children);
    const itemWidth = items[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const viewportWidth = window.innerWidth;

    // Calculate how many clones are needed to fill the track for a seamless loop
    let clonesNeeded = Math.ceil(viewportWidth / trackWidth) + 1;
    if (clonesNeeded < 2) {
      clonesNeeded = 2; // Ensure at least one full set of clones
    }

    for (let i = 0; i < clonesNeeded; i++) {
      items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });
    }

    if (typeof initializePageTransitions === 'function') {
      initializePageTransitions('.art-carousel-item');
    }
  }
});