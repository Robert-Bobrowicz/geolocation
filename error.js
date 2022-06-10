function showError(display, error) {
    console.log("error function imported")
    switch (error.code) {
        case error.PERMISSION_DENIED:
            display.innerHTML = "Geolocation permission denied."
            break;
        case error.POSITION_UNAVAILABLE:
            display.innerHTML = "Position coordinates are unavailable."
            break;
        case error.TIMEOUT:
            display.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            display.innerHTML = "An unknown error occurred."
            break;
    }
}

export default showError;