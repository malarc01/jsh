// speed limit = 70
// 5=> 1 point
// 12 points => suspended

// Math.floor(1.3)
checkSpeed();

function checkSpeed(speed) {
	if (speed >= 0 && speed <= 74) {
		console.log('Ok');
	} else if (speed >= 75 && speed <= 79) {
		console.log('Point:1');
	} else if (speed >= 80 && speed <= 84) {
		console.log('Point:2');
	} else if (speed >= 85 && speed <= 89) {
		console.log('Point:3');
	} else if (speed >= 90 && speed <= 94) {
		console.log('Point:4');
	} else if (speed >= 95 && speed <= 99) {
		console.log('Point:5');
	} else if (speed >= 100 && speed <= 104) {
		console.log('Point:6');
	} else if (speed >= 105 && speed <= 109) {
		console.log('Point:7');
	} else if (speed >= 110 && speed <= 114) {
		console.log('Point:8');
	} else if (speed >= 115 && speed <= 119) {
		console.log('Point:9');
	} else if (speed >= 120 && speed <= 124) {
		console.log('Point:10');
	} else if (speed >= 125 && speed <= 129) {
		console.log('Point:11');
	} else if (speed >= 130 && speed <= 134) {
		console.log('Point:12');
	} else if (speed >= 135) {
		console.log('License suspended');
	} else if (speed > 120) {
		console.log('License suspended');
	}
}

cSpeed(66);
function cSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;

	if (speed < speedLimit + kmPerPoint) {
		console.log('ok');
		return;
	}

	const points = Math.floor((speed - speedLimit) / kmPerPoint);

	if (points >= 12) console.log('License suspended');
	else console.log('Points', points);
}
