//criando uma função dentro de um objeto, de forma que esta interaja com a propriedade, criando novos comportamentos no codigo

const cliente = {
    nome: 'Juliana',
    idade: 24,
    email: 'juliana@gtmail.com',
    telefone: ['98871718817', '97761617717'],
    saldo: 280,
    efetuarPagamento: function (compra){
        if (compra > this.saldo){
            console.log('Saldo insuficiente')
        } else{
            this.saldo -= compra;
            console.log('Compra efetuada')
            console.log(`Saldo remanescente ${this.saldo}`)
        }
    }
}

cliente.efetuarPagamento(24)

