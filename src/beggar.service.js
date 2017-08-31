let speaker = require('./speaker.service.js');

function goodBumSays(name) {
	let speach = 'I need some chnage for the bus, can you spare me a penny';
	return `${speaker.greet(name)}. ${speach}`;
}


function badBumSays(name) {
	let speach = 'I need some money for crack, got $100???? No, well f.u. then.';
	return `${speaker.disrespect(name)}. ${speach}`;
}

module.exports = { goodBumSays, badBumSays };