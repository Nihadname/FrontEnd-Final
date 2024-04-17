$(document).ready(function(){
    let users=[];
    let usedId;
    function getAllUsers(){
        return JSON.parse(localStorage.getItem("users"))
    }
})