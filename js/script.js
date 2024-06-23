let user_info =document.querySelector("#user_info")
let user=document.querySelector("#user")
let links2=document.querySelector("#links2")


if (localStorage.getItem("username")){
    links2.remove()
    user_info.style.display="flex"
    user_info.style.margin="20px 5px"
    user.innerHTML=localStorage.getItem("username")
    user.style.cssText="height: 35px display: block; color: white;  min-width: 80px;  border-radius: 7px;  font-size: 18px;     color: rgb(245, 217, 8);margin-left: 20px;  padding: 0px 10px; border: none;margin-top: 5px;"
    logout.style.cssText="height: 35px display: block; color: white;  min-width: 80px;  border-radius: 7px;  font-size:18px;   color: rgb(245, 217, 8);margin-left: 10px;  padding: 0px 10px; border: none;margin-top: 5px;"

}



// / / / / / / // / / / / / / / // / / // / / // / / / / // / / / / // 


let allproducts=document.querySelector(".container_form")
let el;
let products=[

    {
        id:1,
        name_lap:"hp zbook g6 ",
        category:"black , gray , white",
        Price_hp :  "$99",
        url_img : "images/WhatsApp Image 2024-04-25 at 02.43.05_9d5685a5.jpg",
    plus:0
   
    },
    {
        id:2,
        name_lap:"hp zbook g5",
        category:"black,blue,orange ",
        Price_hp :  "$122",
        url_img : "images/nn.jpg",
        plus:0
    },
    {
        id:3,
        name_lap:"hp zbook g4",
        category:"black,white",
        Price_hp :  "$330",
        url_img : "images/pp.jpg",
        plus:0
     },
    {
        id:4,
        name_lap:"hp zbook g3",
        category:"black,red",
        Price_hp :  "$79",
        url_img : "images/qq.jpg",
        plus:0
    },
    {
        id:5,
        name_lap:"ausos 470f 14rg",
        category:"black,white",
        Price_hp :  "$90",
        url_img : "images/tt.jpg",
        plus:0
    
    },
    {
        id:6,
        name_lap:"dell 708l i7",
        category:"black,gray",
        Price_hp :  "$309",
        url_img : "images/WhatsApp Image 2024-04-25 at 02.43.05_06fd3c3a.jpg"
    
    },
    {
        id:7,
        name_lap:"dell 708l i18",
        category:"black,",
        Price_hp :  "$220",
        url_img : "images/WhatsApp Image 2024-04-25 at 02.43.04_62faf64c.jpg"
    
    },
    {
        id:8,
        name_lap:"dell 708l i5",
        category:"black,red",
        Price_hp :  "$390",
        url_img : "images/WhatsApp Image 2024-04-25 at 02.43.05_06fd3c3a.jpg"
    
    },
    {
        id:9,
        name_lap:"dell 708l i7",
        category:"black,white",
        Price_hp :  "$350",
        url_img : "images/WhatsApp Image 2024-04-25 at 02.43.04_2d9ec1ea.jpg"
    
    }
   
    

]
let x=""


function drawitems (){
    
products.map((item) =>{

    let x=  `<div class="products_item">
       <div class="div_img"> <img src="${item.url_img}" alt="laptops" width="280px"  height ="280px"></div>
        <div class="products_item_disc">
         <h3>${item.name_lap}</h3>
          <h4>${item.category}</h4>
      <span>${item.Price_hp}</span>
    </div>
    
    
    <div class="products_item_action">
    <button class="add-to-cart" onclick = "addtocart(${item.id},this)  " >buy that</button>
    <i class="far fa-heart"></i>
    </div>
    </div> 
   `    
   allproducts.innerHTML += x;

    })  


  


 }

 
   
drawitems()



//  / / / / / / / / // / / / / /  // / / / / /  / //  / / / /  /  
let badge =document.querySelector(".badge")

let carts_products=document.querySelector(".carts-products ")
let shopping_cart_icon=document.querySelector(".shopping-cart ")

