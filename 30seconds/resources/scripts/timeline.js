function popup(source){
    document.getElementById("popup").style.visibility = "visible";
    document.body.style.overflowY = "hidden";
    console.log(source);
    document.getElementById("groteImg").src = source;
}
function test(){
    document.body.style.overflowY = "scroll";
    document.getElementById("popup").style.visibility = "hidden";
}
var expanded = false;
function toonTijdlijn(){
    if(expanded == false){
        expanded = true;
        document.getElementById("tijdlijnMini").style.left="0";
        document.getElementById("witteLinkerkantMini").style.left="0";
        document.getElementById("expandCont").style.left="calc(80px + 10vw)"; document.getElementById("expand").src="..//resources/images/expand_timeline_reversed.png";
    }
    else{
        expanded = false;
        document.getElementById("tijdlijnMini").style.left="calc(-50px - 50vw)";
        document.getElementById("witteLinkerkantMini").style.left="calc(-50px - 50vw)";
        document.getElementById("expandCont").style.left="0"; document.getElementById("expand").src="..//resources/images/expand_timeline.png";
    } 
}
function scrollSmoothly(input){
    $('html, body').animate({
        scrollTop: $( $(input).attr('href') ).offset().top
    }, 500);
    return false;
}
function vergroot1(input){
    if($(window).width() < 751){
        console.log("klein");
        var x = $(input).find("afbeelding");
        var source = x.find("img").attr('src');
        popup(source);
    }
}
function vergroot2(input){
    var source = $(input).find('img').attr('src');
    popup(source);
}