import { patients, docteur, diags, pharmacie, cimetiere, cures,  } from "./class.js";















while (docteur.attente.length > 0) {
console.log("Miaou");
console.log(`Dans la salle d'attente il y'a ${docteur.attente.length} personnes`);
docteur.patientIn()
docteur.diagnostique()
docteur.patientOut()
pharmacie.seekMed();
}
