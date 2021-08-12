const fs = require('fs');

console.log('Start');
/*
fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(`Error ${error}`);
    } else {
        console.log(data);
    }
});

let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);

fs.rename('data.txt', 'data_renombrado.txt', (error) => {
    if(error) throw error;
    console.log('rename successful!');
});

fs.appendFile('data.txt', '\r\nthanks lol bye', (error) =>{
    if (error) console.log(`Error ${error}`);
});


fs.createReadStream('data.txt').pipe(fs.createWriteStream('data2.txt'));


fs.unlink('data2.txt', (error) =>{
    if (error) throw error;
    console.log('Deleted');
});

fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));


fs.readdir('./../../', (error, files) => {
    files.forEach(file => {
        console.log(file);
    });
});
*/

fs.readdirSync('./../../').forEach(file => {
        console.log(file);
});

console.log('End');
