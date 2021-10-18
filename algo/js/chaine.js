// Une chaine de caractere ressemble a un tableau de caracteres
// c'est un enchainement de caracteres qu'on represente souvent entre guillemets ou apostrophes

let exemple = "aujourd'hui";
// pour ne pas rentrer en conflit avec le delimiteur " d'une chainede caractere, il faudra "echapper" ce caractere
// pour echapper un caractere  on utilise un \
// let exemple : "citation \" j'aime les porcs \" - churchill"


// plusieurs string peuvent etre concatenées a l'aide de plusieurs methodes
// la plus simples est utiliser l'operateur arithemique  + , qui dans le contexte des string permet de les" coller" ensemble
let politesse = " comment ca va " + exemple + "?";
// politessse contient donc "comment ca va aujourd'hui ?"

// pour composer des strings a l'aide de variables  et de texte on peut également utiliser les `` backquote (ou backtick)
//en utilisant les `` on peut insérer une variable, ou même du code, en insérant ${code}
let politesse2 = `Comment ça va ${exemple}?`;
//politesse2 contient donc "Comment ça va aujourd'hui?"

//les strings possèdent aussi un panel de fonctions utiles
//par exemple pour manipuler la casse (majuscule/minuscule)
//on a toUpperCase() et toLowerCase() qui sont disponibles
let petitBonjour = "bonjour";
petitBonjour.toUpperCase(); //renvoie "BONJOUR"

let grosCoucou = "COUCOU";
grosCoucou.toLowerCase(); //renvoie "coucou"

//la comparaison de strings prends en compte la casse
"toto" === "Toto"; // false
"toto" === "ToTo".toLowerCase(); // true

//étant donné qu'une string ressemble à un tableau
//on peut utiliser la notation [] pour récupérer un caractère en particulier
let phrase = "Balkany est toujours en liberté";
phrase[0]; //renvoie "B"
phrase[phrase.length - 1]; //renvoie "é"

//on peut également parcourir une string a la manière d'un tableau avec un for
for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]); //affichera chaque caractère de la string
}


