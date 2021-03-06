let job = document.querySelector("#recent-product");
let load = document.querySelector(".load");
load.addEventListener("click",loadmore);
let counter = 8;
let i=0;
function productfunc(){
    let request = new XMLHttpRequest();
    request.onreadystatechange=function(){
            if(this.readyState===4 && this.status===200){
            var productObject=JSON.parse(this.responseText);
            loadProduct(productObject);
            }
        };

    request.open("GET", "https://raw.githubusercontent.com/ajani-m1704425/ajani-omo-oloye/main/Shoes'%20way.json",true);
    request.send();
}


function loadmore(){
    let request = new XMLHttpRequest();
    request.onreadystatechange=function(){
            if(this.readyState===4 && this.status===200){
            var productObject=JSON.parse(this.responseText);
            loadmoreProduct(productObject);
            }
        };

    request.open("GET", "https://raw.githubusercontent.com/ajani-m1704425/ajani-omo-oloye/main/Shoes'%20way.json",true);
    request.send();
}


function loadProduct(obj){
    for(i;i<counter;i++){
        let productText= "<div class='product-inside-container-v2'>" +
                            "<div class='product-img-container'><img src='" + obj.productimage[i] + "' class='product-img-v2'></div>" +
            "<h3 class='product-name-v2'>" + obj.productname[i] + "</h3><hr class='change'><p class='flex-box instock'> <span>In Stock</span> <span class='product-number'>" +
            obj.inStock[i] + "</span></p><hr class='change'>" +
            "<div class='flex-box market'><span class='fa fa-cart-plus icon-hover1'></span><span class='fa fa-cc-mastercard icon-hover'></span><span class='fa fa-cc-paypal icon-hover'></span></div></div>";
        job.insertAdjacentHTML("beforeend", productText);
    }
}

function loadmoreProduct(obj){
    for(i; i<counter+8;i++){
        if(i==obj.lengths){
            break;
        }
        else{
            let productText= "<div class='product-inside-container-v2'>" +
                            "<div class='product-img-container'><img src='" + obj.productimage[i] + "' class='product-img-v2'></div>" +
            "<h3 class='product-name-v2'>" + obj.productname[i] + "</h3><hr class='change'><p class='flex-box instock'> <span>In Stock</span> <span class='product-number'>" +
            obj.inStock[i] + "</span></p><hr class='change'>" +
            "<div class='flex-box market'><span class='fa fa-cart-plus icon-hover1'></span><span class='fa fa-cc-mastercard icon-hover'></span><span class='fa fa-cc-paypal icon-hover'></span></div></div>";
        job.insertAdjacentHTML("beforeend", productText);
        }
    }
    counter=counter+i;
}