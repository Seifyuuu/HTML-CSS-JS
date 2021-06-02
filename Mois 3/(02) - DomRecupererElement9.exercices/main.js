let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub: '50%',
    Discord: '15%',
}


// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// >*Cherche des methodes pour résoudre les énoncés suivants :*
// >*Attention, dans l'exercice précédent les éléments HTML et les propriétés dans l'objet étaient dans le même ordre ! Cette fois ci, l'ordre est différent, prend le en compte*


// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-soft-skills"
let h2div = Array.from(document.querySelectorAll("#liste-soft-skills h2"));
console.log(h2div);
// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet
tabnameSkills = Object.keys(softSkills)
tabvaluesSkills = Object.values(softSkills)
tabSkills = Object.entries(softSkills)
console.log(tabnameSkills);
console.log(tabvaluesSkills);
console.log(tabSkills);
    if(tabnameSkills[0] == h2div[1].innerHTML){
        h2div[1].innerHTML = `${h2div[1].innerHTML} ${tabvaluesSkills[0]}`
    }

    if(tabnameSkills[1] == h2div[2].innerHTML){
        h2div[2].innerHTML = `${h2div[2].innerHTML} ${tabvaluesSkills[1]}`
    }

    if(tabnameSkills[2] == h2div[0].innerHTML){
        h2div[0].innerHTML = `${h2div[0].innerHTML} ${tabvaluesSkills[2]}`
    }

    if(tabnameSkills[3] == h2div[3].innerHTML){
        h2div[3].innerHTML = `${h2div[3].innerHTML} ${tabvaluesSkills[3]}`
    }

    
    for (let i = 0; i < h2div.length; i++){
    let changement = h2div[i].style;
    if (h2div[i].innerHTML <= "49%" && h2div.innerHTML[i] != "100%"){
        changement.backgroundColor = "red";
    }else{
        changement.backgroundColor = "green";
    }}

   
// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir






    