// Função para o menu-toggle (se aplicável)
//const menuToggle = document.querySelector(".menu-toggle");
//const nav = document.querySelector("nav");
//menuToggle.addEventListener("click", () => {
//nav.classList.toggle("open");
//});

// script.js
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.list-menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('menu-active');
});

