// In questo esercizio dato un array di studenti:
// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.


const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
];

function printNames(arr){
    arr.forEach(element => {
        console.log(element.nome);
    })
}
//printNames(studenti);

function findStudent(arr){
    console.log(arr.find(element => element.voto > 90));
}
// findStudent(studenti)

function sumVotes(arr){
   console.log(arr.reduce((a, element) => a + element.voto, 0))
}
//sumVotes(studenti)

function toUppercaseNames(arr){
    const newArr = arr.map(element => element.nome.toUpperCase())
    return newArr;
}
// console.log(toUppercaseNames(studenti))

function filterVoti(arr){
    console.log(arr.filter(element => element.voto > 85));
}
filterVoti(studenti)