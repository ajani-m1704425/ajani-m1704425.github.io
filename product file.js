let productContainer = document.querySelector(".product-container");
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


function addProduct(produ){
    for(let i=0;i<produ.lengths;i++){
        let text = "<div class='product-inside-container'>" +
                    "<hr class='product-hr'><div class='hover-hr-container'>"
                    "<hr class='hover-hr'></div><img src=" + produ.catImage[i]+ " class='product-img'>"
                    + "<h3 class='product-name'>" + produ.catName[i] +"</h3></div>";
        productContainer.insertAdjacentHTML("beforeend",text);
    };
}