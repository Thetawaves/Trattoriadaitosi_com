$(document).ready(function () {
    
    $(window).on('load', function(){
        $('#loader').fadeOut();
    });

    var position;
    
    $('nav ul li a').click(function(e){
        e.preventDefault();
        position=$(this).attr("href");
        $.scrollTo(position,1000);
    });
    
    $('.fdescription').hover(function () {
        $(this).css({
            'opacity' : '1'
        });    
    }, function () {
        $(this).css({
            'opacity' : '0'
        });
    });
    
    var switcher = true;
    
    $('#burger').on('click', function () {
        if (switcher === true) {
            $('#burger #mid').animate({
                width: '0',
                opacity: '0'
            }, 100);
            $('#burger #top').addClass('moveTop');
            $('#burger #bot').addClass('moveBot');
            $('nav').animate({
                top: '0'
            });
            switcher = false
        } else {
            $('#burger #mid').animate({
                width: '40px',
                opacity: '1'
            }, 250);
            $('#burger #top').removeClass('moveTop');
            $('#burger #bot').removeClass('moveBot');
            $('nav').animate({
                top: '-100%'
            });
            switcher = true
        }
        
    });
    
    $('nav #menu li a').on('click', function () {
        $('#burger #mid').animate({
                width: '40px',
                opacity: '1'
            }, 250);
            $('#burger #top').removeClass('moveTop');
            $('#burger #bot').removeClass('moveBot');
        $('nav').animate({
                top: '-100%'
            });
        switcher = true
    })
    
})
