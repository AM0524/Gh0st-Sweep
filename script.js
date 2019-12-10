
function makeOpaque(el){
	el.classList.add("opaque");
}

function resetAll(){
	document.location.reload("true");
}

function changePicture(el) {
	el.src = "image/transparent_shy.png";
	document.getElementById("boolaugh").play();
	
	
}