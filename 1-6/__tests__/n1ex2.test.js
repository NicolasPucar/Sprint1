//const n1ex2 = require('../n1ex2.js')
const { checkGatito, showValue } = require('../../app/n1ex2.js');



/*  test('debe devolver gato meow', () => {
    return n1ex2.devuelvePromise().then(resolve => {
      expect(resolve).toBe('Gato meow');
    });
  }); 
 */


 describe('test de una función que requiere un parametro y un callback', () => {
  test('showValue(gatos) deberia hacer un log de gatos', () => {
    //check mock to ensure that the console.log receives the right parameter   
    console.log = jest.fn(); 
    // call instructions(); otherwise, console.log() is never invoked.
    showValue('gatos'); 
    // The first argument of the first call to the function was 'hello'
    expect(console.log).toHaveBeenCalledWith('gatos'); 
    })
    
  test('Un showValue ("gatos") debería hacer un log de Yo también soy más de gatos', done => {
    const showValue = data => {
      expect(data).toBe("Yo también soy más de gatos");
      done();
    }

    checkGatito ("gatos", showValue);
  });

  test('Al cambiar el parametro deberia decir: No me van los gatos', done => {
    const showValue = data => {
      expect(data).toBe(`No me van los gatos`);
      done();
    }

    checkGatito ("perros", showValue);
  });
  
});
    
 