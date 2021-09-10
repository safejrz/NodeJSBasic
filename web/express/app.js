const express = require('express');
const app = express();

let isLogin = () => true;
let logger = (req, res, next) => {
    console.log('Method type: ', req.method);
    next();
}
let showIP = (req, res, next) => {
    console.log('127.0.0.1');
    next();
}

app.use((req, res, next) => {
    if(isLogin()){
        next();        
    } else {
        res.send('Please login first!');
    }

}, logger, showIP);
//app.use(logger);

app.get('/:user', (req, res) => {
    let usuario = req.params.user;
    res.send(`Bienvenido ${usuario}`);
})

app.get('/', function (req, res) {
    res.send(`Hello World! ${req.method}`);
});

app.post('/', function (req, res) {
    res.send(`Hello World! ${req.method}`);
});

app.put('/', function (req, res) {
    res.send(`Hello World! ${req.method}`);
});

app.delete('/', function (req, res) {
    res.send(`Hello World! ${req.method}`);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

