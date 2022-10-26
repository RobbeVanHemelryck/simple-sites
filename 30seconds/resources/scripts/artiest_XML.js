// JavaScript Document
/*jshint browser: true */

var xhr;
var urlArtists = "../resources/xml/artists.xml";
var zoomed = false;

function randomList(limit) {  //Deze geeft een array[limit] met random waarden van 0 tot limit-1
    "use strict";
    var order = [], random, found;
    
    
    while (order.length < limit) {
       
        random = Math.ceil(Math.random() * limit - 1);
         
        found = false;
        
        for (var i=0;i<order.length;i++){
            if(order[i]==random){
                found=true;
                break
            }
        }
        
        if(!found){
            order[order.length]=random;
        }
    }
    return order;
}

function parseData(data) { //MAIN HTTP VULLING
    "use strict";
    var artistList = data.getElementsByTagName("artist"), order = randomList(artistList.length);
			
    for(var i = 0; i < artistList.length; i ++){
			addArtist(artistList[order[i]], i);
    }
}

function handleLoad(event) {
    "use strict";
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.response);

            var data = xhr.responseXML;
            parseData(data);
            document.getElementById("loading").style.visibility="hidden";

        } else {
            console.error(xhr.statusText);
			document.getElementById("loading").style.visibility="hidden";
			/*Maak error message:*/
            
            var wrapper  = document.getElementById("wrapper");
            var errorBox = document.createElement("div");
            errorBox.className = "error";
            errorBox.id = "error";
            var errorText = document.createElement("p");
            errorText.className = "errorText";
            errorText.id = "errorText";
            var errorMessage = document.createTextNode("An error has occured while loading the gallery: (" + xhr.statusText + ")");
            wrapper.appendChild(errorBox);
            errorBox.appendChild(errorText);
            errorText.appendChild(errorMessage);
        }
    }
}

function handleError(event) { 
    console.error(xhr.statusText);
    
}

function init(event) {
    "use strict";
    xhr = new XMLHttpRequest();
    xhr.open("GET", urlArtists, true);
    xhr.addEventListener("load", handleLoad);
    xhr.addEventListener("error", handleError);
    xhr.send(null);
}

window.addEventListener("load", init);


function artistClicked(artist, boxId){ //Dit gebeurt wanneer img geclicked

	
	
	var popup = document.getElementById("popup");
	
	
	popup.addEventListener("click", function () {
		popup.style.visibility = "hidden";
		zoomed = false;
	});
	
	
	if(!zoomed){
		
		var temp = popup.hasChildNodes();
		while(popup.firstChild)
        {
		popup.removeChild(popup.firstChild);
	   }
			
		
		
		
        var img = document.createElement("img"); //IMG TO ADD
      img.src = artist.getElementsByTagName("imgpad")[0].childNodes[0].nodeValue;
      img.className = "popupImg";
      
        var descriptionText = document.createTextNode(artist.getElementsByTagName("artistdesc")[0].childNodes[0].nodeValue);
        
	   var description = document.createElement("p");
        description.appendChild(descriptionText);
      description.className = "popupDesc";
      
      //naam, artist, desc, bron = wiki
      
	   var naam = document.createElement("h4");    
        naam.textContent = artist.getElementsByTagName("fullname")[0].childNodes[0].nodeValue;
        naam.className="popupNaam";
      
      var artistText = document.createTextNode(artist.getElementsByTagName("code")[0].childNodes[0].nodeValue); //DESCRIPTION TO ADD
	   var artist = document.createElement("p");    
      naam.className = "artist";
      naam.appendChild(artist);
      

      popup.appendChild(naam);
        popup.appendChild(img);
      popup.appendChild(description);
      
      
      
     // popup.style.display = "block";
        //document.body.style.overflow = "hidden";
         //document.getElementById("wrapper").style.opacity="0.5";
		popup.style.visibility = "visible";
      zoomed = true;
		
	}
	else{
		zoomed = false;
		
		//popup.style.display = "hidden";
        //document.body.style.overflow = "visible";
        //document.getElementById("wrapper").style.opacity="1";
		
	}
}



function addArtist(artist,j){ //Neemt en painting xml tag en een tellerke voor de ids
	
	 j +=1;
	 
    var box = document.createElement("div"); //BOX
    box.id = 'box' + j;
    box.className = "box";
	
	 if(j%4 == 0 && j != 0){
	 	box.className += " end";
	 } 
	 
	 if((j)%2 == 0 && j != 0 && j%4 != 0 ){
	 	box.className += " end_two";
	 } 
	     

    var img = document.createElement("img"); //IMG TO ADD
    img.src = artist.getElementsByTagName("imgpad")[0].childNodes[0].nodeValue;
    img.id = artist.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    img.className = "content";
    
    var p = document.createElement("p");//p to add
    p.className = "artiest";
    p.textContent = artist.getElementsByTagName("fullname")[0].childNodes[0].nodeValue;
    
    
    var descriptionText = document.createTextNode(artist.getElementsByTagName("artistdesc")[0].childNodes[0].nodeValue); //DESCRIPTION TO ADD
	
	 var description = document.createElement("p");    
    description.className = "desc"; 
    
    
    
    var wrapper = document.getElementById("wrapper"); 
    wrapper.appendChild(box);
    box.appendChild(img);
    //box.appendChild(p);
    
    document.getElementById(img.id).addEventListener("click", function(){
    	artistClicked(artist, box.id);
    	
    });
    
    /*window.addEventListener("click", function(){
        if(zoomed){
		zoomed = false;
		
		popup.style.display = "none";
        document.body.style.overflow = "visible";
        document.getElementById("wrapper").style.opacity="1";
        }
    })*/
     
    //box.appendChild(description);    //Dit voegt de gegenereerde p en text toe
    //description.appendChild(descriptionText);

}