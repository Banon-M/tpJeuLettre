let elmtTitleGame = document.createElement("h1");
document.body.appendChild(elmtTitleGame);
elmtTitleGame.textContent = "TimeTOUCH"; //Titre du jeu
elmtTitleGame.style.textAlign = "center";


//Premier conteneur. MENU
let elmtContainerMenu = document.createElement("div");
document.body.appendChild(elmtContainerMenu);
elmtContainerMenu.hidden = false;
elmtContainerMenu.style.textAlign = "center";

let elmtRulegame = document.createElement("p"); //Regle du jeu
elmtContainerMenu.appendChild(elmtRulegame);
elmtRulegame.textContent = "Appuis sur la touche du clavier qui correspond à la lettre afficher, ATTENTION AU TEMPS";


let elmtBtnPlay = document.createElement("input"); //Boutton pour commencer la partie
elmtContainerMenu.appendChild(elmtBtnPlay);
elmtBtnPlay.type = "button";
elmtBtnPlay.value = "C'est parti !";
elmtBtnPlay.style.backgroundColor = "#000000";
elmtBtnPlay.style.borderRadius = "5px";
elmtBtnPlay.style.color = "white";
elmtBtnPlay.style.width = "20%";
elmtBtnPlay.style.fontSize = "2rem";


elmtBtnPlay.addEventListener("click", functionPlay, false);
function functionPlay() {
  elmtContainerMenu.hidden = true;
  elmtContainerGame.hidden = false;
  baseTime = 4; // Permet d'écouler 4 seconde en temps de base
  // setInterval(decrementing, 1000);//Permet d'appeler la fonction decrementing de facon répété. la fonction du temps en second
  move(); // Fait appel a la fonction move
}


//Deuxieme conteneur. LE JEU
let elmtContainerGame = document.createElement("div"); //CONTAINER
document.body.appendChild(elmtContainerGame);
elmtContainerGame.hidden = true;


let elmtScoreGame = document.createElement("p"); // Pargraphe sur le score
elmtContainerGame.appendChild(elmtScoreGame);
elmtScoreGame.textContent = "Score: 0";
let scoreNul = 1;
elmtScoreGame.style.textAlign = "center";

// function decrementing() { // Fonction de temps dee réponse par second affficher
//   baseTime--
//   elmtTimeGame.textContent = "Temps de réponse : " + baseTime + " seconds";
//   if (baseTime < 0) {
//     elmtContainerGame.hidden = true;
//     elmtContainerResult.hidden = false;
//   }};

let width = 100; //Fonction de temps par une barre de temp en mouvement.
function move() {
  let elmtProgressTime = document.createElement("div");
  elmtTimeGame.appendChild(elmtProgressTime);
  elmtProgressTime.style.width = "1%";
  elmtProgressTime.style.height = "100%";
  elmtProgressTime.style.backgroundColor = "grey";
  let id = setInterval(frame, 50);

  function frame() {
    if (width <= 1) {
      elmtContainerGame.hidden = true;
      elmtContainerResult.hidden = false;
    } else {
      width--;
      elmtProgressTime.style.width = width + '%';
    }
  }};


let elmtTimeGame = document.createElement("h2"); // Paragraphe qui contient l' interval de temps pour répondre
elmtContainerGame.appendChild(elmtTimeGame);
elmtTimeGame.style.width = "50vw"; // A ajouter lorsque l'on présente un temps de réponse sous forme illustré
elmtTimeGame.style.height = "5vh";
elmtTimeGame.style.backgroundColor = "green";
elmtTimeGame.style.margin = "0 auto";
// elmtTimeGame.textContent = " GOOOOOOOOOO ";// A ajouter si l'on présente le temps sous forme numérique.
// elmtTimeGame.style.textAlign = "center";// Style
// elmtTimeGame.style.fontWeight = "bold";
// elmtTimeGame.style.backgroundColor = "black";
// elmtTimeGame.style.color = "white";
// elmtTimeGame.style.fontSize = "4rem";



