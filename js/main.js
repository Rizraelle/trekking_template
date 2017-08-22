$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});



$(document).ready(function(){
    $('#checkbox1').change(function(){
        if(this.checked)
            $('#men').fadeIn('slow');
        else
            $('#men').fadeOut('slow');

    });
});


$(document).ready(function(){
    $('#checkbox2').change(function(){
        if(this.checked)
            $('#women').fadeIn('slow');
        else
            $('#women').fadeOut('slow');

    });
});




$(document).ready(function(){
  $(".prev-slide_1").click(function(){
    $("#myCarousel1").carousel('prev');
  });
  $(".next-slide_1").click(function(){
    $("#myCarousel1").carousel('next');
  });
  $(".pause-slide").click(function(){
    $("#myCarousel1").carousel('pause');
  });
});



$(document).ready(function(){
  $(".prev-slide").click(function(){
    $("#myCarousel2").carousel('prev');
  });
  $(".next-slide").click(function(){
    $("#myCarousel2").carousel('next');
  });
  $(".pause-slide").click(function(){
    $("#myCarousel2").carousel('pause');
  });

});


$('#myCarousel').bind('slid', function() {
    currentIndex = $('div.active').index() + 1;
   $('.num').html(''+currentIndex+'/'+totalItems+'');
});