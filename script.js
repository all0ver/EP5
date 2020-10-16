var inv = ["parówka", "musztarada", "uran", "F16", "bagieta"];

invl = "";

document.body.onload = function () {makeList()};
function makeList () {

    for (i = 0; i < inv.length; i++) {
        invl += inv[i] + "<br>";
    
    }
document.getElementById("invlist").innerHTML = invl;
}