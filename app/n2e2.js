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
  

  module.exports = {
    getSalary,
    getEmployee

  }
  