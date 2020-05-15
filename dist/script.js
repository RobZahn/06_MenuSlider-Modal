const toggle = document.querySelector('#toggle');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const modal = document.querySelector('#modal');

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});
