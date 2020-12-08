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

var but = document.querySelector(".submit");
function order66(){
	var comment = document.querySelector("#Comment").value;	
	if (comment === "secret"){
		alert("The password is: #abc123");
	}
	else if (comment === "#abc123"){
		alert("The next password must be deciphered: 99 115 49 52 54");
	}
	else if (comment === "cs146"){
		alert("Nice!, The next password is hidden in one of the images on this site");
	}
	else if (comment === "commonsenseisnotsocommon"){
		alert("Congrats!, You win :D");
	}
	else {
		alert("Your comment was submitted"); 
	}
	location = location;
}

but.onclick=order66;
