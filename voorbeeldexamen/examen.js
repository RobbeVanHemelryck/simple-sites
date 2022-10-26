var x;
function valueWeg(input){
    x = input.value;
    input.value = "";
}
function valueTerug(input){
    if(input.value == " ") input.value = x;
}
function verzend(){
    var alles = document.getElementById("form");
    if (justeDate(alles) && allesIngevuld(alles)){
        alles.submit();
    }
}
function allesIngevuld(alles){
    for(var i = 0; i < 7; i++){
        if(i == 0 || i == 1 ||i == 2 || i == 6){
           if(alles.elements[i].value == ""){
               window.alert("Please enter your " +alles.elements[i].name);
               return false;
            } 
        }
    }
    return true;
}
function justeDate(alles){
    var datum = alles.elements[4].value;
    if(datum.length != 10){
        alert("I am an alert box!");
        return false;
    }
    else{
        for(var i = 0; i < 10; i++){
            if(i!=2 && i != 5){
                if(isNaN(datum[i])){
                    console.log("WTFFFFFFFFFF");
                    return false;
                }
                console.log(i + ", " + datum[i]);
            }
        }
    }
    return true;
}

