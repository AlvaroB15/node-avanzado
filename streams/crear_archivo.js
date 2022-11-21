const fs = require('fs');
const archivo = fs.createWriteStream('archivo.txt');

for (let i = 0; i < 10e6; i++) {
    archivo.write("Lorem ipsum dolor sit amet consectetur adipisicing elit");
}

archivo.end();