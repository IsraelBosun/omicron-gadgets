/**
 * ! For  Image alternation
**/
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




/**
 * ! For Description Area
**/
      var containA = document.getElementById("containa")
      var containB = document.getElementById("containb")
      var flexible = document.getElementById("flexible")

      // var onClick = function(){
      //   flexible.textContent = "Loremkklhjgr jtrhjtrhujtrhj rghjgrjrg"
      // }
      // var onClick2 = function(){
      //   flexible.innerHTML = "dkagf;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;irioggggggggggggggggggggggggggggggggggghj"
      // }
      // // containA.addEventListener = ("click", onClick)
      // containA.onclick = onClick
      // containB.onclick = onClick2

      var features = document.getElementById("containa");
      var description = document.getElementById("containb")
      var whatsInTheBox = document.getElementById("containc")
      var beforeYouUse = document.getElementById("containd")
      

      var table = document.getElementById("table")
      var firstParagraph = document.getElementById("first-paragraph")
      var inTheBox = document.getElementById("in-the-box");
      var secondParagraph = document.getElementById("second-paragraph")

      var firstClick = function() {
           table.className = "block";
           firstParagraph.className = "active";
           inTheBox.className = "active";
           secondParagraph.className = "active";
      }
      
      window.addEventListener("DOMContentLoaded", firstClick);
      features.addEventListener("click", firstClick);

      var secondClick = function(){
        firstParagraph.className = "passive";
        table.className = "active";
        inTheBox.className = "active";
        secondParagraph.className = "active";
      }

      description.addEventListener("click", secondClick);

      var thirdClick = function(){
        inTheBox.className = "passive";
        firstParagraph.className = "active";
        table.className = "active";
        secondParagraph.className = "active";
      }
      
      whatsInTheBox.addEventListener("click", thirdClick);

      var forthClick = function(){
        secondParagraph.className = "passive";
        inTheBox.className = "active";
        firstParagraph.className = "active";
        table.className = "active";
      }

      beforeYouUse.addEventListener("click", forthClick)


/**
 * ! For Increment and Decrement
**/

// // var increment = () => {};
// var increment = function (){};
// console.log("increment")
// var decrement = () => {};
// console.log("decrement")
// var update = () => {};
// var solid = document.getElementById("solid")



// var increa = document.getElementById("increase")
//     var decrea = document.getElementById("decrease")
//     var incremented = function(){};
//     var decremented = function(){};
//     increa.addEventListener("click", incremented);
//     decrea.addEventListener("click", "decremented");




    
    var images = ["smooth-images/1.jpg", "smooth-images/2.png", "smooth-images/3.png", "smooth-images/4.jpg", "smooth-images/5.jpg", "smooth-images/6.jpg"];
    var container = document.getElementById("main-image")
    var currentImage = 0;

    var jumboImage = document.getElementById("major-image")
    var next = document.querySelector(".next");
    var prev = document.querySelector(".prev");

//     next.addEventListener("click", nextPhoto);
//     function nextPhoto(){
//       // e.preventDefult()
//       currentImage ++;
//       if(currentImage > images.length -1){
//         currentImage = 0
//       }
//       var hover = document.createElement("img")
//       hover.className = "fadeIn"
//       container.appendChild(hover);
//       hover.src = images[currentImage]
//       if(container.children.length >2){
//         container.removeChild(container.children[0])
//       }
//       console.log(hover)
//       //jumboImage.src = images[currentImage]
//     }

//     prev.addEventListener("click", prevPhoto);
//     function prevPhoto(){
//       currentImage --;
//       if(currentImage < 0){
//         currentImage = images.length - 1
//       }
//       jumboImage.src = images[currentImage]
//     }
    

// console.log(images[4])
// console.log(currentImage)
// console.log(jumboImage)
// console.log(next)

// var name = "israel"
// console.log(name)

next.addEventListener("click", function(e){
  e.preventDefault();
  currentImage ++;
  if (currentImage > (images.length - 1)){
    currentImage = 0;
  }
  var newSlide = document.createElement("img");
  newSlide.src = images[currentImage];
  newSlide.className = "fadeIn";
  container.replaceChild(newSlide, container.childNodes[1]);
  // if (container.children.length > 1){
  //   container.removeChild(container.children[0])
  // }
})

prev.addEventListener("click", function(e){
  e.preventDefault();
  currentImage --;
  if(currentImage < 0){
    currentImage = images.length - 1
  };
  var newSlide = document.createElement("img");
  newSlide.src = images[currentImage];
  newSlide.className = "fadeIn"
  container.replaceChild(newSlide, container.childNodes[1]);
})





