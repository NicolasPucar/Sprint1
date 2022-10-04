/* 
Crea una funcion que muestre por consola el nombre
 del usuario al invocarlo, pasandole el nombre como parametro */
/* 
function showName(name) {
  console.log(name)
}
console.log(showName('Nico')) */

const showName = (name) => console.log(name)

/* Mostra per consola nom i cognom del usuari mitjançant template literal, guardan-lo en variables
   i referenciant-les en límpressió del missatge. */

const myName = 'Antonio'
const mySurname = 'Machin'

console.log(`Nom: ${myName}; Cognom: ${mySurname}`)

/* Invoca una funció que retorni un valor desde dins de un template literal */

const justAnExample = function showMyName(name) {
  const returnedValue = `My name is ${name}`
  return returnedValue
}

console.log(`En inglés se dice: ${justAnExample('Nico')}`)

/* crea una matriu de 10 funcions i emplena-la mitjançant un bucle de manera que cada funció conti de 0 a 9 per la consola. Invoca cada funció de l'array 
iterativament. Haurà de mostrar-se per consola el conte de 0 a 9 deu vegades. */

const arrayNum = []
function fromZeroToNine() {
  for (let i = 0; i <= 9; ++i) {
    arrayNum.push(i)
    console.log(arrayNum)
  }
}
const array = new Array(10).fill(fromZeroToNine())

/* ### Crea una funció anonima autoinvocable igualada a una variable que 
mostri per consola el nom del usuari que ha sigut pasada com a parametre ###


 */

const nameWrite = (function (n) {
  return console.log(n)
})()(
  /* Mostra per la consola el resultat d'una arrow 
function autoinvocable que sumi dos nombres. */

  (a, b) => {
    return a + b
  },
)()

/* Crea una arrow function que, rebent un paràmetre, retorni un objecte amb
 un atribut que tingui com a valor el paràmetre rebut. */

const rename = (name) => ({ name, animal: 'Dog' })
