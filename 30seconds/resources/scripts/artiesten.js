var huidigeOverlay;
function zoomout(){
    document.getElementById("wrapper").style.opacity="1";
    var overlay = document.getElementById(huidigeOverlay);
    overlay.style.display = "none";
    document.body.style.overflow = "visible";
}
function zoomin(welk){
    document.getElementById("wrapper").style.opacity="0.5";
    huidigeOverlay = welk;
    var overlay = document.getElementById(welk);
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
}