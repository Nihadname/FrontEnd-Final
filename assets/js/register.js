$(document).ready(function () {
    let users = [];
    let userId;
    // Check if localStorage key "users" exists and contains valid data
    const storedUsers = localStorage.getItem("users");
    if (storedUsers !== null) {
        try {
            // Attempt to parse storedUsers into an array
            users = JSON.parse(storedUsers);
        } catch (error) {
            // If parsing fails, handle the error (e.g., log it or show a message)
            console.error("Error parsing stored users:", error);
        }
    } else {
        localStorage.setItem("users", JSON.stringify(users));
    }
    let registerBtn = $(".registerBtn");
    registerBtn.on("click", function (event) {
        event.preventDefault();
        event.stopPropagation(); // Stop event propagation

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
                password: password.val()
            });
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            alert("bele bir istifadeci movcuddur olmaz");
            return;
        }

    });
});
