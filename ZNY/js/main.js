let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');
let body = document.querySelector('body');
burger.onclick = function(){
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("active");
}