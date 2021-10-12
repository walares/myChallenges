const secH = document.querySelector(".secH");
const minH = document.querySelector(".minH");
const hourH = document.querySelector(".hourH");

setDate = function () {
  const now = new Date(); // new Date() returns value as an object

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secH.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minH.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourH.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(minutes);
};

setInterval(setDate, 1000);
