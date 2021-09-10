const _ = require('lodash');
const argv = require('yargs').argv;

//console.log(yargs.argv);

/*
let comando = process.argv;
console.log(comando);
*/

if (argv.usuario === 'MyCode') {
    let x = { "name": "James" }
    let y = { "nickname": "MyCode" }
    let z = [
        { name: "James", lastname: "Medina", age: 26 },
        { name: "MyCo", lastname: "Code", age: 2 },
    ]

    /*
    let result = _.assign(x,y);
    console.log(result);
    */

    //_.times(5, () => console.log("YEAH!"));


    let result = _.find(z, { name: "James" });
    console.log(result);


} else {
    console.log('Usuario no valido');
}