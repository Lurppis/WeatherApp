//Poland%2C%20Warszawska%2022%20Rumia
const request = require('request');
const yargs = require('yargs');

const key = 'AIzaSyADP8-e-GEMMRZ8toYm2bd7j2Wy1axQphc';
const argv = yargs
    .option({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch waether for',
            String: true
        }
    })
    .help('help', 'h')
    .argv;

const getEncodedAddress = encodeURIComponent(argv.a)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${getEncodedAddress},&key=${key}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log("Unable to connect to Google servers");
    } else if (body.status === 'ZERO_RESULTS') {
        console.log(`Unable to find that address ${argv.a}`);
    } else if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Location: lat: ${body.results[0].geometry.location.lat} lng: ${body.results[0].geometry.location.lng} `);
    }
});