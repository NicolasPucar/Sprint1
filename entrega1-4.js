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

    
const getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((element) => element.id === employee.id)
    if (salary) {
      resolve(salary)
    } else {
      reject(new Error(`NO!!! Salario no encontrado`))
    }
  })
}


const exampleAsyncFunction = async (id) => {
  try {
      const employeeId = await getEmployee(id);
      const employeeSalary = await getSalary(employeeId);
      console.log(employeeSalary)
  } catch(err) {
      console.log(err);
  }
}
exampleAsyncFunction(2)





/* Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que
 efectuï la seva funció resolve() després de 2 segons de la seva invocació.
 */

 const calledFunct = (x) => {
  return new Promise((resolve, reject) => {
      if (x === true) {
          setTimeout (() => {
              resolve(`TODO BIEN!!!`);
      }, 2000);
      } else {
          reject(new Error(`Valor o parametro no esperado`));
      }
  })
  }
  calledFunct(true)
  .then(res=> console.log(res))


  const exampleAsyncFunction2 = async (x) => {
    try {
        const container  = await calledFunct(x);
        console.log(container)
        
    } catch(err) {
        console.log(err);
    }
  }
const x = true
  exampleAsyncFunction2 (x)