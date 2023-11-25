// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.

const data = { name: "John", age: 30 };

function fetchDataFromAPI(callback) {
    setTimeout(() => {
        console.log(callback(data));
    }, 2000);
}

function handleData(data) {
    return data;
}

fetchDataFromAPI(handleData);