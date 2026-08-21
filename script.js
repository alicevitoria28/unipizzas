const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.list-menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('menu-active');
});

