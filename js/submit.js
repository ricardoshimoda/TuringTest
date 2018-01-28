//declare globals to hold all buttons

var button;
var info;
var notvalid;

window.onload = function() {
	button = document.getElementById("submit");
	info = document.getElementById("user");
	notvalid = document.getElementById("notvalid");
	button.addEventListener("click", submitButton);
}

function submitButton() {

	notvalid.style.display = 'none';
	var txt = info.value;
	var sln = txt.length;
	if (sln < 6 || sln > 20){
		notvalid.style.display = 'block';
		return false;
	}
	
	for (i=0; i < sln; i++){
		var letter = txt.charCodeAt(i);
		console.log(letter);
		if (!((letter > 47 && letter < 58)||(letter > 64 && letter < 91)||(letter > 96 && letter < 123))){
			notvalid.style.display = 'block';
			return false;
		}
	}
	window.location.replace('chat.html');
}