<?php
/**
 *
 */
class Human
{
  public $name;
  public $firstName;
  public $birthDate;
  function __construct($name,$firstName,$birthDate=NULL){
    $this->name=$name;
    $this->firstName=$firstName;
    $this->birthDate=$birthDate;
  }
  function sayHello(){
    if ($this->birthDate!=NULL) {
      // code...
      echo ("Hello I'm " . $this->name . " " . $this->firstName)." My birth date ". $this->birthDate;

    }else {
      // code...
      echo ("Hello I'm " . $this->name . " " . $this->firstName);

    }
  }
}
$naruto = new Human ("Uzumacki","Naruto","october 10th");
$sasuke = new Human ("Uchiwa","Sasuke");
$naruto->sayHello();
$sasuke->sayHello();


 ?>
