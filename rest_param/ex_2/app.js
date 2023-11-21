// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

function filterOutOdds(...params){
    return params.filter(num => num%2 == 0)
}

console.log(filterOutOdds(2,3,4,5,6,7,8,9,10,11,12));