let alphabet = ["a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z"]; //Création du tableau

let letterRandom = Math.floor(Math.random() * alphabet.length); //Permet de récupérer un élément du tableau compris entre 0 et la longeur du tableau, (length),
let letterDisplayRandom = alphabet[letterRandom]; //Dit que l'on récupère un element au azar du tableau.


let elmtDisplayLetter = document.createElement("p"); //permet d'afficher la lettre du tableau
elmtContainerGame.appendChild(elmtDisplayLetter);
elmtDisplayLetter.textContent = letterDisplayRandom;
elmtDisplayLetter.style.textAlign = "center";
elmtDisplayLetter.style.textTransform = "uppercase";
elmtDisplayLetter.style.fontFamily = "Impact";
elmtDisplayLetter.style.fontSize = "3rem";
elmtDisplayLetter.style.fontWeight = "bold"

window.addEventListener("keydown", function(event) { //Fonction qui va permettre de paramétrer si on tape sur la bonne touche ou non
    if (event.key === elmtDisplayLetter.textContent) { //Si tu appuis sur la bonne touche de l'aléatoire (elmtDisplayLetter)
    letterRandom = Math.floor(Math.random() * alphabet.length); // La fonction va permettre de relancer le random
    letterDisplayRandom = alphabet[letterRandom];//Choisir une lettre
    elmtDisplayLetter.textContent = letterDisplayRandom;//Afficher la lettre random
    elmtScoreGame.textContent = "Score: " + scoreNul;// modifie l'affichage du score
    scoreNul++; //Le score prend +1
    // baseTime = 4;// Repart sur une base 4 seconde
    width = 100;  //Repart sur une base de 100 lors sque la fonction Move est appeler

    if (scoreNul >= 10) {
      // baseTime = 2;
      // elmtTimeGame.textContent = "Temps de réponse : " + baseTime + " seconds"
      // elmtTimeGame.style.fontSize = "1.5rem";
      width = 50;
      elmtTimeGame.style.backgroundColor = "orange";
    }
    if (scoreNul >= 20) {
      // baseTime = 1;
      // elmtTimeGame.textContent = "Temps de réponse : " + baseTime + " seconds"
      // elmtTimeGame.style.fontSize = "1.5rem";
      width = 25;
      elmtTimeGame.style.backgroundColor = "red";
    }

  } else { // SINON (si le temps est dépassé ou que l'on appuie sur la mauvaise touche) on passe a la page suivante.
    elmtContainerGame.hidden = true;
    elmtContainerResult.hidden = false;
  }
}, false);


//CONTZINER DU RESULTAT
let elmtContainerResult = document.createElement("div");
document.body.appendChild(elmtContainerResult);
elmtContainerResult.hidden = true;

let elmtFinishGame = document.createElement("p");
elmtContainerResult.appendChild(elmtFinishGame);
elmtFinishGame.textContent = "Fin du jeu !! Améliore ou enregistre ton score ! ";
elmtFinishGame.style.textAlign = "center";
elmtFinishGame.style.fontWeight = "bold";
elmtFinishGame.style.fontSize = "2rem"

let elmtScoreFinaly = document.createElement("p");
elmtContainerResult.appendChild(elmtScoreFinaly);
let recup = elmtScoreGame.value;
elmtScoreFinaly.textContent = "Votre Score : " + recup;
elmtScoreFinaly.style.textAlign = "center";


let elmtYourRanking = document.createElement("p");
elmtContainerResult.appendChild(elmtYourRanking);
elmtYourRanking.textContent = "Votre classement : ";
elmtYourRanking.style.textAlign = "center";

let classementBoard = ['1er: Nom utilisateur',
                       '2eme: Nom utilisateur',
                       '3eme: Nom utilisateur' ]



//VERIFFIER SI LE EVENT.KEY EST EGALE A LA LETTRE AFFICHER ALORS AFFICHER UNE NOUVELLE LETTRE.
