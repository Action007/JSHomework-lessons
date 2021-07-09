'use strict';
window.addEventListener('DOMContentLoaded', function () {
  let h1 = document.querySelector('h1');
  let h2 = document.querySelector('h2');
  let h3 = document.querySelector('h3');
  let h4 = document.querySelector('h4');

  let firstTime = (value) => {
    if (value < 10) {
      value = '0' + value;
    }
    return value;
  };

  let dayTime = (value) => {
    if (value >= 5 && value <= 11) {
      return 'Доброе утро!';
    } else if (value >= 12 && value <= 17) {
      return 'Добрый день!';
    } else {
      return 'Добрый вечер!';
    }
  };

  let getHours = () => {
    let time = new Date();
    let hours = dayTime(time.getHours());

    h1.textContent = hours;
  };

  let day = () => {
    let days = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
    ];
    let day = new Date().getDay();
    h2.textContent = `Сегодня: ${days[day]}`;
  };

  let getTime = () => {
    let time = new Date();
    let hours = firstTime(time.getHours());
    let minutes = firstTime(time.getMinutes());
    let seconds = firstTime(time.getSeconds());

    h3.textContent = `Текущее время: ${hours}:${minutes}:${seconds}PM`;
    setTimeout(getTime);
  };

  let newYear = (year) => {
    let timeYear = new Date(year).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (timeYear - dateNow) / 1000,
      day = Math.floor(timeRemaining / 60 / 60 / 24);
    h4.textContent = `До нового года осталось ${day} дней`;
  };

  day();
  newYear('1 january 2022');
  getHours();
  getTime();
});