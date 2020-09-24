"use strict";

const refs = {
  days: document.querySelector(".value[data-value=days]"),
  hours: document.querySelector(".value[data-value=hours]"),
  mins: document.querySelector(".value[data-value=mins]"),
  secs: document.querySelector(".value[data-value=secs]"),
};

const timer = {
  intervalId: null,
  targetDate: new Date("10/20/2020"),
  start() {
    updateClockface(0);

    this.intervalId = setInterval(() => {
      const startTime = Date.now();
      const deltaTime = this.targetDate - startTime;

      if (deltaTime <= 0) {
        clearInterval(this.intervalId);
      }
      updateClockface(deltaTime);
    }, 1000);
  },
};
function updateClockface(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}
timer.start();

function pad(value) {
  return String(value).padStart(2, "0");
}
