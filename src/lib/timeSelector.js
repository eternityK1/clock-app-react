function getMilliseconds(time) {
  return Math.trunc((time % 1000) / 10);
}

function getSeconds(time) {
  return Math.trunc(time / 1000) % 60;
}

function getMinutes(time) {
  return Math.trunc(Math.trunc(time / 1000) / 60);
}

export { getMilliseconds, getSeconds, getMinutes };
