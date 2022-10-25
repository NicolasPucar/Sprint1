/* - Exercici 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer.

 */

const fs = require(`fs`)

const archivo = `prueba.txt`

if (fs.existsSync(archivo)) {
  //Me aseguro de que el archivo no existe
  console.log(`El archivo ya existe`)
} else {
  console.log(`El archivo no existe`)
}
const contenido = `texto de prueba`
fs.writeFileSync(archivo, contenido)

/* 
- Exercici 2
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */

const showOnconsole = () => {
  fs.readFile('prueba.txt', 'utf8', (error, data) => {
    if (error) {
      console.log(`Algo ha fallado: ${error}`)
    } else {
      console.log(data)
    }
  })
}
showOnconsole()

/*     - Exercici 3
    Crea una funció que comprimeixi el fitxer del nivell 1. */

var zlib = require('zlib')

var gzip = zlib.createGzip()
var sincomprimir = fs.createReadStream('./prueba.txt')
var comprimido = fs.createWriteStream('./pruebaComprimida.txt.gz')
sincomprimir.pipe(gzip).pipe(comprimido)
