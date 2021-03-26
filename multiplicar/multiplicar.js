// requireds
const { Resolver } = require('dns');
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
//const fs = require('express')

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/Tabla base-${base}`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla base-${base}`)
        });

    })
}


let listarTabla = (base, limite = 10) => {

    console.log('==========='.green);
    console.log(`tabla de base ${base}`.green);
    console.log('==========='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}