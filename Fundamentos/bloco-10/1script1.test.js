const { test } = require('jest-circus');
const sum = require('./1script1.js');

describe('Faz a soma de 2 números', () => {
  it('soma de 4 + 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('soma de 0 + 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('mostra mensagem de erro', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});