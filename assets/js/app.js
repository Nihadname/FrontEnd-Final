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
    window.addEventListener("resize",function(){
    const content2=$(".content2");
   // console.log(content2);
   let width=window.innerWidth;
   if(width<1024){
    content2.addClass("d-none")
   }
    })
    $(document).ready(function(){
        var currentItemIndex = 0;
        var items = $('.carousel .item');
    
        // Function to show the current item and hide others
        function showItem(index) {
            items.removeClass('active');
            items.eq(index).addClass('active');
        }
    
        // Show the first item initially
        showItem(currentItemIndex);
    
        // Automatically switch slides every 3 seconds
        setInterval(function () {
            currentItemIndex = (currentItemIndex + 1) % items.length;
            showItem(currentItemIndex);
        }, 3000);
    });
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 5 // You can adjust the number of items displayed here
      });    
});


