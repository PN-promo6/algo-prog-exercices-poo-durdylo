<?php
class Furniture{
  public $editor;
  public $year;
  public $designer;

  function __construct($editor,$designer,$year){
    $this->editor = $editor;
    $this->designer = $designer;
    $this->year = $year;

  }
}
$chair = new Furniture("Knoll","Marcel Breuer",1925);
//echo($chair->editor);
//var_dump($chair);
print_r($chair);

 ?>
