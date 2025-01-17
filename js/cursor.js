//cursor

const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const interactiveElements = document.querySelectorAll('a, input, button');

interactiveElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    cursor.style.transform = 'scale(2) translate(-25%, -25%)';
    cursor.style.backgroundColor = 'rgba(255, 255, 255, .2)';
    cursor.style.borderColor = 'rgb(245, 117, 0)';
  });

  element.addEventListener('mouseout', () => {
    cursor.style.transform = 'scale(1) translate(-50%, -50%)';
    cursor.style.backgroundColor = 'rgb(245, 117, 0)';
    cursor.style.borderColor = 'rgb(255, 255, 255)';
  });
});