const request = require("request");
const argv = require('yargs').argv;

let address = argv.direccion;
let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`;




request({
    url: url,
    json: true,
}, (error, response, body) => {console.log(body);
});