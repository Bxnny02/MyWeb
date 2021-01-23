console.log("Rechnen aufgerufen");

function rechnen() {
    var z1 = parseInt(document.getElementById("wert1").value);
    //console.log("Wert 1= ", z1);
    var z2 = parseInt(document.getElementById("wert2").value);
   // console.log("Wert 2= ", z2);
    
    /* var op = document.getElementsByName("op").value;
    console.log("Operation: ", op); */

    var addieren = document.getElementById("add").checked;
    //console.log("Addieren: ", addieren);

    var subtrahieren = document.getElementById("min").checked;
    //console.log("Subtrahieren: ", subtrahieren);

    var multiplizieren = document.getElementById("multi").checked;
    //console.log("Multiplizieren: ", multipilzieren);

    var dividieren = document.getElementById("div").checked;
    //console.log("Dividieren: ", dividieren);

    //Überprüfen, ob Zahl1 und Zahl2 != 0 sind
    
    if (isNaN(z1)){
        window.alert("Zahl 1 vergessen");
    }

    if(isNaN(z2)){
        window.alert("Zahl 2 vergessen");
    }
    
    if(((isNaN(z1)) | (isNaN(z2))) == false){
    
        if  (addieren == true){
                ergebnis = z1 + z2;
                console.log("Ergebnis =", ergebnis);
        }  

        if (subtrahieren == true){
                ergebnis = z1 - z2;
                console.log("Ergebnis =", ergebnis);
        }

        if (multiplizieren == true){
                ergebnis = z1 * z2;
                console.log("Ergebnis =", ergebnis);
        }

        if (dividieren == true){
                if (z2 == 0){
                    window.alert("Du Schlawiener weißt genau, dass Division durch 0 unzulässig ist!");
                }

                else{
                    ergebnis = z1 / z2;
                    console.log("Ergebnis =", ergebnis);
                }
        }

    document.getElementById("ergebnis").value = ergebnis;
    }
        
    /* if ((addieren | subtrahieren | multiplizieren | dividieren) == false){
        window.alert("Operation fehlt!");
        ergebnis="";
    } */

    //updates 15:23

}
