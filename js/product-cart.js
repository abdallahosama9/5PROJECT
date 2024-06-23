let user_info =document.querySelector("#user_info")
let user=document.querySelector("#user")
let logout=document.querySelector("#logout")
let links2=document.querySelector("#links2")
let section_products =document.querySelector(".section-products")

if (localStorage.getItem("username")){
    links2.remove()
    user_info.style.display="flex"
    user_info.style.margin="20px 5px"
    user.innerHTML=localStorage.getItem("username")
    user.style.cssText="height: 35px display: block; color: white; min-width: 120px;  border-radius: 7px;  font-size: 18px;    color: rgb(245, 217, 8);  padding: 0px 10px;  border: none; margin:0px 4px; "
    logout.style.cssText="height: 35px display: block; color: white;  min-width: 120px;  border-radius: 7px;  font-size: 18px;   color: rgb(245, 217, 8);   padding: 0px 20px;  border: none; margin:0px 4px; "
}



// ................................................................................................
let allproducts=document.querySelector(".container_form_products")
let no_products=document.querySelector(".no_products")
let productincart =localStorage.getItem("partsincaerts")

let products=[];
let items ;



if(productincart){
   items= JSON.parse(productincart)
    drawproductincart(items)
    Remove_carts(id)
  
}else{
   no_products.style.display="block"
}

function drawproductincart(products){
    
    products.map((item) =>{
    
            let x =    `<div class="products_item">
           <div class="div_img"> <img src="${item.url_img}" alt="laptops" width="280px"  height ="280px"></div>
            <div class="products_item_disc">
             <h3>${item.name_lap}</h3>
              <h4>${item.category}</h4>
          <span>${item.Price_hp}</span>
        </div>
        
        
        <div class="products_item_action">
        <button class="add-to-cart" onclick = "Remove_carts(${item.id}) " >Remove that</button>
       
        </div>
        </div> 
       `    
       allproducts.innerHTML += x;
        })
     
      
    }

    function Remove_carts(id){
       
        items=items.filter((item)=>item.id!==id);
   
        localStorage.setItem("productincart",JSON.stringify(items))
        allproducts.innerHTML="";
        drawproductincart(items)
    }
   