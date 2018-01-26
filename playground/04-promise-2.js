const request = require('request');
const key = 'AIzaSyADP8-e-GEMMRZ8toYm2bd7j2Wy1axQphc';

var geocodeAddress = (address) => {
    return new Promise((resolv, reject) => {
        const getEncodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${getEncodedAddress},&key=${key}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject(`Unable to find that address ${address}`);
            } else if (body.status === 'OK') {
                resolv({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    })
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});