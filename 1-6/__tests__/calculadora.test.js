//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const calculator = require('../calculadora.js')

test('suma calculator', () => {
  const result = calculator.sum(1, 2)
  expect(result).toBe(3)
  
})
test('agregando un numero positivo que no sea 0', () => {
  const result = calculator.sum(1, 2)

  expect(result).not.toBe(0)
})

test('resta calculator', () => {
  const result = calculator.substract(3, 2)
  expect(result).toBe(1)
})
test('si el valor del segundo parametro es superior al primero el numero será negativo', () => {
  const result = calculator.substract(2, 3)
  expect(result).toBe(-1)
})

test('multiplicar calculator', () => {
  const result = calculator.multiply(3, 2)
  expect(result).toBe(6)
})
test('si multiplicas por 0 el resultado será 0', () => {
  const result = calculator.multiply(3, 0)
  expect(result).toBe(0)
})

test('divide calculator', () => {
  const result = calculator.divide(6, 2)
  expect(result).toBe(3)
})
test('Si divides entre 0 el valor será Null', () => {
  const result = calculator.divide(6, 0)
  expect(result).toBeNull()
})
