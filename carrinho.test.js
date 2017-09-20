const Carrinho = require('./carrinho')
const Produto = require('./produto')

test('deve verificar se um carrinho está vazio', () => {
  const carrinho = new Carrinho()
  expect( carrinho.totalDeItens() ).toBe(0)
})

test('deve adicionar um produto ao carrinho', () => {
  let produto = new Produto('Convite Passaporte', 7.50, 5)
  let carrinho = new Carrinho()
  carrinho.adicionar(produto)
  expect( carrinho.totalDeItens() ).toBe(1)
})