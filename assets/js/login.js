$(document).ready(function(){
    let users = [];
    if(localStorage.getItem("users") !== null){
        users = getAllUsers();
    } else {
        localStorage.setItem("users", JSON.stringify(users));
    }

    const loginBtn = $(".Login");
    loginBtn.on("click", function(){
        const form = $(".signup-form");
        const userNameOrEmail = form.find(".userNameOrEmail");
        const password = form.find(".password");
        const existUser = getAllUsers().find(m =>
            (m.username === userNameOrEmail.val() || m.email === userNameOrEmail.val()) &&
            m.password === password.val()
        );

        if(existUser !== undefined){
            users.forEach(user => {
                user.isLogin = false;
            });
            existUser.isLogin = true;
            alert("You have successfully logged in");
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            alert("There is no such user");
            return;
        }
    });
});

function getAllUsers(){
    return JSON.parse(localStorage.getItem("users"));
}
