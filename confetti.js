function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const context = canvas.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  const confettiSettings = {
    particleCount: 200,
    spread: 200,
    origin: {
      y: 0.6
    },
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126]
    ]
  };

  confetti(confettiSettings);
}

launchConfetti();