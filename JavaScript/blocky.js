var cookies = 0;
var autoclickupg = 0;
var costs = 10;

function getCookie(){
    cookies +=1;
    document.getElementById("cookie").innerHTML = cookies;
}

setInterval(function(){
    cookies = cookies + autoclickupg;
    document.getElementById("cookie").innerHTML = cookies;
}, 3000);

function autoclick(){
    if (cookies < costs){
        alert("You don´t have enough cookies!");
    }
    else {
    cookies -= costs;
    autoclickupg = autoclickupg +10;
    costs = costs * 3;
    document.getElementById("costs").innerHTML = costs + "Cookies";
    console.log("Costs: " + costs);
    }
}
