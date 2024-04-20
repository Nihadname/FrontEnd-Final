$(document).ready(function () {
    let users = [];
    let userId;
    const storedUsers = localStorage.getItem("users");
    if (storedUsers !== null) {
        try {
            users = JSON.parse(storedUsers);
        } catch (error) {
            console.error("Error parsing stored users:", error);
        }
    } else {
        localStorage.setItem("users", JSON.stringify(users));
    }
    let registerBtn = $(".registerBtn");
    registerBtn.on("click", function (event) {
        event.preventDefault();
        event.stopPropagation(); 

        const form = $("#register-Form");
        const FullName = form.find(".FullNameRegister");
        const Email = form.find(".EmailRegister");
        const UserName = form.find(".UserNameRegister");
        const password = form.find(".passwordRegister");
        if (FullName.val() == "" || Email.val() == "" || UserName.val() == "" || password.val() == "") {
            alert("bos ola bilmez!");
            return;
        }
        if(password.val().length < 8){
            alert("en az 8 eded deyer daxil olmalidir");
            return;
        }
        const existUser = users.find(m => (m.UserName === UserName.val().toLowerCase()) || (m.email === Email.val().toLowerCase()));

        if (existUser === undefined) {
            // Increment userId before using it
            userId = users.length+1;
            users.push({
                id: userId,
                FullName: FullName.val(),
                email: Email.val().toLowerCase(),
                UserName: UserName.val().toLowerCase(),
                password: password.val(),
                isLogin:false
            });
            $("#signup-modal").modal('show');
            $("#register-modal").modal('hide')
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            alert("bele bir istifadeci movcuddur olmaz");
            return;
        }

    });
});