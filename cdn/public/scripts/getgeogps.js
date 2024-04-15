console.log('yes');

let message = document.getElementById("errorMessage");
getLocation();
function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(sendLocation);
	} else{ 
		message.innerHTML = "<em>Your browser is unsupported.</em>";
	}
}

function sendLocation(geoLocation) {
    var x = geoLocation.coords.latitude;
    var y = geoLocation.coords.longitude;
    console.log(x,y);
    return x,y;
}