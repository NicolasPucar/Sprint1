/* - Exercici 1
Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi 
per pantalla el nom de l'empleat/da i el seu salari,
 usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior. */

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

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find((employee) => employee.id === id)
    if (employee) {
      resolve(employee)
    } else {
      reject(new Error(`NO!!! Dato no encontrado, Id erróneo`))
    }
  })
}

const getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((salary) => salary.id === employee.id)
    if (salary) {
      resolve(salary)
    } else {
      reject(new Error(`NO!!! Salario no encontrado`))
    }
  })
}

const exampleAsyncFunction = async (id) => {
  try {
    const employeeObject = await getEmployee(id)
    const employeeSalary = await getSalary(employeeObject)
    console.log(
      `Empleado ${employeeObject.name} con un salario de ${employeeSalary.salary} `,
    )
  } catch (err) {
    console.log(err)
  }
}
exampleAsyncFunction(3)

/* Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que
 efectuï la seva funció resolve() després de 2 segons de la seva invocació.
 */

const calledFunct = (argumento) => {
  return new Promise((resolve, reject) => {
    if (argumento === true) {
      setTimeout(() => {
        resolve(`TODO BIEN!!!`)
      }, 2000)
    } else {
      reject(new Error(`Valor o parametro no esperado`))
    }
  })
}
calledFunct(true).then((res) => console.log(res))

const exampleAsyncFunction2 = async (argumento) => {
  try {
    const container = await calledFunct(argumento)
    console.log(container)
  } catch (err) {
    console.log(err)
  }
}
const parametro = true
exampleAsyncFunction2(parametro)

/*   Nivell 2

- Exercici 1
Crea una funció que retorni el doble del número que li passa com a paràmetre després
 de 2 segons. 
 Crea una altra funció que rebi tres números i calculi la suma
  dels seus dobles fent servir la funció anterior. */

const multiplicaConDelay = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num === 'number') {
      setTimeout(() => {
        resolve(num * 2)
      }, 2000)
    } else {
      reject(new Error(`Algo ha fallado, recuerda introducir un número`))
    }
  })
}

const sumaDobleParametros = async (num1, num2, num3) => {
  try {
    const awaited1 = await multiplicaConDelay(num1)
    const awaited2 = await multiplicaConDelay(num2)
    const awaited3 = await multiplicaConDelay(num3)

    console.log(awaited1 + awaited2 + awaited3)
  } catch (err) {
    console.log(err)
  }
}

sumaDobleParametros(4, 4, 4)
