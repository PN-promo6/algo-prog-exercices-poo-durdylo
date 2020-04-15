<?php
// Créez une classe représentant un client d’une banque avec :
// - un constructeur
// - un attribut privé pour le nom
// - un attribut privé pour le numero de compte en banque
// - une méthode pour connaître le numero de compte en banque
//
// Dans un algorithme, créez une instance de cette classe et afficher le numéro de compte en banque d’un client.

/**
 *
 */
class CustomerBank
{
  private $name;
  private $accountBank;

  function __construct($name, $accountBank)
  {
    $this->name = $name;
    $this->accountBank = $accountBank;
  }
  function getAccountBank()
  {
    return $this->accountBank;
  }
  function getName()
  {
    return $this->name;
  }
  function setName($name)
  {
    $this->name = $name;
  }
}
$customer = new CustomerBank("Matt", 324324);
$customer->setName("Matt Jackson");

//echo $customer->getAccountBank();
echo $customer->getName();
