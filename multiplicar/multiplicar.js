const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================='.green);
    console.log(`===Tabla de ${base}===`.green);
    console.log('================='.green);

    if (!Number(base)) {
        console.log(`El valor introducido ' ${base} ' no es numero.`.red);
    }

    else if (!Number(limite)) {
        console.log(`El valor introducido ' ${limite} ' no es numero.`.red);
        
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} = ${base * i}\n`.cyan);
    }


}


let crearArchivo = (base,limite=10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ' ${base} ' no es numero.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`)
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla

}