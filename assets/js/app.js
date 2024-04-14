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
$(".second").click(function(){
    $(".DivCar").html(` <div class="itemsInIt">
                                <img src="./assets/img/ray-ban.webp" alt="">
                                <span class="carName">Ray-Ban</span>
                            </div>
                            <div class="itemsInIt">
                                <img src="./assets/img/zeiss.webp" alt="">
                                <span class="carName">Zeiss</span>
                            </div>
                            <div class="itemsInIt">
                                <img src="./assets/img/occular.webp" alt="">
                                <span class="carName">Ocullar</span>
                            </div>
                            <div class="itemsInIt">
                                <img src="./assets/img/apple.webp" alt="">
                                <span class="carName">Apple</span>
                            </div>
                            <div class="itemsInIt mb-5 ">
                                <img src="./assets/img/titan.webp"  alt="">
                                <span class="carName">Titan</span>
                            </div>
                          
                            <div class="itemsInIt">
                                <span class="carName text-center " style="    margin-left: auto;
                                margin-right: auto;">View All  Brands</span>
                            </div>`)
})

$(".second2").click(function(){
    $(".DivCar").html(`
    <div class="itemsInIt">
        <img src="./assets/img/herman miller.webp" alt="">
        <span class="carName">Scarlett Beauty </span>
    </div>
    <div class="itemsInIt">
        <img src="./assets/img/otobi.webp" alt="">
        <span class="carName">Scroll Through</span>
    </div>
    <div class="itemsInIt">
        <img src="./assets/img/hatil.webp" alt="">
        <span class="carName">Coveted Clicks</span>
    </div>
    <div class="itemsInIt mb-5 ">
        <img src="./assets/img/steelcase.webp" alt="">
        <span class="carName">Constant Shoppers</span>
    </div>
    <div class="itemsInIt">
<span class="carName text-center " style="    margin-left: auto;
margin-right: auto;">View All  Brands</span>
</div>

`);
})
$('.fa-bag-shopping').click(function() {
    $('#basketModal').modal('show');
  });
});

let allAddingBasketButtons = document.querySelectorAll(".addingIcon");
allAddingBasketButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        let productsArr = [];
        let productId = this.closest(".mycard").getAttribute("data-id");
        if (localStorage.getItem("basket") === null) {
            localStorage.setItem("basket", JSON.stringify([]));
        } else {
            productsArr = JSON.parse(localStorage.getItem("basket"));
        }
        let existProduct = productsArr.find(p => p.id == productId);
        if (existProduct) {
            existProduct.count++;
        } else {
            let productNameElement = this.parentElement.closest('.mycard').querySelector(".titleOfTheDeisgn").innerText.trim();
                        let product = {
                id: productId,
                name: productNameElement,
                img:this.parentElement.closest(".mycard").querySelector("img").src,
                count: 1
            };
            productsArr.push(product);
        }
        localStorage.setItem("basket", JSON.stringify(productsArr));
        calculationBasketCount();
    });
    calculationBasketCount();
});
function calculationBasketCount() {
    let Basketcount = document.querySelector(".valueindicator .valueBasket");
    if (Basketcount) {
        let basket = localStorage.getItem("basket");
        let length;
        if (basket) {
            length = JSON.parse(basket).length;
            Basketcount.innerText = length;
        }
    } else {
        console.error("Basketcount element not found.");
    }
}

calculationBasketCount()

function getBasket(){
    let basket=localStorage.getItem("basket");
    let products=[];
    if(basket){
        products=JSON.parse(basket);
    }
    return products;
}
getBasket().forEach(products=>{

})