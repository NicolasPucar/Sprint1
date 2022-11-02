/* /* - Exercici 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer.

 */
const fs = require(`fs`);

const archivo = `prueba.txt`;

if (fs.existsSync(archivo)) {
	console.log(`El archivo ya existe`);
} else {
	console.log(`El archivo no existe`);
}
const contenido = `texto de prueba que acabará saliendo en consola`;
const creator = () => {
	fs.writeFileSync(archivo, contenido);
};
creator();

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
let tipoGzip = zlib.createGzip();
let archivoPruebaNom = './prueba.txt';
function compresor() {
	const lector = fs.createReadStream(archivoPruebaNom);
	const comprimidoCreador = fs.createWriteStream('./pruebaComprimida.txt.gz');
	lector.pipe(tipoGzip).pipe(comprimidoCreador);
}
compresor();

/* - Exercici 1
Crea una funció que imprimeixi recursivament 
un missatge per la consola amb demores d'un segon. */

//El reloj se detendrá 4 veces por minuto, dependiendo de la hora exacta
let reloj = () => {
	const ahora = new Date();
	const ahoraHoras = ahora.getHours();
	const ahoraMinutos = ahora.getMinutes();
	const ahoraSegundos = ahora.getSeconds();

	let hora = `${ahoraHoras}:${ahoraMinutos}:${ahoraSegundos}`;
	if (ahoraSegundos === 05) return;
	if (ahoraSegundos === 20) return;
	if (ahoraSegundos === 35) return;
	if (ahoraSegundos === 50) return;
	setTimeout(reloj, 1000);
	console.log(hora);
};

reloj();

