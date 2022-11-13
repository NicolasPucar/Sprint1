/* Crea els tests corresponents per verificar el funcionament de les funcions de
 l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()). */

 const {getEmployee, getSalary} = require('../../app/n2e2.js');

describe('Test de getEmployee() y getSalary() del n2e2', () => {

    test('getEmployee(2) devolverá un object con nombre e id', () => {
       const input = getEmployee(2);
       const output = { id: 2, name: 'Bill Gates'};
       return expect(input).resolves.toEqual(output); 

     });

    test('si como parametro a getsalary le paso el objeto con id 2, me dará el salario de de salary con id 2', () => {
        const input = getSalary({ id: 2, name: 'Bill Gates'});
        const output = 1000;
        return expect(input).resolves.toEqual(output);
        });
    });

 