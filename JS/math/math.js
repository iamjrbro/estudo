// conversão n to str

let n1 = 1 //number
let n2 = 2.6 //number

console.log(n1.toString() + n2) //n1 as str while n2 number, console will print it as 12.6


let n3 = 2800
console.log(n3.toString(2)) //binário da variavel


//definindo casas decimais
let n4 = 20.60826412
console.log(n4.toFixed(2))

//checando se o valor recebido é um número inteiro (função isInteger - ela retonr T ou F)

let n5 = 62
console.log(Number.isInteger(n5))

let n6 = '62.8'
console.log(Number.isInteger(n6))


// checando se o valor é ou não um NaN

let a = 8  * 'Oi'
console.log(Number.isNaN(a)) // retorna true pq não é um número

let b = 6 * '4'
console.log(Number.isNaN(b))  // retorna false pq é um número


let n13 = 25
console.log(n13 ** 0.5) //raiz quadrada

//JS permite a divisão de um número por 0, avaliando-o como verdadeiro e retornando como infinity

console.log(80/0)


// OBJETO MATH

let n7 = 6.882
let n8 = Math.floor(n7)  //arredonda o valor pra baixo
console.log(n8)  

let n9 = 6.882
let n10 = Math.ceil(n9)  //arredonda o valor pra cima
console.log(n10) 

let n11 = 9.562
n12 = Math.round(n11)  //arredonda o valor para o numero mais proximo
console.log(n12)

console.log(Math.min(1,2,6,-90,8,10)) //mostra o menor numero da sequencia
console.log(Math.max(1,2,6,-90,8,10)) //mostra o maior numero da sequencia


console.log(Math.random()) //gera numeros aleatorios

const aleatorios = Math.random() * (10 - 5) + 5 //´possível passar parametros para esses metodo. Nesse caso, ele gera numeros aleatorios entre 10 e 5
console.log(aleatorios)


console.log(Math.pow(2, 10)) //eleva o numero (2**10)