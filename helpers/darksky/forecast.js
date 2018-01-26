const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/a290dcaca533293777074cea84558501/49.997,20.051',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log(error);
    } else if (response.statusCode === 400) {
        console.log('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
    }
});