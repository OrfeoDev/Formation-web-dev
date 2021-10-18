// Un tableau une stucture de donnees
// permettant de stocker un jeu de donnees du meme type
// En javascript ( et en  programmation en general)un tableau se declare a l'aide de crochets[]
let tableauVide =[];

// Un tableau contient des cases, chaque case contient une donnée
// Lorsqu'on declare un tableau , chaque nouvelle case est sepaeree par une virgule
//                      0         1           2
let listeCourses = [ "eponges","pates","sauce tomates"];
// la numerotation des cases commence a 0
//  pour acceder a une valeur stockee dans un tableau, on utilise l'indice de cette valeur

console.log(listeCourses[0]); //affiche "eponges" dans la console
console.log(listeCourses[2]); //affiche "sauce tomate" dans la console
console.log(listeCourses[3]); //afficher undefined dans la console


// Pour recuperer la taille d'un tableau,, on peut utiliser nonDutableau.lenght
console.log(listeCourses.length); // va afficher 3 dans la console
// si la premiere case du tableau se trouve a nomDutableau[0]
// la derniere elle se trouve a [nomDutableau.lenght-1]
 console.log(listeCourses[listeCourses.length])  //affiche "sauce tomate"
//   pour parcourir la totalité d'un tableau











//Pour ajouter un element a la fin d'un tableau on peut utiliser tableau.push(element)
listeCourses.push("poivre");  //["eponge","pates","sauce tomate","poivre"]
console.log(listeCourses[3]); // affiche "poivre" dans la console


// Pour retirer et recuperer le dernier element d'un tableau
// on peut utiliser tableau.pop()
console.log(listeCourses.pop());  // affiche "poivre" et supprime "poivre" du tableau

// pour ajouter un element au debut du tableau on peut utiliser tableau.unshif(element)
listeCourses.unshift("whisky"); //["whisky","eponges","pates","sauce tomate"]
// pour supprimer le premier elemnt du tableau on peut utuliser tableau.shift()
console.log(listeCourses.shift()); // affiche "whisky" et supprime "whisky" du tableau


// tableau.splice() permet de raccorder, supprimer, remplacer des elements dans un tableau

listeCourses.splice(1, 1,"pates completes");
//["eponges","pates completes","sauce tomate"]
// je rajoute deux elements a la case 2 sans en supprimer
listeCourses.splice(2, 0, "parmesan","pesto");

// ["eponge,"pates", "parmesan", "pesto", "sauce tomate"]
// je supprime un element a la case 3
listeCourses.splice(3, 1);  // on supprime "pesto" du tableau