// Ceci est commentaire
/* Ceci est commentaire multiligne 
un commentaire n'est pas interpreteé ( ou meme lu)lors de l'execution du code.*/

// Variables 
// En javascript, une variable se declare a l'aide du mot cle"let"
let nombre = 10; // ici definit une variable nommée "nombre" contenant la valeur 10

let message = "coucou" //Ici on definit une variable nommée message conetenant la chaine de caractere "coucou"

// en javascrpit, les donnes sont typees dynamiquement
// cest a diere que javascript definit le type de la donnée automatiqueemnt selon la donnée stockee
// dans un langage typé statiquement on devrait determiner le type de donnée au moment des declaration: int nombre 10;
//pour diferencier une chaine de caractere d'un nombre , on utilise des** ou ''ou  . L'utilisateion des backquote()est legerement speciale.
// pour utuliser une valeur stockée dans une variable on appele simplement son nom
let a = 5
let b = 4
let c = a + b // c contient 9

// pour definir une constante ( variable non variable)
const neChangeraJamais = 12;
neChangeraJamais = 13;// impossible, javascript empechera l'affectation

// Les conditions
// Un branchement conditionnel se fait en javascript a l'aide dun "If"( la plupart du temps)
// Une condition se fait sur evaluation d'un booleen(vrai/faux), souvent a l'issue dune comparaison entre deux valeurs.
// pour effectuer des comparaisons Js possede diferents operateurs
/*
== egalite
!= difference
>superiorite strict
<




*/
let age = 12
// un si (if) s'ecrit:  if (condition){instruction}
if (age < 18) {
    // ici on indique quoi faire si la condition est validée. par exemple,indiquer a l'utilisateur qui'l ne peut pas boire l'alcool

}
else{
    // ici on indique quoi faire dans le cas contraire
    if(age>=21){
        // on peut indiquer les conditions dans d'autres conditions
        // vous pouvez boire de l'alcool aux usa
    }
}

// Pour combiner nos conditions on peut utiliser les operateurs booleens qui en jvascript s'ecrivent de la maniere suivante:
// ET s'ecrit &&
(true&&true)==true;
(true&&false)==false;
(false && false)==false;

//Où s'ecrit

(true|| true)== true;
(true|| false)== true;
(false|| false) == false;

//  Non s'écrit !
!true === false;
!false === true;
!(false || true) === false;


// Utilisation des fonctions
//Une fonction a l'aide de mot cle function
// Les parametres d'une fonction se definissent entre parentheses a la suite du nom de la fonction
function additionner (a,b){
    // le mot cle return met fin a l'excution de la fonction et erenvoie une valeur
    return a + b;
}
// en appelant une fonction, on l'invoque a l'aide de son nom et on indique les valeurs des parametres que la fonction attend
let resultat = additionner(1,3);// doit renvoyer 4 dans resultat

// des fonctions existent deja dans le langage sans avoir besoin de les declarer
// celles -ci sont la pour aider le develloppeur a utiliser les fonctionnalites du langage
// par ex prompt() ou alert()




// Les boucles

// Une boucle est une structure de langage permettant uen repetition d'instruction selon une consition preetablie.

// en javascript la boucle de base est le while (tant que)
let i = 1;
// la condition pour que la boucle s'execute ici est que i soit inferieur ou egal a 100
while ( i <= 100){
    // a chaque tour de boucle on affiche un i dont la valeur a augmenté de 1
    i = i +1;
    afficheur(i);
}
// si la condition est mal etablie, il est possible de s'enfermer dans la boucle infinie


// La boucle for quant a elle permet d'effectuer des operations repetées a l'instar du while, mais sa syntaxe permet de definir plus clairement un depart, arret,et un operation a effectuer,le tout sur une meme ligne
// let i 
for(let i = 1 ; i <= 100; i = i + 1){
    afficher(i)
}