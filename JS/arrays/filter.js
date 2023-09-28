//filter: filtra o array de acordo com a condição, retornando um array do mesmo tamanho que o original ou menor

const n = [1,20,90,70,200]

function t(valor){
    return valor>10
}
const nf = n.filter(t)
console.log(nf)

//com função anonima

const j = [10,80,90,600]
const jn = j.filter(function(valor){
    return valor>20
})
console.log(jn)

//arrow function
const k = [10,840,90,600]
const kn = k.filter(valor => valor>40)
console.log(kn)



const i = [1,20,90,70,200]
const iF = n.filter((valor, indice, array)=>{
    console.log(valor, indice, array)
    return valor>10
})


//para acessar um item dentro de um array, como trata-se de um objeto, use . no console / caso filtre a idade com parametro, o retorno será em boolean

const pessoas = [
    {nome: 'Lucas', idade: 20},
    {nome: 'Fernanda', idade: 66},
    {nome: 'Marcela', idade: 20},
    {nome: 'Carlos', idade: 40},
    {nome: 'Vinicius', idade: 82}
]
const p = pessoas.filter(function(valor){
    console.log(valor.nome >= 5, valor.idade >= 10)
})



const Pessoas = [
    {nome: 'Lucas', idade: 20},
    {nome: 'Fernanda', idade: 66},
    {nome: 'Marcela', idade: 20},
    {nome: 'Carlos', idade: 40},
    {nome: 'Vinicius', idade: 82}
]
const P = Pessoas.filter(obj => obj.nome.length >= 7)
console.log(P)


const people = [
    {nome: 'Lucas', idade: 20},
    {nome: 'Fernanda', idade: 66},
    {nome: 'Marcela', idade: 20},
    {nome: 'Carlos', idade: 40},
    {nome: 'Vinicius', idade: 82}
]
const People = people.filter(o => o.idade >= 50)
console.log(People)


const alunos = ['Joana', 'Joao', 'Patricia', 'Lucas']
const medias = [4,8,5,1]

const reprovados = alunos.filter((alunos, indice) =>{
        return medias[indice]<7;
})
console.log(reprovados)
