function openImage(event) {
   const gallery = document.getElementsByClassName("gallery")[0];
   gallery.innerHTML = "";
   const target = event.target;
   const image = document.createElement("img");
   var name = target.id;
   image.src = "img/" + name + ".jpg";
   gallery.appendChild(image);
}

function init() {
   const images = document.querySelectorAll(".thumb > img");
   for (let image of images) {
      image.addEventListener("click", openImage);
   }
}

window.addEventListener("load", init);