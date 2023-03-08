/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
*/
// -------------------------------------------------------------------------


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const team = [
    {
        nome : "Wayne Barnett",
        lavoro : "Founder & CEO",
        foto : "wayne-barnett-founder-ceo.jpg"

    },
    {
        nome : "Angela Caroll",
        lavoro : "Chief Editor",
        foto : "angela-caroll-chief-editor.jpg"

    },
    {
        nome : "Walter Gordon",
        lavoro : "Office Manager",
        foto : "walter-gordon-office-manager.jpg"

    },
    {
        nome : "Angela Lopez",
        lavoro : "Social Media Manager",
        foto : "angela-lopez-social-media-manager.jpg"

    },
    {
        nome : "Scott Estrada",
        lavoro : "Developer",
        foto : "scott-estrada-developer.jpg"

    },
    {
        nome : "Barbara Ramos",
        lavoro : "Graphic Designer",
        foto : "barbara-ramos-graphic-designer.jpg"

    }
];


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (i = 0; i < team.length; i++){

    console.log("nome : " + team[i].nome); 
    console.log("lavoro : " + team[i].lavoro);
    console.log("foto : " + team[i].foto); 
};


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede

const containerEl = document.getElementById("cards-container");


for (i = 0; i < 6; i++) {

    let cardEl = document.createElement("div");
    cardEl.className = "card";

    cardEl.innerHTML = `${team[i].lavoro}  <br>  <b>${team[i].nome}</b>`;
    
    let imgEl = document.createElement("img");
    imgEl.className = "img";

    imgEl.src = `img/${team[i].foto}`;
    
    containerEl.append(cardEl);
    
    cardEl.append(imgEl);

};








