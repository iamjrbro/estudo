/*
Objetos Literais são unicos com seus proprios valores e dados, apontando sempre para um mesmo lugar na memória, mesmo que se crie copia deles
*/

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   

const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) // ambos terao como retorno Gandalf, o Cinzento
console.log(objPersonagem2.nome) 

/*Além de utilizar a notação literal, objetos também podem ser criados através do método  Object.create(), o qual  cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.*/

const objPersona = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersona2 = Object.create(objPersona)
objPersona2.nome = "Gandalf, o Cinzento"

console.log(objPersona.nome) //Gandalf
console.log(objPersona2.nome) //Gandalf, o Cinzento


