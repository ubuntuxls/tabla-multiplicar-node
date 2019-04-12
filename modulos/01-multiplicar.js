//requires
const fs = require('fs');
let datos = '';

let listarTablaConsola = (base, limite) => {
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
}

let crearTxtTabla = ((base, limite) => {
  return new Promise(( resolve, reject ) => {

    if (!Number(base) || !Number(limite) ) {
      reject(`La base o el límite no es un número`);
    }

    for (let i = 1; i <= limite; i++) {
      datos += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablitasDeMultiplicar/tablitaDe${base}.txt`, datos, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`tablitaDe${base}.txt`);
      }
    })
  });
});

//exportar funciones como globales
module.exports = {
  //crearTxtTabla : crearTxtTabla //para evitar redundancia, en ES7 simplemente podemos dejar el nombre de la funcion
  crearTxtTabla,
  listarTablaConsola
}
