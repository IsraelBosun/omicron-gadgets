var allImages = document.querySelectorAll(".other-images div .secondary-images");
var mainImage = document.getElementsByClassName("main-image");

// allHoverImages.forEach((image) =>{
//     image.addEventListener('mouseover', () =>{
//         mainImage.querySelector("img").src = image.src; resetActiveImg();
//     });
// });

var  majorImage = document.getElementById("major-image")
var otherImages = document.getElementsByClassName("secondary-images");

otherImages[0].onmousemove = function (){
    majorImage.src = otherImages[0].src;
}
otherImages[1].onmousemove = function (){
    majorImage.src = otherImages[1].src;
}
otherImages[2].onmousemove = function (){
    majorImage.src = otherImages[2].src;
}
otherImages[3].onmousemove = function (){
    majorImage.src = otherImages[3].src;
}
otherImages[4].onmousemove = function (){
    majorImage.src = otherImages[4].src;
}
var testing = function (){
    majorImage.src = otherImages[5].src;
}
otherImages[5].onmousemove = testing










