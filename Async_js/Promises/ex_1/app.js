const data = { name: "John", age: 30 };

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const errorOccurred = true;

            if (errorOccurred) {
                reject(new Error("Errore durante il recupero dei dati dall'API"));
            } else {
                resolve(data);
            }
        }, 2000);
    });
}

function handleData(data) {
    return data;
}

// Utilizzo della Promise
fetchDataFromAPI()
    .then(handleData)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });