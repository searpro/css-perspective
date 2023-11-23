console.log('Hello!');
const cube = document.querySelectorAll('.cube')[0];

const handle = (e) => {
  let x = e.currentTarget;
  cube.style.perspectiveOrigin = `${e.layerX}px ${e.layerY}px`;
};


cube.addEventListener('mousemove', handle);
