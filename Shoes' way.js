let search = document.querySelector("#search");
let searchInput = document.querySelector('#searchInput');
let removeSearch = document.querySelector('.phone-remove');
let navContainer = document.querySelector('.container-4-nav');
let inputs = document.querySelector('#searchInput input');
let desktopSearch = document.querySelector('.desktop-search');
let phoneNav = document.querySelector('.container-4-nav-phone');
let brands = document.querySelector(".outer .brand-main .brand");


search.addEventListener("click", displaySearch);
removeSearch.addEventListener('click',removeInput);
desktopSearch.addEventListener('click',inputFocus);


function displaySearch(){
    searchInput.style.display="block";
    search.style.display="none";
    inputs.focus();   
}

function removeInput(){
    if(window.outerWidth>=566){
        searchInput.style.display="block";
        removeSearch.style.display='none';
        desktopSearch.style.display='inline-block';
    }else{
        search.style.display="block";
        searchInput.style.display="none"; 
    } 
    
}

function resizer(){
    if(window.outerWidth>=566){
        searchInput.style.display="block";
        search.style.display="none";  
    }
}

function inputFocus(){
    inputs.focus();
    desktopSearch.style.display='none';
    removeSearch.style.display='inline-block';
}


function addNav(){
    phoneNav.style.visibility='visible';
    phoneNav.style.left="0";
    phoneNav.style.position="fixed";
}


function removeNav(){
    phoneNav.style.left="-1500px";
    phoneNav.style.position="absolute";
    phoneNav.style.visibility='hidden';
}

function brandexpand(){
    if (brands.style.display==="none"){
        brands.style.display="block";
        document.querySelector('.fa-caret-right').style.display="none";
        document.querySelector('.fa-caret-down').style.display="inline-block";        
    }else{
        brands.style.display='none';
        document.querySelector('.fa-caret-right').style.display="inline-block";
        document.querySelector('.fa-caret-down').style.display="none";
    }
}