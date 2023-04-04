const swup = new Swup({
  animationSelector: '[class*="swup-transition-"]'
});

swup.on('willReplaceContent', () => {
  const wipe = document.querySelector('.fullscreen-wipe');
  wipe.style.transform = 'scaleX(1)';
});

swup.on('contentReplaced', () => {
  const wipe = document.querySelector('.fullscreen-wipe');
  wipe.style.transform = 'scaleX(0)';
});
