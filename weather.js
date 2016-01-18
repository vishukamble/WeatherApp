var request = require('request');

module.exports = function (location) {
	return new Promise(function(resolve, reject)
	{
		var encodedLocation = encodeURIComponent(location);
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodedLocation+"&appid=2de143494c0b295cca9337e1e96b00e0&units=metric";
		encodeURIComponent(location);
		if(!location)
			return reject('No location provided');
		request({ 
			url: url, 
			json: true}, function (err,res,body) 
			{
				if(err)
					reject('Error! Unable to fetch weather!');
				else
					resolve('It\'s ' + body.main.temp+' in '+ body.name + '!');
			});
		});
	}

