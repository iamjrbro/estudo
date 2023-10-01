const cliente = {
    nome: 'Juliana',
    idade: 24,
    email: 'juliana@gtmail.com',
    telefone: ['98871718817', '97761617717'] 
}

//objeto como lista, de forma que possa ter mais que uma propriedade 
cliente.enderecos = [
  { rua: 'Pio XII',
    numero: '237',},
    {
    rua: 'Avelino',
    numero: '444'},
];

console.log(cliente.enderecos)

//adicionando uma nova propriedade usando o push
cliente.enderecos.push({
    rua: 'Junqueira',
    numero: '888',
    apartamento: true
})

console.log(cliente.enderecos)


//filtrando uma propriedade de um objeto
const ap = cliente.enderecos.filter((endereco)=> endereco.apartamento === true)
console.log(ap)