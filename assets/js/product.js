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
function calculationBasketCount() {
    let Basketcount = document.querySelector(".valueindicator .valueBasket");
    if (Basketcount) {
        let basket = localStorage.getItem("basket1");
        let length;
        if (basket) {
            length = JSON.parse(basket).length;
            Basketcount.innerText = length;
        }
    } else {
        console.error("Basketcount element not found.");
    }
}

// Call calculationBasketCount to update basket count
calculationBasketCount();
function GettingDataFromApi() {
    let productsInThis = document.querySelector(".productsInThis");

    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            for (let index = 0; index < 100 && index < data.products.length; index++) {
                const product = data.products[index];
                productsInThis.innerHTML += `
                <div class="col-lg-4">
                <div class="mycard mb-4 extraCar" onclick="creatingProductSingle(this)" data-id="${product.id}"">
                    <div class="imagePart">
                        <div class="iconsDesigned">${product.discountPercentage}<!-- -->% off</div>
                        <img src="${product.images[0]}" class="w-100 " style="width:312px; height:312px" alt="">
                    </div>
                    <div class="extraDesign">
                        <div class="writings">
                            <h3 class=" titleOfTheDeisgn">${product.title}</h3>
                            <div class="mb-2 ">
                                <svg width="15" height="15" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    fill="url(#star-0.07426802030669477)"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E"
                                    class="feather feather-star">
                                    <defs>
                                        <linearGradient id="star-0.07426802030669477">
                                            <stop offset="1" stop-color="#FFCD4E"></stop>
                                            <stop offset="1" stop-color="#FFFFFF"
                                                stop-opacity="1">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg><svg width="17" height="17" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" fill="url(#star-0.6453173060689739)"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E"
                                    class="feather feather-star">
                                    <defs>
                                        <linearGradient id="star-0.6453173060689739">
                                            <stop offset="1" stop-color="#FFCD4E"></stop>
                                            <stop offset="1" stop-color="#FFFFFF"
                                                stop-opacity="1">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg><svg width="17" height="17" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" fill="url(#star-0.2846026415560736)"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E"
                                    class="feather feather-star">
                                    <defs>
                                        <linearGradient id="star-0.2846026415560736">
                                            <stop offset="1" stop-color="#FFCD4E"></stop>
                                            <stop offset="1" stop-color="#FFFFFF"
                                                stop-opacity="1">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg><svg width="17" height="17" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    fill="url(#star-0.009203426400553827)"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E"
                                    class="feather feather-star">
                                    <defs>
                                        <linearGradient id="star-0.009203426400553827">
                                            <stop offset="1" stop-color="#FFCD4E"></stop>
                                            <stop offset="1" stop-color="#FFFFFF"
                                                stop-opacity="1">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg><svg width="17" height="17" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" fill="url(#star-0.5107456186097816)"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E"
                                    class="feather feather-star">
                                    <defs>
                                        <linearGradient id="star-0.5107456186097816">
                                            <stop offset="0" stop-color="#FFCD4E"></stop>
                                            <stop offset="0" stop-color="#FFFFFF"
                                                stop-opacity="1">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg>
                            </div>
                            <div class="allDesign">
                                <div class="priceShow d-flex ">
                                    <span class="theActualPrice">$${product.price}</span>
                                    <span class="prevoiusPrice"><del>$${(product.price + (product.price * product.discountPercentage / 100)).toFixed(2)}</del></span>
                                    </div>
                                <div class="addingIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="IconAdd"
                                        fill="red" width="20" height="20" viewBox="0 0 18 18"
                                        fill="red" class="injected-svg"
                                        data-src="/assets/images/icons/plus.svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9 2.74999C9.55228 2.74999 10 3.19771 10 3.74999V14.25C10 14.8023 9.55228 15.25 9 15.25C8.44772 15.25 8 14.8023 8 14.25V3.74999C8 3.19771 8.44772 2.74999 9 2.74999Z"
                                            fill="red"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.75 9C2.75 8.44772 3.19772 8 3.75 8H14.25C14.8023 8 15.25 8.44772 15.25 9C15.25 9.55228 14.8023 10 14.25 10H3.75C3.19772 10 2.75 9.55228 2.75 9Z"
                                            fill="red"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `;
            }
            function creatingProductSingle(product){
                let id=product.getAttribute("data-id");
                console.log(id);
             }  
            function extractPriceFromText(text) {
                let priceMatch = text.match(/\$\s*(\d+(\.\d{1,2})?)/);
                return priceMatch ? parseFloat(priceMatch[1]) : null;
            }
            let addToBasketButtons = document.querySelectorAll(".addingIcon .IconAdd");
            addToBasketButtons.forEach(button => {
                button.addEventListener("click", function (event) {
                    let productId = this.closest(".extraCar").getAttribute("data-id");
                    let productNameElement = this.closest('.extraCar').querySelector(".titleOfTheDeisgn").innerText.trim();
                    let productPrice = extractPriceFromText(this.closest('.extraCar').querySelector(".theActualPrice").innerText).toFixed(2);
                    let productImg = this.closest('.extraCar').querySelector("img").src;

                    let productsArr = [];
                    if (localStorage.getItem("basket1") === null) {
                        localStorage.setItem("basket1", JSON.stringify([]));
                    } else {
                        productsArr = JSON.parse(localStorage.getItem("basket1"));
                    }
                    let existProduct = productsArr.find(p => p.id == productId);
                    if (existProduct) {
                        existProduct.count++;
                    } else {
                        let product = {
                            price: productPrice,
                            id: productId,
                            name: productNameElement,
                            img: productImg,
                            count: 1
                        };
                        productsArr.push(product);
                    }
                    localStorage.setItem("basket1", JSON.stringify(productsArr));
                    calculationBasketCount();
                });
                calculationBasketCount();
            });
            function calculationBasketCount() {
                let Basketcount = document.querySelector(".valueindicator .valueBasket");
                if (Basketcount) {
                    let basket = localStorage.getItem("basket1");
                    let length;
                    if (basket) {
                        length = JSON.parse(basket).length;
                        Basketcount.innerText = length;
                    }
                } else {
                    console.error("Basketcount element not found.");
                }
            }
            function getBasket() {
                let basket = localStorage.getItem("basket1");
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
                img.style.width = "100px";
                img.style.height = "160px";
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
                // updateBasket function
                function updateBasket(basket) {
                    localStorage.setItem("basket1", JSON.stringify(basket)); // Update key to "basket1"
                    CalculateBaketTotalPrice();
                    calculationBasketCount();
                }


                function removeItem(productId) {
                    let basket = getBasket();
                    basket = basket.filter(product => product.id !== productId);
                    updateBasket(basket);
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
                function CalculateBaketTotalPrice() {
                    let totalPrice = document.querySelector("#totalPrice");
                    let totalPriceBasket = 0;
                    let basket = getBasket();
                    basket.forEach(products => {
                        totalPriceBasket += products.count * products.price;
                    })
                    totalPrice.innerText = "Total price is " + totalPriceBasket.toFixed(2);

                }
            });



        }).catch(error => {
            console.error('Error fetching data:', error);
        });
}

