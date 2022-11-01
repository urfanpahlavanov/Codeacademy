using System;
namespace app{
internal class Program1
{
  
    private static void Main(string[] args)
    {
        //Task1.massivin en kicik ve boyuk elementlerindem basqa qalan elementlerin cemi
int[] arr={12,4,25,6,2,2,3,2,8};
int max=arr[0],min=arr[1],sum=0;
for(int i=0;i<arr.Length;i++){
    if(max<arr[i]){
        max=arr[i];
    }if(min>arr[i]){
      min=arr[i];
    }
}
for(int i=0;i<arr.Length;i++){
    if(max!=arr[i]&&min!=arr[i]){
        sum+=arr[i];
    }
}Console.WriteLine("Sum="+sum);

//Task2.n sayda tam ededden ibaret massiv verilir ,cut yerde olan elementler.

int[] mas={2,3,5,7,6,8,3,9};
 
for(int i=0;i<mas.Length;i++){
    if(i%2==0){
         
        Console.WriteLine("even-indexed elements="+mas[i]);
        mas[i]=mas[i]+4;
        Console.WriteLine("to get 4 0n top of even indexed elements="+mas[i]);
    }
   
}
//Task3.Max ile min ferqi
int[] pyatacok={5,4,5,6,3,4,2,8};
int maxsimum=pyatacok[0],minimum=pyatacok[1],force;
int index;
for( index=0;index<pyatacok.Length;index++){
    if(maxsimum<pyatacok[index]){
        maxsimum=pyatacok[index];
    }if(minimum>pyatacok[index]){
      minimum=pyatacok[index];
    }
}force=maxsimum-minimum;
Console.WriteLine("force="+force);

    }
}
}