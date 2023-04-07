// JavaScript Document
function launchConfetti() {
  const container = document.getElementById('confetti-container');

  const confettiSettings = {
    target: container,
    max: 200,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126]
    ],
    clock: 25,
    interval: 1000 / 60,
    zIndex: 10000
  };

  const resizeCanvas = () => {
    const canvas = container.querySelector('canvas');
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  };

  confetti(confettiSettings);
  resizeCanvas();

  window.addEventListener('resize', resizeCanvas);
}

launchConfetti();

