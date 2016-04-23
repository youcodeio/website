$( document ).ready(function(){
    $('body').on( 'mouseenter', '.card', function() {
<<<<<<< HEAD
//        $(this).find('.search_cardHover').slideDown("slow");
        $(this).find('.channels_cardHover').slideDown("slow");
    }).on( 'mouseleave', '.card', function() {
//        $(this).find('.search_cardHover').slideUp("slow");
=======
        $(this).find('.search_cardHover').slideDown("slow");
        $(this).find('.channels_cardHover').slideDown("slow");
    }).on( 'mouseleave', '.card', function() {
        $(this).find('.search_cardHover').slideUp("slow");
>>>>>>> 6a646953fbb9bda02609442629b7303d0dabf36c
        $(this).find('.channels_cardHover').slideUp("slow");        
    });
})