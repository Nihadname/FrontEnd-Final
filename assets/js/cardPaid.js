$(document).ready(function () {
    $(".UpDown").click(function () {
        $(".content2").toggle();
    });

    $(".div2").click(function () {
        $(".content4").toggle();
    });
    $(".iconBar").click(function () {
        $(".dropDownOFBar").toggle();
    })
})
$('.fa-bag-shopping').click(function () {
    $('#basketModal').modal('show');
    
});