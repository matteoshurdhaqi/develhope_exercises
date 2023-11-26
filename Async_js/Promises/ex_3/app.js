// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.


function delayPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise fullfilled after 2 seconds");
        }, 2000)
    })
}

delayPromise()
.then(res => {
    console.log(res);
})
.catch(err => {
    console.error("Si è verificato un errore:", err)
})