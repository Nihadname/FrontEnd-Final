$(document).ready(function(){
    $(".DropDownIcon").click(function(){
        if ($(this).hasClass('USD')) {
            $(".contentUsd").toggle();
            $(".content").hide();
        } else {
            $(".content").toggle();
            $(".contentUsd").hide();
        }
    });
    $(".SearchDropDown").click(function(){
        $(".content1").toggle();
    })
});