let add_to_cart=document.querySelector(".add-to-cart")
let cartsproducts_div=document.querySelector(".cartsproducts_div")


let addedItem = localStorage.getItem("partsincaerts")?JSON.parse(localStorage.getItem("partsincaerts")):[];
if(addedItem){
    addedItem.map(item=>{
       
        cartsproducts_div.innerHTML+=`<p>${item.name_lap}</p>`
       
    }) 
   
    badge.style.display="block"
    badge.innerHTML=addedItem.length
}

    if (localStorage.getItem=("username")){
        function addtocart(id,ele){
            let choose=products.find((item)=> item.id ===id);
            choose.plus +=1
           
              
           
cartsproducts_div.innerHTML+=`<p> name =${ choose.name_lap} ,   quantity= ${ choose.plus} ,   price = ${choose.Price_hp} </p>`
          
      
            
           
           
           ele.innerHTML="remove that"
            
            addedItem.push(choose)
            localStorage.setItem("partsincaerts",JSON.stringify(addedItem))
           
         
            console.log("partsincaerts")
            let cartproducts_lenght =document.querySelectorAll(".cartsproducts_div p");
            badge.innerHTML=cartproducts_lenght.length
            badge.style.display="block"
         }
        
         } else{
            window.location="login in.html"
        
        }
  

//    .....................................................................................

shopping_cart_icon.addEventListener("click", opencart )
function opencart(){
    if(cartsproducts_div.innerHTML !=""){

        if(carts_products.style.display=="block"){
            carts_products.style.display="none" 
        }else{
            carts_products.style.display="block" 
        }
    }
}


// ....................................................................

// function search(){
//     .Value.toLowerCase()
//     let product=document.querySelector(".products_item")
//     for(i=0 ;i<length.name_lap ;i++){
//         if(name_lap[i].innerHTML.toLowerCase().indexOf(searchBar)>=0){

// product[i].style.display=""
//         }
//         else{
//             product[i].style.display="none"
//         }
//     }
// }
  
let searchBar=document.querySelector("#research")

let searchMood= "title"
 searchBar.placeholder= "Search By Title"

function getSearchMood(id){
 
    if(id=="searchByTitle"){
        searchMood= "title"
        searchBar.placeholder= "Search By Title"
    }else{
        searchMood= "category"
        searchBar.placeholder= "Search By category"
    }
    searchBar.focus()
    
}

function searchData(value){
   
   console.log(value)
    if(searchMood=="title"){


        for (let item = 0; item< products.length; item++){
           if (products[item].name_lap.includes(value)){
          
    
            x+=  `<div class="products_item">
            <div class="div_img"> <img src="${products[item].url_img}" alt="laptops" width="280px"  height ="280px"></div>
             <div class="products_item_disc">
              <h3>${products[item].name_lap}</h3>
               <h4>${products[item].category}</h4>
           <span>${products[item].Price_hp}</span>
         </div>
         
         
         <div class="products_item_action">
         <button class="add-to-cart" onclick = "addtocart(${products[item].id},this)  " >buy that</button>
         <i class="far fa-heart"></i>
         </div>
         </div> 
        `    
        allproducts.innerHTML = x;
            
    
           }
           
           
        }
         
            
        }
    else{
        for (let item = 0; item< products.length; item++){
            if (products[item].category.includes(value)){
           
     
             x+=  `<div class="products_item">
             <div class="div_img"> <img src="${products[item].url_img}" alt="laptops" width="280px"  height ="280px"></div>
              <div class="products_item_disc">
               <h3>${products[item].name_lap}</h3>
                <h4>${products[item].category}</h4>
            <span>${products[item].Price_hp}</span>
          </div>
          
          
          <div class="products_item_action">
          <button class="add-to-cart" onclick = "addtocart(${products[item].id},this)  " >buy that</button>
          <i class="far fa-heart"></i>
          </div>
          </div> 
         `    
         allproducts.innerHTML = x;
             
     
            }
            
        }
    }
}