const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar');
const argv=require('./config/yargs').argv;

var colors = require('colors');



let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then((archivo)=>console.log(`Archivo creado: ${archivo.green}`)
            ).catch(err=>{
                console.log(err);
            });
        break;

    default:
        console.log('Comand no reconocido'.red); 6
}



//let base ='m';

//console.log(process.argv);

//let argv2=process.argv;

//console.log(argv.base);
//console.log(argv.limite);


//let parametro=argv[2];
//let base= parametro.split('=')[1]

/*split separa la cadena en arreglos*/


/*crearArchivo(base)
            .then((archivo)=>console.log(`Archivo creado: ${archivo}`)
            ).catch(err=>{
                console.log(err);
            });*/
