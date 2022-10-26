var aantalParagrafen = 1;
var welkeParagraaf = 1;
var welkeWeergave = 1;
var welkeKleur = 0;
var gedraaid = false;
function changeView(input){
    if(input == 1){
        welkeWeergave = 1;
        console.log("Weergave: " + welkeWeergave);   
        document.getElementById("weergaveCSS").href = "/resources/css/aantalkeer/grafiek.css";
        zoek();
    }
    if(input == 2){
        welkeWeergave = 2;
        console.log("Weergave: " + welkeWeergave);      
        document.getElementById("weergaveCSS").href = "/resources/css/aantalkeer/staaf.css";
        zoek();
    }
    if(input == 3){
        welkeWeergave = 3;
        console.log("Weergave: " + welkeWeergave);
        document.getElementById("weergaveCSS").href = "/resources/css/aantalkeer/cirkel.css";
        zoek();
    }
}
function zoek(){
    gedraaid = false;
    //-------------------------------------------ALLES VAN TEZOEKEN---------------------------
    document.getElementById("statistieken").innerHTML = "";
    var tezoeken = document.getElementById("tezoeken").value.toLowerCase();
    var temp = tezoeken.split(" ");
    var temp2 = [];
    var teZoeken = [];
    var teller = 0;
    //meerdere spaties filteren
    for(var i = 0; i < temp.length; i++){
        if(temp[i] != ""){
            temp2[teller] = temp[i];
            teller++;
        }
    }  
    
    //meerdere keren dezelfde teZoeken filteren
    for(var i = 0; i < temp2.length; i++){
        var voorgekomen = false;
        for(var j = 0; j < teZoeken.length; j++){
            if(temp2[i] == teZoeken[j])voorgekomen = true;
        }
        if(voorgekomen == false) teZoeken.push(temp2[i]);
    }
    
    //punten en komma's eruit filteren
    for(var i = 0; i < teZoeken.length; i++){
        if(teZoeken[i][0] == ',' || teZoeken[i][0] == '.'){
            teZoeken[i] = teZoeken[i].substring(1, teZoeken[i].length);
        }
        if(teZoeken[i][teZoeken[i].length-1] == ',' || teZoeken[i][teZoeken[i].length-1] == '.'){
            teZoeken[i] = teZoeken[i].substring(0, teZoeken[i].length-1);
        }
    }
    
    //-----------------------------------------ALLES VAN SOURCE---------------------------------
    
    var aantal = new Array(aantalParagrafen);
    for(var i = 0; i < aantal.length; i++){
        aantal[i] = new Array(teZoeken.length);
    }
    
    
    var titel = [];
    var tempSrc = [];
    var tempSrc2 = [];
    var tellerSrc = [];
    var source = new Array(aantalParagrafen);
    
    //sources instellen
    for(var g = 0; g < aantalParagrafen; g++){
        tempSrc = document.getElementsByClassName("zoeksrc")[g].value.toLowerCase();
        titel[g] = document.getElementsByClassName("zoektitel")[g].value;
        tempSrc2[g] = tempSrc.split(" ");
        tellerSrc[g] = 0;
        
        //meerdere spaties filteren
        var temptemp = [];
        for(var i = 0; i < tempSrc2[g].length; i++){
            if(tempSrc2[g][i] != "") {
                temptemp[tellerSrc[g]] = tempSrc2[g][i]; 
                tellerSrc[g]++;
            }
        }  
        
        //souce instellen
        source[g] = new Array(tellerSrc[g]);
        for(var i = 0; i < temptemp.length; i++){
            source[g][i] = temptemp[i];
        }
        //punten en komma's filteren
        for(var i = 0; i < source[g].length; i++){
            if(source[g][i][0] == ',' || source[g][i][0] == '.'){
                source[g][i] = source[g][i].substring(1, source[g][i].length);
            }
            if(source[g][i][source[g][i].length-1] == ',' || source[g][i][source[g][i].length-1] == '.'){
                source[g][i] = source[g][i].substring(0, source[g][i].length-1);
            }
        }
        
    }
    //aantal verschijningen bepalen
    for(var g = 0; g < aantalParagrafen; g++){
        var gevonden;
        var doorgaan;
        for(var x = 0; x < teZoeken.length; x++){
            aantal[g][x] = 0;
            for(var i = 0; i < source[g].length; i++){
                if(source[g][i] == teZoeken[x]){
                    aantal[g][x]++;
                }
            }
        }
    }
    addResults(aantal, teZoeken, titel);
}
function addResults(aantal, teZoeken, titel){
    for(var x = 0; x < aantalParagrafen; x++){
        welkeKleur = 0;
        var z = document.createElement("div");
        z.className = "legitGeheel";
        document.getElementById("statistieken").appendChild(z);
        
        var y = document.createElement("div");
        y.className = "paragraafNaam";
        y.innerHTML = titel[x];
        document.getElementsByClassName("legitGeheel")[x].appendChild(y);
        
        var totaalAantal =0;
        for(var i = 0; i < aantal[x].length; i++){
            totaalAantal += aantal[x][i];
        }
        if(welkeWeergave == 1){
            for(var i = 0; i < 6; i++){
                var addYas = document.createElement("div");
                addYas.className = "Yas";
                addYas.innerHTML = 20*i + "%";
                document.getElementsByClassName("legitGeheel")[x].appendChild(addYas);
                document.getElementsByClassName("legitGeheel")[x].getElementsByClassName("Yas")[i].style.top = 100 - 20*i + "%";
                if(i != 0){
                    document.getElementsByClassName("legitGeheel")[x].getElementsByClassName("Yas")[i].style.borderTop = "1px solid black";
                }
            }
        }
        
        for(var i = 0; i < teZoeken.length; i++){
            var g = document.createElement("div");
            g.className = "geheel";
            g.innerHTML = "<div class=\"grafiekCont\"><div class=\"grafiek\"><div class=\"aantal\"></div></div></div><canvas class=\"canvas\"></canvas><div class=\"zoekterm\"></div>";
            document.getElementsByClassName("legitGeheel")[x].appendChild(g);
            if(welkeWeergave == 1) geefweerGrafiek(x, i, g, aantal, totaalAantal, teZoeken);
            if(welkeWeergave == 2) geefweerBalk(x, i, g, aantal, totaalAantal, teZoeken);
            if(welkeWeergave == 3) geefweerBalk(x, i, g, aantal, totaalAantal, teZoeken);
        }
    }
}
function geefweerBalk(x, i, g, aantal, totaalAantal, teZoeken){
    console.log(document.getElementById("weergaveCSS").href);
    window.getComputedStyle(g).height;
    window.getComputedStyle(g).paddingTop;
    window.getComputedStyle(g).opacity;
    console.log(aantal[x][i]);
    var hoogte = (aantal[x][i]/totaalAantal)*100;
    console.log(hoogte);
    var legitGeheel = document.getElementsByClassName("legitGeheel")[x];
    if(hoogte < 13 || isNaN(hoogte)){
        legitGeheel.getElementsByClassName("aantal")[i].style.top = "-35px";
        legitGeheel.getElementsByClassName("aantal")[i].style.color = "black";
    }
    else{
        legitGeheel.getElementsByClassName("aantal")[i].style.paddingTop = "10px";
    }
    legitGeheel.getElementsByClassName("aantal")[i].innerHTML = aantal[x][i];
    legitGeheel.getElementsByClassName("grafiek")[i].style.height = hoogte + "%";
    legitGeheel.getElementsByClassName("aantal")[i].style.opacity = 1;
    legitGeheel.getElementsByClassName("zoekterm")[i].style.opacity = 1;
    legitGeheel.getElementsByClassName("zoekterm")[i].innerHTML = teZoeken[i].toUpperCase();
}

