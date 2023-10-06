//sort, ordenando os objetos alfabeticamente

const clients = require("./sort.json")

function order (list, propety){
    const result = list.sort((a,b )=> {
        if (a[propety] < b[propety]){
            return -1;
        }
        if (a[propety] > b[propety]){
            return +1;
    }
    return 0;
});
return result;
}

//revertendo a lista usando reverse
const orderedList = order(clients, "name")
console.log(orderedList)

const reverseOrder = orderedList.reverse()
console.log(reverseOrder)


//outra maneira de retornar a lista de forma reversa é adicionando um parâmetro opcional na função "ordenar", de forma a criar uma condicional de ordenção que verifica o parâmetro e usa o método reverse()
const clients(list, propety, order = "crescent"){
    const result = list.sort((a,b)=>{
        if (a[propety] < b[propety]){
            return -1;
        }
        if(a[propety] > b[propety]){
            return 1;
        }
        return 0;
    });
    if (order !== "crescent"){
        return result.reverse();
    }
    return result;
}
