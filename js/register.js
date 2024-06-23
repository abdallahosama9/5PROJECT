let username=document.querySelector("#username")
let password=document.querySelector("#password")
let email=document.querySelector("#email")
let register_btn=document.querySelector("#sign-up")

register_btn.addEventListener("click",function(e){

    e.preventDefault()  
    // forpedn refreash page
    if(username.value===""||password.value===""||email.value===""){
alert("please fill data")
    }
    else{
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
        localStorage.setItem("email",email.value);


        setTimeout  (  ()=>  {

window.location="login in.html"

        } ,1500)
    }
})
