let promesa = new Promise((resolve, reject) => {
    resolve('Exito');
});

promesa.then((resultado) => {
    console.log(resultado);
})