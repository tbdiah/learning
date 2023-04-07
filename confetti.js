function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const context = canvas.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  function frame() {
    context.clearRect(0, 0, width, height);
const confettiSettings = {
      particleCount: 3,
      angle: Math.random() * 360,
      spread: Math.random() * 90,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      },
      colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126]
      ]
    };

    confetti(confettiSettings);
    requestAnimationFrame(frame);
  }

  frame();
}

launchConfetti();
