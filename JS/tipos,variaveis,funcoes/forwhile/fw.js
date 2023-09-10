let idadeComprador = 20
let temPassagemComprada = false
const destino = 'Ibiza'

const destinosViagens = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Los Angeles`,
    `Ibiza`
)

console.log(destinosViagens)

const podeComprar = idadeComprador >=18 || estaAcompanhado == true

let contador = 0
let destinoExiste = false
while (contador <4){
    if (destinosViagens[contador] == destino){
        console.log('Destino existe')
        destinoExiste = true
        break;
    }
    contador += 1
}
console.log('Destino existe: ', destinoExiste)

if (podeComprar && destinoExiste){
    console.log('Boa viagem!')
}


//mesma função do while, mas usando for - as condições são todas colocadas nos parametros do for

for(let cont = 0; cont <4; cont++){
    if(destinosViagens[cont]==destino){
    destinoExiste = true
    console.log('Destino existe')
    }
}

if (podeComprar && destinoExiste){
    console.log('Boa viagem!')
}
