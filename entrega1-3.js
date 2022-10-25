/* Nivell 1
- Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge 
diferent depenent de si la Promise es resol o no. */

const myExecutor = (resolve, reject)=>{
  const gatoMiuau = true
  if(gatoMiuau){
    resolve('Gato meow')
  }
  else {
    reject('no hay gato')
  }
  }
  
  const devuelvePromise = () => {
  return new Promise (myExecutor)
  }
  
  const orderPromise = devuelvePromise ()
  
  
  console.log(orderPromise)



/* 
- Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció 
un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */


valor = Math.random() //decido hacer un parametro que cambie sólo
 showValue = (valor) => {
   return console.log(valor)}

  const checkGatito = (parameter, callback) => {
    
   if(parameter >= 0.5){
     callback('Es mayor o igual a 0.5')
   }
   else
   {
     callback ('Es menor a 0.5')
   }
  
  }
checkGatito (valor, showValue)


/* 
 Nivell 2
- Exercici 1
Donats els objectes employees i salaries, crea una arrow function 
getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.
 */

let employees = [
  {
    id: 1,
    name: 'Linux Torvalds',
  },
  {
    id: 2,
    name: 'Bill Gates',
  },
  {
    id: 3,
    name: 'Jeff Bezos',
  },
]

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
]



const getEmployee = (idNum) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find((element) => element.id === idNum)
    if (employee) {
      resolve(employee)
    } else {
      reject(new Error(`NO!!! Dato no encontrado`))
    }
  })
}


getEmployee(2)
.then(res => console.log(res))
.catch(err => console.log(err))




/* - Exercici 2
Crea una altra arrow function getSalary() similar
 a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari. */

const employee = employees[0]
 
 

    
 const getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((element) => element.id === employee.id)
    if (salary) {
      resolve(salary.salary)
    } else {
      reject(new Error(`NO!!! salario no encontrado`))
    }
  })
}

getSalary(2)
.then(res => {console.log(res)})
.catch(err =>{console.log(err)})


/* 
- Exercici 3
Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les
 dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari. */




getEmployee(2)
.then((res) => {
  getSalary(res)
  .then((salary)=> console.log(`Nombre: ${res.name} con salario ${salary.salary} `))})


/* 
Nivell 3
- Exercici 1
Fixa un element catch a la invocació del nivell anterior 
que capturi qualsevol error i el mostri per la consola.
 */


getEmployee(37)
.then((res) => {
  
  getSalary(res)
  .then((rest)=> {console.log (rest)})})
  .catch((err) => {console.log(err)
