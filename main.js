var hamburger = document.getElementById("hamburger");
var navMenu = document.getElementById("nav-menu");
var newNavMenu = document.getElementById("nav-menux");

var hamNav = function(){
    // hamburger.classList += "active"
    // navMenu.classList += "active"
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    newNavMenu.classList.toggle("active");
};

hamburger.addEventListener("click", hamNav)




console.log(navMenu)
console.log(hamburger)
console.log()

window.onscroll = function(){myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction (){
  if (window.pageYOffset > sticky){
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


let shop = document.getElementById("shop")



let basket =JSON.parse(localStorage.getItem("data")) || [];


let generateShop = ()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, price, desc, img } = x
        let search = basket.find((x) => x.id === id) || []
        return `
        <div id= product-id-${id} class="item col-lg-3 col-xl-2 col-md-4 col-sm-5 col-xs-1">
            <div class="mt-3 details">
              <p class="zhi">${name}</p>
              <p class="explore mt-0">${desc}</p>
            </div>
            <div class="image-div">
            <img class="imagery" src="${img}" alt="">
            </div>
            <div class="mt-2 price-quantity">
              <h5 class ="amount">#${price}</h5>
              <div class="buttons">
                <i onclick="decrement(${id})" class="signature bi bi-dash-lg"></i>
                <div id = ${id} class="quantity">
                ${search.item === undefined? 0: search.item}
                </div>
                <i onclick="increment(${id})" class="signature bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        `
    }).join(""));
};

generateShop();

let increment = (id)=>{
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);

  if(search === undefined){
     basket.push({
    id: selectedItem.id,
    item: 1,
  });
  } else{
    search.item +=1;
  }
 
  
  // console.log(basket);
  update(selectedItem.id);

  localStorage.setItem("data", JSON.stringify(basket));
}
let decrement = (id)=>{
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);

  if (search === undefined) return
  else if(search.item === 0) return;
   else{
    search.item -=1;
  }
 
  update(selectedItem.id);
  basket = basket.filter((r)=> r.item !==0 );
  // console.log(basket);
  

  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id)=>{
  let search =basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation()
};

let calculation =() => {
  let cartIcon = document.querySelector(".cartAmount")
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y,0)
  console.log(basket.map((x) => x.item).reduce((x,y)=>x+y,0))
};

calculation();
































// var details = prompt("do you like this webpage?")

window.onload = function(){
  alert("Hello there, this website is still under construction. kindky tell us how we can make this website better")
}