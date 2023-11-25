// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.


function runCallbacks(callbacks) {
    callbacks.forEach(callback => {
        callback()
    });
    return callbacks
}
function firstCallback() {
    console.log("Ciao dalla prima callback");
}
function secondCallback() {
    console.log("Ciao dalla seconda callback");
}

function thirdCallback() {
    console.log("Ciao dalla terza callback");
}


const callbackArray = [secondCallback, firstCallback, thirdCallback];
runCallbacks(callbackArray);
