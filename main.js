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
let shopItemsData = [{
    id: "first",
    name: "ZHIYUN SMOOTH-X",
    price: 45000,
    desc: "Experience the extra life",
    img: "index-images/smx-banner-detail-img1en.png"
},
{
    id: "second",
    name: "DJI OSMO",
    price: 50000,
    desc: "Experience the extra life",
    img: "index-images/o2.png"
},
{
    id: "third",
    name: "ZHIYUN WEEBILL-S",
    price: 60000,
    desc: "Experience the extra life",
    img: "index-images/03.png"
},
{
    id: "forth",
    name: "DJI RONIN-SC",
    price: 70000,
    desc: "Explore Your Xtra Life",
    img: "index-images/04.png"
}];


let basket =JSON.parse(localStorage.getItem("data")) || []


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
              <h4># ${price}</h4>
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
 
  localStorage.setItem("data", JSON.stringify(basket));
  // console.log(basket);
  update(selectedItem.id);
}
let decrement = (id)=>{
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);

  if(search.item === 0) return;
   else{
    search.item -=1;
  }
 
  localStorage.setItem("data", JSON.stringify(basket));
  // console.log(basket);
  update(selectedItem.id);
}
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