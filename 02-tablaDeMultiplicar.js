//requires
const { crearTxtTabla } = require('./modulos/01-multiplicar'); // aplicamos el conceptop de Destructuracion
//console.log(crearTxtTabla);

let base = '8';

crearTxtTabla(base)
  .then((nombreArchivo) => {console.log(`Se ha creado la tablita de multiplicar ${nombreArchivo}`);})
  .catch((err) => { console.log(err); });
