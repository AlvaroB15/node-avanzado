
const fs = require('fs');

let contenido = "1234567890";
let iteraciones = 15;

const streamEscritura = fs.createWriteStream('./archivo/mi_archivo.txt');

for (let i = 0; i < iteraciones; i++) {
    contenido += contenido;
    streamEscritura.write(contenido, res => {
        console.log('...');
    })
}

fs.writeFile('./archivo/mi_archivo.txt', contenido, () => {
    console.log('Escritura directa finalizada');
})