GettingDataFromApi();

let input = document.querySelector(".searchInput")
input.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let products = document.querySelectorAll('.mycard'); 
    products.forEach(item => {
        let title = item.querySelector('.titleOfTheDeisgn').textContent.toLowerCase();
        if (title.includes(value)) {
            //  let productsInThis = document.querySelector(".productsInThis");
            item.style.display = 'block';
        } else {
            item.style.display = 'none'; 
        }
    })
})
function HighToLow() {
    let clcikedOne = document.querySelector(".content4 .priceHigh span")
    clcikedOne.addEventListener("click", function(){
        let products = document.querySelectorAll('.mycard');
        let sortedProducts = Array.from(products).sort((a, b) => {
            let priceA = parseFloat(a.querySelector('.theActualPrice').textContent.slice(1));
            let priceB = parseFloat(b.querySelector('.theActualPrice').textContent.slice(1));
            return priceB - priceA;
        });
        let productsInThis = document.querySelector(".productsInThis");
        productsInThis.innerHTML = '';
        sortedProducts.forEach(product => {
            productsInThis.appendChild(product);
        });
    })
}
HighToLow()
function lowToHigh() {
    let clcikedOne2 = document.querySelector(".content4 .priceLow span")
    clcikedOne2.addEventListener("click", function () {
        let products = document.querySelectorAll('.mycard');
        let sortedProducts = Array.from(products).sort((a, b) => {
            let priceA = parseFloat(a.querySelector('.theActualPrice').textContent.slice(1));
            let priceB = parseFloat(b.querySelector('.theActualPrice').textContent.slice(1));
            return priceA - priceB;
        });
        let productsInThis = document.querySelector(".productsInThis");
        productsInThis.innerHTML = '';
        sortedProducts.forEach(product => {
            productsInThis.appendChild(product);
        });
    })
}
lowToHigh()

