/* Nivell 1
- Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge 
diferent depenent de si la Promise es resol o no. */

const myExecutor = (resolve, reject) => {
  const gatoMiuau = true
  if (gatoMiuau) {
    resolve('Gato meow')
  } else {
    reject('no hay gato')
  }
}

const devuelvePromise = () => {
  return new Promise(myExecutor)
}

const orderPromise = devuelvePromise()

console.log(orderPromise)(
  /* 
- Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció 
un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

  (parameter, callback) => {
    parameter = Math.random() //decido hacer un parametro que cambie sólo
    callback = () => {
      return console.log(parameter)
    }
    if (parameter >= 0.5) {
      console.log(`igual o mayor`)
    } else {
      console.log('menor o fuera de rango')
    }
  },
)()

/* 
 Nivell 2
- Exercici 1
Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.
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

const getEmployee = (firstArray, idNum) => {
  return new Promise((resolve, reject) => {
    const employee = firstArray.find((element) => element.id === idNum)
    if (employee) {
      resolve(`HE ENCONTRADO: ${employee.name}`)
      console.log(salary)
    } else {
      reject(new Error(`NO!!! Dato no encontrado`))
    }
  })
}

getEmployee(employees, 3).then((res) => {
  console.log(res)
})

/* - Exercici 2
Crea una altra arrow function getSalary() similar
 a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari. */

/*  let employees = [
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
 */

const getSalary = (firstArray, secondArray, idNum) => {
  return new Promise((resolve, reject) => {
    const employee = firstArray.find((element) => element.id === idNum)
    const salary = secondArray.find((element2) => element2.id === idNum)
    if (employee && salary) {
      resolve(
        `HE ENCONTRADO: ${salary.name} con un salario de ${salary.salary}`,
      )
      console.log(salary)
    } else {
      reject(new Error(`NO!!! Dato no encontrado`))
    }
  })
}

getSalary(employees, salaries, 3).then((res) => {
  console.log(res)
})

/* 
- Exercici 3
Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les
 dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari. */

/*  let employees = [
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
] */

const getEmployee = (firstArray, idNum) => {
  return new Promise((resolve, reject) => {
    const employee = firstArray.find((element) => element.id === idNum)
    if (employee) {
      resolve(`HE ENCONTRADO: ${employee.name}`)
    } else {
      reject(new Error(`NO!!! Dato no encontrado`))
    }
    getSalary = (firstArray, secondArray, idNum) => {
      return new Promise((resolve, reject) => {
        const employee = firstArray.find((element) => element.id === idNum)
        const salary = secondArray.find((element2) => element2.id === idNum)
        if (employee && salary) {
          resolve(
            `HE ENCONTRADO: ${employee.name} con un salario de ${salary.salary}`,
          )
        } else {
          reject(new Error(`NO!!! Dato no encontrado`))
        }
      })
    }
  })
}

getEmployee(employees, 3).then((rest) => {
  console.log(rest)

  getSalary(employees, salaries, 3).then((res) => {
    console.log(res)
  })
})

/* 
Nivell 3
- Exercici 1
Fixa un element catch a la invocació del nivell anterior 
que capturi qualsevol error i el mostri per la consola. */

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

const getEmployee = (firstArray, idNum) => {
  return new Promise((resolve, reject) => {
    const employee = firstArray.find((element) => element.id === idNum)
    if (employee) {
      resolve(`HE ENCONTRADO: ${employee.name}`)
    } else {
      reject(new Error(`NO!!! Dato no encontrado`))
    }
    getSalary = (firstArray, secondArray, idNum) => {
      return new Promise((resolve, reject) => {
        const employee = firstArray.find((element) => element.id === idNum)
        const salary = secondArray.find((element2) => element2.id === idNum)
        if (employee && salary) {
          resolve(
            `HE ENCONTRADO: ${employee.name} con un salario de ${salary.salary}`,
          )
        } else {
          reject(new Error(`NO!!! Dato no encontrado`))
        }
      })
    }
  })
}

getEmployee(employees, 3)
  .then((rest) => {
    console.log(rest)

    getSalary(employees, salaries, 3).then((res) => {
      console.log(res)
    })
  })
  .catch(() => {
    console.log(`Algo ha fallado!`)
  })
