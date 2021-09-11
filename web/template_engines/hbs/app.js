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

app.set('view engine', 'hbs');

app.get('/', (req,res) => {
    res.render('template', {titulo: 'Handlebars', mensaje: 'MitoCode | Handlebars', personas: personas});
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