function getDataFromApiSecond() {
    let productsInThis = document.querySelector(".productsInThis");

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            data.forEach(product => {
                productsInThis.innerHTML += `
                <div class="col-lg-4">
                <div class="mycard mb-4 extraCar"   data-id="${product.id}"">
                    <div class="imagePart">
                        <div class="iconsDesigned">$25<!-- -->% off</div>
                        <img src="${product.image}" class="w-100 " style="width:312px; height:312px" alt="" onclick="creatingPageSingle(this)" >
                    </div>
                    <div class="extraDesign">
                        <div class="writings">
                            <h3 class=" titleOfTheDeisgn">${product.title}</h3>
                            <div class="mb-2 ">
                                <svg width="15" height="15" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    fill="url(#star-0.07426802030669477)"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E"
                                    class="feather feather-star">
                                    <defs>
                                        <linearGradient id="star-0.07426802030669477">
                                            <stop offset="1" stop-color="#FFCD4E"></stop>
                                            <stop offset="1" stop-color="#FFFFFF"
                                                stop-opacity="1">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg><svg width="17" height="17" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" fill="url(#star-0.6453173060689739)"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E"
                                    class="feather feather-star">
                                    <defs>
                                        <linearGradient id="star-0.6453173060689739">
                                            <stop offset="1" stop-color="#FFCD4E"></stop>
                                            <stop offset="1" stop-color="#FFFFFF"
                                                stop-opacity="1">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg><svg width="17" height="17" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" fill="url(#star-0.2846026415560736)"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E"
                                    class="feather feather-star">
                                    <defs>
                                        <linearGradient id="star-0.2846026415560736">
                                            <stop offset="1" stop-color="#FFCD4E"></stop>
                                            <stop offset="1" stop-color="#FFFFFF"
                                                stop-opacity="1">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg><svg width="17" height="17" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    fill="url(#star-0.009203426400553827)"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E"
                                    class="feather feather-star">
                                    <defs>
                                        <linearGradient id="star-0.009203426400553827">
                                            <stop offset="1" stop-color="#FFCD4E"></stop>
                                            <stop offset="1" stop-color="#FFFFFF"
                                                stop-opacity="1">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg><svg width="17" height="17" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" fill="url(#star-0.5107456186097816)"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E"
                                    class="feather feather-star">
                                    <defs>
                                        <linearGradient id="star-0.5107456186097816">
                                            <stop offset="0" stop-color="#FFCD4E"></stop>
                                            <stop offset="0" stop-color="#FFFFFF"
                                                stop-opacity="1">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg>
                            </div>
                            <div class="allDesign">
                                <div class="priceShow d-flex ">
                                    <span class="theActualPrice">$${product.price}</span>
                                    <span class="prevoiusPrice"><del>${product.price + 40}</del></span>
                                    </div>
                                <div class="addingIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="IconAdd"
                                        fill="red" width="20" height="20" viewBox="0 0 18 18"
                                        fill="red" class="injected-svg"
                                        data-src="/assets/images/icons/plus.svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9 2.74999C9.55228 2.74999 10 3.19771 10 3.74999V14.25C10 14.8023 9.55228 15.25 9 15.25C8.44772 15.25 8 14.8023 8 14.25V3.74999C8 3.19771 8.44772 2.74999 9 2.74999Z"
                                            fill="red"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.75 9C2.75 8.44772 3.19772 8 3.75 8H14.25C14.8023 8 15.25 8.44772 15.25 9C15.25 9.55228 14.8023 10 14.25 10H3.75C3.19772 10 2.75 9.55228 2.75 9Z"
                                            fill="red"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `;

            })
        
            function extractPriceFromText(text) {
                let priceMatch = text.match(/\$\s*(\d+(\.\d{1,2})?)/);
                return priceMatch ? parseFloat(priceMatch[1]) : null;
            }
            let addToBasketButtons = document.querySelectorAll(".addingIcon .IconAdd");
            addToBasketButtons.forEach(button => {
                button.addEventListener("click", function (event) {
                    let productId = this.closest(".extraCar").getAttribute("data-id");
                    let productNameElement = this.closest('.extraCar').querySelector(".titleOfTheDeisgn").innerText.trim();
                    let productPrice = extractPriceFromText(this.closest('.extraCar').querySelector(".theActualPrice").innerText).toFixed(2);
                    let productImg = this.closest('.extraCar').querySelector("img").src;

                    let productsArr = [];
                    if (localStorage.getItem("basket1") === null) {
                        localStorage.setItem("basket1", JSON.stringify([]));
                    } else {
                        productsArr = JSON.parse(localStorage.getItem("basket1"));
                    }
                    let existProduct = productsArr.find(p => p.id == productId);
                    if (existProduct) {
                        existProduct.count++;
                    } else {
                        let product = {
                            price: productPrice,
                            id: productId,
                            name: productNameElement,
                            img: productImg,
                            count: 1
                        };
                        productsArr.push(product);
                    }
                    localStorage.setItem("basket1", JSON.stringify(productsArr));
                    calculationBasketCount();
                });
                calculationBasketCount();
            });
            function calculationBasketCount() {
                let Basketcount = document.querySelector(".valueindicator .valueBasket");
                if (Basketcount) {
                    let basket = localStorage.getItem("basket1");
                    let length;
                    if (basket) {
                        length = JSON.parse(basket).length;
                        Basketcount.innerText = length;
                    }
                } else {
                    console.error("Basketcount element not found.");
                }
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
       
}
function creatingPageSingle(product){
let id=product.querySelector(".mycard").getAttribute("data-id");
console.log(id);
}

getDataFromApiSecond();



document.addEventListener('click', function(event) {
    if (event.target.classList.contains('mycard')) {
        window.location.href = "singleProduct.html";
    }
});
