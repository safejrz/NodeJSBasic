console.log("yolo");
console.log(module);

let n = 22000;

// module.exports.number = n;
// module.exports.saludar = function saludar() {
//     console.log('hello dude');
//}


module.exports = {
    subs: n,
    saludar: function saludar() {
        console.log('hello dude');
    },
    sumar: (a,b) => {
        return a + b;
    }
}
