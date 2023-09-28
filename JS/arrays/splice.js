//splice(): altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');  //o primeiro parametro sera o indice, o qual deve iniciar a alteração da lista; o segundo parametro deve ser o indice onde o novo elemento será alocado e, posteriormente, passa-se o elemento que entrará para a lista
months.splice(4, 1, 'May');
console.log(months);  
