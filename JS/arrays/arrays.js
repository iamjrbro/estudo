//lenght: tamanho do array - dividindo pelo tamanho do array 
const notas = [10, 8, 6, 2]
const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length  
console.log(media) 



const no = [10, 6.5, 7.5, 10];
console.log(no[2]) // imprime o número 7.5, que está no index 2


//Lista ordenada de valores enumerados: string, number, booleano ou outros dados, onde cada um está associado a um identificador numérico, o qual diz a posição daquele dado na lista

const arrayNumbers = [1,2,3,4,5,6]
const arrayStrings = ['Ana', 'Stephany']


//Nomeclatura: cada valor é chamado de elemento ou item

const m = [10, 6.5, 7.5, 10]; // array com 4 elementos/iten


//Posição: cada elemento/item está localizado em uma posição/indíce/index

const nums = [4,1,8,0] //o numero 8 esta no index 3


//Length: especifica o tamanho de um array/o numero de elementos/dados contidos no mesmo

const l = [6,8,7,6]
console.log( l.length)


//Push: adiciona um item ao final da lista, permitindo a alteração do array

const p = ['Julia']
p.push('Ribeiro')
console.log(p)


const n = [10, 6, 8];
n.push(7);
const me = (n[0] + n[1] + n[2]) / n.length;
console.log(me);


//Pop: remove um item

const b = [2.2, 5.6, 4.8]
b.pop(5.6) //nesse caso, o pop recebeu um parametro e removeu ele. Caso não receba parametro, o ultimo item da lista sera removido
console.log(b)


jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)


//Array vazio: volta vazio, com index 0 e seu valor é undefined

const vazio = []
console.log(vazio)
console.log(vazio.length)
console.log(vazio[0])


//CONCAT: concatena dois arrays, mas não altera nenhum deles. Ele retornará uma nova lista

const salaJS = ['Sara', 'Thiago', 'Pedro', 'Camille']
const salaPy = ['Ju', 'Leo', 'Carlos', 'Dandara']
sala = salaJS.concat(salaPy)
console.log(sala)



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


// new Array()

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