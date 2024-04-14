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
    $(".titleCar").click(function () {
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
    $(".second").click(function () {
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

    $(".second2").click(function () {
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
    $('.fa-bag-shopping').click(function () {
        $('#basketModal').modal('show');
    });
});
function extractPriceFromText(text) {
    let priceMatch = text.match(/\$\s*(\d+(\.\d{1,2})?)/);
    return priceMatch ? parseFloat(priceMatch[1]) : null;
}

let allAddingBasketButtons = document.querySelectorAll(".addingIcon");
allAddingBasketButtons.forEach(button => {
    button.addEventListener("click", function (event) {
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
                price: extractPriceFromText(this.previousElementSibling.innerText).toFixed(2),
                id: productId,
                name: productNameElement,
                img: this.parentElement.closest(".mycard").querySelector("img").src,
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

function getBasket() {
    let basket = localStorage.getItem("basket");
    let products = [];
    if (basket) {
        products = JSON.parse(basket);
    }
    return products;
}
getBasket().forEach(products => {
    let tr = document.createElement("tr");
    let tdImage = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src", products.img);
    img.style.width = "120px";
    img.style.height = "120px";
    tdImage.appendChild(img);
    let tdName = document.createElement("td");
    tdName.innerText = products.name;
    let tdPrice = document.createElement("td");
    tdPrice.innerText = (products.count * products.price) + "$";
    let tdCount = document.createElement("td");
    let TdRemove = document.createElement("td");
    TdRemove.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    let countWrapper = document.createElement("div");
    countWrapper.style.display = "flex";
    countWrapper.style.alignItems = "center";

    // Create the decrease and increase spans
    let decreaseSpan = document.createElement("span");
    decreaseSpan.style.margin = "12px"
    decreaseSpan.innerHTML = '<i class="fa-solid fa-minus"></i>';
    let increaseSpan = document.createElement("span");
    increaseSpan.style.margin = "12px"
    increaseSpan.innerHTML = '<i class="fa-solid fa-plus"></i>';

    // Span to display the count, you may adjust this part based on your actual code logic
    let countDisplay = document.createElement("span");
    countDisplay.innerText = products.count;

    // Append the decreaseSpan, countDisplay, and increaseSpan to the countWrapper
    countWrapper.appendChild(decreaseSpan);
    countWrapper.appendChild(countDisplay);
    countWrapper.appendChild(increaseSpan);


    function updateProductsInBasket(productId, newValue) {
        let basket = getBasket();
        let productIndex = basket.findIndex(product => product.id === productId)
        if (productIndex !== -1) {
            basket[productIndex].count = newValue;
        }
        updateBasket(basket);
    }
    // Add click event listeners to each span
    increaseSpan.addEventListener("click", function () {
        products.count += 1;
        countDisplay.innerText = products.count;
        tdPrice.innerText = (products.count * products.price) + "$";

        updateProductsInBasket(products.id, products.count);
        CalculateBaketTotalPrice();
        calculationBasketCount();
    })
    decreaseSpan.addEventListener("click", function () {
        if (products.count > 1) {
            products.count -= 1;
            countDisplay.innerText = products.count;
            tdPrice.innerText = (products.count * products.price) + "$";
            updateProductsInBasket(products.id, products.count);
        } else if (products.count === 1) {
            tr.remove();
            removeItem(products.id);
        }
        CalculateBaketTotalPrice();
        calculationBasketCount();
    });
    //update it
    function updateBasket(basket) {
        localStorage.setItem("basket", JSON.stringify(basket));
        CalculateBaketTotalPrice();
        calculationBasketCount();
    }

    function removeItem(productId) {
        let basket = getBasket();
        basket = basket.filter(product => product.id !== productId);
        updateBasket(basket);
        updateAlertVisibility(); // Check and update alert visibility

    }


    // Append the spans to the 'tdCount' cell
    tdCount.appendChild(countWrapper);
    tr.append(tdImage, tdName, tdPrice, tdCount, TdRemove)
    let table = document.querySelector(".table");
    table.classList.remove("d-none");

    CalculateBaketTotalPrice();

    table.lastElementChild.append(tr);
    TdRemove.onclick = function () {
        let basket = getBasket();

        tr.remove();
        calculationBasketCount();
        removeItem(products.id);
        //updateBasket(basket);
    }
});

function CalculateBaketTotalPrice() {
    let totalPrice = document.querySelector("#totalPrice");
    let totalPriceBasket = 0;
    let basket = getBasket();
    basket.forEach(products => {
        totalPriceBasket += products.count * products.price;
    })
    totalPrice.innerText = "Total price is " + totalPriceBasket.toFixed(2);

}