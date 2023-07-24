const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let arrow_left = document.getElementsByClassName('arrow_left')[0];
let arrow_right = document.getElementsByClassName('arrow_right')[0];
let indicatorParents = document.querySelector('.dots');




const images = slides.map(slides => slides.image);
console.log(images)

const tagLine = slides.map(slides => slides.tagLine)
console.log(tagLine);

let i = 0;

function ChangeSlide(sens) {
	 	i = i + sens;
	 	if (i < 0) {
			i = images.length - 1;
	 	}
	 	if (i > images.length -1) {
	 		i = 0;
	 	}

		 if (i < 0) {
			i = tagLine.length - 1;
	 	}
	 	if (i > tagLine.length -1) {
	 		i = 0;
	 	}
		
		
	
	 	document.getElementsByClassName('banner-img')[0].src = `./assets/images/slideshow/${images[i]}`;
		document.querySelector('#banner p').innerHTML= `${tagLine[i]}`;

	 }




arrow_left.addEventListener('click', function () {
	// console.log("click gauche !")
	ChangeSlide(-1);
	document.querySelector('.dots .dot_selected').classList.remove('dot_selected');
	indicatorParents.children[i].classList.add('dot_selected');

	
});


arrow_right.addEventListener('click', function () {
	// console.log("click droit !")
	ChangeSlide(1);
	document.querySelector('.dots .dot_selected').classList.remove('dot_selected');
	indicatorParents.children[i].classList.add('dot_selected');
	

});
