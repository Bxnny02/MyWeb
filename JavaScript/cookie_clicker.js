var cookies = 0;
var Click = 1;

var autoclickupg = 0;
var ClickIntensityCosts = 10;
var AutoClickCosts = 10;
var CookiePack

function getCookie() {
    cookies += Click;
    document.getElementById("cookie").innerHTML = cookies;
}


setInterval(function AutoClickInt() {
    cookies = cookies + autoclickupg;
    document.getElementById("cookie").innerHTML = cookies;
}, 2000);


function ClickIntensity() {
    if (cookies < ClickIntensityCosts){
        alert("Du hast nicht genug Cookies!");
    }
    else {
        cookies -= ClickIntensityCosts;
        document.getElementById("cookie").innerHTML = cookies; 
        Click +=1;
        ClickIntensityCosts *=2;
        document.getElementById("ClickIntensityCosts").innerHTML = ClickIntensityCosts + " Cookies";
    }
}

function AutoClick() {
    if (cookies < AutoClickCosts){
        alert("Du hast nicht genug Cookies!");
    }
    else {
    cookies -= AutoClickCosts;
    autoclickupg = autoclickupg +10;
    AutoClickCosts = AutoClickCosts * 2;
    document.getElementById("AutoClickCosts").innerHTML = AutoClickCosts + " Cookies";
    document.getElementById("cookie").innerHTML = cookies;
    console.log("Costs: " + AutoClickCosts);
    }
}

/* Work in progress :)
function CookiePack() {
    if (cookies < CookiePackCosts){
        alert("Du hast nicht genug Cookies!");
    }
    else {
        cookies -=CookiePackCosts;
        AutoClickCosts = AutoClickCosts * 3;


    }
}

*/