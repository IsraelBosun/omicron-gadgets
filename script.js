var allImages = document.querySelectorAll(".other-images div .secondary-images");
var mainImage = document.getElementById("main-image");

allHoverImages.forEach((image) =>{
    image.addEventListener('mouseover', () =>{
        mainImage.querySelector("img").src = image.src; resetActiveImg();
    });
});