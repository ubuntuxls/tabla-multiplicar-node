let { crearTxtTabla, listarTablaConsola } = require('./modulos/01-multiplicar.js');
let argv = require('./modulos/02-yargs').argv;
//let colors = require('colors');
let colors = require('colors/safe');

let opcion = argv._[0];

switch (opcion) {
  case 'listar':
    listarTablaConsola( (argv.base || argv.b), (argv.limite || argv.l) );
    break;
  case 'crear':
    crearTxtTabla( (argv.base || argv.b), (argv.limite || argv.l))
    //.then((nombreArchivo) => { console.log('Se ha creado el archivo', `${nombreArchivo}`.green); })
    .then((nombreArchivo) => { console.log('Se ha creado el archivo', colors.green(nombreArchivo)); })
    .catch((err) => { console.log(err); });
    break;
  default:
    console.log('Comando inválido. Escriba --help para mostrar la ayuda.');
}
