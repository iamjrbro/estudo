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

//Object é uma classe e keys é um metodo
const chavesObjeto = Object.keys(cliente) //função retorna um array que contem todas as chves do cliente que ja foram inicializadas

console.log(chavesObjeto)

//checando se o cliente tem um endereço cadastrado
if(!chavesObjeto.includes('endereco')){
    console.error("É necessário ter um endereço cadastrado!")
}