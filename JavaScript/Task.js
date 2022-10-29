//Task1.Eded polindorumdusa "YES" eks halda "NO".
let number=1221,son;
let number1=parseInt(number/1000);
let number2=parseInt(number/100)%10;
let number3=parseInt(number/10)%10;
let number4=number%10;
son=number4*1000+number3*100+number2*10+number1;

if(number==son){
    console.log("YES")
}else{
    console.log("NO")
}
//Task3.3 ededin max ve minimumun ededi ortasi
let num1=12,num2=6,num3=24,max,min;

if(num1>=num2&&num1>=num3){
    max=num1
}else if(num2>=num1&&num2>=num3){
    max=num2
}else{
    max=num3
}console.log("max=",max)

if(num1<num2&&num1<num3){
    min=num1
}else if(num2<num1&&num2<num3){
    min=num2
}else{
    min=num3
}console.log("min=",min)
console.log("Average=",(max+min)/2)