function geefweerGrafiek(x, i, g, aantal, totaalAantal, teZoeken){
    //alle initialisatieshit
    welkeKleur++;
    if(welkeKleur == 7) welkeKleur = 0;
    window.getComputedStyle(g).height;
    window.getComputedStyle(g).opacity;
    window.getComputedStyle(g).width;
    window.getComputedStyle(g).marginLeft;
    window.getComputedStyle(g).opacity;
    
    //simplified var's
    var legitGeheel = document.getElementsByClassName("legitGeheel")[x];
    var aantal2 = legitGeheel.getElementsByClassName("aantal")[i];
    var grafiek = legitGeheel.getElementsByClassName("grafiek")[i];
    var zoekterm = legitGeheel.getElementsByClassName("zoekterm")[i];
    var geheel = legitGeheel.getElementsByClassName("geheel")[i]; 
    var hoogte = (aantal[x][i]/totaalAantal)*100;
    
    //kleur aantal bepalen
    if(hoogte < 13 || isNaN(hoogte)){
        aantal2.style.top = "-35px";
        aantal2.style.color = "black";
    }
    else aantal2.style.paddingTop = "10px";
    
    //kleur grafiek bepalen
    switch(welkeKleur){
        case 0: grafiek.style.backgroundColor = "#ff2929"; break;
        case 1: grafiek.style.backgroundColor = "#ff9f2c"; break;
        case 2: grafiek.style.backgroundColor = "#ffed12"; break;
        case 3: grafiek.style.backgroundColor = "#59ff22"; break;
        case 4: grafiek.style.backgroundColor = "#1dd4ff"; break;
        case 5: grafiek.style.backgroundColor = "#3131ff"; break;
        case 6: grafiek.style.backgroundColor = "#e31fff"; break;
    }
    
    //grafiek css bepalen
    grafiek.style.height = hoogte + "%";
    grafiek.style.width = "calc((50vw / " + teZoeken.length + ") - (" + 100/teZoeken.length + "px))";
    grafiek.style.marginLeft = "calc(-0.5*((50vw / " + teZoeken.length + ") - (" + 100/teZoeken.length + "px))";

    //aantal css bepalen
    aantal2.style.width = "calc((50vw / " + teZoeken.length + ") - (" + 100/teZoeken.length + "px))";
    aantal2.style.marginLeft = "calc(-0.5*((50vw / " + teZoeken.length + ") - (" + 100/teZoeken.length + "px))";
    aantal2.innerHTML = aantal[x][i];
    aantal2.style.opacity = 1;
    
    //overige css bepalen
    geheel.style.width = "calc((50vw - 3px) / " + teZoeken.length + ")";
    legitGeheel.style.marginTop = "100px";
    
    //zoekterm css bepalen
    zoekterm.innerHTML = teZoeken[i].toUpperCase(); 
    
        //checken of het gedraaid moet zijn of niet
        var vw = $(window).width() / 100;
        document.getElementsByClassName("canvas")[i].innerHTML = teZoeken[i].toUpperCase();
        var zoektermWidth = document.getElementsByClassName("canvas")[i].getContext("2d").measureText(teZoeken[i].toUpperCase()).width;
        var grafiekWidth = (50 * vw) / teZoeken.length - 100/teZoeken.length;
        if(zoektermWidth > grafiekWidth - 5){
            gedraaid = true;
        }
    
        //css toepassen op laatste loop
        if(i == teZoeken.length - 1){
            for(var b = 0; b < teZoeken.length; b++){
                legitGeheel.getElementsByClassName("zoekterm")[b].style.opacity = 1;
                if(gedraaid == true){
                     legitGeheel.getElementsByClassName("zoekterm")[b].style.transform = "rotate(90deg)";
                }
            } 
        }
}


