//media de valores

const notas = [10,6.2,4,0]
const media = ([notas[0] + notas[1] + notas [2] + notas[3]])/4
console.log(media)

//deletando um index
const nomes = ['Julia', 'Carla', 'Silvia', 'Carolina']
delete nomes[2]
console.log(nomes)

//Valor por referencia
const marca = ['Brastemp', 'Eletrolux']
const novaMarca = marca; //o novo array referencia o outro e vice versa, sendo assim, tudo que for alterado em um será alterado no outro
novaMarca.pop()
console.log(novaMarca)  

const marca1 = ['Brastemp', 'Eletrolux']
const novaMarca1 = [...marca1]; //... é o spread, que impede a alteração do array referenciado
novaMarca.pop()
console.log(novaMarca1)

const cor = ['azul', 'preto', 'verde', 'amarelo']
cor.shift(3)
console.log(cor)



const cidade = 'Belo Horizonte'
const cidades = cidade.split (' ')
console.log(cidades)

// slice(): fatia a array

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];


let sala1 = alunos.slice(0, alunos.length/2)
let sala2 = alunos.slice(alunos.length/2)
console.log(sala1)
console.log(sala2)



const salaJS = ['Sara', 'Thiago', 'Pedro', 'Camille']
const salaPy = ['Ju', 'Leo', 'Carlos', 'Dandara']
sala = salaJS.concat(salaPy)
console.log(sala)


//Buscando dentro de arrays

const students = ['Benner', 'OConner', 'Alice', 'Sara']
const notes = [10,4.5,6,8]
const studentsandNotes = [students,notes]
function showStudentsandNotes(students){
    if(studentsandNotes[0].includes(students)){
        const indice = studentsandNotes[0].indexOf(students)
        const mediaNote = studentsandNotes[1][indice]
        console.log(`${students} has the note ${mediaNote}`)
    } else {
        console.log('Student was not found!')
    }
}

showStudentsandNotes('OConner')


//mesmo codigo, contudo, ao inves de criar uma constante e puxar por index especifico, cria-se a constante e relaciona ao atributo, desestruturando a lista

/*const students = ['Benner', 'OConner', 'Alice', 'Sara']
const notes = [10,4.5,6,8]
const studentsandNotes = [students,notes]
function showStudentsandNotes(students){
    if(studentsandNotes[0].includes(students)){
        const indice = students.indexOf(students)
        const mediaNote = notes[indice]
        console.log(`${students} has the note ${mediaNote}`)
    } else {
        console.log('Student was not found!')
    }
}

showStudentsandNotes('OConner')*/



const n1 = [4,5,9,6]
const n2 = [0,4,1]
const n3 = [6.8,9.0]
const nG = [n1,n2,n3]
let m = 0

for(let i = 0; i<nG.length;i++){
    for(let j=0;j<nG[i].length;j++){
        m += nG[i][j]/nG[i].length
    }
}

const mGeral = media/nG.length
console.log(mGeral)



