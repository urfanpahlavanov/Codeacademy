//Task1.Ededin reqemlerinin maxsimumu
let eded=73,max=0;
while(eded>0){

  if((eded%10)>=max){
      max=eded%10

  }
  eded=parseInt(eded/10)
}
console.log( "edededeki reqemlerin maxsimumu=",max)


//Task2.Verilmis araliqdaki cut ededleri azalan sira ile vermek

let num1=12,num2=40,i;

for(i=num2;i>=num1;i--){
    if(i%2==0){
       
        console.log("",i)
    }
}

//Task3.Verilmis ededin tek ve cut yerde olan reqemlerin ceminin ayriliqda hasili
let num=343694,tekcem=0,cutcem=0,say=0,k,hasil;

while(num>0){
    k=num%10
    say++
    if(say%2==0){
        cutcem+=k
    }else{
        tekcem+=k
    }
  num=parseInt(num/10)
}
hasil=tekcem*cutcem
console.log("tek yerde duranlarin cemi=",tekcem)
console.log("tek yerde duranlarin cemi=",cutcem)
console.log("Hasil=",hasil)


  