var express = require('express');
var router = express.Router();


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

router.get('/', (req,res) => {
  res.render('index', {titulo: 'Handlebars', mensaje: 'MitoCode | Handlebars', personas: personas});
});


module.exports = router;
