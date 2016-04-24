$( document ).ready(function(){
    $('body').on( 'mouseenter', '.card', function() {
//        $(this).find('.search_cardHover').slideDown("slow");
        $(this).find('.channels_cardHover').slideDown("slow");
    }).on( 'mouseleave', '.card', function() {
//        $(this).find('.search_cardHover').slideUp("slow");
        $(this).find('.channels_cardHover').slideUp("slow");        
    });
    $('body').on( 'mouseenter', '.collapsible', function() {
        $('.collapsible').collapsible();
    });
    
})