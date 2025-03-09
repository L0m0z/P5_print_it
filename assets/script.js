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

const buttonG = document.querySelector(".arrow-left");
const buttonD = document.querySelector(".arrow-right");
const imageItem = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelector(".dots");
let indexSlides = 0;
const baseUrlImage = "./assets/images/slideshow/";

function main() {
    createDots();
    updateContentSlide();
    buttonG.addEventListener("click", prevSlide);
    buttonD.addEventListener("click", nextSlide);
}

main();

function createDots() {
    for (let i = 0; i < slides.length; i++) {
        let div = document.createElement("div");
        div.classList.add("dot");
        if (i === indexSlides) div.classList.add("dot_selected");
        dots.appendChild(div);
    }
}

function setActiveDot() {
    document.querySelector(".dot_selected").classList.remove("dot_selected");
    dots.children[indexSlides].classList.add("dot_selected");
}

function prevSlide() {
    indexSlides = (indexSlides === 0) ? slides.length - 1 : indexSlides - 1;
    updateContentSlide();
    setActiveDot();
}

function nextSlide() {
    indexSlides = (indexSlides === slides.length - 1) ? 0 : indexSlides + 1;
    updateContentSlide();
    setActiveDot();
}

function updateContentSlide() {
    imageItem.src = baseUrlImage + slides[indexSlides].image;
    tagLine.innerHTML = slides[indexSlides].tagLine;
    console.log("Image:", imageItem.src);
}