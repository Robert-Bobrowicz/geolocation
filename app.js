import showError from "./error.js";

const display = document.querySelector(".App");
const error = '';

function showLocation() {
  navigator.geolocation.getCurrentPosition(showPosition, showError(display, error));
}

function showPosition(position) {
  console.log(position);

  display.innerHTML = `<b>Your current position</b> 
                        <br>
                        <br>latitude: ${position.coords.latitude} 
                        <br>longitude: ${position.coords.longitude}`;
};

showLocation();