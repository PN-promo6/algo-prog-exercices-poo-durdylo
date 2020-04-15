class Playground {
    public static void main(String[ ] args) {
        Book newBook = new Book ("Naruto", 10);
        System.out.println(newBook.bookTitle + " " + newBook.bookPrice + "€");
    }
}



class Book {

public String bookTitle;
public int bookPrice;

public Book(String bookTitle, int bookPrice ) {

  this.bookTitle = bookTitle;
  this.bookPrice = bookPrice;
  }
}
