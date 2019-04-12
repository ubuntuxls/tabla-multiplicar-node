const { crearTxtTabla } = require('./modulos/01-multiplicar');

let argv = process.argv[2];
let base = argv.split('=')[1];
//console.log(argv, base);

crearTxtTabla(base)
  .then((nombreArchivo) => { console.log(`Se ha creado el archivo ${nombreArchivo}`); })
  .catch((err) => { console.log(err); })
