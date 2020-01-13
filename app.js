const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const { argv } = require('./config.yargs');
const colors = require('colors');


console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('Listar');
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        // console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(res => console.log(`Archivo creado: ${res}`))
            .catch(e => console.log(e))

        break;
    default:
        console.log('Comando no reconocido');
        break;
}



// let argv2 = process.argv;
// let base = parametro.split('=')[1];

// console.log(argv.base);


