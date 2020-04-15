<?php
class Book{
  public $name;
  public $price;

  function __construct($name,$price){
    $this->name = $name;
    $this->price = $price;

  }

}
$naruto = new Book("Naruto",10);
print_r($naruto);


 ?>
