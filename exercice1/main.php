<?php

// Exercice 5 à réaliser en TypeScript, PHP et Java
//
// Créez une classe représentant une place de concert. Le constructeur de cette classe demande cinq paramètre dont un optionnel.
// La classe possède une méthode retournant en chaîne de caractères les détails de la place de concert sous forme de HTML.
// Exemple basique de chaîne de caractères retournée :
// "<p>Numéro de place : ${ this.username }</p>
// <p>Heure du concert : ${ this.hours }</p>"
//
// Dans un algorithme, créez deux instances de cette classe (la 1ère avec un paramètre optionnel, l’autre sans le paramètre optionnel), et afficher les détails de chaque objet crée.

/**
 *
 */
class Ticket
{
  public $price;
  public $hour;
  public $placeNumber;
  public $artist;
  public $name;

  function __construct($price,$hour,$placeNumber,$artist,$name=NULL)
  {
    // code...
    $this->price=$price;
    $this->hour=$hour;
    $this->placeNumber=$placeNumber;
    $this->artist=$artist;
    if (!is_null($name)) {
      // code...
      $this->name=$name;

    }
  }
  function htmlContent(){
    $displayHTML = "<p>Nom de l'artiste : ".$this->artist. "</p>
    <p>Heure du concert : ".$this->hour.  "</p>
    <p>Numero de place : ".$this->placeNumber. "</p>
    <p>prix de la place : " .$this->price. "</p>";
    if (!is_null($this->name)) {
      $displayHTML = $displayHTML . "<p>Nom de l'artiste : " .$this->name. "</p>";
      // code...
    }
    return $displayHTML;
  }
}
$ticketJul = new Ticket (30,"20h50",3299,"JUL","Samy");
echo ($ticketJul->htmlContent());
