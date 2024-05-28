var ul = document.getElementById("list");
var input = document.getElementById("input");


function add(){
    var listitem = document.createElement("li");
    listitem.innerHTML = input.value + "<button onclick='del()'>Delete</button>";
    ul.append(listitem);
   
}
ul.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
})