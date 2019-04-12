let { crearTxtTabla, listarTablaConsola } = require('./modulos/01-multiplicar');
//yargs : nos permite trabajar de forma sencilla con comandos y parametros en consola. Muy util a la hora de crear scripts de consola que contengan ayuda y comandos
let argv = require('yargs')
              .command('listar', 'Imprime en consola la tabla de multiplicar', {
                base : {
                  demand : true,
                  alias : 'b'
                }, limite : {
                  //demand : true,
                  alias : 'l',
                  default : 10
                }
              })
              .command('crear', 'Genera un archivo con la tabla de multiplicar', {
                base : {
                  demand : true,
                  alias : 'b'
                }, limite : {
                  alias : 'l',
                  default : 10
                }
              })
              .help()
              .argv;

//console.log(`base : ${argv.base || argv.b}`);
//console.log(`limite :`, argv.limite || argv.l);
//console.log(argv._[0]); imprime en consola el primer argumento del arreglo de parametros

let opcion = argv._[0];

switch (opcion) {
  case 'listar':
    listarTablaConsola( (argv.base || argv.b), (argv.limite || argv.l) );
    break;
  case 'crear':
    crearTxtTabla( (argv.base || argv.b), (argv.limite || argv.l))
    .then((nombreArchivo) => { console.log(`Se ha creado el archivo ${nombreArchivo}`); })
    .catch((err) => { console.log(err); });
    break;
  default:
    console.log('Comando inválido');
}
