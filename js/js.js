window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // timer
  const countTimer = (deadline) => {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds'),
      span = document.querySelectorAll('.span');


    const getTimeRemaining = () => {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
      return {
        timeRemaining,
        hours,
        minutes,
        seconds
      };
    };

    const updateClock = () => {
      const timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      if (timer.timeRemaining > 0) {
        if (timerHours.textContent < 10) {
          timerHours.textContent = '0' + timerHours.textContent;
        }
        if (timerMinutes.textContent < 10) {
          timerMinutes.textContent = '0' + timerMinutes.textContent;
        }
        if (timerSeconds.textContent < 10) {
          timerSeconds.textContent = '0' + timerSeconds.textContent;
        }
      } else {
        clearInterval(SetTimer);
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        timerHours.style.color = 'red';
        timerMinutes.style.color = 'red';
        timerSeconds.style.color = 'red';
        span.forEach(i => {
          i.style.color = 'red';
        });
      }
    };

    const SetTimer = setInterval(updateClock, 1000);
    updateClock();
  };

  countTimer('11 july 2021');

  // menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      list = document.querySelectorAll('ul>li');

    let actionMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', actionMenu);
    closeBtn.addEventListener('click', actionMenu);
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener('click', actionMenu);
    }
    list.forEach(item => item.addEventListener('click', actionMenu));
  };
  toggleMenu();

  // popup
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close');

    let fadeIn = (element, duration) => {
      element.style.display = 'block';
      element.style.opacity = '0';
      let last = +new Date();
      let tick = () => {
        element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
        last = +new Date();
        if (+element.style.opacity < 1) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
      };
      tick();
    };

    let fadeOut = (element, duration) => {
      element.style.opacity = '1';
      let last = +new Date();
      let tick = () => {
        element.style.opacity = +element.style.opacity - (new Date() - last) * duration;
        last = +new Date();
        if (+element.style.opacity !== 0) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
      };
      tick();
    };

    popupBtn.forEach(item => {
      item.addEventListener("click", () => {
        fadeIn(popup, 300);
      });
    });
    popupClose.addEventListener("click", () => {
      fadeOut(popup, 300);
    });
  };
  togglePopup();
});