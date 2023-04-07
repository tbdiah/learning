// JavaScript Document
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const confettiSettings = {
    target: canvas,
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

  confetti(confettiSettings);
}

launchConfetti();
