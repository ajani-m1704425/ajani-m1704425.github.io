let job = document.querySelector("#recent-product");
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

function loadProduct(obj){
    for(let i=0;i<obj.lengths;i++){
        let productText= "<div class='product-inside-container-v2'>" +
                            "<div class='product-img-container'><img src='" + obj.productimage[i] + "' class='product-img-v2'></div>" +
            "<h3 class='product-name-v2'>" + obj.productname[i] + "</h3><hr class='change'><p class='flex-box instock'> <span>In Stock</span> <span class='product-number'>" +
            obj.inStock[i] + "</span></p><hr class='change'>" +
            "<div class='flex-box market'><span class='fa fa-cart-plus icon-hover1'></span><span class='fa fa-cc-mastercard icon-hover'></span><span class='fa fa-cc-paypal icon-hover'></span></div></div>";
        job.insertAdjacentHTML("beforeend", productText);
    }
}
