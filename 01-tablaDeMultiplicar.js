//require van siempre al inicio de la aplicacion
const fs = require('fs');
let base = 9;
let nombreArchivo = `tablitaDel${base}.txt`;
let datos = '';

for (let i = 1; i < 11; i++) {
  datos += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFile(`tablitasDeMultiplicar/${nombreArchivo}`,datos, (err) => {
  if (err) {
    throw err;
  }
  console.log(`El archivo ${nombreArchivo} ha sido creado!!!`);
})
