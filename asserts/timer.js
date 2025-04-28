import element from './elements.js';
let intervalId = null;

const timerElement = () => {
  let defaultTime = '00:30';

  const getTimerElement = () => document.querySelector('.timer');

  const setTimer = (startTime = defaultTime) => {
    resetTimer(startTime);
    return new Promise((resolve) => {
      let [minutes, seconds] = startTime.split(':').map(Number);

      intervalId = setInterval(() => {
        const timerEl = getTimerElement();
        const background = document.querySelector('.quiz-container');

        if (seconds === 0) {
          if (minutes === 0) {
            stopTimer();
            resolve();
            return;
          }
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }

        if (seconds <= 5 && minutes === 0) {
          background.className = 'quiz-container red-background';
        } else if (seconds <= 15 && minutes === 0) {
          background.className = 'quiz-container orange-background';
        } else if (seconds >= 25 && minutes === 0) {
          background.className = 'quiz-container green-background';
        }
        
        timerEl.innerText = `${String(minutes).padStart(2, '0')}:${String(Number.parseInt(seconds)).padStart(2, '0')}`;
      }, 1000);
    });
  };

  const resetTimer = (time = defaultTime) => {
    stopTimer();
    const timerEl = getTimerElement();
    if (timerEl) timerEl.innerText = time;
    const background = document.querySelector('.quiz-container');
    if (background) background.className = 'quiz-container';
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const time = element({
    element: 'h1',
    className: 'timer',
    children: defaultTime,
  });

  const timer = element({
    element: 'div',
    className: 'timer-container',
    children: time,
  });

  return [timer, setTimer, resetTimer, stopTimer];
};
export default timerElement;
