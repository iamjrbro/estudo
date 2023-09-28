// executa uma função reducer (que deve ser fornecida) para cada elemento do array, resultando em um unico valor de retorno

//não retorna um novo array, seu valor dve ser relacionado a uma nova variavel


const a1 = [1,2,3,4]
const vInicial = 0
const somaComVInicicial = a1.reduce((acumulador, valorAtual)=>acumulador+valorAtual,vInicial)
console.log(somaComVInicicial)
