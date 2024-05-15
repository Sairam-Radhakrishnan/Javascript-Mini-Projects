
let randomno = Math.floor(Math.random()*10)+1
let totalAttempts = 0;
b = document.getElementById("button").onclick = function(){
   a = parseInt(document.getElementById("input").value)
   if(randomno==a){
      document.getElementById("p").textContent = `You Got the number  `
      window.alert("Won The Game!!")
   
   }
   else{
      document.getElementById("p").textContent = `Wrong Number Try again! `
      totalAttempts++;

      document.getElementById("Attempts").textContent = "Attempts " + totalAttempts;

      

   }

}

