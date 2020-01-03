var eventType = document.querySelector('#event-type');
var mouseEventsEl = document.querySelector('#click-events');
var keyEventsEl = document.querySelector('#key-events');

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === 'keydown') {
    mouseEventsEl.classList.add('hide');
    keyEventsEl.classList.remove('hide');
  }
  else {
    mouseEventsEl.classList.remove('hide');
    keyEventsEl.classList.add('hide');
  }
}


keyEventsEl.addEventListener('keydown', function (event) {
  var key = event.key.toLowerCase();
  if (keyEventsEl.includes(key)) {
    elements.forEach(function (element) {
      element.keyEventsEl += event.key;
    });
  }
});
