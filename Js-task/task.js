const body=document.querySelector("body");
const input=document.querySelector("input");
const submit=document.querySelector("button");
const email=document.getElementById("email");
const username=document.getElementById("username");
const name=document.getElementById("name");
const age=document.getElementById("age");
const table=document.querySelector("table");
const tbody=document.createElement("tbody")

table.appendChild(tbody);
submit.addEventListener("click",()=>{
   for(let i=0;i<=6;i++){
    if(name.value.trim()==" "){
        input.style.border="red";
    }else{
        const td=document.createElement("td");
        tbody.appendChild(td);
        td.innerText=name.value;
        name.style.border="1px solid black";
        name.valume==" ";

    }
   }
}
)
