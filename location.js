var url = 'http://ipinfo.io';
var request = require('request');

module.exports = function (callback) {
	return new Promise(function(resolve, reject)
	{
		request({
		url: url, 
		json: true,
		}, function (err,res,body) 
		{
			if(err)
				reject('Error! Unable to fetch weather!');
			else
				resolve(body);
		}
		);
	});
};