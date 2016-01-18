# WeatherApp
A simple weather app built with NodeJS

This is a simple WeatherApp built entirely on NodeJs.

This app uses request and yargs modules. 
The require module is used to get api from ipinfo.io in JSON format.
The yargs module is used to get command line input from the user.

If the user enters the location, the app appends location to the url of openweathermap.org and gets the weather of that particular location.

If location is not provided, the app will take the IP of the user, extract the location from the JSON and finds the weather of that location.

I have also used promises to resolve the commands or reject errors.

Usage: Download and run app.js with switch -l to pass location as a string. 
Eg: node app.js -l "Mumbai"
To access help, type node.js --help
