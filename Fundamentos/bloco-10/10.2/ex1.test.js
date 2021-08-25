const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 2000)
};

describe('Veriverifique a chamada do callback', () => {
  it('retorna em caixa alta', (done) => {
    uppercase('victor', (caixaAlta) => {
      expect(caixaAlta).toBe('VICTOR');
      done();
    });
  }); 
});