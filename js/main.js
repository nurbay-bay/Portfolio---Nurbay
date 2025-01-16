//sound

document.querySelectorAll('.sound').forEach(block => {
  block.addEventListener('mouseover', () => {
      const yourSound = new Audio('../audio/hover.mp3');
      yourSound.play();
  });
});


