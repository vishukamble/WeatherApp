function doWork (data,callback) {
	callback('done');
}
var request = require('request');

function getWeather(location) {
	return new Promise(function(resolve,reject) 
	{
	var encodedLocation = encodeURIComponent(location);
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodedLocation+"&appid=2de143494c0b295cca9337e1e96b00e0&units=metric";
	encodeURIComponent(location);
	if(!location)
		return callback('No location provided');

	request({
		url: url, 
		json: true,
	}, function (err,res,body) {
		if(err)
			reject('Error! Unable to fetch weather!');
		else
		{
			resolve('it\'s ' + body.main.temp+' in '+ body.name + '!');
		}
	});
	})
	};

getWeather("New York").then(function(currentWeather) {
	console.log(currentWeather);
}, function(error) {
	console.log(error);
})