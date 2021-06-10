var counterSpeed = 50;

// Set this number you want your counter to count up to. Default is 20
var topSpeed = 200;

// If yu don't want your speed to start at 0, change it here. Default is 0.
var speedNumber = 0;

var myVar = setInterval(speedCounter, counterSpeed);

export function speedCounter() {

	if (speedNumber < topSpeed) {
		speedNumber++;
		document.getElementById("speedleft").innerHTML = speedNumber;
        document.getElementById("speedleftt").innerHTML = speedNumber;
	} else {
		clearInterval(myVar);
	}
	return speedNumber;
}