var currentImage = 1;
var numberOfImages = 4;

function openImage(event) {
   var gallery = document.getElementsByClassName("gallery")[0];
   gallery.innerHTML = "";
   const target = event.target;
   const image = document.createElement("img");
   var name = target.id;
   image.src = "img/" + name + ".jpg";
   gallery.appendChild(image);
}

function openImageByNumber(num) {
   var gallery = document.getElementsByClassName("gallery")[0];
   gallery.innerHTML = "";
   const image = document.createElement("img");
   image.src = "img/" + "original" + num + ".jpg";
   gallery.appendChild(image);
}


function showImage(event) {
   if (event.key == "ArrowRight") {
	currentImage++;
	if (currentImage > numberOfImages) {
	currentImage = 1;
	}
   }

   if (event.key == "ArrowLeft") {
	currentImage--;
	if (currentImage < 1) {
	currentImage = numberOfImages;
   	}
   }

   openImageByNumber(currentImage);

}

function init() {
   const images = document.querySelectorAll(".thumb > img");
   for (let image of images) {
      image.addEventListener("click", openImage);
   }
}

//document.addEventListener("keypress", showImage);
window.addEventListener('keydown', showImage);
window.addEventListener("load", init);