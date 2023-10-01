//objeto como propriedade de um objeto

const cliente = {
    nome: 'Juliana',
    idade: 24,
    email: 'juliana@gtmail.com',
    telefone: ['98871718817', '97761617717'] 
}

//criando um objeto dentro de outro
cliente.endereco = {
    rua: 'Pio XII',
    numero: '237'
}

console.log(cliente)