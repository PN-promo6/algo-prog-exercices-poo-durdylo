// Créez une classe représentant un client d’une banque avec :
// - un constructeur
// - un attribut privé pour le nom
// - un attribut privé pour le numero de compte en banque
// - une méthode pour connaître le numero de compte en banque
//
// Dans un algorithme, créez une instance de cette classe et afficher le numéro de compte en banque d’un client.
//Exercice 6 : Créez une classe ClientProfessionnel qui étend la classe Client et qui a comme attribut un numéro SIRET.

class CustomerBank {
  private name: string;
  private accountBank: string;
  constructor(name: string, accountBank: string) {
    this.name = name;
    this.accountBank = accountBank;
  }
  getAccountBank(): string {
    return this.accountBank;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}

class ProfesionelClient extends CustomerBank {
  siretNumber: string;

  constructor(siretNumber: string, name: string, accountBank: string) {
    super(name, accountBank);
    this.siretNumber = siretNumber;
  }
}

let customer: CustomerBank = new CustomerBank("matt", "nb4509TR");
customer.getAccountBank();
// console.log(customer.getAccountBank());
customer.setName('Matt Jackson');
//console.log(customer.getName());
let professionelClient1: ProfesionelClient = new ProfesionelClient("093840E0399E38", "Nick Jackson", "nb343TR");
console.log(professionelClient1);
