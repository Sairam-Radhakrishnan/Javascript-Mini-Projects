const button = document.getElementById("button");
const label = document.getElementById("label");

let randomno;
max = parseInt(prompt("Enter Max Number"))
Number(max)

min = parseInt(prompt("Enter Min Number"))
Number(min)
button.onclick = function(){
   
   randomno =  Math.floor(Math.random() * max ) + min;
   label.textContent= randomno;
}

