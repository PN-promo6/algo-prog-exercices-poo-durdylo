// Exercice 1 à réaliser en TypeScript, PHP et JavaCréez une classe pour représenter un livre. Cette classe doit contenir deux attributs:- un pour le titre du livre- un pour le prix du livreDans un algorithme, créez une instance de cette classe, et afficher le titre et le prix du livre.

class Book {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
};
let naruto = new Book('naruto', 10);
console.log(naruto.price);
