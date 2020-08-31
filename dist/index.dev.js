"use strict";

var logoImage = document.getElementById('logo');
logoImage.addEventListener('click', function () {
  window.location = "./index.html";
});
var seeEventsButton = document.getElementById('see-events-navbutton');
seeEventsButton.addEventListener('click', function () {
  window.location = "./events/events.html";
});
var seeMediaButton = document.getElementById('see-media-navbutton');
seeMediaButton.addEventListener('click', function () {
  window.location = "./media/media.html";
});