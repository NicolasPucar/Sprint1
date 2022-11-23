
/* - Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï
 la seva funció resolve() després de 2 segons de la seva invocació. */
 
const calledFunct = (argumento) => {
    return new Promise((resolve, reject) => {
      if (argumento === true) {
        setTimeout(() => {
          resolve(`TODO BIEN!!!`)
        }, 2000)
      } else {
        reject(Error (`Valor o parametro no esperado`))
      }
      
    })
  }
 // calledFunct(true).then((res) => console.log(res))
  
  const exampleAsyncFunction2 = async (argumento) => {
    try {
      const container = await calledFunct(argumento)
      console.log(container)
    } catch (err) {
      return console.log(err)
    }
  }
  const parametro = true
  exampleAsyncFunction2(parametro)
  
  module.exports = {
    calledFunct,
    exampleAsyncFunction2,
    parametro

  }
  
