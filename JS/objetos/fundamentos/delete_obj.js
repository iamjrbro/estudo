const personagem = {
    nome: 'Harry Potter',
    classe: 'bruxo',
    residencia: 'Hogwarts',
    amigo:{
        nome:'Rony',
        classe:'bruxo'
    }
}

delete personagem.amigo

console.log(personagem.amigo)  //retorna undefined
console.log(personagem)

const grupo = {
    nome:'One Direction',
    categoria:'boyband',
    desertor:{
        nome:'Zayn Malik'
    }
}

delete grupo.desertor
delete grupo["status"]
console.log(grupo.desertor)
console.log(grupo.status)

console.log(grupo)




const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}
const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true
