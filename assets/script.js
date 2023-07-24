const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const arrowLeft = document.getElementsByClassName('arrow_left')[0];
const arrowRight = document.getElementsByClassName('arrow_right')[0];
const indicatorParents = document.querySelector('.dots');




const images = slides.map(slides => slides.image);
// console.log(images)

const tagLine = slides.map(slides => slides.tagLine)
// console.log(tagLine)

let i = 0;

function changeSlide(sens) {
	i = i + sens;
	if (i < 0) {
		i = images.length - 1;
	}
	if (i > images.length - 1) {
		i = 0;
	}


	document.querySelector('.dots .dot_selected').classList.remove('dot_selected');
	indicatorParents.children[i].classList.add('dot_selected');


	document.getElementsByClassName('banner-img')[0].src = `./assets/images/slideshow/${images[i]}`;
	document.querySelector('#banner p').innerHTML = `${tagLine[i]}`;


}

for (i = 0; i < images.length; i++) {
	let dot = document.createElement('div');
	indicatorParents.appendChild(dot).classList.add('dot');
	indicatorParents.children[0].classList.add('dot_selected');
}




arrowLeft.addEventListener('click', function () {
	// console.log("click gauche !")
	changeSlide(-1);

});


arrowRight.addEventListener('click', function () {
	// console.log("click droit !")
	changeSlide(1);

});
