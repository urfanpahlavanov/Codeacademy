// Task1.Verilmis telebeler siyahisinda adi E ile baslayan telebelerin sayini qaytaran proqram
const students=["Togrul","Kamal","Elcin","Sona","Emil","Dadas","Elcan"];
let count=0;

for(let i=0;i<students.length;i++){
     
    if(students[i][0]=='E'){

    console.log(students[i]);
    count++;
    }

}console.log("count= ",count);

//Task2.Verilmis telebeler siyahisinda adinin uzunlugu 5 den boyuk olan telebelerin siyahisini qaytaran proqram

const student=["Vadim","Elsever","Murad","Ismayil","Qehreman"];
let count1=0;
for(let i=0;i<student.length;i++){

    if(student[i].length>5){

        console.log("Whose name length is greater than two",student[i]);
        count1++;
    }

}console.log("Count1: ",count1);
//Task3.Kakolyator.

  let multiplication,addition,division,subtraction,num1=15,num2=5,choice=2;
  multiplication=num1*num2;
  addition=num1+num2;
  division=num1/num2;
  subtraction=num1-num2;

  switch(choice){
    case 1:
        console.log("Multiplication= ",multiplication);
        break;
    case 2:
        console.log("Addition= ",addition);
        break;

    case 3:
        console.log("Division= ",division);
        break;
    case 4:
        console.log("Subraction= ",subtraction);
    default:
        console.log("The choice is inorrect");
  }
//Task4.Sorting (Azalan sira)

let array = [1,4,5,3,6,2];
for(let i=0;i<array.length;i++){
    for(let j=0; j<array.length-i-1;j++){
        if(array[j]<array[j+1]){
            var temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}
console.log(array);