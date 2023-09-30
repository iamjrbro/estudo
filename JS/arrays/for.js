//FOR

const n = [10, 20, 30, 40, 50, 60, 80];

//primeira condi~ção: executada apenas uma vez
//segunda condição: condição de execução, a qual deve ser T ou F
//terceira condição: sempre executada ao final do bloco

/*for (let i=0; i <= i; i++){
    console.log(i)  //loop infinito(executa não pfv vai travar)
}
console.log(n)*/

for (let indice = 0; indice <= 10; indice++) {
  //enquanto indeice<10, i++
  console.log(indice);
}

for (let i = 0; i <= n.length; i++) {
  //vai executar até atingir o length do array
  console.log(n[i]);
}
console.log(n);

const nts = [8, 7, 4, 3];
let somaNotas = 0; //soma = 0 para que haja a incrementação quando passar pelo loop
for (let i = 0; i < nts.length; i++) {
  somaNotas += notas[i];
}
const mdia = somaNotas / nts.length;
console.log(`A média das notas é ${mdia}`);

//FOR PERCORRENDO MATRIZES

const n1 = [4, 5, 9, 6];
const n2 = [0, 4, 1];
const n3 = [6.8, 9.0];
const nG = [n1, n2, n3];
let m = 0;

for (let i = 0; i < nG.length; i++) {
  //enquanto i for menor que nG.length e o array possui 3 elementos, o bloco será executado 3 vezes
  for (let j = 0; j < nG[i].length; j++) {
    //não podemos declarar uma variavel duas vezes, então temos j. Como cada nG[i] é um array, se obtém a propriedade de tamanho dele utilizando o .length
    m += nG[i][j] / nG[i].length; //este acumula o valor de nG[i][j], sendo que nG[i] é o primeiro parametro e nG[j] acessa o elemento dentro do array escolhido por nG[i]
  }
}

const mGeral = media / nG.length;
console.log(mGeral);

//FOR OF: enquanto algo atender algo faça

const notes = [6, 8, 4, 2];
let addNotes = 0;
for (let note of notes) {
  addNotes += note;
}
const med = addNotes / notes.length;
console.log(med);


const a1 = [1,2,3,4]
for(let v of a1){
  console.log(v);
}


//FOR EACH: função de callback, utilizavel para iterar com os elementos do array, chama uma variavel de volta (para cada função dentro do array, execute tal coisa). Seu unico parametro obrigatorio é uma função que recebe um elemento

const name = ["Lucas", "Valeria", "Patricia", "Adriana"];
name.forEach(function (n) {
  console.log(n);
});


//iterando com valor da variavel, indice e o proprio array
const a2 = [1,2,3,4]
a2.forEach(function (valor, indice, array){
  console.log(valor, indice, array); //pode chamar o que quiser aqui
})


const a3 = [100,200,300,400]
let total = 0
a3.forEach(valor =>{
  total+= valor
})
console.log(total)