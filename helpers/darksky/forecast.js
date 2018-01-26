const request = require('request');
const key = 'a290dcaca533293777074cea84558501';

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to server');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                currently: body.currently
            })
        } else {
            callback('Unable to fetch weather.')
        }
    });
}

module.exports.getWeather = getWeather;