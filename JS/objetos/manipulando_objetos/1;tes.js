const clients = [
    {name: 'Marlon',
    age: 34,
    email: 'marlon@mail.com',
    telephones: ['8886771777', '28189110910']},

    {name: 'Anne',
    age: 18,
    email: 'anne@mail.com',
    telephones: '898910010',
    apartament: true},

    {name: 'Sara',
    age: 14,
    email: 'sara@mail.com',
    telephones: ['99010119198']},

    {name: 'Donald',
    age: 38,
    email: 'donald@mail.com',
    telephones: '67377009'},

    {name: 'Ester',
    age: 90,
    email: 'ester@mail.com',
    telephones: '8998988737'}

]

console.log(clients[clients.adress])


clients.adress = [
   { street: "St. Patrick Avenue",
    number: 444},

    { street: "Lauren Geneve St.",
    number: 222},

    { street: "Conrad Conny",
    number: 888},

    { street: "Mainroll Duch",
    number: 900}
]

const objKeys = Object.keys(clients)
if(!objKeys.includes('adress')){
    console.error('It is needed to have an adress at the register of the client!')
}

console.log(clients.adress[0])
console.log(clients.adress[1])
console.log(clients.adress[2])
console.log(clients.adress[3])


const ap = clients.filter((apartament) =>clients.apartament === true)
console.log(ap)