/* Crea els tests corresponents per verificar el funcionament de 
les dues funcions de l'exercici Promises i Callbacks N1 E2. */

/* 

function myExecutor (resolve, reject){
    const gatoMiuau = true
    if(gatoMiuau){
      resolve('Gato meow')
    }
    else {
      reject('no hay gato')
    }
    }
    
    function devuelvePromise () {
    return new Promise (myExecutor)
    }
    
     devuelvePromise().then(res=>{res})
     */

/* Crea els tests corresponents per verificar el funcionament de 
les dues funcions de l'exercici Promises i Callbacks N1 E2. */
/* 
- Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció 
un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

function showValue(mensaje) {
	console.log(mensaje);
}
showValue("minino")

const checkGatito = (preferencia, callback) => {
	if (preferencia === 'gatos') {
		preferencia = 'Yo también soy más de gatos';
	}
	if (preferencia === 'perros') {
		preferencia = `No me van los gatos`;
	}
	callback(preferencia);
};
checkGatito('gatos', showValue);

module.exports = {
	//devuelvePromise,
	// myExecutor,
	showValue,
	checkGatito
};
