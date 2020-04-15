// Créez une classe représentant une personne avec :
// - un constructeur
// - un attribut pour le nom
// - un attribut pour le prénom
// - un attribut optionnel pour la date de naissance
// - une méthode pour afficher le nom complet de la personne
//
// Dans un algorithme, créez des instances de cette classe : une avec la date de naissance, une sans la date de naissance. Appelez la méthode affichant le nom complet de la personne pour chaque instance.

class Human{
  name : string;
  firstName : string;
  birthDate : string;

  constructor(name:string,firstName:string,birthDate?:string){
    this.firstName = firstName;
    this.name = name;
    this.birthDate = birthDate;
  }
  presentation(){
    if(!this.birthDate){
      console.log("I'm " +this.firstName+" "+this.name);
    }else{
      console.log("I'm " +this.firstName+" "+this.name+" and my birth date is "+this.birthDate);

    }
  }
}
let naruto : Human = new Human("Uzumacki","Naruto","october 10th");
let sasuke :Human = new Human("Uchiwa","Sasuke");
naruto.presentation();
sasuke.presentation();
