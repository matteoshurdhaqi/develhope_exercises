// Crea una funzione che accetta due numeri come argomenti e una funzione di callback.
// La funzione dovrebbe eseguire un'operazione matematica sui numeri e passare il risultato alla funzione di callback.
// Ad esempio, puoi creare una funzione per aggiungere due numeri e passare una funzione di callback che visualizza il risultato.


function performOperation(a, b, callback) {
    if (typeof callback !== 'function') {
        return new Error('Callback must be a function');
    }

    try {
        const res = a + b;
        return callback(null, res);
    } catch (error) {
        return callback(error, null);
    }
}

function displayResult(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
}

performOperation(5, 3, displayResult);