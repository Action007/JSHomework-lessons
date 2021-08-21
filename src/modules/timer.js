  const timer = (deadline) => {
    const timerDay = document.getElementById('timerDay'),
      timerHours = document.getElementById('timerHours'),
      timerMinutes = document.getElementById('timerMinutes'),
      timerSeconds = document.getElementById('timerSeconds'),

      timerDay2 = document.getElementById('timerDay2'),
      timerHours2 = document.getElementById('timerHours2'),
      timerMinutes2 = document.getElementById('timerMinutes2'),
      timerSeconds2 = document.getElementById('timerSeconds2');

    const getTimeRemaining = () => {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60 % 24),
        day = Math.floor(timeRemaining / 60 / 60 / 24);
      return {
        timeRemaining,
        day,
        hours,
        minutes,
        seconds,
      };
    };

    const updateClock = () => {
      const timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      timerDay.textContent = timer.day;

      timerHours2.textContent = timer.hours;
      timerMinutes2.textContent = timer.minutes;
      timerSeconds2.textContent = timer.seconds;
      timerDay2.textContent = timer.day;

      if (timer.timeRemaining > 0) {
        if (timerHours.textContent < 10) {
          timerHours.textContent = '0' + timerHours.textContent;
          timerHours2.textContent = '0' + timerHours2.textContent;
        }
        if (timerMinutes.textContent < 10) {
          timerMinutes.textContent = '0' + timerMinutes.textContent;
          timerMinutes2.textContent = '0' + timerMinutes2.textContent;
        }
        if (timerSeconds.textContent < 10) {
          timerSeconds.textContent = '0' + timerSeconds.textContent;
          timerSeconds2.textContent = '0' + timerSeconds2.textContent;
        }
        if (timerDay.textContent < 10) {
          timerDay.textContent = '0' + timerDay.textContent;
          timerDay2.textContent = '0' + timerDay2.textContent;
        }
      } else {
        clearInterval(SetTimer);
        timerDay.textContent = '00';
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';

        timerDay2.textContent = '00';
        timerHours2.textContent = '00';
        timerMinutes2.textContent = '00';
        timerSeconds2.textContent = '00';
      }
    };

    const SetTimer = setInterval(updateClock, 1000);
    updateClock();
  };

  export default timer;