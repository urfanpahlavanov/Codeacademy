//Task1.massivin en kicik ve boyuk elementlerindem basqa qalan elementlerin cemi
let arr=[12,4,25,6,3,2,8];
let max=arr[0],min=arr[1],sum=0;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }if(min>arr[i]){
      min=arr[i];
    }
}
for(let i=0;i<arr.length;i++){
    if(max!=arr[i]&&min!=arr[i]){
        sum+=arr[i];
    }
}
    console.log("sum=",sum);
//Task2.n sayda tam ededden ibaret massiv verilir ,cut yerde olan elementler.

let mas=[2,3,5,7,6,8,3,9];
 
for(let i=0;i<mas.length;i++){
    if(i%2==0){
        
        console.log("even-indexed elements",mas[i])
        console.log("to get 4 0n top of even indexed elements",mas[i]+4)
    }
   
}
//Task3.Max ile min ferqi
let pyatacok=[5,4,5,6,3,4,2,8];
let maxsimum=pyatacok[0],minimum=pyatacok[1],forse;
let index;
for( index=0;index<pyatacok.length;index++){
    if(maxsimum<pyatacok[index]){
        maxsimum=pyatacok[index];
    }if(minimum>pyatacok[index]){
      minimum=pyatacok[index];
    }
}forse=maxsimum-minimum;
console.log("Kleyin gucu=",forse)

