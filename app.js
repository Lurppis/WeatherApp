// Poland%2C%20Warszawska%2022%20Rumia
const yargs = require('yargs');
const geocode = require('./helpers/geocode/geocode');
const weather = require('./helpers/darksky/forecast');

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

var convertFToC = (amount) => {
    return ((5 * (amount - 32)) / 9);
};

var convertCToF = (amount) => {
    return ((9 + (32 * 5)) / 5);
}

geocode.geocodeAddress(argv.a, (errorMessage, geocodeAddressResult) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(geocodeAddressResult, undefined, 2));
        weather.getWeather(geocodeAddressResult.latitude, geocodeAddressResult.longitude, (errorMessage, weatherResult) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResult, undefined, 2));
                console.log(`It's currently ${convertFToC(weatherResult.currently.temperature)}C, but it feels like ${convertFToC(weatherResult.currently.apparentTemperature)}C.`);
            }
        })
    }
});