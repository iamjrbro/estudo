const idadeMinima = 18
const idadeCliente = 19
console.log(idadeCliente >= idadeMinima?'cerveja':'suco')


||: Operador “ou”, retorna true caso uma condição seja válida;

&&: Operador “e”, retorna true somente se todas as condições forem válidas;

!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.

OPERADOR TERNÁRIO
condition ? expr1 : expr2

condition: condição avaliada com T ou F
expr1/expr2: valores de qualquer tipo, que serão avaliados

var stop = false,
  age = 16;

age > 18 ? location.assign("continue.html") : (stop = true);

console.log(stop) //true


TEMPLATE STRING

${} usada para concatenação de texto

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)  //nesse exemplo, um operador ternário foi atribuído dentro de uma Template String
