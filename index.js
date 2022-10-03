/* 
Crea una funcion que muestre por consola el nombre
 del usuario al invocarlo, pasandole el nombre como parametro */

 function showName(name) {
    console.log(name)
  }
  console.log(showName('Nico'))
  /* const showName = name => console.log(name}) */
  
  
  
  /* Mostra per consola nom i cognom del usuari mitjançant template literal, guardan-lo en variables
   i referenciant-les en límpressió del missatge. */
  
   const myName = "Antonio"
   const mySurname = "Machin"
   
     console.log(`Nom: ${myName}; Cognom: ${mySurname}`)
  
  
/* Invoca una funció que retorni un valor desde dins de un template literal */
     
     const justAnExample = function showMyName(name) {
      const returnedValue = `My name is ${name}`
      return returnedValue
    }
    
    console.log(`En inglés se dice: ${justAnExample('Nico')}`)
  
    
  
  