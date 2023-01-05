var d = new Date();
var day = d.getDay();
var monthNum = d.getMonth();
var btnPress = document.querySelector(".btnSave");

var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "Arpil", "May", "June", "July", "August", "September", "October", "November", "December"];

var currentTime = document.getElementById("currentTime");

currentTime.textContent = weekDay[day] + ", " + month[monthNum] + " " + d.getDate();

btnPress.addEventListener('click', saveTask);

function saveTask() {
    console.log("hello");
}