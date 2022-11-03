using System;
namespace homework5{
internal class Program1
{
  
    private static void Main()
    {

// Task1.Verilmis telebeler siyahisinda adi E ile baslayan telebelerin sayini qaytaran proqram
string[] students={"Togrul","Kamal","Elcin","Sona","Emil","Dadas","Elcan"};
int count=0;

for(int i=0;i<students.Length;i++){
     
    if(students[i][0]=='E'){

    Console.WriteLine(students[i]);
    count++;
    }

}Console.WriteLine("count= "+count);

//Task2.Verilmis telebeler siyahisinda adinin uzunlugu 5 den boyuk olan telebelerin siyahisini qaytaran proqram

string [] student={"Vadim","Elsever","Murad","Ismayil","Qehreman"};
int count1=0;
for(int i=0;i<student.Length;i++){

    if(student[i].Length>5){
       count1++;
        Console.WriteLine("Whose name length is greater than two="+student[i]);
    }

}Console.WriteLine("Count1= "+count1);
//Task3.Kakolyator.

  int multiplication,addition,division,subtraction;
  Console.Write("num1: ");
  int num1 = (int)Convert.ToInt32(Console.ReadLine());
  Console.Write("num2: ");
  int num2 = (int)Convert.ToInt32(Console.ReadLine());
  Console.Write("choice (1->x, 2->+, 3->/, 4-> -): ");
  int choice = (int)Convert.ToInt32(Console.ReadLine());
  multiplication=num1*num2;
  addition=num1+num2;
  division=num1/num2;
  subtraction=num1-num2;

  switch(choice){
    case 1:
        Console.WriteLine("Multiplication= "+multiplication);
        break;
    case 2:
        Console.WriteLine("Addition= "+addition);
        break;

    case 3:
        Console.WriteLine("Division= "+division);
        break;
    case 4:
        Console.WriteLine("Subtraction= "+subtraction);
        break;
    default:
        Console.WriteLine("The choice is inorrect");
        break;
  }


//Task4.Sorting (Azalan sira)
int[] array = {1,4,5,3,6,2};
for(int i=0;i<array.Length;i++){
    for(int j=0; j<array.Length-i-1;j++){
        if(array[j]<array[j+1]){
            var temp = array[j+1];
            array[j+1] = array[j];
            array[j] = temp;
        }
    }
}
foreach(var item in array){
    Console.WriteLine('');
    Console.Write(item);
}

    }
}
}
