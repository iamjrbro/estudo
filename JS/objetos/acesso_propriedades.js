const cliente = {
    nome: 'Andre',
    idade: 39,
    sexo: 'masculino',
    cpf: '123456789',
    endereço: 'Rua José Leme',
    cidade: 'São Paulo'
}
console.log(`O cliente ${cliente.nome} tem ${cliente.idade} anos, mora na ${cliente.endereço}, em ${cliente.cidade} e é do sexo ${cliente.sexo}`)  //usando . é possível acessar as propriedades de um objeto de forma individual


console.log(`Os três primeiros digitos do CPF de ${cliente.nome} são ${cliente.cpf.substring(0,3)}`) //substring retorna string na localização especificada, sendo o primeiro paramtero seu inicio e o segundo seu fim