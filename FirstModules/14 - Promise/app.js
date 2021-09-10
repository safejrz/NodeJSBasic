let prom = require('./promesa');

prom.calcular(0,2).then((result)=> {
    console.log(result);
}, 
(error)=> {
    console.log(error);
});

///Simple promise declaration with synchronous execution.
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
