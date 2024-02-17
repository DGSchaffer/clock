// Analogue clock:
// get DOM elements of the 'Zeiger' and store them in Variables.
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

//Function to setup the clock with new Date() method
//get the current seconds, minutes and hours via get-methods
function setDate() {
  const date = new Date();
  const secs = date.getSeconds();
  const secsDegrees = (secs / 60) * 360 + 90;
  seconds.style.transform = `rotate(${secsDegrees}deg)`;
  const mins = date.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (secs / 60) * 6 + 90;
  minutes.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = date.getHours();
  const hrsDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hours.style.transform = `rotate(${hrsDegrees}deg)`;
}
setInterval(setDate, 1000);
// call function
setDate();

//Digital clock:
// define function
function currentTimeDigital() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  //ternary operator inserts a 0 before a single-digit number
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  //Store time in variable
  const time = hh + ":" + mm + ":" + ss + " ";

  //Connect function to the DOM
  document.getElementById("digital-display").innerText = time;

  // setTimeout() method calls function after 1000ms
  const t = setTimeout(function () {
    currentTimeDigital();
  }, 1000);
}
//Call function
currentTimeDigital();
