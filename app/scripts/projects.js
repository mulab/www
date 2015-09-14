var runPage;
runPage = new FullPage({
  id: 'pageContain',
  slideTime: 800,
  effect: {
    transform: {
      translate: 'Y'
    },
    opacity: [0, 1]
  },
  mode: 'wheel, touch, nav:navBar',
  easing: 'ease'
});