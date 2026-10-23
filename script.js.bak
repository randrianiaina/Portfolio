var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        document.getElementById("info2").innerHTML = "Saisir un email valide";
    } else {
        document.getElementById("info2").hidden;
    }

    var tel = document.getElementById("tel").value;
    if (
        tel.length == 10 &&
        (tel.startsWith("032") ||
            tel.startsWith("034") ||
            tel.startsWith("033") ||
            tel.startsWith("038") ||
            tel.startsWith("039"))
    ) {
        document.getElementById("info").hidden;
    } else {
        document.getElementById("info").innerHTML =
            "Saisir un numéro valide à madagascar";
    }
});
