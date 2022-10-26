var btn = document.getElementById("verzendknopje");

btn.addEventListener("click", 
function (){
    var vn = document.getElementById("txtVoornaam");
    var an = document.getElementById("txtAchternaam");
    var em = document.getElementById("txtEmail");
    
    var voornaam = vn.value;
    var achternaam = an.value;
    var email = em.value;

    if(voornaam != "" && achternaam != "" && email != "") {
        localStorage.setItem("voornaam", voornaam);
        localStorage.setItem("achternaam", achternaam);
        localStorage.setItem("email", email);
    }
});

window.addEventListener("load", function()
{   
    var voornaam = localStorage.getItem("voornaam");
    var achternaam = localStorage.getItem("achternaam");
    var email = localStorage.getItem("email");
    
    if(isCorrectValue(voornaam) && isCorrectValue(achternaam) && isCorrectValue(email))
    {
        var vn = document.getElementById("txtVoornaam");
        var an = document.getElementById("txtAchternaam");
        var em = document.getElementById("txtEmail");
 
        vn.value = voornaam;
        an.value = achternaam;
        em.value = email;
    }
});
    
function isCorrectValue(str){
    return str != "" && str != null && str != "undefined";
}
