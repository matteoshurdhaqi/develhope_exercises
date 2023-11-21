// Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

function sum(...params){
    return params.reduce((a, num)=> a+num, 0);
}

console.log(sum(10,10,10,100));