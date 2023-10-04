//require é uma função presente no node e para reaproveitamento de código e obtenção de arquivos para uso/execução
const dados = require("./j1.json") //nesse caso, JSON foi chamado para dentro de uma variavel
console.log(dados)
console.log(typeof dados)

//js modules https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules

console.log(dados.endereco) //é possivel buscar as propriedades dentro deste, enquanto tal esta como objeto

const jsonasString = JSON.stringify(dados)  //convertendo o JSON em string
console.log(jsonasString)  //quando em string, nao permite acessar propriedades individualmente
console.log(typeof jsonasString)

const jsonbacktoObj = JSON.parse(jsonasString)  //convertendo o JSON de volta a objeto, usando parse
console.log(jsonbacktoObj)
console.log(typeof jsonbacktoObj)

