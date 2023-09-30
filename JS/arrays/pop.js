//Pop: remove o elemento do final da array

const b = [2.2, 5.6, 4.8]
b.pop(5.6) //nesse caso, o pop recebeu um parametro e removeu ele. Caso não receba parametro, o ultimo item da lista sera removido
console.log(b)


jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)


const comida = ['banana', 'morango']
const removido = comidaRemovida = comida.pop() //é possivel passar o item removido para um novo array
console.log(comidaRemovida)