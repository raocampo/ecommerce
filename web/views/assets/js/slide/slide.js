$('.jd-slider').jdSlider({
 
    isloop:true,
    speed:500

});

/*ESCONDER EL SLIDE */

var toogle = false;


$(document).on("click", "#btnSlide",function(){

    if(!toogle){
        $(".jd-slider").slideUp("fast");
        $("#btnSlide").html('<i class="fa fa-angle-down templateColor"><i/>')
        toogle = true;
    }else{
         $(".jd-slider").slideDown("fast");
        $("#btnSlide").html('<i class="fa fa-angle-up templateColor"><i/>')
        toogle = false;
    }
    
})