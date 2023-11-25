// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
// Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.


function contoAllaRovescia(){
    console.log("Conto alla rovescia in corso..." + tmp);

    if(tmp<=0){
        clearInterval(cnt)
        console.log("Conto alla rovescia terminato")
    }else{
        tmp--;
    }
    
}

let tmp=10;

contoAllaRovescia()

let cnt = setInterval(contoAllaRovescia, 1000);

