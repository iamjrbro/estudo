//for in: para tal coisa, em determindado local; interage sobre as propriedades inumeradas do objeto, na ordem original de inserção das mesmas

//pode receber diversas tratativas condicionais

const cliente = {
    nome: 'Juliana',
    idade: 24,
    email: 'juliana@gtmail.com',
    telefone: ['98871718817', '97761617717'],
    saldo: 280
}

cliente.endereco = {
    rua: 'Pio XII',
    numero: '237'
}

//retornará tudo que for diferente de objeto e de função
for (let chave in cliente){
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} possui o valor ${cliente[chave]}`)
    }
}