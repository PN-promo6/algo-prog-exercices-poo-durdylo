/*Exercice 7 à réaliser en TypeScript et Java
L'exercice suivant prend le cas d'un jeu vidéo où le joueur incarne un personnage. Ce
personnage possède un inventaire qu'il peut remplir avec des items. Les items sont de
différents types (médicaments, clés, munitions, etc.) et l'inventaire possède 9 emplacements.
Chaque item possède une taille :
- si un item a une taille de 1, il prend 1 emplacement dans l'inventaire
- si un item a une taille de 2, il prend 2 emplacements dans l'inventaire
- etc.
Créez une classe abstraite Item possédant en attributs un nom (chaîne) et une taille (entier).
Créez une classe Teleporter, qui hérite de la classe abstraite Item, et qui possède un attribut
energy (entier). Cet item a par défaut une taille de 3.
Créez une classe Arrow, qui hérite de la classe abstraite Item, et qui possède un attribut
power (entier). Cet item a par défaut une taille de 1.*/

abstract class Item {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    energy: number;

    constructor(name: string, energy: number) {
        super(name, 3);
        this.energy = energy;

    }
}

class Arrow extends Item {
    power: number;

    constructor(name: string, power: number) {
        super(name, 1);
        this.power = power;
    }
}

class Player {
    name: string;
    sizeFree: number;
    lifePoints: number;
    inventory: Array<Item> = new Array<Item>();

    constructor(name: string) {
        this.name = name;
        this.lifePoints = 3;
        this.inventory = new Array<Item>();
        this.sizeFree = 9;

    }

    pushItem(item: Item): boolean {
        let isPush: boolean;
        let itemSize = item.size;
        let itemName = item.name;
        if (itemSize < this.sizeFree) {
            this.inventory.push(item);
            this.sizeFree -= itemSize;
            console.log("votre " + itemName + " a bien été ajouté à votre inventaire.")
            isPush = true;
        } else {
            console.log("votre inventaire est plein.")
            isPush = false;
        }

        return isPush;
    }

}

let player1: Player = new Player("Nathan Drake");
let arrow1: Arrow = new Arrow("arc", 10);

let teleporter1: Teleporter = new Teleporter("teleporter", 4);
player1.pushItem(arrow1);
player1.pushItem(teleporter1);
player1.pushItem(teleporter1);
player1.pushItem(teleporter1);
player1.pushItem(teleporter1);
player1.pushItem(teleporter1);
player1.pushItem(teleporter1);

console.log(player1.inventory);

/*Créez une classe Player qui possède :
- en attribut, un nom (chaîne)
- en attribut, un nombre de vie (entier) initialisé à 3

- en attribut un tableau d'items (en TS, utilisez le type Array, en Java le type ArrayList
)
- une méthode qui prend en paramètre un item, et qui tente d'ajouter l'item au
tableau d'items. Cette méthode retourne : l'objet booléen False si l'item est trop gros
pour être ajouté au tableau ou si l'inventaire est plein, True si l'item a bien été ajouté
Créez une instance de Player, plusieures instances de Teleporter et Arrow.
Ajoutez des instances de Teleporter et Arrow dans l'inventaire du joueur.
Faites en sortes que lorsqu'on tente d'ajouter un item à l'inventaire :
- si l'item a été ajouté, on affiche en console le nom de l'ensemble des items dans
l'inventaire
- si l'item n'a pas pu être ajouté, on affiche en console "L'item ne peut pas être
ajouté : faites de la place dans votre inventaire !"*/