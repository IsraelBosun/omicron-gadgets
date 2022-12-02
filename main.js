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
}]
let generateShop = ()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, price, desc, img } = x
        return `
        <div id= product-id-${id} class="item col-lg-3 col-xl-2 col-md-4 col-sm-5 col-xs-1">
            <div class="mt-3 details">
              <p class="zhi">${name}</p>
              <p class="explore mt-0">${desc}</p>
            </div>
            <div class="image-div">
            <img class="imagery" width="150" src="${img}" alt="">
            </div>
            <div class="mt-2 price-quantity">
              <h4># ${price}</h4>
              <div class="buttons">
                <i id="decrease" class="signature bi bi-dash-lg"></i>
                <div class="quantity">0</div>
                <i id="increase" class="signature bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        `
    }).join(""));
};

generateShop()