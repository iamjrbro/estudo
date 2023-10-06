//find, buscando através de uma propriedade

const clients = require("./find.json");

function find (list, key, value){
    return list.find((item) => item[key] === value);
}

const found = find(clients, apartament = true);
const found2 = find(clients, "age" > 40)
const found3 = find(clients, "name", "Anne")

console.log(found)
console.log(found2)
console.log(found3)

