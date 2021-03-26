// const colors = require('colors');
const colors = require('colors/safe');
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



// console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv.base);
// console.log(argv.limite);
// console.log(argv2);

let comando = argv._[0];
// console.log(argv);
// console.log(comando);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado`, colors.rainbow(archivo))) //`Archivo creado ${archivo.rainbow}`
            .catch(err => console.log(err));
        break;

    default:
        (`Archivo creado ${archivo.reconocido}`);
        break;
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);