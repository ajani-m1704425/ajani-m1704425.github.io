let productContainer = document.querySelector(".product-container");
document.querySelector("body").addEventListener("load",productCat);
function productCat(){
    let request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
        var productObj=JSON.parse(this.responseText);
        addProduct(productObj);
        };
    };
    request.open("GET", "https://raw.githubusercontent.com/ajani-m1704425/ajani-m1704425.github.io/main/product%20file.json",true);
    request.send();    
}


function addProduct(product){
    for(let i=1;i<product.lengths;i++){
        let text = "<div class='product-inside-container'>" +
                    "<hr class='product-hr'><div class='hover-hr-container'>"
                    "<hr class='hover-hr'></div><img src=" + product.catImage[i]+ " alt='men' class='product-img'>"
                    + "<h3 class='product-name'>" + product.catName[i] +"</h3></div>";
        productContainer.insertAdjacentHTML("beforeend",text);
    };
}