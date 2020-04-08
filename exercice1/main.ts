// Exercice 5 à réaliser en TypeScript, PHP et Java
//
// Créez une classe représentant une place de concert. Le constructeur de cette classe demande cinq paramètre dont un optionnel.
// La classe possède une méthode retournant en chaîne de caractères les détails de la place de concert sous forme de HTML.
// Exemple basique de chaîne de caractères retournée :
// "<p>Numéro de place : ${ this.username }</p>
// <p>Heure du concert : ${ this.hours }</p>"
//
// Dans un algorithme, créez deux instances de cette classe (la 1ère avec un paramètre optionnel, l’autre sans le paramètre optionnel), et afficher les détails de chaque objet crée.

class ticket{
  price : number;
  hour : string;
  placeNumber : number;
  artist : string;
  name : string;

  constructor(price:number,hour:string,placeNumber:number,artist:string,name? : string){
    this.price=price;
    this.hour=hour;
    this.placeNumber=placeNumber;
    this.artist=artist;
    if(name){
      this.name=name;
    }
  }
  htmlContent():string{
    let info =
    `<p>Nom de l'artiste : ${this.artist}</p>
    <p>Heure du concert : ${this.hour}</p>
    <p>Numero de place : ${this.placeNumber}</p>
    <p>prix de la place : ${this.price}</p>`;
    if(this.name){
      info = info +`<p>Titulaire du ticket : ${this.name}</p>`;
    }
    return info;
  }
}
let ticketJul :ticket = new ticket (30,"20h50",3299,"JUL","Samy");
let ticketJul2 :ticket = new ticket (30,"20h50",3298,"JUL");
console.log(ticketJul.htmlContent());
