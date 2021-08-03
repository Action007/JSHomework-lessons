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

export default countTimer;