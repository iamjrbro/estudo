/*set armazena valores unicos; que podem ocorrer apenas uma vez, de qualquer valor, desde valores primitivos a referencias a objetos
> sua igualdade é checada de forma diferente de ===, por exemplo, para Set, 0 e -0 são valores totalmente diferentes*/

const nomes = ['Julia', 'Julia', 'Karlos', 'Ana', 'Marcela', 'Marcela']

let newSet = new Set(nomes)
let nomesAtulizados = [...newSet] //se não passar como spread operator em um novo array, o set retornará com os indices do array 
console.log(newSet)

let a = Set.length
console.log(a)


let Set = new Set();

Set.add(2)
Set.add(4)
Set.add(6) 
Set.add(6) //6 já foi adicionado ao set, portanto não entrará novamente
Set.add(8)
console.log(Set)