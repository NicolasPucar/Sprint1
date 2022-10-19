/* - Exercici 1
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres. */

  console.log((() => {return 1 + 2 })()) 

/*  Nivell 2
- Exercici 1
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut. */ 

 const rename = (name) => {
  return { prototype:name }
}

const minino = "gato"

console.log (rename(minino)) 

 /* - Exercici 2
Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode
 dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe. */ 

 function Persona(nom) {
    this.nom = nom
    this.dirNom = function () {
      return console.log (nom)
    }
  }
  let nuevaPersona = new Persona('Pepe')
  
  nuevaPersona.dirNom() 
/* 
 Nivell 3
- Exercici 1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions. */


class Animal {
    constructor() {
      if (this.constructor === Animal) {
        throw new Error('Clase abstracta')
      }
      this.raza = 'desconocida'
    }
  
    someMethod() {
      throw new Error('debes implementar el método primero')
    }
  }
  
  class Gato extends Animal {
    constructor() {
      super()
      this.color = 'Negro'
    }
    someMethod() {
      console.log('Gato negro', this.color)
    }
  }
  
  const gato = new Gato()
  gato.someMethod()

  class Perro extends Animal {
    constructor(){
        super()
        this.color = `Negro`
    }
someOtherMethod(){
    console.log(`Perro Negro`, this.color)
}
  }

const perro = new Perro()
perro.someOtherMethod()
perro.someMethod() //lanza el debido error

