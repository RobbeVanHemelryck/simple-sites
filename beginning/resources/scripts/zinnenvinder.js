function zoek(){
    var source = document.getElementById("zoeksrc").value;
    var teZoeken = document.getElementById("tezoeken").value;
    var opgeslagenLetters = [];
    
    var srcTeller = 0;
	//int* opgeslagenLetters = new int[lengteZoek];
	var gevonden = true;
	for (var i = 0; i < teZoeken.length; i++) {
		while (source[srcTeller] != teZoeken[i]) {
			srcTeller++;
			if (srcTeller >= source.length) {
				gevonden = false;
				break;
			}
		}
		if (gevonden == false) break;
		else {
			if (source[srcTeller] == teZoeken[i]) {
				opgeslagenLetters.push(srcTeller);
			}
		}
		srcTeller++;
	}
	var gevonden2;
	if (gevonden == false) {
		window.alert("Het te zoeken item bevindt zich niet in de bron.");
	}
	else {
		for (var i = 0; i < source.length; i++) {
			gevonden2 = false;
			for (var j = 0; j <teZoeken.length; j++) {
				if (i == opgeslagenLetters[j]) {
					var x = document.createElement("gevonden");
                    x.innerHTML = source[i];
                    document.getElementById("resultP").appendChild(x);
					gevonden2 = true;
				}
			}
			if (gevonden2 == false) {
				var x = document.createElement("nietgevonden");
                x.innerHTML = source[i];
                document.getElementById("resultP").appendChild(x);
			}
		}
	}
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //var x = document.createElement("p");
    //x.innerHTML = src;
    //document.getElementById("resultP").appendChild(x);