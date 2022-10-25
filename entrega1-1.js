/* - Exercici 1
Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre. */

const showName = (name) => console.log(name)
/* Nivell 2
- Exercici 1
Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge. */

const myName = 'Antonio'
const mySurname = 'Machin'

console.log(`Nom: ${myName}; Cognom: ${mySurname}`)

/* - Exercici 2
Invoca una funció que retorni un valor des de dins d'una template literal. */

const justAnExample = function showMyName(name) {
    const returnedValue = `My name is ${name}`
    return returnedValue
  }
  
  console.log(`En inglés se dice: ${justAnExample('Nico')}`)
/* 
Nivell 3
- Exercici 1
 Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola.
 Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades. */ 


 let arrayFunciones = [];
 function imprimeContador() {
 for(let i = 0; i < 10; i++) {
      console.log(i);
      }
  }
 
 while (arrayFunciones.length<10) {
        arrayFunciones.push(imprimeContador)
  } 
  
 
 
 for(let i = 0; i <= 10; i++) {
   let susodichafunct = arrayFunciones[i]
   susodichafunct()
   }

/* - Exercici 2
Crea una funció anònima autoinvocable igualada a una variable que mostri
 per consola el nom de l'usuari/ària a rebut com a paràmetre. */

 let sayMyName = ((name) => {
  console.log(`Mi nombre es: ${name}`);
})("Nico"); 

