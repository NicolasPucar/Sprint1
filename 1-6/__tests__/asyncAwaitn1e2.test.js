//const { fn } = require('jest-mock');
const {calledFunct,
     exampleAsyncFunction2, 
   
 } = require('../../app/asyncAwaitn1e2.js');


describe('Test del ejercicio 2 de async Await', () => {
    test('calledFunct(true) hará el resolve después de 2 seg.', () => {
        const input = calledFunct(true);
        const output = "TODO BIEN!!!";
        return expect(input).resolves.toEqual(output); 
    });

    test('calledFunct(false) debería hacer el reject', () => {
        expect.assertions(1);
        const input = calledFunct(false);
        const output = Error(`Valor o parametro no esperado`);
        return expect(input).rejects.toEqual(output);
    });

    test('exampleAsyncFunction2(true) espera lo marcado por setTime out', () => {
        
        jest.useFakeTimers(); 
        jest.spyOn(global, 'setTimeout');
        
        exampleAsyncFunction2(true);
        
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
        
        
        jest.useRealTimers(); 
});
        
});    
