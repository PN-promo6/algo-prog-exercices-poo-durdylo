// Créez une classe représentant un client d’une banque avec :
// - un constructeur
// - un attribut privé pour le nom
// - un attribut privé pour le numero de compte en banque
// - une méthode pour connaître le numero de compte en banque
//
// Dans un algorithme, créez une instance de cette classe et afficher le numéro de compte en banque d’un client.
class CustomerBank{
  private name:string;
  private accountBank:string;
  constructor(name:string, accountBank:string){
    this.name = name;
    this.accountBank = accountBank;
  }
  getAccountBank(): string{
    return this.accountBank;
  }
  getName():string{
    return this.name;
  }
  setName(name : string):void{
    this.name = name;
  }
}
let customer : CustomerBank = new CustomerBank("matt", "nb4509TR");
customer.getAccountBank();
console.log(customer.getAccountBank());
customer.setName('Matt Jackson');
console.log(customer.getName());
