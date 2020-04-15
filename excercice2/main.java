class Playground {
    public static void main(String[ ] args) {
      Furniture wassily = new Furniture ("Marcel Breuer","Knoll", 1925);
      wassily.year = 1926;
      System.out.println(wassily.editor+ " " + wassily.name+ " " + wassily.year);
    }
}


class Furniture {

  public String editor;
  public String name;
  public int year ;


  public Furniture(String editor,String name,int year) {

    this.editor = editor;
    this.name = name;
    this.year = year;
  }
}
