//conversão de string e concatenação

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 


// concatenação com toString():
let Telefone = 12341234;
console.log("O telefone é " + Telefone.toString()); 

let usuarioConectado = false;
console.log(String(usuarioConectado)); //conversão da booleana para string, convertendo para  “false”.
    usuarioConectado = true;
    console.log(String(usuarioConectado)); //agora teremos uma string “true”.


// conversão de textos e booleanos através de Number():

//calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); //conversão de String para números, possibilitando a realização da multiplicação


//operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:

let l = "10";
let a = "5";
console.log( + l * + a); //conversão de String para números usando o + antes das variáveis


let meuNome = "leonardo";
console.log(Number(meuNome)); //a variável meuNome não contém apenas números, retornando NaN
    console.log( + meuNome); //também retornará NaN


let uConectado = false;
console.log(Number(uConectado)); //conversão da booleana para número, sendo que false (falso) retorna o número 0
uConectado = true;
console.log(Number(uConectado)); //conversão de true (verdadeiro) para o número 1