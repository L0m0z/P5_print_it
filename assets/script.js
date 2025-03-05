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

document.addEventListener("DOMContentLoaded", function () {
    // Vérifier si les flèches existent dans le DOM
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");

    console.log("Flèche gauche :", arrowLeft);
    console.log("Flèche droite :", arrowRight);

    // Vérifier leur position
    if (arrowLeft) {
        console.log("Position gauche:", arrowLeft.getBoundingClientRect());
    }
    if (arrowRight) {
        console.log("Position droite:", arrowRight.getBoundingClientRect());
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");

    if (arrowRight) {
        // Vérifie si la flèche est bien visible à l'écran
        if (arrowRight.getBoundingClientRect().x < 0) {
            console.log("⚠️ Flèche droite hors écran ! Ajustement...");
            arrowRight.style.right = "10px"; // Essaie de forcer une valeur visible
        }
    }
});
