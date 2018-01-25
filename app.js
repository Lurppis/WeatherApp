//Poland%2C%20Warszawska%2022%20Rumia
const yargs = require('yargs');
const geocode = require('./helpers/geocode/geocode');

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


geocode.geocodeAddress(argv.a, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
});
