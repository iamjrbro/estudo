//usado para criar um novo array a partir de um array existente


const numbers = [2,4,6,8]  //multiplica
const doubleN = numbers.map(i=>i*2)
console.log(doubleN)



const n = [1,20,90,70,200] //retorna em boolean

const m = n.map(valor => valor > 40)
console.log(m)


const notas = [10,8,4,2]
const exibeNotas = notas.map((notas) =>{   //map não altera o valor do array original, portanto, sempre será necessario retribuir seu retorno em um novo array
    return notas + 1 >= 10 ? 10 : notas + 1
})
console.log(exibeNotas)


const nomes = ['ana Julia', 'Leticia silva', 'BEATRIZ']
const padronizacaoNomes = nomes.map((nomes) =>  nomes.toUpperCase()) 
console.log(padronizacaoNomes)

const praia = 'Praia:'
const musica = 'Pé na areia, caipirinha, água de coco, cervejinha'
const newPraia = praia.concat(musica)
console.log(newPraia)