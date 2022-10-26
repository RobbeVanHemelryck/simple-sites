// JavaScript Document
/*jshint browser: true */


/*  init():
            -xml opzoeken  -> error :handleError()
            -> load :handleLoad() 
    handleError():
            -> erase loading.gif (id="loading")
            -> add fout message to html document (zie code voor structuur)
    handleLoad(): 
            -if(alles ok): 
                    -> parseData(data)
                    -> erase loading.gif (id="loading")
                                 
    parseData(data):    
            -maak "coordinaten" random: ->randomList();
            -for(alle kunstwerken in xml): -> addArt()

    addArt(art = xml tweede grootste tag (painting)):  
            - Maak aan: <div class box, box end, box end_two<div id contentbox<img id naamschilderij class    galleryImg>>> 
            - voeg clickhandler toe aan IMG -> artClicked()
    
    artClicked(art = xml tweede grootste tag (painting)):   
            -Maak popup leeg!
            -Vul popup met:
                    <!--<div class="image">
                        <img src="../resources/art/davinci-monalisa.jpg">
                    </div>
                      <div class="text">
                                <p class="title">TEST</p>
                                <p class="artist">ARTIEST</p>
                                <p class="desc">DESCRIPTION</p>
                        </div>--> 
            - voeg clickhandler toe aan popup die popup op invisible zet
                    
                    
*/


"use strict";


var xhr;

var urlPaintings = "../resources/xml/art.xml";
var urlArtists = " ../resources/xml/artists.xml";



window.addEventListener("load", init);

var zoomed = false;




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
            //document.getElementById("loading").style.visibility = "hidden";
			document.getElementById("loading").remove();

        } else {
            //document.getElementById("loading").style.visibility = "hidden";
			document.getElementById("loading").remove();
            console.error(xhr.statusText);
            
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

function artClicked(art, boxId){ //Dit gebeurt wanneer img geclicked


	
	var popup = document.getElementById("popup");
	popup.addEventListener("click", function () {
		popup.style.visibility = "hidden";
		zoomed = false;
        $(".footer").fadeIn("600");
	});
	
	var wrapper = document.getElementById("main");
	popup.addEventListener("click", function () {
		popup.style.visibility = "hidden";
		zoomed = false;
	});
	
	
	if (!zoomed) {
		
		//var temp = popup.hasChildNodes();
		while (popup.firstChild) {
		    popup.removeChild(popup.firstChild);
		}
			
		/*<!--<div class="image">
                            <img src="../resources/art/davinci-monalisa.jpg">
                        </div>
              <div class="text">
                            <p class="title">TEST</p>
                            <p class="artist"></p>
                            <p class="desc">123</p>
            	</div>-->
       */
		
		var imgBox = document.createElement("div");
		imgBox.className = "image";
		
		var textBox = document.createElement("div");
		textBox.className = "text";
		
		var img = document.createElement("img"); //IMG TO ADD
        img.src = art.getElementsByTagName("url")[0].childNodes[0].nodeValue;
        img.id = "popupImg";
        img.className = "popupImg";
      
        var descriptionText = document.createTextNode(art.getElementsByTagName("desc")[0].childNodes[0].nodeValue); //DESCRIPTION TO ADD
	    var description = document.createElement("p"); 
        description.className = "desc";
        description.appendChild(descriptionText);
      
      //naam, artist, desc, bron = wiki
      
        var naamText = document.createTextNode(art.getElementsByTagName("name")[0].childNodes[0].nodeValue); //DESCRIPTION TO ADD
	    var naam = document.createElement("p"); 
        naam.className = "title";
        naam.appendChild(naamText);
      
        var artistText = document.createTextNode(art.getElementsByTagName("fullname")[0].childNodes[0].nodeValue); //DESCRIPTION TO ADD
	    var artist = document.createElement("p");
        artist.className = "artist";
        artist.appendChild(artistText);
      
      
        popup.appendChild(imgBox);
        imgBox.appendChild(img);

        popup.appendChild(textBox);
        textBox.appendChild(naam);
        textBox.appendChild(artist);
        textBox.appendChild(description);



        popup.style.visibility = "visible";
        zoomed = true;
        $(".footer").fadeOut("600");
		//document.body.style.overflow = "hidden";
	}
		else {
			zoomed = false;
		  	popup.style.visibility = "hidden";
	}
}



function addArt(art,j){ //Neemt en painting xml tag en een tellerke voor de ids
	
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
    
    
    
    var contentBox = document.createElement("div"); //INNERCONTENT
    //contentBox.id = 'content';
    contentBox.className = "content";
   
    var img = document.createElement("img"); //IMG TO ADD
    img.src = art.getElementsByTagName("thumburl")[0].childNodes[0].nodeValue;
    img.id = art.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    img.className = "galleryImg";
    
    
    //var descriptionText = document.createTextNode(art.getElementsByTagName("desc")[0].childNodes[0].nodeValue); //DESCRIPTION TO ADD
	
	 //var description = document.createElement("p");    
    //description.className = "desc"; 
    
    
    
    var wrapper = document.getElementById("wrapper"); 
    wrapper.appendChild(box);
    box.appendChild(contentBox);
    contentBox.appendChild(img);
    
    document.getElementById(img.id).addEventListener("click", function(){
    	artClicked(art, box.id);
    	
    });
    
     
    //contentBox.appendChild(description);    //Dit voegt de gegenereerde p en text toe
    //description.appendChild(descriptionText);

}

function randomList(limit){  //Deze geeft een array[limit] met random waarden van 0 tot limit-1
    var order = [];
    
    var random;
         
    var found;
    
    while(order.length < limit){
       
        random = Math.ceil(Math.random()*limit-1);
         
        found = false;
        
        for(var i=0;i<order.length;i++){
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




function parseData(data){ //MAIN HTTP VULLING
		var artList = data.getElementsByTagName("painting");
		
		var order = randomList(artList.length);
		
		for(var i = 0; i < artList.length; i ++){
			addArt(artList[order[i]], i);
		}


}






