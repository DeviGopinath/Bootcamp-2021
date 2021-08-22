class Olympics 
{
    public String venue;
    public int year;
   
    public Olympics(String venue, int year)
    {
     this.venue = venue;
     this.year = year;
    }
   
    public String toString()
    {
     return ("Venues is " + venue + "\n"
       + "Year is " + year);
    }
}
   
   
   class Javelin extends Olympics 
   {
    public int participants;
   
    public Javelin(String venue, int year,
         int participants)
    {
     super(venue, year); 
     this.participants= participants;
    }
   
    public void changenumberofparticipants(int newValue)
    {
     participants = newValue;
    }
   
    @Override public String toString()
    {
     return (super.toString() + "\nParticipants : "
       + participants);
    }
   }
   
   public class MyClass {
    public static void main(String args[])
    {
   
     Javelin jv = new Javelin("Tokyo", 2021, 25);
     System.out.println(jv.toString());
    }
   }