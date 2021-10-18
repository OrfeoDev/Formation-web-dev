# Introduction aux algorithmes

Un algorithme est un ensemble d'intruction visant a resoudre un probleme

En progarammation, ces algorithmes sont definis a l'aide de _symboles_ qui constitueent un langage de programmation .

Parmis ces symboles , certains se retrouvent quelque soit le langage utilise:

## 1.Les variables

Une _variables_ est un registre permettant de stocker une valeur et d'y faire reference.

Par exemple, si je definis une variable
.....
temps_cuisson = 10
....
alors toute reference susbequente a temps_cuisson renverra la valeur 10
Le caractere = est ici le symbole de _l'affectation_ et non de l'egalite.

il est egalement possible de redefinir une variable plus tard en reutilisant l'affectation:
.....

temps_cuison=8

.....
Desormais, la valeur de tmps de cuissonest egale a 8

## 2.Les Fonctions

Une fonction est ensemble d'intructrution visant a effectuer une action precises.
C'est un programme reuitilisable .
 Ce bloc d'instruction pourra  donc etre reutilisé autant des dois que necessaire  en invoquant son nom.
 En programtion,_declare_d'abord une fonction et son comportement ,pour ensuite l'_invoquer_ou( l'_executer_) plus tard

 Exemple:
 .....
 fonction multiplier
 pour  deux nombres a et b
 renvoyer a*b

 et pour l'appeler je pourrais etre :
 ...
 multiplier 2 et 3
 ....
 ce qui renverrait 6

 ### 3 - Les structures conditionnelles
 Une _structure conditionnelle_ permet d'effectuer un branchement (imposer un choix)entre plusieurs jeux d'instructions, selon une cobdition a evaluer (vrai/faux).

 Ces structures sont souvent definies a l'aide des termes Si (If)et Sinon (Else):
 ....
 Si age_utilisateur >= 18 ans alors
 vendre alcool
 Sinon
 renvoyer chez meme
 .....

 Une condition s'evalue a _vrai_ ou _faux_. Une valeur qui peut etre soit _vraie soit _fausse_ est appelée booleenne ( en reference a l'agebre de boole).

 Pour pouvoir gerer des conditions complexes ,on peut, associer ces conditions entre elles avec des opertaeurs logiques tirés de dette algebre booleenne
 pour l'operateur _et_

 - vrai _et_ vrai == vrai
 - vrai _et faux == faux
 faux _et_ vrai == faux
 faux _et_ faux == faux

 pour l'operateur _ou_
 vrai _ou_ vrai == vrai
 vrai _ou_ faux == vrai 
 faux _ou_vrai == vrai 
 faux _ou_ faux == faux

 On peut aleter une condition avec le _non_
 non (vrai)


