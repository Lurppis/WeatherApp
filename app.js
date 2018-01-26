// Poland%2C%20Warszawska%2022%20Rumia
const yargs = require('yargs');
const axios = require('axios');

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

const geocodeKey = 'AIzaSyADP8-e-GEMMRZ8toYm2bd7j2Wy1axQphc';
const weatherKey = 'a290dcaca533293777074cea84558501';
const getEncodedAddress = encodeURIComponent(argv.a);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?&address=${getEncodedAddress},&key=${geocodeKey}`;

var convertFToC = (amount) => {
    return ((5 * (amount - 32)) / 9);
};

var convertCToF = (amount) => {
    return ((9 + (32 * 5)) / 5);
}

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    console.log(response.data.currently); // Now we can get what we want, or go even deeper for next days.
    console.log(`It's currently ${convertFToC(response.data.currently.temperature)}C, but it feels like ${convertFToC(response.data.currently.apparentTemperature)}C.`);
}).catch((error) => {
    if (error === 'ENOTFOUND') {
        console.log('Unable to connect to server.');
    } else {
        console.log(error.message);
    }
});