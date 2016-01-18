var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
	.option('location',
	{
		alias: 'l',
		describe: 'Location to fetch weather',
		type: 'string'
	})
	.help('help')
	.argv;

if(typeof argv.l === 'string' && argv.l.length>0)
{
	weather(argv.l).then(function(currentWeather) {
		console.log(currentWeather);
	}).catch(function (err) {
		console.log(err);
	})
}
else {
	console.log('Location was not provided! Taking your location');
	location().then(function(loc) {
		return weather(loc.city);
	}).then(function (currentWeather) {
		console.log(currentWeather);
	}).catch(function (err) {
		console.log(err);
	});
}
