var request = require('request');

var key = 'AIzaSyADP8-e-GEMMRZ8toYm2bd7j2Wy1axQphc';
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+CA&key=${key}`,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});