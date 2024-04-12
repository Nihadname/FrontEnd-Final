$(document).ready(function () {
    $(".DropDownIcon").click(function () {
        if ($(this).hasClass('USD')) {
            $(".contentUsd").toggle();
            $(".content").hide();
        } else {
            $(".content").toggle();
            $(".contentUsd").hide();
        }
    });
    $(".SearchDropDown").click(function () {
        $(".content1").toggle();
    })
    window.addEventListener("resize", function () {
        const content2 = $(".content2");
        // console.log(content2);
        let width = window.innerWidth;
        if (width < 1024) {
            content2.addClass("d-none")
        }
    })

    $(".fa-user").click(function () {
        $('#signup-modal').modal('show');
    });

    $(".anotherShop").click(function () {
        $(".DivCar").html(`
            <div class="itemsInIt">
                <img src="./assets/img/herman miller.webp" alt="">
                <span class="carName">Keyboard Kiosk </span>
            </div>
            <div class="itemsInIt">
                <img src="./assets/img/otobi.webp" alt="">
                <span class="carName">Anytime Buys</span>
            </div>
            <div class="itemsInIt">
                <img src="./assets/img/hatil.webp" alt="">
                <span class="carName">Word Wide Wishes</span>
            </div>
            <div class="itemsInIt mb-5 ">
                <img src="./assets/img/steelcase.webp" alt="">
                <span class="carName">Cybershop</span>
            </div>
            <div class="itemsInIt">
    <span class="carName text-center " style="    margin-left: auto;
    margin-right: auto;">View All  Brands</span>
</div>

        `);
    });
$(".titleCar").click(function(){
    $(".DivCar").html(`     <div class="itemsInIt">
    <img src="./assets/img/apple.webp" alt="">
    <span class="carName">Apple</span>
</div>
<div class="itemsInIt">
    <img src="./assets/img/dell.webp" alt="">
    <span class="carName">Dell</span>
</div>
<div class="itemsInIt">
    <img src="./assets/img/xiaomi.webp" alt="">
    <span class="carName">Xiaomi</span>
</div>
<div class="itemsInIt">
    <img src="./assets/img/asus.webp" alt="">
    <span class="carName">Asus</span>
</div>
<div class="itemsInIt">
    <img src="./assets/img/sony.webp" alt="">
    <span class="carName">Sony</span>
</div>
<div class="itemsInIt mb-5 ">
    <img src="./assets/img/acer.webp" alt="">
    <span class="carName">Acer</span>
</div>
<div class="itemsInIt">
    <span class="carName text-center " style="    margin-left: auto;
    margin-right: auto;">View All  Brands</span>
</div>`)
})    
});


