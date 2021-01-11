$(document).ready(function(){
   $(window).scroll(function(){
       if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
       }else{
           $('.navbar').removeClass("sticky");
       }
       if (this.scroll > 500){
           $('.scroll-up-btn').addClass("sticky");
       }else {
           $('.scroll-up-btn').removeClass("show");
       }
   });


// slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: -1});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

//    toggle menu/navbar script
           $('.menu-btn').click(function(){
               $('.navbar .menu').toggleClass("active");
               $('.menu-btn i').toggleClass("active");
           });
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
