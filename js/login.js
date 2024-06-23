let username=document.querySelector("#username")
let password=document.querySelector("#password")
let login_btn=document.querySelector("#sign-in")

let get_username=localStorage.getItem("username")
let get_password=localStorage.getItem("password")


login_btn.addEventListener("click",function(e){
    e.preventDefault()
    
    if(username.value===""||password.value===""){
        alert("please fill data")
    }

    else{

        if(get_username && get_username.trim()===username.value.trim()      &&     get_password && get_password.trim()===password.value){

            setTimeout  (  ()=>  {

                window.location="index.html"
                
                        } ,1500)
        }
      else{
        alert("please , accurate from data")
      }
    }


})