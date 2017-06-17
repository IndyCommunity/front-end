
const app = {
  init(selectors) {
    particlesJS.load('particles-js', 'javascript/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

    const titleContainer = document.querySelector(selectors.title);
    setTimeout(() => {
      titleContainer.classList.add('active');
      // titleContainer.classList.add('animated', 'zoomOut');
    }, 100);

  },
}

app.init({
  title: '#title-container',
});


