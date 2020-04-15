class Playground {
    public static void main(String[ ] args) {
        ConcertTicket museConcert = new ConcertTicket (100, "2198", "10.10", "Samy", "Jul");
        ConcertTicket redHotConcert = new ConcertTicket (99, "3218", "18.02", "Léa", "Skillet");
        System.out.println(museConcert.concertDetails());
        System.out.println(redHotConcert.concertDetails());
    }
}

class ConcertTicket {
      public int price ;
      public String placeNumber ;
      public String date ;
      public String customer ;
      public String artistName="";

    public ConcertTicket (int price, String placeNumber,  String date , String customer){
        this.price = price;
        this.placeNumber = placeNumber;
        this.date = date;   
        this.customer = customer;
        }
        
    public ConcertTicket (int price, String placeNumber,  String date , String customer,String artistName){
        this.price = price;
        this.placeNumber = placeNumber;
        this.date = date;   
        this.customer = customer;
        this.artistName = artistName;
        }
            
    public String concertDetails(){
         String concertVar = "<p>Price: "+ this.price + "</p> <p>Place number:"+ this.placeNumber + "</p> <p>Date du concert: " + this.date + "</p> <p>Customer name: "+ this.customer + "</p>";
             
        if(this.artistName !=""){
            
         concertVar = concertVar + "<p> Nom de l'artiste :" + this.artistName + "</p>" ;  
        }
        return concertVar;
    }

}