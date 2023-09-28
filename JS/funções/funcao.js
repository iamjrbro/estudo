//funcao de declaracao: pode ser chamada antes, pq faz hoisting

function oi(){
    console.log('Oi')
}
oi()


//Funções sao First Class Objects

//Function expression: função declarada dentro de uma constante, tornando-a um dado

const data = function(){
    console.log('Data')
}
data()

//quando trabalhando com uma funcao em forma dado, é possivel executar dentro de outra funcao
function exF(funcao){
    funcao()
}
exF(data)

//Em um objeto

const obj = {
    hello: function(){
        console.log('hello')
    }
}
obj.hello()

//Funcao com objeto
function pessoa(nome,sobrenome){
    return {nome, sobrenome}
}
const p1 = pessoa('Julia', 'Ribeiro')
console.log(p1)


//PARAMETROS DE FUNCAO


function t(){  //função sem parametro inicial, mas que, mesmo com parametro depois, nao ira executá-lo
    console.log('teste')
}
t('ola')


//Funcoes declaradas com function possui o atributo arguments, que trata-se de um objeto, o qual sustenta/armazena todos os argumentos enviados na mesma

function i(){
    console.log(arguments)  
}
i('Julia', 1,2,3,4)


function funcao(){  //funcao sem parametro
    let total = 0
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total)
}
funcao(1,2,3,4,5,6)


function j(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f)  
}
j(1,2,3,4) //foram definidos 6 parametros, mas so 4 foram passados, sendo assim, os outros retornarão como undefined


function k(a,b,c,d){
    console.log(a+b+c+d)
}
k(2)  //retorna NaN porque os outros parametros não foram passados e nenhum valor foi setado como default para eles

function l(a,b,c,d){
    console.log(a+b+c+d)
}
l(2,4,8,6) //valores passados, conta realizada


function m(a,b = 4){ //valor default setado
    console.log(a+b)
}
m(2, undefined) //undefined passado, portanto ocorrerá o uso do valor setado

function n(a,b = 4){ //valor default setado, porem tem parametro passado, o que levará ao uso do parametro atribuido
    console.log(a+b)
}
n(2, 80)

function n(a,b,c,d){ 
    console.log(a+b+c+d)
}
n(2, null, 4, 8) //b foi passado como null, sem definição de parametro

//PARAMETROS POR DESESTRUTURAÇÃO

function o({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
o({nome: 'Julia', sobrenome: 'Ribeiro', idade: 20})  //passando um objeto como argumento de uma função



function p({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
let Obj = {nome: 'Julia', sobrenome: 'Ribeiro', idade: 20} //objeto criado fora do paremetro
p(Obj)



function q([v1, v2, v3]){
    console.log(v1, v2, v3)
}
q(['Julia', 'Ribeiro', 20]) //array como parametro