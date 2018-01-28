
const npcNumber = 42;
const eliminateNpcs = 15;

var participantTemplate = '<div onclick="partselect(posuser, posico)" class="row"><div class="col participant answered"><i class="fa fa-icon"/></i> name <br /><span class="status" ></span></div></div>';
var npcs = [
    "3dgy3ddie", 
    "SugarLana", 
    "MonsterDave", 
    "MisterMister",
    "SweetieKatie", 
    "Loverboy02", 
    "ArcadeTyphoon", 
    "HoneyLizzie", 
    "EvilTwin", 
    "CaptainAwesome",
    "MartinMartini", 
    "SinnerAndLovingIt", 
    "OptimusPr1me", 
    "TheJok3r",
    "2hot4u",
    "ModernCasanova", 
    "NakedCowboy", 
    "DragonTamer", 
    "PhoenixMoons", 
    "MySp00nIs2Big",
    "BlueSkype", 
    "CtrlAltDelicious", 
    "Broddicus", 
    "ThaRealness", 
    "Breadquanda", 
    "LittleMermaid", 
    "SleepingBeauty", 
    "SnowBlack", 
    "Sailormoon", 
    "PizzaPizza",
    "BarbieGirl", 
    "ModestMouse", 
    "Ultraviolet", 
    "DancingNancy", 
    "QueenKong",
    "DontBother", 
    "ToastOfTheUndead", 
    "BrosefStalin", 
    "DrinkingTrotsky",
    "Porkchop", 
    "WillyFoo", 
    "Poutine4eva", 
    "BadKarma" ];

var npcIcons = [
    "500px"
    ,"adn"
    ,"amazon"
    ,"android"
    ,"angellist"
    ,"apple"
    ,"bandcamp"
    ,"behance"
    ,"bitbucket"
    ,"bitcoin"
    ,"black-tie"
    ,"bluetooth"
    ,"btc"
    ,"buysellads"
    ,"cc-amex"
    ,"cc-diners-club"
    ,"cc-discover"
    ,"cc-jcb"
    ,"cc-paypal"
    ,"cc-stripe"
    ,"cc-visa"
    ,"chrome"
    ,"codepen"
    ,"codiepie"
    ,"connectdevelop"
    ,"contao"
    ,"css3"
    ,"dashcube"
    ,"delicious"
    ,"deviantart"
    ,"digg"
    ,"dribbble"
    ,"dropbox"
    ,"drupal"
    ,"edge"
    ,"eercast"
    ,"empire"
    ,"envira"
    ,"etsy"
    ,"rocket"
    ,"ship"
    ,"train"
    ,"truck"
];

function partselect(posuser, posicon){
console.log(npcs[posuser], npcIcons[posicon]);
var newtitle = "<i class='fa fa-"+npcIcons[posicon]+"'/></i>" + " " + npcs[posuser] + " " + "Chat History";
document.getElementById("chattitle").innerHTML = newtitle;	
}

var messageTemplate = '<div class="row justify-content-end"><div class="col-8 mymessage"> currentMessage </div></div>';

function sendMessage(){
	var currentMessage;
	currentMessage = document.getElementById("message").value;
	if (currentMessage.length == 0){
		return false;
	}
	var newConvo = messageTemplate.replace("currentMessage", currentMessage);
	document.getElementById("window").innerHTML += newConvo;
	console.log(newConvo);
	
}

window.onload=function()
{
    //for(i = 0; i < eliminateNpcs; i++){   
    //}
	
	
	
	var chat = 15;
	for (i=0; i < chat; i++){
		var position = Math.floor((Math.random() * 42));
		var randomuser = npcs[position];
	
		var position2 = Math.floor((Math.random() * 42));
		var randomicon = npcIcons[position2];
	
		var realparticipant = participantTemplate.replace("icon", randomicon).replace("name", randomuser).replace("posuser", position).replace("posico", position2); 
		document.getElementById("partlist").innerHTML += realparticipant;
	}
	
	console.log(realparticipant);
	
	
};