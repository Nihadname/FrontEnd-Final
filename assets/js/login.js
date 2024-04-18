$(document).ready(function(){
    let users=[];
    if(localStorage.getItem("users")!=null){
        users=gettAllUsers();
    }else{
        localStorage.setItem("users",JSON.stringify(users))
    }
    const LoginBtn=$(".Login");
    LoginBtn.on("click",function(){
        const form=$(".signup-form");
       const userNameOrEmail=form.find(".userNameOrEmail");
       const password=form.find(".password");
       const existUser=gettAllUsers().find(m=>m.username==userNameOrEmail.val()||m.email==userNameOrEmail &&m.password==password.val());
       if(existUser!=undefined){
        $.each(users,function(index,user){
            user.isLogin=false;
        })
        existUser.isLogin=true;
        alert("you have succesfully logged in");
        localStorage.setItem("users",JSON.stringify(users))
       }else{
        alert("bele bir istifadeci yoxdur");
        return;
       }
    })
})

function gettAllUsers(){
    return JSON.parse(localStorage.getItem("users"));
}