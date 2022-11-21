const fs = require('fs');

const stream_read = fs.createReadStream('./archivo/mi_archivo.txt', { encoding: 'utf-8' });


stream_read
            .on('open', ()=>{
                console.log('Se ABRIO el stream del archivo');
            })
            .on('close', ()=>{
                console.log('Se CERRO el stream del archivo');
            })
            .on('error', ()=>{
                console.log('Hubo un error al leer el archivo');
            })
            .on('data', ()=>{
                console.log('----');                
            })