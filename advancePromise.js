function getLocation () {
	return new Promise(function(resolve,reject) {
		resolve('Hoboken');
	});
}

function getWeather (location) {
	return  new Promise(function (resolve, reject) {
		resolve('It\'s  degree celcius in '+location);
	});
}

getLocation().then(function(location) {
	return getWeather(location);
}).then(function(currentWeather) {
	console.log(currentWeather);
});