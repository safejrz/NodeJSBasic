let prom = require('./promesa');

prom.calcular(2,9).then((result)=> {
    console.log(result);
}, 
(error)=> {
    console.log(error);
});

/*
let promise = new Promise((resolve, reject)=> {
    resolve("ETZITO!!!");
    //reject("error");
});

promise.then((result) => {
    console.log(result);
}, 
(error)=> {
    console.log(error);
});
*/