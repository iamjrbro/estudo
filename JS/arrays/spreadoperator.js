//spread clona/copia o array, impedindo a alteração do array original

const aOriginal = [2,4,6,8]

const novasNotas = [...aOriginal]
novasNotas.push(20,40,80,100)

console.log(aOriginal)
console.log(novasNotas)

let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);