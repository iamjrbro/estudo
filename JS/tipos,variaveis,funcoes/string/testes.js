//VARIAVEIS E REATRIBUIÇÃO------------------------------------------------------

var respostaTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaTudo, idade, pi)
}
console.log(respostaTudo, idade, pi)


let t 
console.log(t) //retorna undefined

t = 'texto de reatribuição' //reatribuindo valor do tipo de dado string
console.log(t) 

t = 200  //reatribuindo valor com de dado tipo number
console.log(t) //retorna 200




//CONSOLE API-------------------------------------------------------------------

console.log('erro')
console.error('erro')

console.log('erro')
console.error(new Error('erro')) //classes


//OPERADOR TERNÁRIO
const idadeMinima = 18
const idadeCliente = 19
console.log(idadeCliente >= idadeMinima?'cerveja':'suco')

//TEMPLATE STRING
const name = 'Julia'
const age = 19
const country = 'Brazil'
const minimalAge = 18
console.log(`My name is ${name}, I´m a ${age} years old who is from and lives at ${country}`)




//FUNÇÕES ----------------------------------------------------------------------


//FUNÇÕES SEM RETORNO E SEM PARÂMETRO: apenas executa uma instrução, sem necesidade de disponibilizar o resultado para o restante do código.

function digaOi(){
    console.log('Oi!')  
}
digaOi()


//FUNÇÕES SEM RETORNO COM PARÂMETRO: possibilita o reaproveitamento da função

function cumprimenta(pessoa){
    console.log(`Oi, ${pessoa} `)
}
cumprimenta('Mariana')


//FUNÇÃO COM RETORNO E SEM PARÂMETRO: permite a combinação de funções para que cada uma esteja no controle de apenas uma parte do código e trabalhem juntas.

function cumprimenta(){
    return 'Oi!'
}

function cumprimentaPessoa(nomePessoa){
console.log(`${cumprimenta()} Meu nome é ${nomePessoa}`)
}
cumprimentaPessoa('Augusta')


/*FUNÇÕES COM RETURN E PARÂMETROS: as funções podem receber a quantidade de parâmetros que for necessária, contudo, os parâmetros, que vão nas funções, tem uma ordem, caso contrário, o resultado não será o esperado, visto que o JS os identifica pela ordem. 
> os parametros podem ter o mesmo nome em funçoes diferentes, visto que estão dentro do escopo)*/


function nomeIdade(nome, idade){
    return `O nome dela é ${nome} e ela tem ${idade}` 
}
console.log(nomeIdade(16, 'Giovana')) //os parâmetros, que vão nas funções, tem uma ordem, caso contrário, o resultado não será o esperado



function soma(n1,n2){
    return n1+n2
}
console.log(soma(8+6))

function subtracao(n1,n2){
    return n1-n2
}
console.log(subtracao(6,4))


function multiplica(n1,n2){
    return n1*n2
}
console.log(multiplica(4,4))


console.log(soma(200,400), subtracao(80,40), multiplica(40,20)) //console usando todas as funções criadas anteriormente, com novos padroes atribuidos




//HOISTING

console.log(apresentar)

function apresentar(){
    return "Olá"
}
console.log(soma (2,2))
const spma = function(n1,n2){
    return n1,n2
}


//EXPRESSÃO DE FUNÇÃO: cria a função em uma unica linha, dando nome somente à variavel que irá hospedá-la

const add = function(n1,n2){return n1+n2} 
console.log(add(2,2))

//ARROW FUNCTION: função com uma linha de código, com um só parâmetro, não havendo necessidade do uso de parenteses para fechamento dos parametros e chaves para fechamento do bloco de código (muito usada com objetos)

const arrowFunction = nome => `essa função se chama ${nome}` 

const sub = (n1,n1) => n1-n2 //dois parametros, há necessidade dos parenteses


//ARROW FUNCTION +1 LINHA DE CODIGO: tem que usar () e {} e montar de acordo com sua condicional

const somaNumerosPequenos = (n1,n2) =>{
    if(n1>10||n2>10){
        return 'somente numeros de 1 a 9'
    } else{
        return n1+n2
    }
}

//IF

let user
let passcode

if(user === true && passcode === true){
    console.log('User is allowed to login')
} else(user !== true && passcode !== true && user === true && passcode !== true && user != true && passcode === true){
    console.log('User is not allowed to login')
}