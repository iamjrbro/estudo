//acessar propriedades com ['nomedapropriedade'] pode ajudar quando não se sabe com qual prorpeidade está trabalhando


//sabe-se com qual propriedade se está trabalhando
const cliente = {
    nome: 'Andre',
    idade: 39,
    sexo: 'masculino',
    cpf: '123456789',
    endereço: 'Rua José Leme',
    cidade: 'São Paulo'
}
console.log(`O cliente ${cliente['nome']} tem ${cliente['idade']} anos, mora na ${cliente['endereço']}, em ${cliente['cidade']} e é do sexo ${cliente['sexo']}`) 

//o valor de chaves é uma string, uma string dentro de colchetes depois de um objeto, acessa determinada propriedade
const chaves = ['nome', 'idade', 'cidade', 'sexo', 'altura'] //altura não está definido, portanto retorna undefined

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});