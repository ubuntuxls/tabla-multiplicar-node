//creamos un objeto con las opciones a utilizar
let opts = {
  base : {
    demand : true,
    alias : 'b'
  }, limite : {
    default : 10,
    alias : 'l'
  }
}

let argv = require('yargs')
              .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
              .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
              .help()
              .argv;

//console.log(argv);

module.exports = {
  argv
}
