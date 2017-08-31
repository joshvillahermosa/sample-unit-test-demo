/*
 * Sample Logger Service
 */

function greet(name) {
	return `${getOpening(1)} ${name}`;
}

function disrespect(name) {
	return `${getOpening(2)} ${name}`
}

function getOpening(sumNum) {
	switch (sumNum) {
		case 1:
			return 'Hello,';
		case 2:
			return 'F.U., '
		default:
			return 'Hi,'
	}
}

module.exports = {greet, disrespect};