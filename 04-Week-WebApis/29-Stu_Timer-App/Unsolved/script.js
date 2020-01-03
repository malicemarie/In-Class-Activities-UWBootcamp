var statusSpan = document.querySelector('#status');
var statusToggle = document.querySelector('#status-toggle');
var playButton = document.querySelector('#play');
var pauseButton = document.querySelector('#pause');
var stopButton = document.querySelector('#stop');
var minutesDisplay = document.querySelector('#minutes');
var secondsDisplay = document.querySelector('#seconds');
var workMinutesInput = document.querySelector('#work-minutes');
var restMinutesInput = document.querySelector('#rest-minutes');

var totalSeconds = 60;
var totalMinutes = workMinutesInput.textContent;
var secondsElapsed = 0;
var interval;

function startTimer() {

  var workMinutesInput = setInterval(function () {
    --totalSeconds;
    secondsDisplay.textContent = totalSeconds;


    if (secondsDisplay.textContent === '0') {
      clearInterval(workMinutesInput);
      totalSeconds = 60;
      startTimer();
    }

  }, 100);

  var workMinutesInput = setInterval(function(){
    --totalMinutes;
    minutesDisplay.textContent = totalMinutes;

    if (secondsDisplay.textContent === '0'){
      clearInterval(workMinutesInput);
      totalMinutes = workMinutesInput;
      startTimer();
    }
  } ,100 * 60);

  

}



function startRest() {
  var restMinutesInput = setInterval(function () {
    --totalSeconds;
    secondsDisplay.textContent = totalSeconds;

    if (totalSeconds === 0) {
      clearInterval(restMinutesInput);
      toggleWorkOn()
    }
  }, 1000);
}


playButton.addEventListener('click', startTimer);
