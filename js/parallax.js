(function(){
  const banner = document.getElementById('Banner');
  if (!banner) return;
  const speed = 0.3;
  let ticking = false;
  const disableOnSmall = window.matchMedia('(max-width: 768px)');
  function onScroll(){
    if (disableOnSmall.matches) return;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        banner.style.backgroundPosition = `center ${-scrolled * speed}px`;
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  const mqChange = (e) => {
    if (e.matches) {
      banner.style.backgroundPosition = '';
    } else {
      const scrolled = window.scrollY;
      banner.style.backgroundPosition = `center ${-scrolled * speed}px`;
    }
  };
  if (typeof disableOnSmall.addEventListener === 'function') {
    disableOnSmall.addEventListener('change', mqChange);
  } else if (typeof disableOnSmall.addListener === 'function') {
    disableOnSmall.addListener(mqChange);
  }
})();
