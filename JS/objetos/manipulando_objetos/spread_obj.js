const cliente = {
    nome: 'Juliana',
    idade: 24,
    email: 'juliana@gtmail.com',
    telefone: ['98871718817', '97761617717'] 
}

cliente.endereco = {
    rua: 'Pio XII',
    numero: '237'
}

function ligaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligar para o telefone Comercial ${telefoneComercial}`)
    console.log(`Ligar para o telefone Comercial ${telefoneResidencial}`)
}
ligaCliente(...cliente.telefone) //spread de uma propriedade, de forma que cada item desta seja distribuido em um parametro

const encomenda ={
    destinataria: cliente.nome,
    ...cliente.endereco  //spread com um objeto, distribuindo os itens de um endereço
}

console.log(encomenda)


// outra forma de fazer o espalhamento de endereço, sem usar o spread
/*const encomenda ={
    destinataria: cliente.nome,
    endereco: cliente.endereco.rua,
    numero: cliente.endereco.numero
}*/