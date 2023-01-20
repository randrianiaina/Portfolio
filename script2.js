
var emailInput = document.getElementById("email");


emailInput.addEventListener("blur", function(event) {

    var email = emailInput.value;
    var error = document.getElementById("info2");

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {

        

        error.innerHTML = "Adresse e-mail non valide";
        error.style.backgroundColor = "red";
    } else {

        

        error.innerHTML = "";
    }
});

var telInput = document.getElementById("tel");

telInput.addEventListener("blur", function (event) {
    event.preventDefault();

    
    var tel = telInput.value;
    if (
        tel.length == 10 &&
        (tel.startsWith("032") ||
            tel.startsWith("034") ||
            tel.startsWith("033") ||
            tel.startsWith("038") ||
            tel.startsWith("039"))
    ) {
        document.getElementById("info").innerHTML="";
        document.getElementById("info").style.backgroundColor="red";
    } else {
        document.getElementById("info").innerHTML =
            "Saisir un numéro valide à Madagascar";
    }
});

