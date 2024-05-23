let prompt = require("prompt-sync")();
//Programma diviso in 2 versioni che permette la gestione di una lista della spesa.
//Progetto a cura di: Cafaro Mario, Cusenza Giovanni Paolo, Gurgoglione Samuele, Mangiacotti Flavia.

//Versione 1 - Base
//  - Aggiunta e rimozione di elementi dalla lista della spesa.
//  - Visualizzazione della lista.

let listaSpesa = [];

//funzione che permette all'utente di creare il prodotto
function creaProdotto()
{
  return{
    nome:prompt("Inserire il nome del prodotto: "),
    descrizione:prompt("Inserire una descrizione del prodotto: "),
    quantita:parseInt(prompt("Inserire la quantità desiderata: ")),
    costo:parseInt(prompt("Inserire il costo del prodotto: "))
  }
}

//funzione che riceve il prodotto, controlla se è già presente: se true esce dalla funzione, se false lo aggiunge alla lista
function aggiungi(prodotto) 
{
  if (listaSpesa.some(p => p.nome === prodotto.nome)) 
  {
    console.log(`${prodotto.nome} è già presente nella lista.`);
    return false;
  } 
  else 
  {
    listaSpesa.push(prodotto);
    console.log(`${prodotto.nome} è stato aggiunto alla lista con successo.`);
    return true;
  }
}

//funzione che riceve il prodotto, controlla se è presente e lo rimuove
function rimuovi(prodotto) 
{
  const posizione = listaSpesa.findIndex(p => p.nome === prodotto.nome);
  if (posizione !== -1) 
  {
    listaSpesa.splice(posizione, 1);
    console.log(`${prodotto.nome} è stato rimosso dalla lista.`);
  }
   else 
  {
    console.log(`${prodotto.nome} non è presente nella lista.`);
  }
}

//funzione che visualizza la lista della spesa formattata
function visualizza()
{
  console.log("Lista della spesa:");
  listaSpesa.forEach((prodotto, posizione) => {console.log(`${posizione + 1}. ${prodotto.nome} - ${prodotto.descrizione} (Quantità: ${prodotto.quantita}, Costo: ${prodotto.costo}€)`);});
}

//Versione 2 - Avanzata
// - Filtraggio e ordinamento degli elementi.
// - Ricerca di un elemento nella lista della spesa.
// - Aggiunta di controlli e migliorie.

//funzione che riceve un criterio, rende tutto minuscolo e filtra la lista in base a quel parametro
function filtra(criterio) 
{
  return listaFiltrata = listaSpesa.filter(prodotto => prodotto.nome.toLowerCase().includes(criterio.toLowerCase()));
}
//funzione che ordina in ordine alfabetico la lista
function ordina() 
{
  return listaSpesa.sort((a, b) => a.nome - b.nome);
}

//funzione che riceve il prodotto, controlla se è presente e restituisce un messaggio
function cerca(prodotto) 
{
  let posizione = listaSpesa.findIndex(p => p.nome === prodotto.nome);
  if (posizione!==-1)
  {
    return (`L'elemento ${prodotto.nome} si trova nella posizione ${index + 1} della lista.`);
  }
  else  
    return (`L'elemento ${prodotto.nome} NON è presente nella lista della spesa.`);
}


//funzione principale
function main() 
{
    let comando;
    do
    {
      comando = prompt("Inserisci un comando (aggiungi, rimuovi, visualizza, filtra, ordina, cerca, termina): ");
      comando = comando.toLowerCase();
      const prodotto={};
      if(comando=="aggiungi")
      {
        aggiungi(creaProdotto());
      }
      else if(comando=="rimuovi")
      {
        console.log("Inserisci i dati del prodotto da rimuovere:");
        rimuovi(creaProdotto());
      }
      else if(comando=="visualizza")
        visualizza();
      else if(comando=="filtra")
      {
        let criterio = prompt("Inserisci una parola chiave per filtrare la lista: ");
        console.log("Lista filtrata:", filtra(criterio));
      }
      else if(comando=="ordina")
        console.log("Lista ordinata:", ordina());
      else if(comando=="cerca")
      {
        console.log("Inserisci i dati del prodotto da cercare:");
        const prodotto = creaProdotto();
        console.log(cerca(prodotto));
      }
      else if(comando!="termina")
        console.log("Comando non valido.");
    }
    while(comando!="termina")
    console.log("Programma terminato");
}

main();