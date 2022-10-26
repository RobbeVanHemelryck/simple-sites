/*function weggegaan(shizzle){
    var ok = document.getElementById("search").value;
    if(ok=="") document.getElementById("search").value = "Geef je zoektermen in";
    else zoek(shizzle);
}
function verwijder(input){
    input.value="";
}
function zoek(input){
    var data = document.getElementsByClassName("tags");
    var content = document.getElementsByClassName("content");
    var gevondenItems = [];
    var tellerItems = 0;
    for(var i = 0; i < data.length; i++){
        var str = data[i].innerHTML;
        var deftigstr = str.toLowerCase();
        if(deftigstr.search(input.value) != -1){
            gevondenItems[tellerItems] = i;
            tellerItems++;
        }
    }
    for(var i = 0; i < gevondenItems.length; i++){
        console.log(gevondenItems[i]);
    }

    for(var i = 0; i < gevondenItems.length; i++){
        
        document.getElementById("images").style.display = "none";
        var img = new Image();
        var div = document.getElementById('wrapper');
        div.appendChild(img);
        console.log(content[gevondenItems[i]].src);
        img.src = content[gevondenItems[i]].src;
        img.className += "content";
    }
}

function test(tag){
    console.log(document.getElementById(tag));
    document.getElementById(tag).style.display = "none";
}*/
function weggegaan(shizzle){
    document.getElementById("search").style.borderBottomColor = "white";
    var alles = document.getElementsByClassName("volImg");
    var ok = document.getElementById("search").value;
    if(ok==""){
        document.getElementById("search").value = "Zoeken";
        for(var i = 0; i < alles.length; i++){
            alles[i].style.display = "block"
        }
    }
    else zoek(shizzle, alles);
}
function verwijder(input){
    if(input.value == "Zoeken") input.value="";
    document.getElementById("search").style.borderBottomColor = "lightgrey";
}
function zoek(input, alles){
    var data = document.getElementsByClassName("tags");
    input = input.value.toLowerCase();
    for(var i = 0; i < alles.length; i++){
        alles[i].style.display = "block"
    }
    var gevondenItems = [];
    var tellerItems = 0;
    for(var i = 0; i < data.length; i++){
        var str = data[i].innerHTML;
        var deftigstr = str.toLowerCase();
        if(deftigstr.search(input) != -1){
            gevondenItems[tellerItems] = i;
            tellerItems++;
        }
    }
    for(var i = 0; i < gevondenItems.length; i++){
        console.log(gevondenItems[i]);
    }
    
    
    for(var i = 0; i < alles.length; i++){
        var checkycheck = false;
        for(var j = 0; j < gevondenItems.length; j++){
            if(i == gevondenItems[j]) checkycheck = true;
        }
        if (checkycheck == false){
            alles[i].style.display = "none";
        }
    }
}

var huidigeOverlay;
function zoomout(){
    var overlay = document.getElementById(huidigeOverlay);
    overlay.style.display = "none";
    document.body.style.overflow = "visible";
}
function zoomin(welk){
    huidigeOverlay = welk;
    var overlay = document.getElementById(welk);
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
}
