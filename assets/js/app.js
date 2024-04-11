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
 
    $(".fa-user").click(function() {
    $('#signup-modal').modal('show');
  });
  
      
});


