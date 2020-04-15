// Exercice 1 à réaliser en TypeScript, PHP et JavaCréez une classe pour représenter un livre. Cette classe doit contenir deux attributs:- un pour le titre du livre- un pour le prix du livreDans un algorithme, créez une instance de cette classe, et afficher le titre et le prix du livre.
var Book = /** @class */ (function () {
    function Book(name, price) {
        this.name = name;
        this.price = price;
    }
    return Book;
}());
;
var naruto = new Book('naruto', 10);
console.log(naruto);
