function dagen(){
    var data = document.getElementById("form");
    var dag1 = data.elements[0].value;
    var maand1 = data.elements[1].value;
    var jaar1 = data.elements[2].value;
    var dag2 = data.elements[3].value;
    var maand2 = data.elements[4].value;
    var jaar2 = data.elements[5].value;
    
    var welkeDag = dag1-1;
    var welkeMaand = maand1;
    var welkJaar = jaar1;
    var AD = 0;
    while (welkJaar != jaar2 || welkeMaand != maand2 || welkeDag != dag2) {
		AD++;
		welkeDag++;
		if ((welkeMaand == 1 || welkeMaand == 3 || welkeMaand == 5 || welkeMaand == 7 || welkeMaand == 8 || welkeMaand == 10 || welkeMaand == 12) && welkeDag == 32) {
			welkeDag = 1;
			welkeMaand++;
			if (welkeMaand == 13) {
				welkJaar++;
				welkeMaand = 1;
			}
		}
		if (welkeMaand == 2 || welkeMaand == 4 || welkeMaand == 6 || welkeMaand == 9 || welkeMaand == 11){
			if (welkeMaand == 2) {
				if ((welkJaar % 4 != 0 || welkJaar % 100 == 0) && welkeDag == 29) {
					welkeDag = 1;
					welkeMaand++;
				}
				else if (welkJaar % 4 == 0 && welkeDag == 30) {
					welkeDag = 1;
					welkeMaand++;
				}
				
			}
			else if (welkeDag == 31) {
				welkeDag = 1;
				welkeMaand++;
			}
		}
        var x = document.createElement("xd");
        
		if (jaar2 - jaar1 < 40) {
            x.innerHTML = welkeDag + "/" + welkeMaand + "/" + welkJaar + " ";
            document.getElementById("wrapper").appendChild(x);
        }
    }
    var y = document.createElement("p");
    y.innerHTML = "Het aantal tussenliggende dagen is: " + (AD-1);
    document.getElementById("wrapper").appendChild(y);
}
