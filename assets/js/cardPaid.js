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
    $('.dropdown-toggle').dropdown();

});
// Get the basket items from local storage

// Select the container where basket items will be displayed

let ArrayOfLocal = JSON.parse(localStorage.getItem("basket"));
let allBaskets = document.querySelector(".allBaskets");

// Loop through each basket item
ArrayOfLocal.forEach((element, index) => {
    // Append HTML for the current basket item
    allBaskets.innerHTML += `
    <div class="basketTable d-flex ">
    <img src="${element.img}" style="width: 140px; height: 140px;" alt="">
    <div class="newExtraProduct">
        <h5 style="margin-bottom: 0.5rem;
        font-weight: 600;
        font-size: 18px;margin-top: 22px;">${element.name}</h5>
        <div class="RemoveIt" style="    margin-left: 681px;
        margin-top: -31px;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/assets/images/icons/close.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
            <path d="M6.2253 4.81096C5.83477 4.42044 5.20161 4.42044 4.81108 4.81096C4.42056 5.20148 4.42056 5.83465 4.81108 6.22517L10.5858 11.9999L4.81114 17.7746C4.42062 18.1651 4.42062 18.7983 4.81114 19.1888C5.20167 19.5793 5.83483 19.5793 6.22535 19.1888L12 13.4141L17.7747 19.1888C18.1652 19.5793 18.7984 19.5793 19.1889 19.1888C19.5794 18.7983 19.5794 18.1651 19.1889 17.7746L13.4142 11.9999L19.189 6.22517C19.5795 5.83465 19.5795 5.20148 19.189 4.81096C18.7985 4.42044 18.1653 4.42044 17.7748 4.81096L12 10.5857L6.2253 4.81096Z" fill="black"></path>
            </svg></div>
        <div class="allIconsBasket mt-5 ">
            <div class="iconsHereMakeUp d-flex gap-2 align-items-center ">
                <div class="valuesIcon" style="    margin-right: 0.5rem;
                color: rgb(125, 135, 156);">
                    <span>${element.price}</span>*<span class="BasketValueHeres">${element.count}</span>
                </div>
            <div  class="value" style="    margin-right: 1rem;
            color: rgb(233, 69, 96);
            font-weight: 600">${element.price}</div>
         <div class="buttons d-flex align-items-center gap-1 " style="">
            <div class="svgValue decrease"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="black" class="injected-svg" data-src="/assets/images/icons/minus.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75001 9C2.75001 8.44772 3.19772 8 3.75001 8H14.25C14.8023 8 15.25 8.44772 15.25 9C15.25 9.55228 14.8023 10 14.25 10H3.75001C3.19772 10 2.75001 9.55228 2.75001 9Z" fill="black"></path>
                </svg></div>
                <span class="basketValue">${element.count}</span>
                <div class="svgValue increase"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" class="injected-svg" data-src="/assets/images/icons/plus.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.74999C9.55228 2.74999 10 3.19771 10 3.74999V14.25C10 14.8023 9.55228 15.25 9 15.25C8.44772 15.25 8 14.8023 8 14.25V3.74999C8 3.19771 8.44772 2.74999 9 2.74999Z" fill="#0F3460"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 9C2.75 8.44772 3.19772 8 3.75 8H14.25C14.8023 8 15.25 8.44772 15.25 9C15.25 9.55228 14.8023 10 14.25 10H3.75C3.19772 10 2.75 9.55228 2.75 9Z" fill="#0F3460"></path>
                    </svg></div>
         </div>
            </div>

        </div>
    </div>
</div>
    `;

    document.addEventListener("DOMContentLoaded", function () {
        // Function to update the count in both HTML and local storage
           ArrayOfLocal.forEach((element, index) => {
            let increase = document.querySelectorAll(".increase")[index];
            let decrease = document.querySelectorAll(".decrease")[index];
            let BasketValueHeres = document.querySelectorAll(".BasketValueHeres")[index];
            let basketValue = document.querySelectorAll(".basketValue")[index];
            let removeItButton = document.querySelectorAll(".RemoveIt")[index];
            let basketTable = document.querySelectorAll(".basketTable")[index];
    
            increase.addEventListener("click", function (ev) {
          //      ev.preventDefault();
                element.count++;
                basketValue.textContent = element.count;
                CalculateBaketTotalPrice();
                updateCount(index, element.count);
            });
    
            decrease.addEventListener("click", function (ev) {
              //  ev.preventDefault();
                if (element.count > 1) {
                    element.count--;
                    basketValue.textContent = element.count;
                    CalculateBaketTotalPrice();
                    updateCount(index, element.count);
                } else if (element.count === 1) {
                    basketTable.remove();
                    CalculateBaketTotalPrice();
                    removeItem(element.id);
                }
            });
    
            removeItButton.addEventListener("click", function (ev) {
             //   ev.preventDefault();
                basketTable.remove();
                window.location.reload();
                CalculateBaketTotalPrice();
                removeItem(element.id);
            });
    
            CalculateBaketTotalPrice();
        });
        function updateCount(index, count) {
            ArrayOfLocal[index].count = count;
            document.querySelectorAll(".BasketValueHeres")[index].textContent = count;
            localStorage.setItem("basket", JSON.stringify(ArrayOfLocal));
            CalculateBaketTotalPrice();
        }
    
        function removeItem(productId) {
            let basket = ArrayOfLocal.filter(product => product.id !== productId);
            updateBasket(basket);
        }
    
        function updateBasket(basket) {
            localStorage.setItem("basket", JSON.stringify(basket));
            CalculateBaketTotalPrice()
        }
    
        function CalculateBaketTotalPrice() {
            let totalPrice = document.querySelector(".TotalPrice");
            let totalPriceBasket = ArrayOfLocal.reduce((total, product) => total + (product.count * product.price), 0);
            totalPrice.innerText = totalPriceBasket.toFixed(2);
        }
    
        // Loop through each basket item
     
    });
    

});
let content4=document.querySelector(".dropdown-menu")

fetch('https://api.first.org/data/v1/countries')
    .then(res => res.json())
    .then(data => {
        const countries = data.data;
        for (const countryCode in countries) {
            if (countries.hasOwnProperty(countryCode)) {
                const countryData = countries[countryCode];
content4.innerHTML+=`
<li><a class="dropdown-item" href="#">${countryData.country}</a></li>
`
            }
        }
    });
