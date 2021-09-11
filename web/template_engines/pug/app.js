const express = require('express');
const app = express();

let personas = [
    {
        id: 1,
        nombre: "Mitomano"
    },
    {
        id: 2,
        nombre: "Mito"
    },
    {
        id: 3,
        nombre: "Man"
    },
]

app.set('view engine', 'pug');

app.get('/', (req,res) => {
    res.render('template2', {titulo: 'pug', mensaje: 'MitoCode | Pug', personas: personas});
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

