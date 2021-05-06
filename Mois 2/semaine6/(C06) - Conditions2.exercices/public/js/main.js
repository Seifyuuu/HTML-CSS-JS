//1
// let rep1 = prompt("Rentre un nombre :");
// let rep2 = prompt("Rentre un nombre :");

// if(rep1 == rep2){
//     alert(`Le nombre ${rep1} et ${rep2} sont-ils égaux ? ${rep1 == rep2}`);
// }else{
//     alert(`Le nombre ${rep1} et ${rep2} sont-ils égaux ? ${rep1 == rep2}`);
// }

//2
// let rep1 = prompt("Entrez un chiffre");
// let rep2 = prompt("Entrez un chiffre");
// if(rep1 < rep2){
//     alert(rep1 < rep2);
// }else{
//     alert(rep1 < rep2);
// }

//3
// let nb5 = parseInt(prompt("introduisez votre nombre"));
// let nb6 = parseInt(prompt("introduisez votre nombre"));
// let nb7 = parseInt(prompt("introduisez votre nombre"));
// if(nb5 + nb6 > nb7){
//     alert(`La somme du nombre ${nb5}
//       + le nombre ${nb6} est-elle plus grande que le nombre  ${nb7} ? :${nb5 + nb6 > nb7}`);
// }else{
//     alert(`La somme du nombre ${nb5}
//     + le nombre ${nb6} est-elle plus grande que le nombre ${nb7}  ? :${nb5 + nb6 > nb7}`)
// }

//4
// let quest = prompt("Entrez une phrase");
// let questLength = quest.length;
// let estim = parseInt(prompt("Estimez la longueur de la phrase"));
// let diff = Math.abs(questLength-estim);

// if(questLength == estim){
//     alert("Bien joué BG !");
// }else{
//     alert(`La réponse est fausse tu es à ${diff} unités de la bonne réponse`);
// }

//5
// let prenom = prompt("Entrez votre prénom");

// if(prenom.length == 0){
//     prenom = prompt("Attention vous devez remplir le champ ci-dessous, quel est votre prénom ?");
//     alert("Bonjour "+ prenom);
// }else{
//     alert("Bonjour "+ prenom);
// }

//6
// let abo = confirm("Voulez-vous vous abonner ?");
// let formula;
// let confirmation;

// if(abo == true){
//     formula = prompt("Bonne initiative, voulez-vous la formule Luxe ou Normale ?").toLowerCase();
//     if(formula == "normale" ){
//         alert("Merci pour votre abonnement Normal.");
//     }else if(formula == "luxe"){
//         alert("Merci pour votre abonnement Luxe et votre moula.")
//     }else{
//         confirmation = confirm("Êtes-vous sûr ?");
//         if(confirmation == true){
//             alert("Dommage, passez une bonne journée !");
//         }else{
//             alert("Actualisez la page web svp");
//         }
//     }
// }else{
//     confirmation = confirm("Êtes-vous sûr ?");
//         if(confirmation == true){
//             alert("Dommage, passez une bonne journée !");
//         }else{
//             alert("Actualisez la page web svp");
//         }
// }

//7
// let quest1 = prompt("Quelle est la capitale de la Belgique").toUpperCase();
// let quest2 = prompt("Quel est le prénom du roi des belges ?").toUpperCase();
// let rep1 = "Bruxelles".toUpperCase();
// let rep2 = "Philippe".toUpperCase();

// if(quest1 == rep1 && quest2 == rep2){
//     alert("Félicitations tout est correct");
// }else if(quest1 == rep1 || quest2 == rep2){
//     //trompé à la première question :
//     if(quest1 != rep1){
//         alert("Tu y es presque, la question 1 est incorrecte !");
//     //trompé à la deuxième question :
//     }else{
//         alert("Tu y es presque, la question 2 est incorrecte !");
//     }
// }else{
//     alert("Vous avez échoué, rien n'est correct !");
// }

//8
let age = parseInt(prompt("Quel est votre âge ?"));

if(age <= 0){
    alert("Vous n'êtes même pas né");
}else if (age < 18 ){
    alert("Vous êtes mineur, l'accès est réservé aux adultes");
}else if(age == 18){
    alert("Vous pouvez y aller mais c'est tout juste !");
}else if(age > 100){
    alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.");
}else{
    alert("Vous êtes majeur, vous pouvez réserver");
}