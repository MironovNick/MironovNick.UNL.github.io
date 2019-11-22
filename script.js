
var slideIndex = 0;

next_slide();

function next_slide(){
	var i;
	var slides = document.getElementsByClassName("slider_img");
	
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	
	slides[slideIndex].style.display = "block";
	slideIndex++;
		
	if (slideIndex  >= slides.length){
		slideIndex = 0;
	}

}