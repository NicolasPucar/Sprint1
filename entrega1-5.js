/* /* - Exercici 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer.

 */
const fs = require(`fs`);

const creator = (param) => {
	const archivo = `${param}.txt`;

	if (fs.existsSync(archivo)) {
		console.log(`El archivo ya existe`);
	} else {
		console.log(`El archivo no existe`);
	}
	const contenido = `texto de prueba que acabará saliendo en consola`;
	fs.writeFileSync(archivo, contenido);
};
creator('prueba');

/* - Exercici 2
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */

function showOnconsole() {
	fs.readFile('prueba.txt', 'utf8', (error, data) => {
		if (error) {
			console.log(`Algo ha fallado: ${error}`);
		} else {
			console.log(data);
		}
	});
}

showOnconsole();

/*   - Exercici 3
    Crea una funció que comprimeixi el fitxer del nivell 1.  */
let zlib = require('zlib');

function compresor(parametroNombreZip) {
	let tipoGzip = zlib.createGzip();
	let archivoPruebaNom = './prueba.txt';

	const lector = fs.createReadStream(archivoPruebaNom);
	const comprimidoCreador = fs.createWriteStream(
		`./${parametroNombreZip}.txt.gz`
	);
	lector.pipe(tipoGzip).pipe(comprimidoCreador);
}
compresor('textozipeado');

/* - Exercici 1
Crea una funció que imprimeixi recursivament 
un missatge per la consola amb demores d'un segon. */

let reloj = () => {
	const ahora = new Date();
	const ahoraHoras = ahora.getHours();
	const ahoraMinutos = ahora.getMinutes();
	const ahoraSegundos = ahora.getSeconds();

	let hora = `${ahoraHoras}:${ahoraMinutos}:${ahoraSegundos}`;

	setTimeout(reloj, 1000);
	console.log(hora);
};

reloj();
//He quitado los returns, tendrás que salir con Ctrl+c :D
