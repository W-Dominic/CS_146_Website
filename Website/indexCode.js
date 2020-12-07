function rotation(){
	var i1 = document.getElementById("pic1");
	var i2 = document.getElementById("pic2");
	var i3 = document.getElementById("pic3");
	var i4 = document.getElementById("pic4");
	if(i1.style.display === "block"){
		i1.style.display = "none";
		i2.style.display = "block";
		i3.style.display = "none";
		i4.style.display = "none";
	}else if (i2.style.display === "block") {
		i1.style.display = "none";
		i2.style.display = "none";
		i3.style.display = "block";
		i4.style.display = "none";
	}else if (i3.style.display === "block") {
		i1.style.display = "none";
		i2.style.display = "none";
		i3.style.display = "none";
		i4.style.display = "block";
	}else{
		i1.style.display = "block";
		i2.style.display = "none";
		i3.style.display = "none";
		i4.style.display = "none";
	}
}