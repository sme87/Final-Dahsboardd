var counterSpeed = 500;

// Set this number you want your counter to count up to. Default is 20
var topSpeed = 27;

// If yu don't want your speed to start at 0, change it here. Default is 0.
var speedNumber = 0;

var myVar = setInterval(rpmcounter, counterSpeed);

export function rpmcounter() {

	if (speedNumber < topSpeed) {
		speedNumber++;
		document.getElementById("speedright").innerHTML = speedNumber;
        document.getElementById("speedrightt").innerHTML = speedNumber;
	} else {
		clearInterval(myVar);
	}
	return speedNumber;
}