function updatetime(){
    const now = new Date();
    let hour = now.getHours();
    const meridem = hour > 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    hour.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const timestr = `${hour}:${minutes}:${sec} ${meridem}  `;
    document.getElementById("clock").textContent = timestr
}
updatetime();
setInterval(updatetime,1000);