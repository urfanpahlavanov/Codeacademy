
using System;
namespace appp{
internal class Program1
{
  
    private static void Main2(string[] args)
    {
      //Task1.Ededin reqemlerinin en boyuyunu tapan proqram
      int eded=15374,max=0;
      while(eded>0){
        if(eded%10>max){
          max=eded%10;
        }
        eded/=10;
      }Console.WriteLine(max);
     //Task.Verilmis araligdaki cut ededlerin azalan sirada duzulusu
     int num1=12,num2=24,i;
     for(i=num2;i>=num1;i--){
      if(i%2==0){
        Console.Write(" "+i);
     }

      }
      //Task3.Verilmis ededin tek ve cut yerde duran ededlerin hasilini tapmaq

      int number=324512,tekcem=0,cutcem=0,hasil,k,say=0;

      while(number>0){
        k=number%10;
        say++;
        if(say%2==0){
          cutcem+=k;
        }else{
          tekcem+=k;
        }
        number/=10;

      }
      hasil=tekcem*cutcem;
      Console.WriteLine(" cut yerde duran reqemlerin cemi= "+cutcem);
      Console.WriteLine("Tek yerde duran reqemlerin cemi = "+tekcem);
      Console.WriteLine("Tek ve cut yerde duran reqemlerin ceminin hasili= "+hasil);
    }

}
}
