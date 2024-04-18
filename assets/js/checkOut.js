function getBasket() {
    let basket = localStorage.getItem("basket");
    return basket ? JSON.parse(basket) : [];
}
function CalculateBasketTotalPrice() {
    let totalPrice = 0;
    let basket = getBasket();
    let valueBasketWhole = document.querySelectorAll(".valueBasketWhole");

    basket.forEach(item => {
        totalPrice += item.count * item.price;
    });

    valueBasketWhole.forEach(element => {
        element.innerText = totalPrice.toFixed(2);
    });
}
CalculateBasketTotalPrice()