//JSON - JavaScript Object Notation

//normal

const cliente = {
    nome: 'Juliana',
    idade: 24,
    email: 'juliana@gtmail.com',
    telefone: ['98871718817', '97761617717'],
    endereco:{
        rua: "Rangel Pestana",
        numero: 290,
        apartamento: true,
        complemento: "ap 008",
    }
}

/*
JSON
> nao existem variavies
> as chaves têm ""
> arrays e objetos aninhados podem existir
> não pode ter virgula no ultimo item do bloco
> funções nao sao permitidas
> comentarios nao sao permitidos
> além de arrays e objetos, suporta apenas tipos primitivos (strings, numbers, booleans, null)
> nao suporta undefined
*/

{
    "nome": "Juliana",
    "idade": 24,
    "email": "juliana@gtmail.com",
    "telefone": ["98871718817", "97761617717"],
    "endereco":{
        "rua": "Rangel Pestana",
        "numero": 290,
        "apartamento": true,
        "complemento": "ap 008"
    }
}