function addParagraaf(){
    aantalParagrafen++;
    welkeParagraaf++;
    var x = document.createElement("div");
    x.className = "paragraaf";
    x.setAttribute("id", "paragraaf" + welkeParagraaf);
    x.innerHTML = "<br><br><textarea class=\"zoektitel\">Titel " + welkeParagraaf + "</textarea><a id=\"kruisje" + welkeParagraaf + "\" class=\"sluit\" onclick=\"delParagraaf(this)\">X</a><textarea class=\"zoeksrc\"></textarea>"
    document.getElementById("paragrafen").appendChild(x);
}
function delParagraaf(input){
    var temp = input.id;
    var welke = temp.substring(7,8);
    var paragraaf = document.getElementById("paragraaf" + welke);
    var paragrafen = document.getElementById("paragrafen");
    console.log("Temp: " + temp);
    console.log("Welke: " + welke);
    console.log(paragraaf);
    document.getElementById("paragrafen").removeChild(paragraaf);
    aantalParagrafen--;
}










/*$(document).ready(function() {
    $('.click').each(function() {
        var $this = $(this);
        var $tr = $this.closest('tr');
        // Do stuff with $tr like checking it, extracting $tr.attr('id') ...
        $this.editable('updatedb.php', {
            indicator : "",
            tooltip : "Click to edit...",
            onblur : 'submit',
            style : "inherit"
        });
    });
});*/
