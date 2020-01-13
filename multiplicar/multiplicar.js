const fs = require('fs');
const colors = require('colors');
console.log('hello'.green);

let listar = (base, limite) => {

    console.log(`= Tabla de ${ base } hasta ${limite} =`.red);    

    for(let i=0; i<=limite; i++) {
        console.log(`${base} x ${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite=10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-${limite}.txt`);
        })
    })
}

module.exports = {
    crearArchivo,
    listar
}

