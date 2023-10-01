//const não pode ser reatribuída, mas seu valor pode ser alterado
const pessoa = {
    nome: 'Clara',
    idade: 19
}

pessoa.telefone = 98876171718 //adicionando uma propriedade dentro do objeto

console.log(pessoa.telefone)

pessoa.nome = 'Clara Matos' //alterando o nome
console.log(pessoa)


