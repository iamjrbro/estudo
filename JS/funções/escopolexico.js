// ESCOPO LÉXICO - estrutura aninhada em outra, a de dentro pode acessar variáveis na de fora

function init(){  //init cria uma variavel local chamada name e, posteriormente, define uma função chamada displayName, que é uma closure e está disponivel somente dentro de init
    const name = 'Joicy'
    function displayName(){   //displayName não tem variaveis propria, reusando a variavel declarada dentro da funcao pai. displayName é uma closure - função aninhada
        console.log(name)
    }
    displayName()
}
init()

//mesmo que outro nome seja declarado, não será processado, pois a variavel se lembra do escopo léxico



//CLOSURE: encapsulamento; função que engloba variaveis de fora dela; combinação de uma função com as referências ao estado que a circunda (o ambiente léxico); dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

function start() {
    var message = "hello world";

    function display() {
        console.log(message);
    }

    display();
}

//CURRYING:  transformação de uma função que recebe múltiplos parâmetros (mais especificamente, uma n-tupla como parâmetro) de forma que ela pode ser chamada como uma cadeia de funções que recebem somente um parâmetro cada. 

function curry(fn /*, argumentos parciais para fn */) {
    var args1 = [].slice.call(arguments, 1); // argumentos após fn
    return function(/* o resto dos argumentos para fn */) {
      var args2 = [].slice.call(arguments);
      return fn.apply(null, args1.concat(args2)); // junta todos os argumentos
    }
  }

//simplificada
  var soma10 = curry(soma, 10); // soma10 capturou "soma" e "10"
var total = soma10(5);