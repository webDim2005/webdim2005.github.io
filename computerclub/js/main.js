//burger
// $(function(){
//   $('.burger__btn').on('click', function(){
//     $('.menu').toggleClass('active');
//     $('body').toggleClass('active');
//   });
// });
let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger__btn');
let body = document.querySelector('body');
burger.onclick = function(){
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("active");
}
document.addEventListener('DOMContentLoaded', function () {
  // конечная дата, например 1 июля 2021
  const deadline = new Date(2022, 06, 01);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});
//автоматизированный индикатор
let line = document.querySelector(".sales__box-line");
let sale = document.querySelector(".info-course__sum").textContent;
sale = sale.replace(/\s/g, '');
sale = parseInt(sale);
let MaxSale = document.querySelector(".sales__num").textContent;
MaxSale = MaxSale.replace(/\s/g, '');
MaxSale = parseInt(MaxSale);
let widthnum = (sale * 100)/MaxSale;
line.style.width = widthnum + "%";