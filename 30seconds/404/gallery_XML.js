// JavaScript Document
/*jshint browser: true */
var xhr;

var urlPaintings = "../resources/xml/art.xml";
window.addEventListener("load", init);

function init(event) {
    xhr = new XMLHttpRequest();
    xhr.open("GET", urlPaintings, true);
    xhr.addEventListener("load", handleLoad);
    xhr.addEventListener("error", handleError);
    xhr.send(null);
}

function handleLoad(event) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.response);

            var data = xhr.responseXML;
            parseData(data);

        } else {
            console.error(xhr.statusText);
        }
    }
}

function handleError(event) {
    console.error(xhr.statusText);
    
}


function addArt(art){
	
	
	 var box = document.createElement("div"); //BOX
    //box.id = 'box';
    box.className = "box";
    
    var contentBox = document.createElement("div"); //INNERCONTENT
    //contentBox.id = 'content';
    contentBox.className = "content";
    
    var img = document.createElement("img"); //IMG TO ADD
    img.src = art.getElementsByTagName("url")[0].childNodes[0].nodeValue;
    //img.id = 'galleryImg';
    img.className = "galleryImg";
    
    var description = document.createTextNode(art.getElementsByTagName("desc")[0].childNodes[0].nodeValue;); //DESCRIPTION TO ADD
    description.className = "description";
   
    
    
    var wrapper = document.getElementById("wrapper"); 
    wrapper.appendChild(box);
    box.appendChild(contentBox);
    contentBox.appendChild(img);
    contentBox.appendChild(description);

}



function parseData(data){
		var artList = data.getElementsByTagName("painting");
		
		addArt(artList[0]);


}






