const names = ['Diana', 'Luisa', 'Asheley', 'Carla']

function displayNames(names){  //função declarada com variavel como parametro
    console.log(names)
}

names.forEach(displayNames) //função usada como parametro (callback)