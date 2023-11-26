function fetchPersonById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const person = persons.find(p => p.id === id);
            if (person) {
                resolve(person);
            } else {
                reject(new Error('Persona non trovata'));
            }
        }, 1000);
    });
}

function fetchJobById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const job = jobs.find(j => j.id === id);
            if (job) {
                resolve(job);
            } else {
                reject(new Error('Lavoro non trovato'));
            }
        }, 1000);
    });
}
const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
  ];
  
  const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Project Manager'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
  ]

Promise.all([fetchPersonById(1), fetchJobById(2)])
    .then(([person, job]) => {
        console.log('Persona trovata:', person);
        console.log('Lavoro trovato:', job);
    })
    .catch(error => {
        console.error('Errore:', error.message);
    });
