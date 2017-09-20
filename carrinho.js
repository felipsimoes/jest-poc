const Produto = require('./produto')

class Carrinho {
  constructor () {
    this.itens = []
  }

  totalDeItens () {
    return this.itens.length
  }

  adicionar (produto) {
    this.itens.push(produto)
  }
}

module.exports = Carrinho
