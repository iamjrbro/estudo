//Arrays são indexados; cada elemento/item está localizado em uma posição/indíce/index

const nums = [4,1,8,0] //o numero 8 esta no index 3
console.log(nums)




//deletando um index usando delete
const nome = ['Julia', 'Carla', 'Silvia', 'Carolina']
delete nome[2]
console.log(nome)  //indice 2 retorna como empty item

const no = [10, 6.5, 7.5, 10];
console.log(no[2]) // imprime o número 7.5, que está no index 2




//Lista ordenada de valores enumerados: string, number, booleano ou outros dados, onde cada um está associado a um identificador numérico, o qual diz a posição daquele dado na lista

const arrayNumbers = [1,2,3,4,5,6]
const arrayStrings = ['Ana', 'Stephany']




//Nomeclatura: cada valor é chamado de elemento ou item

const m = [10, 6.5, 7.5, 10]; // array com 4 elementos/iten




//Array vazio: volta vazio, com index 0 e seu valor é undefined

const vazio = []
console.log(vazio)
console.log(vazio.length)
console.log(vazio[0])




//LISTA DE DUAS DIMENSÕES: listas dentro de outra lista

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunosEMedias = [alunos, medias]
console.log(alunosEMedias)


console.log (`A aluna da posição 1 da lista de alunos é a ${alunosEMedias[0][1]}`)

console.log (`A aluna da posição 1 na lista de alunos é a ${alunosEMedias[0][1]} e sua média é ${alunosEMedias[1][1]}`)


const nomes = ['Julia', 'Daniel', 'Kamile', 'Bruno']
const idade = [20,42,30,17]
const faculdade = [true, true, true, false]
const colaboradores = [nomes, idade, faculdade]

console.log (`A colaboradora ${colaboradores[0][2]} tem ${colaboradores[1][2]} de idade e faz faculdade ${colaboradores[2][2]}`)


const aOriginal = ['George', 'Bruno']
const aConcat = aOriginal.concat('Julia', 'Dudu')  //as strings de texto passadas como parametro irão ser concatenadas na criação de outro array, sem alterar o array original
console.log(aConcat)



const funcionarios = [
    ["Ana", "Juliana"],
    [40, 24]
]
console.log(`${funcionarios [0][0]} tem ${funcionarios[1][0]} de idade`)




// new Array(): outra forma de criar um array, chamada de array construtor, usando (); é pouco utilizado

const nombres = new Array ('Lucas', 'Miguel', 'Vinicius', 'Jorginho')
nombres[4] = 'Fabricio'
console.log(nombres)



const destinosViagem = new Array(
    `São Paulo`
    `Rio de Janeiro`
)


const viagens = new Array(
    `São Paulo`, 
    `Rio de Janeiro`,
)

const idadeComprador = 18

if (idadeComprador >= 18){
    console.log (`Cliente maior de idade`)
    viagens.push(`Ibiza`)
} else{
    console.log(`Cliente menor de idade`)
}

console.log(viagens)


//Valor por referência

const marca = ['Brastemp', 'Eletrolux']
const novaMarca = marca;
novaMarca.pop()
console.log(novaMarca)


