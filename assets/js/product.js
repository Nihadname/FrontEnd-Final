$(document).ready(function(){
    $(".UpDown").click(function(){
        $(".content2").toggle();
    });

    $(".div2").click(function(){
        $(".content4").toggle();
    });
});

function GettingDataFromApi() {
    let productsInThis = document.querySelector(".productsInThis");
    
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            for (let index = 0; index < 100 && index < data.products.length; index++) {
                const product = data.products[index];
                productsInThis.innerHTML += `
                <div class="col-lg-4">
                <div class="mycard mb-4 extraCar" data-id="${product.id}"">
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
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

GettingDataFromApi();

