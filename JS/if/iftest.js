//situação de venda de passagens conforme idade

const destinoViagens = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`,
    `Foz do Iguaçu`
)

const idadeCliente = 17
const estaAcompanhado = true

if (idadeCliente >=18){
    console.log('Cliente maior de idade, venda autorizada')
} else if (idadeCliente >= 18 || estaAcompanhado){
    console.log (`Venda autorizada, cliente pois possui acompanhante`)
} else{
    console.log(`Venda não autorizada, cliente menor de idade`)
}

console.log(destinoViagens)



//com codigo indentado

const viagens = new Array(
    `São Paulo`, 
    `Rio de Janeiro`,
)

const idadeComprador = 18

if (idadeComprador >= 18){
    console.log (`Cliente maior de idade`)
    viagens.push(`Ibiza`)
} else{
    console.log(`Cliente menor de idade`)
}

console.log(viagens)