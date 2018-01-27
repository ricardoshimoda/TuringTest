//declare globals to hold all buttons

var button;
var info;

window.onload = function() {
	button = document.getElementById("submit");
	info = document.getElementById("user");
	button.addEventListener("click", submitButton);
}

function submitButton() {
	var txt = info.value;
	var sln = txt.length;
	if (sln < 4 || sln > 8){
		alert("this username is not valid");
		return false;
	}
	
	for (i=0; i < sln; i++){
		var letter = txt.charCodeAt(i);
		console.log(letter);
		if (!((letter > 47 && letter < 58)||(letter > 64 && letter < 91)||(letter > 96 && letter < 123))){
			alert("this username is garbage");
			return false;
		}
	}
		
	console.log(info.value);
	return false;
	//respond to submit click
}