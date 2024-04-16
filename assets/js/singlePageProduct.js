$(document).ready(function () {

    $(".UpDown").click(function () {
        $(".content2").toggle();
    })

    $(".describe").click(function(){
        $(".thispartToBe").html(`
        <h3 class="spec">Specification:</h3>
        <span>Brand: Beats </span>
        <span>Model: S450 </span>
        <span>Wireless Bluetooth Headset </span>
        <span>FM Frequency Response: 87.5 – 108 MHz </span>
        <span>Feature: FM Radio, Card Supported (Micro SD / TF) </span>
        <span class="mb-5 ">Made in China </span>
        <h3 class="spec">Frequently Bought Together</h3>
        `)
    })
    $(".review").click(function(){
        $(".thispartToBe").html(`
        <div class="comments d-flex  flex-column ">
        <div class="comment">
            <div class="wholeSectionComm d-flex align-items-center gap-2  ">
                <div class="imageComment">
                    <img src="./assets/img/7.png" alt="">
                </div>
                <div class="writingComment">
                    <h5 style="font-size: 16px;">Jannie Schumm</h5>
                    <div class="startsAndAll d-flex align-items-center ">
                        <div color="warn" class="d-flex align-items-center gap-3 " value="4.7" readonly=""
                            class="sc-e02ba328-0 gSOdBv"><svg width="24" height="24" stroke-width="2"
                                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                fill="url(#star-0.2062834051856648)" xmlns="http://www.w3.org/2000/svg"
                                stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.2062834051856648">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.6493503235927267)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.6493503235927267">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.5680259483037899)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.5680259483037899">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.34144632528644014)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.34144632528644014">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.7091788591642199)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.7091788591642199">
                                        <stop offset="0.7000000000000002" stop-color="#FFCD4E"></stop>
                                        <stop offset="0.7000000000000002" stop-color="#FFFFFF" stop-opacity="1">
                                        </stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg>
                            <h6>4.7</h6>
                            <span style="color: rgb(125, 135, 156);
                            font-size: 14px;">3.3 years ago</span>
                        </div>
                    </div>
                    <p style="    margin-bottom: 0px;
                    margin-top: 0px;
                    color: rgb(75, 86, 107);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa
                        id ut mattis. Facilisis <br> vitae gravida egestas ac account.
                    </p>
                </div>
            </div>
        </div>
        <div class="comment">
            <div class="wholeSectionComm d-flex align-items-center gap-2  ">
                <div class="imageComment">
                    <img src="./assets/img/7.png" alt="">
                </div>
                <div class="writingComment">
                    <h5 style="font-size: 16px;">Jannie Schumm</h5>
                    <div class="startsAndAll d-flex align-items-center ">
                        <div color="warn" class="d-flex align-items-center gap-3 " value="4.7" readonly=""
                            class="sc-e02ba328-0 gSOdBv"><svg width="24" height="24" stroke-width="2"
                                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                fill="url(#star-0.2062834051856648)" xmlns="http://www.w3.org/2000/svg"
                                stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.2062834051856648">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.6493503235927267)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.6493503235927267">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.5680259483037899)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.5680259483037899">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.34144632528644014)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.34144632528644014">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.7091788591642199)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.7091788591642199">
                                        <stop offset="0.7000000000000002" stop-color="#FFCD4E"></stop>
                                        <stop offset="0.7000000000000002" stop-color="#FFFFFF" stop-opacity="1">
                                        </stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg>
                            <h6>4.7</h6>
                            <span style="color: rgb(125, 135, 156);
                            font-size: 14px;">3.3 years ago</span>
                        </div>
                    </div>
                    <p style="    margin-bottom: 0px;
                    margin-top: 0px;
                    color: rgb(75, 86, 107);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa
                        id ut mattis. Facilisis <br> vitae gravida egestas ac account.
                    </p>
                </div>
            </div>
        </div>
        <div class="comment mb-5 ">
            <div class="wholeSectionComm d-flex align-items-center gap-2  ">
                <div class="imageComment">
                    <img src="./assets/img/7.png" alt="">
                </div>
                <div class="writingComment">
                    <h5 style="font-size: 16px;">Jannie Schumm</h5>
                    <div class="startsAndAll d-flex align-items-center ">
                        <div color="warn" class="d-flex align-items-center gap-3 " value="4.7" readonly=""
                            class="sc-e02ba328-0 gSOdBv"><svg width="24" height="24" stroke-width="2"
                                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                fill="url(#star-0.2062834051856648)" xmlns="http://www.w3.org/2000/svg"
                                stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.2062834051856648">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.6493503235927267)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.6493503235927267">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.5680259483037899)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.5680259483037899">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.34144632528644014)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.34144632528644014">
                                        <stop offset="1" stop-color="#FFCD4E"></stop>
                                        <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg><svg width="24" height="24" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" fill="url(#star-0.7091788591642199)"
                                xmlns="http://www.w3.org/2000/svg" stroke="#FFCD4E" class="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.7091788591642199">
                                        <stop offset="0.7000000000000002" stop-color="#FFCD4E"></stop>
                                        <stop offset="0.7000000000000002" stop-color="#FFFFFF" stop-opacity="1">
                                        </stop>
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg>
                            <h6>4.7</h6>
                            <span style="color: rgb(125, 135, 156);
                            font-size: 14px;">3.3 years ago</span>
                        </div>
                    </div>
                    <p style="    margin-bottom: 0px;
                    margin-top: 0px;
                    color: rgb(75, 86, 107);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa
                        id ut mattis. Facilisis <br> vitae gravida egestas ac account.
                    </p>
                </div>
            </div>
        </div>
        <h3 class="spec">Write a Review for this product </h3>
        <div class="newDivOne d-flex   ">
            <h5 style="    margin-right: 6px;
color: rgb(75, 86, 107);
font-weight: 600;
font-size: 16px;">Your Rating</h5>
            <h5  style="    color: rgb(233, 69, 96);
font-weight: 600;
font-size: 16px;">*</h5>
        </div>
        <div class="stars d-flex mb-3">
            <span class="star" data-value="1">&#9733;</span>
            <span class="star" data-value="2">&#9733;</span>
            <span class="star" data-value="3">&#9733;</span>
            <span class="star" data-value="4">&#9733;</i></span>
            <span class="star" data-value="5">&#9733;</i></span>
          </div>      
          <div class="newDivOne d-flex mb-2  ">
            <h5 style="    margin-right: 6px;
color: rgb(75, 86, 107);
font-weight: 600;
font-size: 16px;">Your Review</h5>
            <h5  style="    color: rgb(233, 69, 96);
font-weight: 600;
font-size: 16px;">*</h5>
        </div>
        <textarea id="textArea" rows="8" name="comment" class="mb-2 "></textarea>
        <button class="buttonHere" style="background-color: rgb(218, 225, 231);
        ;">submit</button>
    </div>
        `)
    })
});
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        highlightStars(value);
    });
});

function highlightStars(value) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

$("textarea").keyup(function(){
    $(".buttonHere").css("backgroundColor", "rgb(233, 69, 96)");
});
