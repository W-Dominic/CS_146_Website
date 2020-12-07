var menu = document.querySelector(".collapsible");
var content = document.querySelector(".content");
var vis = true;

function collapse(){
	if (vis == false){
	content.style.display = "block";
	vis = true;
	}
	else if (vis == true){
	content.style.display = "none";
	vis = false;
	}
}
menu.onclick = collapse;
